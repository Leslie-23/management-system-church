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
