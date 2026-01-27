# Step 1: Use a Node image to run the dev server
FROM node:20-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy only the package files first (helps with caching)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your app's code
COPY . .

# Step 6: Expose the port React runs on
EXPOSE 3000

# Step 7: Start the development server
CMD ["npm", "start"]
