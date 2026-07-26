# Troubleshooting

## Turbopack

### Error

```
Input image not found
```

### Cause

Bug interno do Turbopack.

### Solution

Execute:

```bash
pnpm dev --webpack
```

ou limpe a pasta `.next`.

---

## pnpm approve-builds

### Error

```
There are no packages awaiting approval
```

### Cause

Os pacotes já foram marcados anteriormente.

### Solution

Verifique o arquivo:

pnpm-workspace.yaml

## Next.js 16

Ao seguir tutoriais antigos, atenção:

- O antigo `middleware.ts` foi substituído por `proxy.ts`.
- Em projetos que utilizam `src`, o arquivo deve ficar em `src/proxy.ts`.
- Caso o arquivo esteja no local errado, ele simplesmente não será executado, sem necessariamente gerar erros claros.