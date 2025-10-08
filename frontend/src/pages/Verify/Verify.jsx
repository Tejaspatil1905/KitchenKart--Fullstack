import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import "./Verify.css";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const txnid = searchParams.get("txnid");
  const { url } = React.useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await fetch(`${url}/api/order/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ success, payment_id: txnid }),
      });
      const result = await response.json();

      if (result.success) {
        navigate("/"); // redirect to home or success page
      } else {
        navigate("/payment-failed"); // better UX than redirecting to same home
      }
    } catch (error) {
      console.error("Verification error:", error);
      navigate("/payment-failed");
    }
  };

  useEffect(() => {
    if (success && txnid) {
      verifyPayment();
    } else {
      navigate("/payment-failed");
    }
  }, [success, txnid]);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
