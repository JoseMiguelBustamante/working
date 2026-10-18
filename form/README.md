# Formulario de research — Working

Formulario en vivo: **https://forms.gle/Xth9rKNxUhMc8UxC8**

`formulario.gs` es el Google Apps Script que genera el formulario desde cero.

## Cómo usarlo

1. Entra a https://script.google.com → **Nuevo proyecto**.
2. Borra todo y pega el contenido de `formulario.gs`.
3. Elige la función `crearFormularioWorking` y ejecuta (▶). Autoriza.
4. En **Ejecución / Registro** aparecen los enlaces de responder y editar.

## Correo automático (cuenta conectada)

Para que el formulario use el correo verificado de la cuenta de Google (sin que lo escriban):

```javascript
form.setEmailCollectionType(FormApp.EmailCollectionType.VERIFIED);
```

O en el editor: **Configuración → Respuestas → Recopilar direcciones de correo → Verificado**.

## Color e imagen de cabecera

No se pueden poner por Apps Script; se hacen a mano en el editor (ícono 🎨):
- Color del tema: `3D5AFE` (azul Stellar) o `FDDA24` (amarillo).
- Imagen de cabecera: `../assets/stellar_banner.png`.

## Preguntas

1. Nombre
2. Edad
3. Situación actual (estudiante / egresado / freelancer / busca primer trabajo)
4. ¿Ofreció un servicio freelance antes?
5. ¿Le pagaron tarde / menos / nunca?
6. Lo más difícil para conseguir freelance (hasta 2)
7. ¿Usaría pagos protegidos por entregas?
8. ¿Le interesa cobrar en USDC?
9. ¿Quiere ser del piloto? (WhatsApp, opcional)

> El correo se recoge automáticamente de la cuenta conectada.
