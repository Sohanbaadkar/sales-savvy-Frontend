# SalesSavvy Frontend

The SalesSavvy Frontend is the user-facing interface of the e-commerce application. It is built with React.js and styled using custom CSS, without external UI libraries. This frontend communicates with the backend via secure APIs, handles JWT authentication through cookies, and provides both customer and admin experiences.

🚀 Features
👤 Customer Features
1. User Authentication (Registration & Login via JWT stored in cookies).
2. Browse Products by categories.
3. Cart Management (add, update, remove items).
4. Checkout with Razorpay (test mode integration).
5. Profile Management (update user info, view past orders).

🛠️ Admin Features
1. Admin Authentication (login via JWT).
2. Dashboard with daily, monthly, yearly, and overall sales reports.
3. Manage Products (add, update, delete).
4. Manage Users (view, update customer info).

🔐 Authentication Flow
1. On login, the backend generates a JWT token.
2. Token is sent to frontend and stored in browser cookies.
3. Every request from frontend uses credentials: "include" so cookies go automatically.
4. A backend JWT filter validates the token and forwards the request.


💳 Payment Flow (Razorpay)
1. User clicks Place Order on checkout.
2. Frontend sends cart details to backend → backend creates Razorpay order.
3. Razorpay checkout popup opens.
4. On success, backend verifies signature & confirms order
