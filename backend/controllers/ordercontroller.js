import userModel from "../models/Usermodel.js";
import OrderModel from "../models/OrderModel.js";
import crypto from "crypto";

const payuKey = process.env.PAYU_KEY;
const payuSalt = process.env.PAYU_SALT;

console.log("PayU Key:", payuKey ? "Set" : "Not set");
console.log("PayU Salt:", payuSalt ? "Set" : "Not set");

// placing user order for frontend
const placeOrder = async (req, res) => {
  const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
  try {
    if (!payuKey || !payuSalt) {
      console.log("PayU not configured: key or salt missing");
      return res.json({ success: false, message: "PayU not configured" });
    }

    if (!req.body.userId) {
      console.log("User ID missing in request");
      return res.json({ success: false, message: "User not authenticated" });
    }

    const newOrder = new OrderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      payment:
        req.body.payment === true || req.body.payment === "true" ? true : false,
    });

    await newOrder.save();

    // ✅ Fixed: use req.body.userId instead of req.userId
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const totalAmount = req.body.amount + 25; // including delivery
    const txnid = newOrder._id.toString();
    const amount = totalAmount.toString();
    const productinfo = "Order Payment";
    const firstname = req.body.address.firstName;
    const email = req.body.address.email;
    const phone = req.body.address.phone || "";

    const surl = `${frontendUrl}/verify?success=true&txnid=${txnid}`;
    const furl = `${frontendUrl}/verify?success=false&txnid=${txnid}`;

    const hashString = `${payuKey}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${payuSalt}`;
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    await OrderModel.findByIdAndUpdate(newOrder._id, { paymentId: txnid });

    res.json({
      success: true,
      message: "Order Placed Successfully",
      data: {
        key: payuKey,
        txnid,
        amount,
        productinfo,
        firstname,
        email,
        phone,
        surl,
        furl,
        hash,
      },
    });
  } catch (error) {
    console.error("Error in placeOrder:", error.stack || error);
    res.json({
      success: false,
      message: "Error placing order",
      error: error.message,
    });
  }
};

const verifyOrder = async (req, res) => {
  const { payment_id, success } = req.body;
  try {
    if (!payuKey || !payuSalt) {
      return res.json({ success: false, message: "PayU not configured" });
    }

    if (success === "true") {
      // ✅ Fixed: use OrderModel (not orderModel)
      await OrderModel.findOneAndUpdate(
        { paymentId: payment_id },
        { payment: true }
      );
      res.json({ success: true, message: "Payment verified successfully" });
    } else {
      res.json({ success: false, message: "Payment failed" });
    }
  } catch (error) {
    console.log("Error in verifyOrder:", error);
    res.json({
      success: false,
      message: "Error verifying payment",
      error: error.message,
    });
  }
};

export { placeOrder, verifyOrder };
