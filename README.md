# FE Prueba Toolbox

## 1. Introducción.

 Este repositorio contiene el FE de la prueba de Toolbox
 desarrollado en ReactJs.Direccion de repositorio:
 **https://github.com/endrinatoledo/PruebaToolboxFE.git** 

## 2. Funcionalidad.

 Este repositoio se encarga de consumir el API  **PruebaToolboXBE**
 Mostrando la data obtenida en una tabla mediante un filtro

## 3. Tipos de conexión.

- La aplicacion levanta bajo la dirección **http://localhost:3000**.
- Las rutas para metodos "GET" en el servidor virtual son:
  - Ruta "/files/list/".
      - Retorna en formato de JSON los nombres de los "file".
  - Ruta "/data/:filename/".
      - Retorna en formato de JSON los registros asociados al nombre
      del archivo enviado por parámetro".

## 4. Generalidades sobre la implementación.

- Esta aplicacion ha sido desarrollada con Node.js usando los siguientes modulos:
  - axios
  - bootstrap
  - react
  - react-bootstrap
  - react-dom
  - react-scripts
  - web-vitals

- Arbol de la aplicación:

	```
    back-end
    │   README.md
    │   package.json   
    │   package-lock.json   
    │   gitignore
    └───public
    └───src
    │   └───components
    │   └───utils
    ```
### 5. Prerrequisitos.

**Se deben tener configurados el siguiente entorno:**	

- NodeJS 14

### 6. Instalar Dependencias.

En esta sección desde el terminal de su preferencia se debe
navegar a dentro de la carpeta PruebaToolboxBE y ejecutar el
comando: 

**npm install**	

### 7. Ejecución de la app.

Una vez finalizada la instalacion de dependencias se procede ejecutar la
aplicación mediante el comando:

**npm start**

 Una vez desplegado, se abrirá una pestaña en su navegador con 
 baseUrl **http://localhost:3000** la cual mostrará la aplicación
