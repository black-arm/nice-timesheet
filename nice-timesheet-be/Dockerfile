# Il dockerfile è multi-step
# questo perché i comandi docker sono additivi, ossia, ogni comando crea un nuovo layer a partire dal precedente
# questo significa che, se anche come ultimo step io andassi a rimuovere il node_modules
# non verrebbe rimosso veramente, e l'immagine peserebbe un botto :)

# Step 2: Compilazione
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# Step 2: Vado a creare l'immagine con i soli compilati (dallo step precedente)
FROM node:22-alpine AS runner

# Set NODE_ENV to production
ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/dist ./dist

# Copy only the production dependencies from the first stage
COPY --from=builder /app/package*.json ./
RUN npm install --only=production

EXPOSE 8091

CMD ["node", "dist/main"]