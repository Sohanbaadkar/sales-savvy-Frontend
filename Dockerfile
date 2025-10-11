# Use Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose port (e.g., 5173 for Vite)
EXPOSE 5173

# Start app
CMD ["npm", "run", "dev", "--", "--host"]
