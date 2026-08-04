# Convenções de Nomenclatura

## Objetivo

Manter um padrão consistente para nomes de arquivos, pastas, componentes e demais estruturas do projeto.

---

# Componentes React

**Convenção:** PascalCase

```text
Button.tsx
Navbar.tsx
Footer.tsx
Hero.tsx
LanguageSwitcher.tsx
ThemeToggle.tsx
ProjectCard.tsx
```

Caso o componente possua vários arquivos:

```text
Button/
├── Button.tsx
└── index.ts
```

---

# Sections

Representam grandes blocos da página.

**Convenção:** PascalCase

```text
Hero/
About/
Projects/
Experience/
Contact/
Blog/
```

---

# Layout

Componentes responsáveis pela estrutura da aplicação.

**Convenção:** PascalCase

```text
Navbar/
Footer/
Sidebar/
```

---

# Hooks

**Convenção:** camelCase iniciando com `use`.

```text
useTheme.ts
useLocale.ts
useScroll.ts
useMediaQuery.ts
```

---

# Utilitários

Funções auxiliares.

**Convenção:** camelCase

```text
formatDate.ts
capitalize.ts
slugify.ts
cn.ts
```

---

# Configurações

Arquivos de configuração.

**Convenção:** camelCase

```text
navigation.ts
site.ts
social.ts
metadata.ts
```

---

# Tipos

Arquivos contendo tipos e interfaces.

**Convenção:** camelCase

```text
language.ts
navigation.ts
project.ts
user.ts
```

---

# Constantes

Arquivos em camelCase.

```text
navigation.ts
language.ts
```

Constantes exportadas em UPPER_SNAKE_CASE.

```ts
export const LANGUAGES = ['en', 'pt'];

export const DEFAULT_LANGUAGE = 'en';

export const NAVIGATION = [...];
```

---

# Assets

Imagens, ícones e arquivos estáticos.

**Convenção:** kebab-case

```text
profile-photo.jpg
hero-image.webp
logo.svg
conference-speaker.jpg
```

---

# CSS

Caso seja utilizado CSS Modules.

```text
Button.module.css
Hero.module.css
```

---

# Rotas

Pastas do App Router.

**Convenção:** minúsculas.

```text
about/
blog/
contact/
projects/
```

Rotas dinâmicas.

```text
[locale]/
[slug]/
[id]/
```

---

# Imports

Utilizar sempre o alias `@/`.

```ts
import Button from "@/components/ui/Button";
import Navbar from "@/layout/Navbar";
```

Evitar:

```ts
import Button from "../../../../components/ui/Button";
```

---

# Resumo

| Estrutura | Convenção | Exemplo |
|-----------|-----------|----------|
| Componentes | PascalCase | `Button.tsx` |
| Pastas de Componentes | PascalCase | `Button/` |
| Sections | PascalCase | `Hero/` |
| Layout | PascalCase | `Navbar/` |
| Hooks | camelCase | `useTheme.ts` |
| Utilitários | camelCase | `formatDate.ts` |
| Config | camelCase | `navigation.ts` |
| Types | camelCase | `language.ts` |
| Constantes | UPPER_SNAKE_CASE | `LANGUAGES` |
| Assets | kebab-case | `hero-image.webp` |
| Rotas | lowercase | `projects/` |
| Rotas dinâmicas | `[param]` | `[locale]/` |