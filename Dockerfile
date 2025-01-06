# Etapa 1: Construcción
FROM node:16-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa 2: Servidor Nginx para servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos de la etapa de construcción al directorio predeterminado de Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Expone el puerto 80 para que Nginx sirva la aplicación
EXPOSE 80

# Comando predeterminado para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
