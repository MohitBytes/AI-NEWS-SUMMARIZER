# =========================
# Stage 1: Build React App
# =========================
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --include=dev

# Copy all project files (including public/index.html)
COPY . .

# Ensure react-scripts is executable
RUN chmod +x node_modules/.bin/react-scripts

# Build React app
RUN npm run build

# =========================
# Stage 2: Serve with Nginx
# =========================
FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy React build from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]