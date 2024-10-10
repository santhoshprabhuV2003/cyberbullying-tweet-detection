# Use an official Node.js runtime as a parent image
FROM node AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the React app for production
RUN npm run build

# Start a new stage from the Nginx image
FROM nginx:alpine

# Copy the build files from the previous stage to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]