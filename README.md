# KitchenKart 🍔

A full-stack food delivery web application built with React, Node.js, Express, and MongoDB. Users can browse food items, add to cart, place orders, and make secure payments via PayU integration. Includes an admin panel for managing food items and orders.

## 🚀 Features

### Customer Features
- **User Authentication**: Secure login and registration with JWT tokens
- **Food Browsing**: View food items by category with images and descriptions
- **Cart Management**: Add/remove items, persistent cart data
- **Order Placement**: Complete checkout process with delivery address
- **Payment Integration**: Secure payments through PayU gateway
- **Order Tracking**: Real-time order status updates

### Admin Features
- **Food Management**: Add, edit, and remove food items with image uploads
- **Order Management**: View and manage customer orders
- **Dashboard**: Centralized admin interface

## 🛠️ Tech Stack

### Frontend
- **React** (Vite)
- **CSS** for styling
- **Axios** for API communication
- **React Router** for navigation

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Multer** for file uploads
- **PayU** for payment processing

### Admin Panel
- **React** (Vite)
- **React Toastify** for notifications


### Food Routes (`/api/food`)
- `POST /add` - Add new food item (admin only)
- `GET /list` - Get all food items
- `POST /remove` - Remove food item (admin only)

### User Routes (`/api/users`)
- `POST /register` - User registration
- `POST /login` - User login

### Order Routes (`/api/order`)
- `POST /place` - Place new order (authenticated)
- `POST /verify` - Verify payment

## 📁 Project Structure

```
KitchenKart/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── foodController.js
│   │   ├── ordercontroller.js
│   │   └── usercontrollers.js
│   ├── middlewares/
│   │   └── auth.js
│   ├── models/
│   │   ├── foodmodels.js
│   │   ├── OrderModel.js
│   │   └── Usermodel.js
│   ├── routes/
│   │   ├── foodroute.js
│   │   ├── orderRoute.js
│   │   └── Userroute.js
│   ├── uploads/ (food images)
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── Context/
│   │   ├── pages/
│   │   └── assets/
│   ├── index.html
│   └── package.json
├── admin/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│   ├── index.html
│   └── package.json
└── README.md
```

## 🔒 Security Features

- **Password Hashing**: Bcrypt for secure password storage
- **JWT Authentication**: Token-based user sessions
- **Input Validation**: Server-side validation with validator library
- **Payment Security**: PayU hash generation for transaction integrity
- **CORS Protection**: Configured cross-origin resource sharing

