# Stage 1: Build React app
FROM node:18 AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --include=dev

# Copy project files
COPY . .

# Fix permissions for react-scripts
RUN chmod +x node_modules/.bin/react-scripts

# Build React app
RUN npm run build

# Stage 2: Serve app with Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default nginx content
RUN rm -rf ./*

# Copy build files from build stage
COPY --from=build /app/build ./

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
