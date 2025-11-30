# **Serverless Job Board Application (Full-Stack)**  
**Live Site:** https://meghanaadithi.github.io/job-board-frontend/

A fully serverless, end-to-end Job Board platform built with a React frontend and an AWS Cloud backend.  
The system supports job posting, job browsing, applications with resume uploads, and an admin dashboard to review all submissions.

---

##  **Overview**

This project is a cloud-native job board that enables users to:

- Browse available jobs  
- View job details  
- Post new job listings  
- Apply for jobs with a PDF resume  
- Store all application data securely in DynamoDB  
- Upload resumes to AWS S3  
- View applications using an Admin Dashboard  
- Deploy the frontend using GitHub Pages  

The backend is **100% serverless** using AWS Lambda + API Gateway — scalable, cheap, and maintenance-free.

---

##  **Features**

### **Frontend**
- Built using **React.js**  
- Styled with **Tailwind CSS**  
- **HashRouter** for smooth GitHub Pages deployment  
- Smooth UI animations using **Framer Motion**  
- Pages include:
  - Job Listings  
  - Job Details  
  - Job Application Form (with Resume Upload)  
  - Admin Dashboard (view all applications)

---

### **Backend (AWS Serverless)**

#### **Lambda Functions Handle:**
- Posting job listings  
- Fetching jobs  
- Fetching job details  
- Uploading resumes to S3  
- Saving job applications  
- Retrieving all applications (Admin)  

#### **AWS Services**
- **API Gateway** – REST API endpoints  
- **DynamoDB** – Two tables:  
  - `jobs`  
  - `applications`  
- **S3 Bucket** – Resume uploads  
- **IAM** – Secure permissions  
- **Node.js** – Runtime for all Lambda handlers  

---

##  **Resume Upload System**

- Users upload **PDF** resumes  
- Stored securely in S3 at:  
  `/resumes/<uuid>.pdf`  
- Admin Dashboard displays:
  - Name  
  - Email  
  - Job ID  
  - Timestamp (auto formatted)  
  - **Direct resume download link**  

---

##  **Technologies Used**

### **Backend**
- AWS Lambda  
- AWS API Gateway  
- AWS DynamoDB  
- AWS S3  
- AWS IAM  
- Node.js  

### **Frontend**
- React.js  
- Vite  
- Tailwind CSS  
- Framer Motion  
- React Router (HashRouter)  
- JavaScript (ES6+)  

### **Deployment**
- GitHub Pages (Frontend)  
- AWS Cloud (Backend)  

### **Dev Tools**
- ESLint  
- PostCSS  
- gh-pages  

