# Enviar Email desde un formulario HTML *Estático* usando Google Apps Mail!

Un ***Ejemplo-Paso-a-Paso*** de usar un **Formulario HTML** para enviar un mensaje de "Contáctenos" Por Email sin un servidor Backend utilizando un Google Script - Sin PHP, Python, Ruby, Java, Node.js etc.

## ¿Por qué?

Era necesaria una manera de enviar un email desde una página HTML "*estática*"
cuando no se (*quiere*) *tiene* un *servidor*.

### *Ventajas Clave*

+ Sin "*Backend*" para Implementar/Mantener/Pagar
+ ***Completamente personalizable*** - cada aspecto es personalizable!
+ Email *enviado a través de* ***Google Mail*** que está ***Permitido en Todas Partes*** (*Alto rendimiento de entrega*)
+ **Recopilar/Almacenar** cualquier **dato de un formulario** en una ***Hoja de Cálculo*** para una sencilla visualización  
(*perfecto si necesitas compartirlo con personas no técnicas*)

## ¿Qué?

En lugar de usar un servidor para enviar un email,
que es *fácil* pero requiere *mantenimiento*,  
utiliza Google para enviar correos en tu nombre
y usa las Hojas de Cálculo de Google para realizar un seguimiento de los datos!

> *Podrías* utilizar un servicio "*gratuito*" como http://formspree.io/ para procesar tus envíos de formulario
si no te te iteresa a donde estás enviando tus datos y querer manejar la data enviada  
en tu bandeja de entrada (*sucio ... apesta*!)  
*Ó*... puedes *invertir* unos minutos y mantener tus datos privados/manejables.
*Tú eliges*.

## ¿*Cómo*?

### 1. Haz una Copia de la Hoja de Cálculo de Ejemplo

> Ejemplo: https://docs.google.com/spreadsheets/d/1Bn4m6iA_Xch1zzhNvo_6CoQWqOAgwwkOWJKC-phHx2Q/

En Hojas de Google, Haz Click en "**Archivo**" > "**Crear una copia**..."

![1-make-copy](https://cloud.githubusercontent.com/assets/194400/10559679/d0056a0c-74ee-11e5-9fdc-c12e13684a46.png)

Esto debería mostrarte algo como esto:

![2-copy-of-sheet](https://cloud.githubusercontent.com/assets/194400/10559710/3aec92f0-74ef-11e5-9295-f1988a23257b.png)

> Nota: Sientete libre de cambiar el nombre de la Copia como sea que quieras,
esto no afectará el resultado final.

### 2. Abre el Editor de Secuencia de Comandos

Abre el **Editor de secuencia de comandos...** haciendo click en "**Herramientas**" > "**Editor de secuencia de comandos...**"

![2 script-editor](https://cloud.githubusercontent.com/assets/194400/10559732/8db2b9f6-74ef-11e5-8bf2-de286f079929.png)

Aquí está una *instantánea* del script que necesitas (*en este punto del ejercicio*): [google-script-just-email.js](https://raw.githubusercontent.com/nelsonic/html-form-send-email-via-google-script-without-server/1d1c6727f69dec64a6b7f6bd6ff0dd72d0374210/google-script-just-email.js)

### 3. Establecer el `TO_ADDRESS` en el Script

En la ventana del editor deberías ver:

![3-script-editor-showing-script](https://cloud.githubusercontent.com/assets/194400/10560379/9efa5b3a-7501-11e5-96ba-a9e3b2d77ee4.png)

Cambia el valor de el `TO_ADDRESS` a la dirección que deseas recibir
el mensaje del formulario de contacto.

### 4. Guarda una *Nueva Versión* de tu Script

No es inmediatamente *obvio* pero tienes que hacer *click* en "*Gestionar Versiones...*"

![19 google-script-no-save-new-version](https://cloud.githubusercontent.com/assets/194400/10558249/527f3c98-74c1-11e5-8290-5af7fa7f5f75.png)

Luego *crea* tu nueva versión:

![20 google-script-save-new-version](https://cloud.githubusercontent.com/assets/194400/10558250/53d21d5e-74c1-11e5-88c5-7bc2d8ce6228.png)

### 5. Publica el Script *Actualizado* como a Aplicación Web

![20 a-publish](https://cloud.githubusercontent.com/assets/194400/10558288/50980aa8-74c2-11e5-8576-72084a564779.png)

Selecciona la *última* versión del proyecto para implementar:

![21 deploy-new-version](https://cloud.githubusercontent.com/assets/194400/10558251/570a5428-74c1-11e5-8ced-5dd26d3de3c4.png)

### 6. Autoriza el Script para enviar Correos a tu nombre

![5 auth-required](https://cloud.githubusercontent.com/assets/194400/10560412/89d3fb0c-7502-11e5-81ce-fb239bf545b2.png)

![5-allow-sending-emails](https://cloud.githubusercontent.com/assets/194400/10560416/a86a26ae-7502-11e5-9add-d5081d409af4.png)

Copia la URL de la aplicación web en tu portapapeles / bloc de notas.
Luego haz Click en "Aceptar".

![22 1-deploy-as-web-app](https://cloud.githubusercontent.com/assets/194400/10558255/6eec31e2-74c1-11e5-9c07-cea6209526df.png)


### 7. Crea tu Formulario HTML *básico*

Usando la plantilla en el `index.html` en este repositorio,
crea tu propio archivo html con el formulario básico. (*guarda el archivo*)

> Recuerda cambiar la URL del `action` del formulario con la que copiaste en el paso anterior:

![7-html-form](https://cloud.githubusercontent.com/assets/194400/10560470/e2d7fcb6-7503-11e5-9d9a-3771423e51fa.png)

### 8. Abre el Formulario HTML (*página*) en tu Navegador

Rellena algunos datos de muestra en el formulario HTML:

![html form](https://cloud.githubusercontent.com/assets/194400/10560494/674b64c4-7504-11e5-801a-b537d276f671.png)

Envía el formulario. Deberias ver una confirmación de que se envió:
![form sent](https://cloud.githubusercontent.com/assets/194400/10560501/8f605dd4-7504-11e5-8cd7-06d768beba4d.png)

### 9. Verifica la bandeja de entrada de la dirección que estableciste

Abre la bandeja de entrada de la direccion email que estableciste en el **Paso 3** (*arriba*)

![email received](https://cloud.githubusercontent.com/assets/194400/10560512/f87f1652-7504-11e5-8b0f-c342c395a193.png)


> ***Listo***. Eso es. Acabas de crear un formulario HTML que envia correos!

# *Parte Dos - Hazlo Lucir Bien* ...

Vamos a mantener esto ***Súper Ligero*** utilizando [**PURE CSS**](http://purecss.io/start/)
para nuesto Estilo (*Arreglar el "horrible" Formulario HTML en el paso 8*).
Y `submit` (enviar) el formulario usando [**JQuery** "***AJAX***"](http://api.jquery.com/jquery.ajax/) para mantener a la persona en tu página/sitio (*evitar la "horrible" página de respuesta*)

### 10. Enviar el Formulario utilizando **JavaScript** "***AJAX***"

Para *prevenir* que la página del formulario cambie a la respuesta/resultado en `JSON`
se necesita enviar el formulario usando ***AJAX***.

Actualiza el `index.html` para incluir el siguiente archivo JavaScript al *final* de tu fila
(*antes de cerrar el tag `</body>`*)

```js
<script data-cfasync="false" type="text/javascript"
src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"></script>
```

Esto ahora va a mostrar un *message* de "Gracias" cuando el formlario es enviado:

![thankyou message](https://cloud.githubusercontent.com/assets/194400/10561147/4086a89a-7517-11e5-840d-7f490353e225.png)

Mantiene a la persona en la misma página. No recarga.

### 11. Personaliza el Mensaje Mostrado cuando el Formulario es Enviado

Adapta el mensaje editando el div `thankyou_message`:

![10-customise-the-thankyou-message](https://cloud.githubusercontent.com/assets/194400/10561213/9e6d3342-7518-11e5-9860-43a268102de2.png)


### 12. Usa CSS para Hacer que el Formulario *Luzca Genial*

Para `este` *ejemplo* utilizamos ***Pure CSS***: http://purecss.io/start/
porque tien un ***peso ligero*** (***4.0KB resumido y gzipped***)
y *soluciona* nuestro actual "*problema*": Hacerlo ver bien.

![PureCSS-Logo-Intro](https://github-cloud.s3.amazonaws.com/assets/194400/10565838/72d6d52a-75d2-11e5-9b92-ca02b1124920.png)

![PureCSS-module-sizes](https://github-cloud.s3.amazonaws.com/assets/194400/10565844/8f4885a0-75d2-11e5-9490-e3fc42c32616.png)

Sin perder *demasiado* tiempo en esto, podemos hacer que el formulario *luzca*
***mucho*** mejor:

![contact form with pure css](https://github-cloud.s3.amazonaws.com/assets/194400/10566392/f38bc454-75dd-11e5-85dd-6819494a98f2.png)

### 13. Haz que el email Luzca Bien También!

Por defecto, los body de los correos enviados contienen los pares key-value del formulario, con el key como un `<h4>` y el value como un
`<div>`. Esto es una vista bastante sencilla e infalible para los datos.

Deberías obtener algo que se vea mas o menos como esto:
![Nicely formatted email](https://cloud.githubusercontent.com/assets/5610747/22168070/335ad734-df62-11e6-9523-6e193e94151f.png)

> Ten en cuenta que se trata de un trabajo en progreso y potencialmente te expone a obtener más de lo que esperabas en el correo electrónico. Debido a que el contenido del correo electrónico está realizando un bucle sobre todos los datos enviados en el formulario, si un robot o un usuario malintencionado decide hacer `POST` más de lo que ha pedido, probablemente lo recibirás en tu bandeja de entrada. Usar con precaución por ahora. Estamos investigando mejoras.

Tu puedes modificar esto, a través del Editor de secuencia de comandos. La linea:

```javascript
result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + key + "</h4><div>" + obj[key] + "</div>";
```

tiene todo lo que necesitas. Puedes ajustar el marcado para que se adapte a ti. Elegimos un `<h4>` porque era el mejor tamaño para el correo electrónico, y añadimos una pequeña cantidad de CSS a él para fijar la capitalización (las llaves son todas minúsculas en el objeto JS) y un poco de espaciamiento por defecto. Mientras que los estilos en línea como este son generalmente malas prácticas en las páginas web normales, para el correo electrónico HTML son la única manera fiable de hacer CSS!
Fuimos con un `<div>` para la parte de valor, ya que podría ser cualquier cosa - de una sola línea, multilínea (un `<p>` por ejemplo no lo cortaría).

Mientras estamos aquí, también hay una opción `replyTo` para el método` sendEmail () `que está comentado por defecto:

```javascript
MailApp.sendEmail({
  to: TO_ADDRESS,
  subject: "Contact form submitted",
  // replyTo: String(mailData.email), // This is optional and reliant on your form actually collecting a field named `email`
  htmlBody: formatMailBody(mailData)
});
```

Puedes descomentarlo si deseas agregar un campo de respuesta a tu correo electrónico. El ejemplo en el script establecerá el reply-to como el correo electrónico enviado en el formulario (por el usuario).

La documentación de Google provee más información sobre MailApp.sendEmail (por ejemplo `cc`/`bcc` etc.) si te interesa:
https://developers.google.com/apps-script/reference/mail/mail-app

# *Parte Tres - Almacena los Datos del Formulario Enviado en una Hoja de Cálculo*

Enviar los datos del Formulario directamente a tu bandeja de entrada es un *buen*
primer paso, pero podemos hacerlo mejor.

### 14. Agrega la Función `record_data` a tu Google Apps Script

![record_data example](https://cloud.githubusercontent.com/assets/194400/10581613/8b4f9ad4-767b-11e5-90cc-962a9d6acc91.png)

Esto grabará los datos recibidos desde el `POST` como una *fila* en la hoja de cálculo.  
Observa: [**google-apps-script.js**](https://github.com/nelsonic/html-form-send-email-via-google-script-without-server/blob/master/google-apps-script.js) para obtener el código completo puedes *copiar y pegar*.

### 15. Guarda una Nueva Versión y Re-Publicalo

Sigue los Pasos 4, 5 y 6 para guardar una nueva versión y ***re-publicar*** el script.

### 16. Prueba de Nuevo Enviando el Formulario

![submit the form](https://cloud.githubusercontent.com/assets/194400/10582654/cf3081e6-7680-11e5-9fd1-b989a8ba0b65.png)

### 17 Confirma que los Datos fueron Insertados dentro de la Hoja de Cálculo

![17-confirm-data-inserted](https://cloud.githubusercontent.com/assets/194400/10582676/eb8af5d8-7680-11e5-92bb-30dd08d2d7b3.png)


### _Live_ Server (_en tu `localhost`_)

Porque estamos carganto erchivos **.js** externos, nuestro buscador no nos _peromitirá_ simplemente
abrir el **index.html** desde un directorio local para probar el formlario.

Abre tu terminal y corre este comando
para _**instalar** los **módulos node** e **iniciar** el **live server**_:

```sh
npm install live-server --save-dev && node_modules/.bin/live-server --port=8000
```

Tomará un minuto la instalación,
pero cuando esté listo, tu `live-server` se iniciará.

Esto inicia un servidor HTTP de node.js en el puerto 8000
y abre el formulario que acabas de crear en tu buscador por defecto.
Si deseas actualizar los estilos del formulario en el **style.css** o el
Javascript del lado del cliente en el **form-submission-handler.js**,
por favor asegurate de editar el **index.html** para caragar esos recursos
localmente en lugar de a través de GitHub.

> **Nota**: Esto es una _ligera_ mordida de Node.js para principiantes en absoluto.
Tu **no** necesitas node.js para "implementar" este formulario,
puedes correrlo en **_cualquier_ servidor web** que soporte HTML/CSS/JavaScript.
Si núnca has usado antes Node.js, Observa: http://nodeguide.com/beginner.html
pero para el propósito de este ejercicio (_enviar un formulario **sin** un servidor_)
_No **necesitas**_ node.js ó `live-server`
es sólo una _buena_ cosa para tener cuando estás creando
tu formulario porque automáticamente recarga la página cuando haces cambios en tu editor de texto!


# ¿*Quieres más*?

Si deseas seguir este tutorial, [***por favor déjanos saberlo***!](https://github.com/nelsonic/html-form-send-email-via-google-script-without-server/issues)


## ¡Añade tus propios campos!

En respuesta a [ La solicitud de Henry Beary](https://github.com/dwyl/html-form-send-email-via-google-script-without-server/issues/9)
hemos hecho el handler del formulario *genérico* lo que significa que ahora puedes agregar cualquier campo que desees al formulario.

recuerda incluir los campos *dentro* del formulario que tiene la id `gform`
y asegurate de que el `name` del elemento de formulario coincida con el nuevo encabezado de la columna en su hoja de cálculo.
 Ej.:
```HTML
<fieldset class="pure-group">
  <label for="color">Favourite Color: </label>
  <input id="color" name="color" placeholder="green" />
</fieldset>
```
Esto te permitirá capturar el color favorito de la persona:
 Ej.:
![new-field-contains-data](https://cloud.githubusercontent.com/assets/194400/11547132/9f162f6a-9949-11e5-89ac-aeb91e025844.png)

¡Ház saber si tienes alguna pregunta!




## Lectura de Fondo

+ Conceptos básicos de Google Apps Scripts: https://developers.google.com/apps-script/articles
+ Logger (como console.log):
https://developers.google.com/apps-script/reference/base/logger
+ Simple Union de Correo utilizando Hojas de Cálculo de Google:
https://developers.google.com/apps-script/articles/mail_merge
+ Tutorial Original: Publicación de AJAX en la Hoja de Cálculo de Google: http://stackoverflow.com/questions/10000020/ajax-post-to-google-spreadsheet que apunta a:
  + https://mashe.hawksey.info/2011/10/google-spreadsheets-as-a-database-insert-with-apps-script-form-postget-submit-method/
