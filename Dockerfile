FROM node:11.13.0-alpine

# Copy the src
COPY . /app

# Set the workdir to app
WORKDIR /app

# Install make dependencies
RUN apk add --no-cache --virtual .gyp \
    python \
    make \
    g++

# Install dependencies
RUN npm install

# Now build the app
RUN npm run build

# Remove make dependencies
RUN apk del .gyp

# Expose PORT
EXPOSE 8081

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# set app port
ENV NUXT_PORT=8081

# Start the app
CMD ["npm", "run", "start"]