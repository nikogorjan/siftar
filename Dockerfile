# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (production only)
RUN npm install --production

# Copy the rest of the application
COPY . .

# Build the Next.js production build
RUN npm run build

# Expose the port that Next.js runs on
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"]