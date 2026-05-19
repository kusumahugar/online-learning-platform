# Frontend Dockerfile
<<<<<<< HEAD
FROM node:20-alpine AS build
WORKDIR /app
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

COPY package*.json ./
RUN npm install
=======
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b

COPY . .
RUN npm run build

<<<<<<< HEAD
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=build /app/dist ./dist
=======
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
