# Development Environment Setup
FROM node:16 AS development
ENV NODE_ENV development

WORKDIR /home/node/app

# Copy over application files and install dependencies
COPY package*.json .
RUN npm install
COPY . .

USER node
CMD ["npm", "run", "start-dev-windows"]
