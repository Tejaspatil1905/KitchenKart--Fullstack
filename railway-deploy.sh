#!/bin/bash

# Railway deployment script for KitchenKart project

# Step 1: Build frontend
echo "Building frontend..."
cd frontend
npm install
npm run build
cd ..

# Step 2: Prepare backend
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

# Step 3: Initialize Railway project (if not already initialized)
if ! railway status &> /dev/null; then
  echo "Initializing Railway project..."
  railway init
fi

# Step 4: Link Railway project (optional, if you have a project ID)
# railway link <project_id>

# Step 5: Deploy backend
echo "Deploying backend..."
railway up backend --build

# Step 6: Deploy frontend as static site (optional)
# You can deploy frontend dist folder to Railway static hosting or use another service

echo "Deployment script completed."
