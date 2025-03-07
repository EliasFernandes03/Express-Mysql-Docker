# Usa uma imagem base do Node.js
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todos os arquivos do projeto para o container
COPY . .

# Compila o TypeScript para JavaScript
RUN npm run build

# Expõe a porta 3000 (ou a que seu app usa)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start"]
