FROM node:11.13.0-alpine

# Copy the distributable directory
COPY ./.nuxt/ /app/.nuxt

# Install pm2
RUN npm install pm2 -g

# Copy the ecosystem file to root
COPY ./ecosystem.config.js /app

# Expose PORT
EXPOSE 8083

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=8083

# Start the app
CMD ["pm2", "start"]