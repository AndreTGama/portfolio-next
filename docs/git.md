# Git Convention

Este projeto segue o padrão **Conventional Commits** para manter o histórico organizado, facilitar revisões e tornar as mudanças mais claras.

## Estrutura

```text
<tipo>: <descrição>
```

Exemplos:

```text
feat: add language switcher

fix: correct navbar layout on mobile

refactor: extract hero section into component

docs: add git conventions

chore: configure docker development environment
```

---

# Tipos de commit

## feat

Utilizado quando uma **nova funcionalidade** é adicionada ao projeto.

Exemplos:

```text
feat: add dark mode support

feat: create responsive navbar

feat: implement language switcher
```

---

## fix

Utilizado para **correção de bugs**.

Exemplos:

```text
fix: correct mobile navigation

fix: resolve hydration warning
```

---

## refactor

Alteração na estrutura do código **sem modificar o comportamento da aplicação**.

Exemplos:

```text
refactor: extract container component

refactor: simplify navigation logic
```

---

## docs

Mudanças relacionadas à documentação.

Exemplos:

```text
docs: add architecture decisions

docs: document docker setup
```

---

## style

Mudanças apenas de formatação ou organização do código.

Exemplos:

```text
style: format code with prettier

style: organize imports
```

---

## test

Criação ou alteração de testes.

Exemplos:

```text
test: add navbar component tests
```

---

## chore

Configurações do projeto, dependências e infraestrutura.

Exemplos:

```text
chore: configure eslint

chore: update docker configuration

chore: install next-intl
```

---

## perf

Melhorias de performance.

Exemplos:

```text
perf: optimize image loading
```

---

## revert

Reverte um commit anterior.

Exemplo:

```text
revert: remove deprecated language selector
```

---

# Convenções adotadas

- Mensagens sempre em **inglês**.
- Utilizar verbo no infinitivo (`add`, `create`, `remove`, `update`, `configure`, etc.).
- Cada commit deve representar **uma única intenção**.
- Evitar commits muito grandes.
- Se um commit precisar usar "e" na descrição, provavelmente ele deve ser dividido em dois.

---

# Exemplos de um bom histórico

```text
chore: install next-intl

chore: configure internationalization

feat: create language switcher

feat: implement dark mode

feat: create navigation bar

feat: add hero section

refactor: extract button component

fix: correct theme persistence

docs: document project architecture
```

---

# Objetivo

Este padrão foi adotado para:

- manter um histórico limpo;
- facilitar revisões de código;
- tornar o projeto mais profissional;
- servir como documentação da evolução da aplicação.