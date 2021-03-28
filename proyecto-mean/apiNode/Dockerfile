FROM node:latest
# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
# add app
COPY . /usr/src/app
EXPOSE 3000
# start app
CMD ["npm","start"]
