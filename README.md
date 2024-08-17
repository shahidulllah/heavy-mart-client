# Heavy Mart - Full Stack E-commerce Website

## Project Overview

**Heavy Mart** is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application provides users with a platform to browse products, filter by category, search by name, sort products, and manage user authentication through Google and Email/Password. The project also implements pagination for efficient data handling.

## Features

### 1. Product Display
- Display of products with details including name, image, description, price, category, and ratings.
- Pagination to navigate through multiple pages of products.
- Product sorting options:
  - By Price: Low to High, High to Low.
  - By Date Added: Newest first.

### 2. Search and Categorization
- Search functionality to find products by name.
- Categorization of products by:
  - Brand Name
  - Category Name
  - Price Range
- Multiple filters can be applied simultaneously.

### 3. Authentication
- Google Authentication using Firebase.
- Email and Password Authentication using Firebase.

### 4. Responsive Design
- Mobile-first design approach.
- Fixed-size product cards for a consistent look across devices.

### 5. User Interface
- A well-structured UI with a navigation bar and a footer with necessary information.

## Tech Stack

### Frontend
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB

### Authentication
- Firebase

## Installation

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB Atlas account for the database.
- Firebase account for authentication.

### Setup Backend

1. **Clone the Repository**
    ```bash
    git clone [https://github.com/shahidulllah/heavy-mart-server]
    cd heavy-mart-backend
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Environment Variables**
    Create a `.env` file in the root of the backend project with the following variables:
    ```
    PORT=5000
    DB_USER=<your_mongodb_username>
    DB_PASS=<your_mongodb_password>
    ```

4. **Run the Server**
    ```bash
    npm start
    ```

### Setup Frontend

1. **Navigate to Frontend Directory**
    ```bash
    cd ../heavy-mart-frontend
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Environment Variables**
    Create a `.env` file in the root of the frontend project with the following variables:
    ```
    REACT_APP_API_URL=http://localhost:5000
    REACT_APP_FIREBASE_API_KEY=<your_firebase_api_key>
    REACT_APP_FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
    REACT_APP_FIREBASE_PROJECT_ID=<your_firebase_project_id>
    REACT_APP_FIREBASE_STORAGE_BUCKET=<your_firebase_storage_bucket>
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your_firebase_messaging_sender_id>
    REACT_APP_FIREBASE_APP_ID=<your_firebase_app_id>
    ```

4. **Run the Frontend**
    ```bash
    npm start
    ```

## Usage

- **Home Page:** View a list of products with basic details.
- **Search Products:** Use the search bar to find products by name.
- **Filter Products:** Use the dropdown to filter products by category, brand name, or price range.
- **Sort Products:** Use sorting options to order products by price or date added.
- **Pagination:** Navigate through the product pages using the pagination controls.
- **Authentication:** Sign in using Google or Email/Password to access personalized features.

## Deployment

For deployment, you can use platforms like Vercel (for the frontend) and Heroku (for the backend). Ensure you set the environment variables correctly on the deployment platforms.

## Contributing

If you wish to contribute to this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- **Programming Hero** - For providing guidance and resources to build this project.
- **MERN Stack Community** - For continuous support and inspiration.

