# Career Up - Consultancy Website
- **Live:** [Career Up](https://career-up-b9.web.app/)

**Career Up** is a responsive consultancy website that provides career guidance and services to users. Built with ReactJS, this platform features user authentication, profile management, smooth animations, and more. The website aims to assist individuals in achieving their career goals through professional consultations.

---

## Features

### **Core Functionalities**
- **User Authentication:**
  - Login and registration using Firebase.
  - Profile management with options to update user information.
  
- **Responsive Design:**
  - Fully responsive UI using Tailwind CSS for a seamless user experience across all devices.

- **Consultancy Services:**
  - Users can browse and learn about various services provided.

- **Dynamic Feedback Section:**
  - Displays client feedback in a visually appealing scrolling marquee.

- **Neomorphic Design:**
  - Implemented neomorphic styling for certain sections, creating a modern and soft UI look.

- **Animations:**
  - Smooth scrolling animations integrated using AOS (Animate On Scroll).

---

## Installation Guide

### **Prerequisites**
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or above)
- npm or yarn

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/career-up.git
   cd career-up
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add Firebase Configuration:
   - Create a Firebase project and set up authentication.
   - Copy your Firebase configuration and paste it into a `.env` file as follows:
     ```env
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## Technologies Used

- **Frontend:**
  - ReactJS
  - Tailwind CSS
  - React Icons

- **Authentication:**
  - Firebase Authentication

- **Animations:**
  - AOS (Animate On Scroll)

- **Development Tools:**
  - Vite (optional, if using Vite instead of Create React App)

---

## File Structure

```
career-up/
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── MyProfile.js
│   │   ├── Navbar.js
│   │   └── Services.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── Login.js
│   ├── provider/
│   │   └── AuthProvider.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── globals.css
├── public/
│   └── index.html
├── .env
├── package.json
├── README.md
```

---

## How to Contribute

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Acknowledgments

Special thanks to:
- **Firebase** for backend authentication.
- **Tailwind CSS** for providing a modern and customizable UI framework.
- **ReactJS** for building an interactive and dynamic frontend.

---

## Contact

For any inquiries or contributions, please contact:
- **Author:** [Adib Ahbad](https://www.facebook.com/bigg.bangg.906/)
- **Project Link:** [Career Up](https://career-up-b9.web.app/)

---

Happy coding! 😊