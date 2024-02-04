# Fetching the latest node image on apline linux
FROM node:alpine

# Declaring env
ENV NODE_ENV development


# Setting up the work directory
WORKDIR /clientCode

# Copying package.json and package-lock.json separately
COPY package.json package-lock.json ./

# Installing dependencies
RUN npm ci --production

# Copying all the files in our project
COPY . .

EXPOSE 3000

CMD npm start