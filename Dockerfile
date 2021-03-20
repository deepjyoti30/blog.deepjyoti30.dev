FROM node:11.13.0-alpine

# Copy the distributable directory
COPY ./.nuxt/ /app/.nuxt

# Install dependencies
RUN npm install

# Expose PORT
EXPOSE 8081

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# set app port
ENV NUXT_PORT=8081

# Start the app
CMD ["npm", "run", "start"]