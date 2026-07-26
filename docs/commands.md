# Commands

## Package Manager

### Install dependencies

```bash
pnpm install
```

Instala todas as dependências do projeto utilizando o `pnpm`.

---

### Add a dependency

```bash
pnpm add package-name
```

Instala uma dependência utilizada em produção.

Exemplo:

```bash
pnpm add next-intl
```

---

### Add a development dependency

```bash
pnpm add -D package-name
```

Instala uma dependência utilizada apenas durante o desenvolvimento.

Exemplo:

```bash
pnpm add -D prettier
```

---

### Start development server

```bash
pnpm dev
```

Inicia o servidor de desenvolvimento utilizando o Turbopack.

---

### Start development server (Webpack)

```bash
pnpm dev --webpack
```

Utiliza o Webpack em vez do Turbopack.

Muito útil para depuração quando o Turbopack apresentar erros internos.

---

### Build

```bash
pnpm build
```

Gera a versão de produção da aplicação.

---

### Start Production

```bash
pnpm start
```

Executa a aplicação já compilada.