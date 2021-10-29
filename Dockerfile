FROM node:12-alpine
WORKDIR /src
COPY package.json package-lock.json /src/
RUN npm install --production
COPY . /src
EXPOSE 3000
RUN npm config set unsafe-perm true 
CMD ["node", "app.js"]docker