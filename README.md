# Church Management System

## Overview

The Church Management System is a full-stack application designed to manage church activities, including user authentication, member management, event scheduling, and donation tracking. This application is built using a React front end and an Express-based Node.js back end.

## Project Structure

```
church-management-system/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── memberController.js
│   │   ├── eventController.js
│   │   └── donationController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Member.js
│   │   ├── Event.js
│   │   └── Donation.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── memberRoutes.js
│   │   ├── eventRoutes.js
│   │   └── donationRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── MemberList.js
│   │   │   ├── EventList.js
│   │   │   ├── DonationList.js
│   │   │   └── Login.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/church-management-church.git
   cd church-management-system
   ```

2. **Set Up the Backend**

   - Navigate to the `backend` directory:
     
     ```bash
     cd backend
     ```

   - Install the backend dependencies:

     ```bash
     npm install
     ```

   - Create a `.env` file in the `backend` directory and add your environment variables. Example:

     ```env
     MONGO_URI=mongodb://localhost:27017/churchdb
     PORT=5000
     ```

   - Start the backend server:

     ```bash
     npm start
     ```

3. **Set Up the Frontend**

   - Navigate to the `frontend` directory:

     ```bash
     cd ../frontend
     ```

   - Install the frontend dependencies:

     ```bash
     npm install
     ```

   - Start the React development server:

     ```bash
     npm start
     ```

4. **Access the Application**

   Open your web browser and navigate to `http://localhost:3000` to view the application.

## Folder Structure

- **`backend/`**: Contains the backend server code.
  - **`config/`**: Configuration files, such as database connection settings.
  - **`controllers/`**: Business logic for handling requests and responses.
  - **`models/`**: Database models for user, member, event, and donation.
  - **`routes/`**: Route definitions for various API endpoints.
  - **`middleware/`**: Middleware for authentication and other functionalities.
  - **`app.js`**: Express application configuration.
  - **`server.js`**: Server startup and configuration.

- **`frontend/`**: Contains the React application code.
  - **`public/`**: Static files and the main HTML template.
  - **`src/`**: Source code for React components and styles.
    - **`components/`**: React components for different parts of the application.
    - **`App.js`**: Main component that renders the application.
    - **`index.js`**: Entry point for the React application.
    - **`styles.css`**: Global styles for the React application.

## API Endpoints

- **`POST /api/auth/login`**: Authenticate a user.
- **`POST /api/auth/register`**: Register a new user.
- **`GET /api/members`**: Retrieve the list of members.
- **`POST /api/members`**: Add a new member.
- **`GET /api/events`**: Retrieve the list of events.
- **`POST /api/events`**: Add a new event.
- **`GET /api/donations`**: Retrieve the list of donations.
- **`POST /api/donations`**: Add a new donation.

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, please contact:

- GitHub: [Leslie-23](https://github.com/Leslie-23)

---