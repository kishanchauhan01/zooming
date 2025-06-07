# 📹 Zoom Clone

A real-time video conferencing application built with the **MERN stack** (MongoDB, Express.js, React, Node.js) and **WebRTC**. This project demonstrates peer-to-peer video, audio, and chat communication in the browser—no plugins required!

---

## 🗒️ For more understanding go the the notes section of the repository.

## 🚀 Features

- 🔗 Peer-to-peer video and audio calls
- 💬 Real-time chat messaging
- 🖥️ Screen sharing support
- 🔒 Secure, encrypted connections (DTLS/SRTP)
- 🌐 NAT/firewall traversal using STUN/TURN servers

---

## 🛠️ Tech Stack

- **MongoDB** – Database for user and room management
- **Express.js** – Backend server and API
- **React** – Frontend UI
- **Node.js** – Server runtime
- **WebRTC** – Real-time communication
- **Socket.io** – Signaling between peers

---

## 📦 Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/zoom-clone.git
   cd zoom-clone
   ```

2. **Install dependencies for both client and server:**
   ```sh
   cd server
   npm install
   cd ../client
   npm install
   ```

3. **Start the backend server:**
   ```sh
   cd ../server
   npm start
   ```

4. **Start the frontend React app:**
   ```sh
   cd ../client
   npm start
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

---

## 📝 How It Works

1. **Signaling:**  
   Users join a room. The server (Node.js/Express + Socket.io) helps exchange connection details (SDP, ICE candidates) between peers.

2. **Peer Connection:**  
   WebRTC establishes a direct connection for media and data.

3. **Media Exchange:**  
   Video, audio, and chat messages are sent directly between users.

---

## 📚 Learn More

- [WebRTC Official Docs](https://webrtc.org/)
- [MERN Stack Guide](https://www.mongodb.com/mern-stack)
- [Socket.io Documentation](https://socket.io/docs/)

---
