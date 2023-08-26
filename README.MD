# Ejercicio Manejo Insidencias Mongo

## Descripcion

---

Ejercicio practico para aprendizaje de mongo, se creo una base de datos simulando el manejo de reportesde insidencias en campus, teniendo el cuenta el siguiente diagrama:

![Diagrama en el que se fundamento la base de datos](./imgs/database.png)

---

## Modo de uso:

---

### Si desea consultar directamente sin el uso de la API:

1. Clonar el repositorio en su dispositivo
2. Es necesario de tener Mongo instalado en su computadora en caso de no ser asi le recomiendo visitar el siguiente link: https://www.youtube.com/watch?v=2cWZ0lFbJoY
3. Tambien es recomentable tener la extension `MongoDB for Vs Code`, en caso de no tenerla instalela, o utilize alguna otra plataforma que le permita ejecutar el archivo query para la creacion de las colecciones de la base de datos:
4. Para utilizar la extension haga lo siguiente:

- 4.1. Abra la extension desde el panel izquierdo de visual studio code, en el simbolo de la hoja
- 4.2. En conexiones abra el panel de nueva conexion
- 4.3. Si tiene una conexion configurada desde Athlas copie el string de la conexion con los datos de usuario y contraseña del perfil creado, si va a utilizar la conexion de la base de datos actual use el siguiente link `mongodb+srv://admin:admin123456@cluster0.y7pgxmx.mongodb.net/`
- 4.3. Si no tiene una conexion configurada y desea hacerlo de manera local selecciona la opcion avanzada y luego presione conectar para hacerlo de manera local o configure los datos de la conexion.

5. **SOLO Si** va a utilizar una conexion diferente a la de el proyecto Ejecutar el archivo query.mongodb que se encuentra dentro del directorio backend/db/scripts.

**Nota**: Tenga en cuenta que la base de datos tiene informacion no real en las colecciones equipo, trainer e insidencias para poder comprobar los endpoints

### Si desea hacer uso de la API:

1. Si desea crear la base de datos local siga los pases del apartado anterior hasta el paso 4.
2. Revise que las configuraciones del archivo .env coincidan con las de su ordenador, si no es el caso cambielas.
3. Abra un nuevo bloque de comandos desde el archivo del repositorio, si esta usando visual estudio puede hacerlo desde la pestaña terminal > new terminal.
4. Con el comando "cd backend" ingrese a la carpeta backend.
5. Ejecute el comando `npm install`.
6. Ejecute el comando `npm run dev`.
7. La consola le mostrara la direccion http donde esta corriendo el servidor, la cual de manera predeterminada es `http://127.10.10.10:5010`
8. Para interactuar con los enpoints es recomendable usar una extension como Thunder Client, para ello siga los siguientes pasos:

- 8.1. Descarge la extension Thunder Client desde visual studio code
- 8.2. En el panel izquierdo seleccione la extension Thunder Client y posteriormente en new request
- 8.3. Coloque la url en el panel de direccion de Thunder Client con el endpoint especifico
- 8.4. Seleccione el metodo de la peticion segun corresponda
- 8.5. Si es un metodo POST envie un objeto en formato JSON con la informacion requerida en la pestaña body de Thunder Client

---

## Consultas

---

**Antes de poder realizar cualquier consulta tenga en cuenta lo siguiente:** Esta aplicacion cuenta con un sistema de autorizaciones por token, para obtener una autorizacion para acceder a los endpoint, por cada coleccion el sistema debe validar que el token enviado corresponda a la coleccion a la cual se desea hacer la peticion, por lo tanto usted debe hacer lo siguiente:

1. Acceda al siguiente endpoint para generar el token deseado:

- UrlDefault: http://127.10.10.10:5010/campus/login/:Coleccion
- Descripcion: Debe cambiar el campo `:Coleccion` de la url por cualquiera de los siguientes segun lo requiera:
  - areas
  - categorias
  - equipo
  - insidencias
  - lugares
  - tipo_equipo
  - tipos
  - trainer
- Ej: http://127.10.10.10:5010/campus/login/areas

2. Copie el token que sera devuelto como mensaje y envielo dentro del header Authorization

Ahora si podra interactuar con las consultas de la siguiente manera:

1. Coleccion Areas:

   - Tipo token esperado: areas

     1.1. Get:

     - UrlDefault: http://127.10.10.10:5010/campus/get/areas/
     - Metodo: get
     - Data: query
     - Descripcion: Endpoint que permite obtener todas las areas o por id especifico segun la informacion en el query, para encontrarlas todas simplemente no ingrese el id en el query.
     - Ej: http://127.10.10.10:5010/campus/get/areas/?id=1

     1.2. Post:

     - UrlDefault: http://127.10.10.10:5010/campus/post/areas
     - Metodo: post
     - Data: body
     - Descripcion: Endpoint que permite crear un nuevo archivo en la coleccion area.
     - Ej: 
          ```json
          {
            "nombre": "Nueva Area"
          }
          ```

     1.3. Put:

     - UrlDefault: http://127.10.10.10:5010/campus/put/areas
     - Metodo: put
     - Data: body
     - Descripcion: Endpoint que permite actualizar un archivo en la coleccion area.
     - Ej: 
          ```json
          {
            "id": 4,
            "nombre": "Nueva Area"
          }
          ```

      1.4. Delete:

     - UrlDefault: http://127.10.10.10:5010/campus/delete/areas
     - Metodo: delete
     - Data: query
     - Descripcion: Endpoint que permite eliminar un archivo de la coleccion areas.
     - Ej: http://127.10.10.10:5010/campus/delete/areas/?id=1

2. Coleccion Areas:

   - Tipo token esperado: categorias

     2.1. Get:

     - UrlDefault: http://127.10.10.10:5010/campus/get/categorias
     - Metodo: get
     - Data: query
     - Descripcion: Endpoint que permite obtener todas las categorias
      o por id especifico segun la informacion en el query, para encontrarlas todas simplemente no ingrese el id en el query.
     - Ej: http://127.10.10.10:5010/campus/get/categorias?id=1

     2.2. Post:

     - UrlDefault: http://127.10.10.10:5010/campus/post/categorias
     - Metodo: post
     - Data: body
     - Descripcion: Endpoint que permite crear un archivo en la coleccion categoria.
     - Ej: 
          ```json
          {
            "categoria": "Nueva Categoria"
          }
          ```

     2.3. Put:

     - UrlDefault: http://127.10.10.10:5010/campus/put/categorias
     - Metodo: put
     - Data: body
     - Descripcion: Endpoint que permite actualizar un archivo en la coleccion categoria.
     - Ej: 
          ```json
          {
            "id": 4,
            "categoria": "Nueva Categoria actualizada"
          }
          ```

      2.4. Delete:

     - UrlDefault: http://127.10.10.10:5010/campus/delete/categorias
     - Metodo: delete
     - Data: query
     - Descripcion: Endpoint que permite eliminar un archivo de la coleccion categorias.
     - Ej: http://127.10.10.10:5010/campus/delete/categorias/?id=3
---

# Creador:

## Andrès David ELizalde Peralta

---
