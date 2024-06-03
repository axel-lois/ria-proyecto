## Ejecución del proyecto

Primero que nada, tenemos que tener Docker instalado y ejecutándose en nuestro computador. 

Luego, para ejecutar la aplicación, debemos seguir estos pasos: 

1. Levantar una instancia de docker con la imagen de la carpeta "docker-image" (ya tenemos un docker-compose y scripts para levantar y eliminar la instancia)
2. Ejecutar el servidor proxy de la carpeta "api" con el comando "npm run start-server"
3. Ejecutar el cliente de la carpeta "client" con el comando "npm run dev"