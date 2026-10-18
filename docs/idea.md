# Resumen de la idea — Working

## Pitch de 30 segundos

Working es una plataforma de freelancing para **estudiantes y recién egresados en Bolivia** que quieren conseguir sus primeros trabajos. El problema es de **confianza en los dos lados**: el estudiante sin experiencia no consigue cliente y, cuando trabaja, le pagan tarde o no le pagan; y la empresa no quiere pagar por adelantado a alguien sin historial. Lo resolvemos con un **escrow sobre Stellar**: la empresa deposita en **USDC**, el dinero queda **bloqueado en un contrato inteligente** (no en nuestra cuenta) y se **libera por hitos** a medida que el freelancer entrega y la empresa aprueba. Cada proyecto terminado le arma al estudiante un **historial verificable**. Usamos Stellar por el **USDC nativo, comisiones de fracciones de centavo, confirmación en segundos y un escrow por hitos ya hecho (Trustless Work)**.

## Estructurado

- **Problema:** doble falta de confianza entre freelancers novatos y quienes contratan; pagos que no llegan + barreras para cobrar en dólares desde Bolivia.
- **Usuario:** estudiantes/egresados (ofrecen el servicio) y pymes o personas (contratan). Primer segmento: diseño, sistemas y marketing.
- **Solución:** marketplace + escrow por hitos. Depósito en USDC → bloqueo en contrato → liberación por entrega aprobada → historial/reputación.
- **Por qué Stellar:** USDC nativo, fees < $0.01, ~5 s, anchors para moneda local y Trustless Work como escrow listo sobre Soroban.
- **Modelo:** comisión al contratante (~5%, gratis para el estudiante), destacados y convenios con universidades.
- **Validación:** formulario + 5 entrevistas; metas de piloto, registros y usabilidad.
- **Bonus:** demo de transacción en testnet (+10%).

## Preguntas abiertas / riesgos a validar con mentores

1. **Regulación:** ¿el escrow nos obliga a tener licencia financiera en Bolivia, o el modelo no-custodio nos protege? (mayor riesgo).
2. **Cash-out:** ¿qué anchor de Stellar permite hoy pasar de USDC a bolivianos de forma real? (sin confirmar).
3. **Diferenciación:** ¿el enfoque "para principiantes" aguanta frente a Workana/Upwork, o conviene un nicho aún más estrecho (una universidad o un rubro)?
