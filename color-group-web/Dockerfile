# Development Environment Setup
FROM node:16 AS development

WORKDIR /home/node/app

# Copy over application files and install dependencies
COPY package*.json .

# Add node_modules/.bin to $PATH
ENV PATH /home/node/app/node_modules/.bin:$PATH

RUN npm install

# Resulting node_modules folder needs to be owned by "node" user
# RUN chown node: /home/node/app/node_modules

COPY . .

# USER node
CMD ["npm", "start"]
