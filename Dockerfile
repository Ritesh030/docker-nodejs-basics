FROM node

WORKDIR /myLearnings/Wev-devlopment/X-BackEnd_Dev/Y-Projects

COPY . .

RUN npm ci

CMD ["npm", "start"]