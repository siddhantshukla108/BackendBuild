# DeVyneTube-Backend 🎥

A robust, scalable, and feature-rich backend service for a YouTube-like video sharing platform, built with Node.js, Express, and MongoDB. This server handles user authentication, video uploads, processing, streaming, likes, comments, and subscriptions.

## 🚀 Features

-   **User Authentication & Authorization**: JWT-based secure login/signup with refresh tokens.
-   **Video Management**: Upload, update, delete, and fetch videos with thumbnails.
-   **Video Streaming**: Adaptive streaming using HLS (.m3u8) for smooth playback across devices.
-   **Social Features**: Like/Dislike videos, comment on videos, and subscribe to channels.
-   **Advanced Querying**: Pagination, filtering, sorting, and searching for videos and users.
-   **Cloud Integration**: Secure file storage using AWS S3 and CloudFront for fast delivery.
-   **Database Management**: Efficient data modeling with Mongoose ODM for MongoDB.

## 🛠️ Tech Stack

-   **Runtime**: Node.js
-   **Framework**: Express.js
-   **Database**: MongoDB with Mongoose
-   **File Storage**: AWS S3 & CloudFront (for videos and images)
-   **Video Processing**: FFmpeg (for converting uploads to HLS format)
-   **Authentication**: JSON Web Tokens (JWT)
-   **Security**: bcryptjs, helmet, cors, express-rate-limit
-   **Other Key Packages**: multer, multer-s3, socket.io (for real-time features)

## 📋 Prerequisites

Before running this project, ensure you have the following installed on your system:

-   Node.js (v18 or higher)
-   MongoDB (v6 or higher)
-   FFmpeg
-   AWS CLI (configured with your credentials)

## ⚙️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/<your-username>/deVyneTube-Backend.git
    cd deVyneTube-Backend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Variables**
    Create a `.env` file in the root directory and configure the following variables:
    ```env
    # Server
    PORT=8000
    NODE_ENV=development
    CORS_ORIGIN=http://localhost:3000

    # Database
    MONGODB_URI=<your-mongodb-connection-string>

    # JWT
    ACCESS_TOKEN_SECRET=<your-super-secure-access-token-secret>
    ACCESS_TOKEN_EXPIRY=1d
    REFRESH_TOKEN_SECRET=<your-super-secure-refresh-token-secret>
    REFRESH_TOKEN_EXPIRY=10d

    # AWS S3
    AWS_REGION=<your-aws-region>
    AWS_ACCESS_KEY_ID=<your-aws-access-key-id>
    AWS_SECRET_ACCESS_KEY=<your-aws-secret-access-key>
    S3_BUCKET_NAME=<your-s3-bucket-name>

    # CloudFront
    CLOUDFRONT_DOMAIN=<your-cloudfront-distribution-domain>
    ```

4.  **Start the development server**
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:8000`.

## 🏗️ Project Structure

src/ <br/>
├── controllers/ # Route controllers (handler functions) <br/>
├── models/ # Mongoose models (User, Video, etc.) <br/>
├── middleware/ # Custom middleware (auth, upload, etc.) <br/>
├── routes/ # API route definitions <br/>
├── utils/ # Helper functions (ApiResponse, ApiError, etc.) <br/>
├── constants.js # Application constants <br/>
└── app.js # Express app configuration <br/>


## 📡 API Reference

### Authentication Routes
-   `POST /api/v1/users/register` - Register a new user
-   `POST /api/v1/users/login` - Login user
-   `POST /api/v1/users/refresh-token` - Refresh access token
-   `POST /api/v1/users/logout` - Logout user

### User Routes
-   `GET /api/v1/users/current-user` - Get current user profile
-   `PATCH /api/v1/users/update-account` - Update user details
-   `GET /api/v1/users/c/:username` - Get channel profile

### Video Routes
-   `GET /api/v1/videos` - Get all videos with filtering & pagination
-   `POST /api/v1/videos` - Upload a new video (protected)
-   `GET /api/v1/videos/:videoId` - Get a video by ID
-   `PATCH /api/v1/videos/:videoId` - Update video details (owner only)
-   `DELETE /api/v1/videos/:videoId` - Delete a video (owner only)

### Interaction Routes (Likes, Comments, Subscriptions)
-   `POST /api/v1/videos/toggle/like/:videoId` - Toggle like/dislike on a video
-   `POST /api/v1/videos/comment/:videoId` - Add a comment to a video
-   `POST /api/v1/subscriptions/toggle/:channelId` - Toggle subscription to a channel

*For a complete and interactive API documentation, import the included `deVyneTube.postman_collection.json` into Postman.*

## 🐳 Docker Support

This project can be easily containerized with Docker.

1.  **Build the image:**
    ```bash
    docker build -t devynetube-backend .
    ```

2.  **Run the container:**
    ```bash
    docker run -p 8000:8000 --env-file .env devynetube-backend
    ```

## 🤝 Contributing

Contributions are always welcome! Please feel free to fork this repository, make your changes, and submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📞 Contact Me

📧 **Email:** shuklasiddhant365@gmail.com  
💼 **LinkedIn:** [siddhant-shukla108](https://www.linkedin.com/in/siddhant-shukla108/) <br/>
🐦 **Twitter:** [siddhant_shuk1a](https://x.com/siddhant_shuk1a)  
🌍 **Portfolio:** [siddhantshukla-portfolio](https://siddhantshukla-portfolio.netlify.app/)

---

## 🎯 Future Enhancements

-   [ ] Implement WebSocket for real-time notifications.
-   [ ] Add a recommendation engine for videos.
-   [ ] Implement playlist functionality.
-   [ ] Add video analytics for creators.
-   [ ] Support for live streaming.

---

**⭐ Star this repo if you found it helpful!**
