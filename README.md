# This repository contains the client application.  
> For backend server, see: https://github.com/yanapang/my-project-be.git

# 🎨 Frontend Client

This is the frontend application that communicates with the backend REST API.  
It uses Axios for HTTP requests and can be run both locally and in a Docker environment.

---

## 🧱 Tech Stack

- Vue + Typescript + Pnpm
- Axios
- Docker

---

## 🚀 Run Locally (Without Docker)

```bash
npm install
npm run dev
```

Application runs at:

http://localhost:3000

---

## 🔗 API Configuration

### 🔹 Local Development (without Docker)

Backend URL:
http://localhost:8080

### 🔹 Docker Compose Environment

Backend URL:
http://backend:8080

> When running inside Docker, do NOT use `localhost`.  
> Use the Docker service name instead.
---

## 🐳 Run With Docker

### 1. Build Image

```bash
docker build -t frontend-app .
```

### 2. Run Container

```bash
docker run -p 3000:3000 frontend-app
```

---

## 📂 Project Structure

```
frontend/
 ├─ src/
 ├─ public/
 ├─ package.json
 └─ Dockerfile
```

---

## 🎯 Purpose

- Understand frontend-to-backend communication
- Practice Axios-based asynchronous requests
- Learn Docker-based multi-container networking
- Prepare for future Kubernetes deployment