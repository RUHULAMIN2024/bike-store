# Bike Shop Application - Frontend

## Project Overview & Objective

The **Bike Shop** application is designed to offer a user-friendly platform for customers to browse and purchase bikes with a seamless user experience. The app includes secure authentication, smooth product management, and a responsive UI. The objective is to ensure that the platform is visually appealing, responsive, and easy to use.

---

## Main Functionalities

### 1. **User Registration & Authentication (Role-Based)**

- **Secure Registration and Login**:
  - Users can register with the following fields: name, email, and password.
  - Upon registration, the user is assigned a "customer" role by default.
  - Secure password hashing is implemented before storing in the database.
  - Users can log in using email and password.
- **JWT Authentication**:
  - A JWT token is generated upon login for secure authentication.
  - The token is stored in local storage to maintain user sessions.
- **Logout**:
  - Token is cleared from local storage upon logout.
  - Redirects users to the login page.

---

### 2. **Public Routes**

- **Home Page**:

  - Includes a logo, favicon, navigation items, and buttons for login/signup.
  - Features a carousel banner for promotions.
  - Displays featured products and a "View All" button to see all products.
  - Additional sections like testimonials or blogs.
  - Footer with essential links and contact details.

- **All Products Page**:

  - **Search Functionality**: Users can search by brand, bike name, or category.
  - **Filters**: Price range, model, brand, category, and availability filters.
  - **Product Cards**: Display bike details like name, brand, model, price, and category.
  - "View Details" button for each product.

- **Product Details Page**:

  - Displays detailed product information and an image.
  - Includes a "Buy Now" button that redirects to the checkout page.

- **About Page**:
  - Provides information about the bike shop and its mission.

---

### 3. **Private Routes**

- **Checkout Page**:

  - Users can place orders and select products for purchase.
  - Ensures ordered quantities do not exceed product stock.
  - **Order Form**: Includes product details, user details, total price, and payment method.
  - **SurjoPay Payment Integration**: For processing payments.
  - "Order Now" button to confirm the purchase.

- **Dashboard (Role-Based)**:
  - **Admin Dashboard**:
    - Manage users (deactivate accounts), manage products (CRUD), manage orders (CRUD).
  - **User Dashboard**:
    - View orders and manage profile settings, including password updates.

---

## UI/UX Design

- **Responsive Design**:

  - The application is responsive and works seamlessly on all screen sizes.
  - The layout is intuitive and provides good visual alignment and typography.

- **Error Handling**:

  - User-friendly error messages for invalid login credentials, registration errors, or failed operations.

- **Loading States**:

  - Spinners or loading animations during API calls.

- **Toasts**:
  - Displays success and error messages for actions like successful login, order placement, etc.

---

## Recommendation Functionalities (Optional)

### **Track Order Section (Dashboard)**

#### **User Side**:

- **Track Order Status**:

  - Displays the order status (Pending, Processing, Shipped, Delivered) with a progress bar.
  - Shows clear labels for each step in the process.

- **Order Tracking Page**:
  - Users can view order details, such as Order ID, Product name, quantity, price, and delivery date.

#### **Admin Side**:

- **Update Order Status**:
  - Admins can update the order status through a dropdown in the Admin Dashboard (Pending, Processing, Shipped, Delivered).

---

## Backend Requirements (For Reference)

- **Database**: MongoDB for storing users, products, and orders.
- **Authentication**: User registration, login, JWT generation, and secure session management.
- **Product Management**: CRUD operations for managing products.
- **Order Management**: CRUD operations for managing orders, ensuring stock availability before placing orders.
- **Payment Integration**: SurjoPay for payment processing.
- **Error Handling**: Provide consistent error responses for failed operations.
- **Pagination**: Implement pagination for products and orders.

---

## Installation & Setup

### **Prerequisites**

1. Node.js >= 14.x
2. npm >= 6.x

### **Steps to Run the Application Locally**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
