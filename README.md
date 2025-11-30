Live Site: https://meghanaadithi.github.io/job-board-frontend/

**SERVERLESS JOB BOARD APPLICATION (FULL-STACK)**

A complete end-to-end job portal system with a React frontend, AWS Lambda backend, API Gateway REST APIs, and S3 resume upload system.
The application supports job posting, job browsing, candidate applications, resume uploads, and an admin dashboard to view all submissions.

**Overview**

This project is a fully serverless Job Board platform that lets users:
Browse available jobs
Post new job listings

Apply for jobs with a resume (PDF) upload

Store application data securely in DynamoDB

Upload resumes to AWS S3

View all incoming applications from an Admin Dashboard

Deploy the website using GitHub Pages

The system uses an entirely serverless backend powered by AWS Lambda and API Gateway, making it scalable and cost-efficient.

**Features**
**Frontend**

React.js UI with Tailwind CSS styling

Hash-based routing for GitHub Pages deployment

Animated components using Framer Motion

Job listing page

Job details page

Job application form with resume upload

Admin Dashboard to view all applications


**Backend (AWS Serverless)**


AWS Lambda functions for:

Posting jobs

Retrieving jobs

Uploading resumes

Saving job applications

Listing applications for admin

API Gateway exposing REST API endpoints

S3 bucket for secure resume uploads

**DynamoDB tables:**

jobs

applications

Resume Upload Capability

Users upload PDFs

Resume is stored in S3 under /resumes/<uuid>.pdf

Admin Dashboard provides live links to download resumes

Admin Features

View all applications in a formatted table

Download resumes directly from S3

Includes name, email, jobId, timestamps, and resume link

Auto-formatted timestamps


**Technologies Used
Backend**

AWS Lambda

AWS API Gateway

AWS DynamoDB

AWS S3
AWS IAM
Node.js
Frontend
React.js
React Router (HashRouter)
Tailwind CSS
Framer Motion
Vite
JavaScript (ES6+)
Deployment
GitHub Pages (Frontend)
AWS Cloud (Backend)
Dev Tools
ESLint
PostCSS
gh-pages for deployment
