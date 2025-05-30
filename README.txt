
Sistema de Recomendación de Películas

Pasos para ejecutar el programa localmente

1. Antes de comenzar, asegúrate de tener Node.js instalado en tu computadora.

Verifica si ya tienes Node.js instalado:

node -v
npm -v
Si no tienes Node.js, descárgalo desde su página oficial:

https://nodejs.org/

2. Clonar el repositorio actual

3. Instalar dependencias
npm install

4. En visual Studio Code presionar Ctrl + shift + P (menu de comandos),
Escribir y seleccionar: Terminal: Select Default Profile y elegir: Command Prompt (o cmd.exe), luego cerrar y abril la terminal otra vez.
(recomendable volver a abrir Visual Studio Code).

5. Archivo .env con credenciales de Neo4j
Ya se incluye un archivo .env preconfigurado con las credenciales del equipo. Asegúrate de que el contenido sea el siguiente:
URI: neo4j+s://e331188c.databases.neo4j.io
Usuario: neo4j
Contraseña: 3w1C5xWBervONo_gMrI_c6CON8KmNB-0qHkCvCPLgww

no modificar el neo por favor

6. Ejecutar el servidor
node index.js

Verás en la terminal:
Servidor corriendo en http://localhost:3000

7. Abrir el programa en el navegador
http://localhost:3000

Gracias!

⠀⠀⠀⠀⠀⢀⣀⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⠞⠉⠀⠀⠀⠀⠙⢷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠙⠳⠦⠤⠖⠒⠒⠲⠦⣄⡀⠀⠀⠀⠀⠀
⠀⢀⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠙⠷⣄⠀⠀⠀
⠀⡜⢰⣷⣤⠀⠀⠀⠀⠀⠀⠀⠘⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣆⠀⠀
⢰⠃⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠖⢦
⢸⠀⣿⣿⣟⣿⣧⠱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣶⡾
⢸⡄⢿⣿⣿⣿⣿⡆⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⡾⠋⠉⠁
⠀⢳⡌⢿⣿⣿⣿⡇⢸⠖⠤⣄⠀⠀⠀⡴⠞⠋⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀
⠀⠀⠙⢷⣍⣛⣛⣡⡞⠀⠀⠈⢷⠀⣸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠉⠉⠁⠀⠀⠀⠸⣿⠛⠋⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡟⠀⠀⠀⠈⠛⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⡅⠀⢰⠀⠀⠀⠈⣧⠀⠀
