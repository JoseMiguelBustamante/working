function crearFormularioWorking() {
  var form = FormApp.create('Working — Cuéntanos tu experiencia como freelancer');
  form.setDescription('Estamos creando Working, una plataforma para que estudiantes y recién egresados consigan sus primeros trabajos freelance con el pago garantizado. Responder toma 2 minutos. ¡Gracias!');

  form.setCollectEmail(true);

  form.addTextItem().setTitle('¿Cuál es tu nombre?').setRequired(true);

  var edad = form.addTextItem().setTitle('¿Cuántos años tienes?').setRequired(true);
  edad.setValidation(FormApp.createTextValidation().requireNumber().build());

  form.addMultipleChoiceItem()
    .setTitle('¿Cuál es tu situación hoy?')
    .setChoiceValues(['Estudiante universitario', 'Recién egresado (menos de 2 años)', 'Ya trabajo como freelancer', 'Busco mi primer trabajo/cliente'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Alguna vez ofreciste un servicio freelance (diseño, programación, redacción, marketing, etc.)?')
    .setChoiceValues(['Sí, varias veces', 'Sí, una o dos veces', 'Nunca, pero me gustaría', 'No me interesa'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Te pasó alguna vez que te pagaran tarde, menos de lo acordado, o que no te pagaran?')
    .setChoiceValues(['Sí, me quedaron debiendo / no me pagaron', 'Sí, me pagaron tarde o menos de lo acordado', 'No, siempre me pagaron bien', 'Nunca he cobrado por un trabajo'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('¿Qué es lo más difícil para ti al conseguir trabajo freelance? (elige hasta 2)')
    .setChoiceValues(['Que no tengo experiencia/portafolio que mostrar', 'Que no confían en mí por ser nuevo', 'Asegurarme de que me van a pagar', 'Cobrar en dólares desde Bolivia (comisiones, conversión)', 'Encontrar clientes'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Si una plataforma retuviera el pago del cliente desde el inicio y te lo liberara por cada entrega aprobada, ¿la usarías?')
    .setChoiceValues(['Sí, me daría mucha más seguridad', 'Tal vez, dependería de la comisión', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Te interesaría cobrar tus trabajos en dólares digitales (USDC), sin comisiones altas y al instante?')
    .setChoiceValues(['Sí, me interesa mucho', 'Me interesa pero no sé cómo funciona', 'No / prefiero bolivianos'])
    .setRequired(true);

  form.addTextItem()
    .setTitle('Si lanzamos un piloto, ¿quieres ser de los primeros? Déjanos tu WhatsApp (opcional).')
    .setRequired(false);

  Logger.log('Responder: ' + form.getPublishedUrl());
  Logger.log('Editar: ' + form.getEditUrl());
}
