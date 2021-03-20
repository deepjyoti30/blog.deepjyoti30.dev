FROM node:11.13.0-alpine

# Copy the distributable directory
COPY ./.nuxt/ /app/.nuxt

# Install make dependencies
RUN apk add --no-cache --virtual .gyp \
    python \
    make \
    g++

# Copy the package json
COPY ./package.json /package.json

# Copy the package json to app as well
COPY ./package.json /app/package.json

# Install dependencies
RUN npm install

# Remove make dependencies
RUN apk del .gyp

# Expose PORT
EXPOSE 8081

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# set app port
ENV NUXT_PORT=8081

# Set the workdir to app
WORKDIR /app

# Start the app
CMD ["npm", "run", "start"]