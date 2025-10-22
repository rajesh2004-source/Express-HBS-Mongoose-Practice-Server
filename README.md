# Express-HBS-Mongoose-Practice-Server 🛠️
---

## 📖 Overview

This repository hosts a dedicated Node.js backend environment designed for practicing and isolating core server-side concepts using the Express framework.

This environment is structured with four independent server entry points, allowing you to run and test different application components (frontend views, API services, and microservices) on separate ports simultaneously. This modular setup is ideal for mastering Express application architecture.

---

### Project Aim

The primary aim of this project is to gain hands-on experience in building a structured, scalable backend foundation, specifically to prepare for the development of the larger Projects.

---

## ✨ Key Objectives & Features

The design of this practice server focuses entirely on mastering the core architectural elements needed for a large-scale application:

* **Modular Architecture:** Isolating server functions into separate entry points (start.js, home.js, etc.) to practice microservice concepts and code organization.
* **Full Stack Integration:** Ensuring the core setup (Mongoose, Express, and HBS) works together seamlessly, avoiding the integration errors that plagued the initial setup.
* **Configuration Practice:** Handling environment variables (like port numbers) and setting correct pathing (path.join logic) for static files and HBS views.
* **Database Foundation:**  Establishing a robust and reliable connection to MongoDB via Mongoose for future data modeling and querying practice.
---

## 🛠️ Tech Stack (MERN)

This application is built using the following modern web technologies, collectively known as the **MERN stack**:

| Technology | Description |
| :--- | :--- |
| **React.js** | For building the dynamic, single-page user interface (SPA). |
| **JavaScript** | Core language for interactivity. |
| **Node.js** | JavaScript runtime environment for the server-side. |
| **Express.js** | Minimalist framework used for routing and middleware. |
| **Handlebars (HBS)** | Templating engine for rendering dynamic views. |
| **MongoDB Object Data M** | Mongoose. |

---

##  Getting Started
**Node.js**: Ensure Node.js (LTS version) is installed.

**MongoDB**: A running instance of a MongoDB server is required for the main server (npm start).

```Installation
1.Clone the repository and navigate into the folder:

git clone [https://github.com/rajesh2004-source/Express-HBS-Mongoose-Practice-Server.git](https://github.com/rajesh2004-source/Express-HBS-Mongoose-Practice-Server.git)
cd Express-HBS-Mongoose-Practice-Server
```

```Installation
2.Install all required dependencies:

npm install
```


## Running the Practice Servers

#### **To run all four servers independently, open four separate terminal windows and execute the four respective commands:**


```
npm start  -> ex.[http://localhost:9000/]
npm run a  -> ex.[http://localhost:9000/]
npm run b  -> ex.[http://localhost:9000/]
npm run c  -> ex.[http://localhost:9000/]
```

-----
## 📜 License
This project is distributed under the ISC  License. See the LICENSE file in the repository root for full details.

-----
## 📧 Contact

**Mahale Rajesh** - [rajeshmahale103@gmail.com](mailto:rajeshmahale103@gmail.com)

**Project Link**:  https://github.com/rajesh2004-source/Express-HBS-Mongoose-Practice-Server

-----

