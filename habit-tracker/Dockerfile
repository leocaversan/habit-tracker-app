# Use a imagem base do Ubuntu
FROM ubuntu:latest

# Instale as dependências necessárias
RUN apt-get update && apt-get install -y nodejs npm

# Configure o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos do aplicativo React para o contêiner
COPY . .

# Instale as dependências do aplicativo React
RUN npm install

# Inicialize o aplicativo React
CMD ["npm", "start"]
