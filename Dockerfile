FROM node:20-alpine

WORKDIR /app

# Copia apenas package.json primeiro (melhor para cache)
COPY package.json package-lock.json* ./

# Instala dependências
RUN npm install

# Depois copia o resto da aplicação
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
