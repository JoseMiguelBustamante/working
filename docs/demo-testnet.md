# Guión de la demo en testnet (+10% en la rúbrica)

El reglamento da **+10%** si muestras una transacción funcionando en **testnet** de Stellar. Objetivo: una demo mínima de un escrow por hitos (o, si no se programa, un pago retenido y liberado).

## Opción A — Con Trustless Work (recomendada si alguien programa)

Trustless Work es escrow-as-a-service sobre Soroban. Flujo:

1. Crear cuenta y API key en el dashboard de Trustless Work (testnet).
2. Crear 3 cuentas de testnet: **empresa**, **freelancer**, **plataforma** (fondéalas en Friendbot).
3. Agregar **trustline de USDC** (testnet) a las cuentas que lo necesiten.
4. **Deploy** de un escrow con 2 hitos.
5. **Fund** el escrow (depósito).
6. **Aprobar** el hito 1 y **liberar** fondos.
7. Mostrar la transacción en **stellar.expert (testnet)** → captura + hash.

Docs: https://docs.trustlesswork.com/trustless-work/developer-resources/getting-started

## Opción B — Sin programar (Stellar Lab)

Si nadie del equipo programa, basta con demostrar la mecánica de "retener y liberar":

1. Entra a **Stellar Lab** (modo testnet): https://lab.stellar.org
2. Crea 2 cuentas de testnet (empresa y freelancer) y fondéalas con Friendbot.
3. La empresa crea un **Claimable Balance** a favor del freelancer (el dinero queda "retenido").
4. El freelancer **reclama** el balance (simula la "liberación" del hito).
5. Captura la transacción en **stellar.expert (testnet)**.

Variante: añadir una **condición de tiempo** al claimable balance para ilustrar el "si el cliente no responde en X días, se libera solo".

## Qué mostrar en la slide / video

- Captura de **stellar.expert (testnet)** con la transacción.
- El **hash** o enlace de la transacción.
- Una frase: "Depósito retenido y liberado en testnet; comisión de red < $0.01, confirmación en ~5 s."

## Checklist

- [ ] Cuentas de testnet creadas y fondeadas (Friendbot)
- [ ] Trustline de USDC (si aplica)
- [ ] Depósito / retención hecho
- [ ] Liberación hecha
- [ ] Captura + hash en stellar.expert
