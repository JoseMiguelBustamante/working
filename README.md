# Working

**No preguntamos cuántos años de experiencia tienes. Preguntamos qué sabes hacer.**

Plataforma de freelancing para **estudiantes y recién egresados en Bolivia**, con **pagos protegidos por contrato inteligente en Stellar**.

> Proyecto para la **Ideatón Stellar Bolivia 2026** (BAF × Stellar) · Track 02 · Pagos y remesas.

---

## El problema

La contratación freelance en Bolivia se traba por **falta de confianza en los dos lados**:

- **El estudiante / egresado** no consigue su primer cliente por falta de experiencia demostrable, y cuando trabaja le pagan tarde, menos de lo acordado o nunca. Además, cobrar en dólares desde Bolivia es caro y complicado.
- **La empresa / quien contrata** no confía en pagar por adelantado a alguien sin historial; y si paga al final, el freelancer no confía. **El trato no se cierra.**

> El problema no es la falta de talento. Es la falta de **confianza**.

## La solución

Un marketplace de servicios con **escrow (custodia) por hitos** sobre Stellar:

1. **Publica** — La empresa crea el proyecto dividido en hitos (ej. logo por $150 en 3 entregas).
2. **Deposita** — Paga en **USDC** y el dinero queda **bloqueado en un contrato inteligente**, no en la cuenta de Working.
3. **Entrega y aprueba** — El freelancer entrega cada hito y la empresa lo aprueba.
4. **Cobra** — El pago de ese hito llega a la billetera del freelancer **en segundos**.

Extras que dan seguridad:
- Si el cliente no responde en X días, el hito se **libera automáticamente**.
- Si hay desacuerdo, interviene un **mediador**.
- Cada proyecto terminado queda como **historial verificable** (el portafolio real del freelancer).

## ¿Por qué Stellar (y no otra blockchain)?

| Necesidad de Working | Lo que da Stellar |
|---|---|
| Cobrar en dólares en Bolivia | **USDC nativo** de Circle |
| Liberar hitos pequeños ($10–20) | Comisión **< $0.001** y confirmación en ~5 s |
| Escrow seguro sin construirlo de cero | **Escrow por hitos sobre Soroban** ([Trustless Work](https://docs.trustlesswork.com/trustless-work)) |
| Usuarios que no saben de cripto | Working paga el fee de red; acceso con passkey |
| Llegar a bolivianos a futuro | Red de **anchors** para pasar a moneda local |

> En otras redes tendríamos que programar y auditar nuestro propio escrow, y los usuarios pagarían gas. En Stellar ya existe y cuesta casi nada.

## Modelo de negocio

Ganamos **solo cuando el freelancer cobra**:

- **Comisión al contratante** (~5% en cada pago liberado). **Al estudiante no le cobramos nada.**
- **Visibilidad destacada** para perfiles y vacantes.
- **Convenios con universidades** (bolsa de trabajo y prácticas).

Transparente, sin sorpresas:

```
La empresa paga   $105  =  $100 al freelancer + $5 Working (5%)
El freelancer recibe  $100 completos
```

## Retención (anti-fuga)

Que la gente se quede, aunque se conozcan en la plataforma:

1. **Se vende la protección, no el match** — el escrow se necesita en cada proyecto, no solo el primero.
2. **El freelancer cobra 100% y construye reputación** que solo crece dentro de Working → no quiere irse.
3. **Todo vive adentro** (chat, hitos, entregables, ganancias) → salir da más trabajo.
4. **Comisión decreciente** (solo a la empresa, baja con la lealtad) → irse casi no ahorra.

## Validación

- **Formulario de research:** https://forms.gle/Xth9rKNxUhMc8UxC8
- **Meta:** formulario (volumen) + 5 entrevistas a profundidad (citas reales).
- Hipótesis a validar: disposición de las empresas a pagar por adelantado si hay protección; interés de estudiantes en cobrar en USDC; claridad del flujo de hitos.

## Estructura del repo

```
working/
├── README.md              → este documento
├── deck/Working.pptx      → presentación (8–9 slides) para el pitch
├── docs/
│   ├── idea.md            → resumen de la idea (para mentores/jurado)
│   ├── retencion.md       → plan anti-fuga detallado
│   └── demo-testnet.md    → guión de la demo en testnet (+10%)
├── form/formulario.gs     → Google Apps Script que genera el formulario
└── assets/                → banner y recursos gráficos
```

## Equipo

- [Nombre] — Producto / Negocio
- [Nombre] — Desarrollo
- [Nombre] — Diseño / UX

---

*Ideatón Stellar Bolivia 2026 · Construido sobre Stellar.*
