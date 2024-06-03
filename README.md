## Ejecución del proyecto

Primero que nada, tenemos que tener Docker instalado y ejecutándose en nuestro computador. 

Luego, para ejecutar la aplicación, debemos seguir estos pasos: 

1. Moverse a la carpeta docker-image y levantar una instancia de docker con el docker-compose que hay adentro. Hay comandos para levantar (`./up.sh`) y eliminar (`./shut-down.sh`)
2. Ejecutar el servidor proxy, moviendose a la carpeta "api", instalando dependencias con el comando `npm install` y posteriormente levantando el servidor con el comando `npm run start-server`
3. Ejecutar el cliente, moviendose a la carpeta "client", instalando dependencias con el comando `npm install` y ejecutando el cliente con el comando `npm run dev`