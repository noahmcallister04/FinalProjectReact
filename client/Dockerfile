
FROM node:14-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Step 4: Install dependencies
# Using --only=production to skip installing devDependencies
RUN npm install --only=production

# Step 5: Copy the rest of your frontend app source code
COPY . .

# Step 6: Expose the port the app runs on
EXPOSE 3000

# Step 7: Run your app
# Note: This will vary based on how you've configured package.json
CMD ["npm", "start"]
