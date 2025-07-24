# SQL User Management App

A simple and professional user management web application built with **Node.js**, **Express**, **EJS**, and **MySQL**.  
Easily add, view, edit, and delete users with a clean interface and secure password checks.

---

## 🚀 Features

- **View Users:** See all users in a styled table.
- **Add User:** Create new users with unique email and username.
- **Edit Username:** Update a user's username (password required for security).
- **Delete User:** Remove users from the database.
- **Responsive UI:** Modern, clean design using internal CSS.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Templating:** EJS
- **Styling:** Internal CSS
- **Utilities:** Faker.js (for generating random users)

---

## 📦 Setup Instructions

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/SQLClass.git
    cd SQLClass
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Configure MySQL**
    - Create a database named `delta_app`.
    - Run the schema to create the `user` table:
        ```sql
        -- schema.sql
        CREATE TABLE user (
            id VARCHAR(50) PRIMARY KEY,
            username VARCHAR(50) UNIQUE,
            email VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(50) UNIQUE NOT NULL
        );
        ```
    - Update your MySQL credentials in `index.js` if needed.

4. **Start the server**
    ```bash
    node index.js
    ```
    The app runs on [http://localhost:8080](http://localhost:8080).

---

## 📋 Usage

- **Home Page:** Shows total user count.
- **Show Users:** Click "Join us today" or go to `/user` to view all users.
- **Add User:** Click "Add User" to open the form.
- **Edit Username:** Click "Edit username" next to a user, enter new username and password.
- **Delete User:** Click "Delete" to remove a user.

---

## 🖼️ Screenshots

| Home Page | Users Table |
|-----------|-------------|
| <img width="300" height="200" alt="image" src="https://github.com/user-attachments/assets/cab4d8f4-5e0d-4507-ac08-add60bfb88ad" /> | <img width="400" height="280" alt="image" src="https://github.com/user-attachments/assets/9e9542c7-f3f0-4887-a558-d9503ec1f932" />| 
 | Add User | Edit Username |
 | <img width="816" height="666" alt="image" src="https://github.com/user-attachments/assets/dda00147-3d73-42c2-8f6c-b7d0d39d5bc0" /> | <img width="709" height="548" alt="image" src="https://github.com/user-attachments/assets/d0d64fe5-fc39-4bd2-8bb9-b830f7d1b060" /> |

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

**Made with ❤️ by [Your
