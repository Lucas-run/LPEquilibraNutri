# 🥗 EquilibraNutri+ Landing Page

A Landing Page oficial do **EquilibraNutri+**, a startup maranhense que revoluciona a educação alimentar juvenil com gamificação e inteligência emocional. Este projeto serve como vitrine e apresentação da solução para investidores, escolas e o público em geral.

## 🎯 Objetivo do Projeto

- **Vitrine:** Apresentar de forma clara e profissional a missão, o problema que soluciona e o diferencial do aplicativo EquilibraNutri+.
- **Simplicidade:** Manter uma base de código leve, simples de manter e altamente performática.
- **Escalabilidade:** Estrutura de componentes modularizada para facilitar a adição de novas seções ou funcionalidades futuras.

## 🚀 Tecnologias

Este projeto foi construído com foco na performance e na experiência de desenvolvimento moderna.

| Tecnologia      | Descrição                                                                                                                     |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| **React**       | Biblioteca JavaScript para construção de interfaces de usuário.                                                               |
| **TypeScript**  | Superset tipado do JavaScript, garantindo maior segurança e previsibilidade do código.                                        |
| **Vite**        | Ferramenta de build extremamente rápida para projetos frontend modernos.                                                      |
| **CSS Modules** | Abordagem para modularizar o CSS, garantindo escopo local para os estilos de cada componente e evitando conflitos de classes. |

## 📁 Estrutura de Diretórios

O projeto segue uma organização de componentes modulares, onde cada seção da landing page reside em seu próprio diretório dentro de `src/components`.

```

/src
|
|*/assets             \# Mídia estática (imagens, logos).
|
|*/components         \# Componentes reutilizáveis (seções da LP, botões, etc.)
|   |*/Button         \# Exemplo: Componente atômico para botões.
|   |*/Hero           \# Exemplo: Seção principal (topo) da landing page.
|   |*/Costs          \# Seção de planos/custos.
|   |*/CTA            \# Componente de Call to Action.
|   |*/Features       \# Seção de funcionalidades.
|   |*/Header         \# Componente de navegação.
|   |*/Footer         \# Componente de rodapé.
|   |*/Problem        \# Seção que descreve o problema.
|   |*/TechStack      \# Seção da pilha tecnológica.
|
|*/hooks              \# Hooks personalizados (ex: useRevealOnScroll).
|
|*/styles             \# Estilos globais e arquivos de configuração de CSS.
|
|*/App.tsx            \# Componente raiz que orquestra todas as seções.
|\_/main.tsx           \# Ponto de entrada da aplicação (renderização React).

```

## ⚙️ Instalação e Execução

Para iniciar o projeto em seu ambiente local, siga os passos abaixo:

### 1. Clonar o Repositório

```bash
git clone [https://aws.amazon.com/pt/what-is/repo/](https://aws.amazon.com/pt/what-is/repo/)
cd LPEquilibraNutri
```

### 2\. Instalar as Dependências

Utilize seu gerenciador de pacotes preferido:

```bash
# Com npm
npm install

# Ou com yarn
yarn install

# Ou com pnpm
pnpm install
```

### 3\. Rodar a Aplicação

O Vite iniciará um servidor de desenvolvimento, geralmente em `http://localhost:5173`.

```bash
# Com npm
npm run dev

# Ou com yarn
yarn dev

# Ou com pnpm
pnpm run dev
```

### 4\. Build para Produção

Gera os arquivos estáticos otimizados para deploy na pasta `dist/`.

```bash
# Com npm
npm run build

# Ou com yarn
yarn build

# Ou com pnpm
pnpm run build
```

## 🛠️ Boas Práticas e Padrões

- **Componentização:** Cada seção da landing page é um componente independente (`/components/Hero`, `/components/Features`, etc.), promovendo o reuso e a manutenção isolada.
- **Estilização:** O uso de **CSS Modules** garante que os estilos de um componente (`Features.module.css`) não afetem acidentalmente outros componentes, promovendo isolamento de escopo.
- **Tipagem:** A utilização de **TypeScript** é obrigatória, com tipagens bem definidas (interfaces/types) para as propriedades dos componentes (`props`), tornando o código mais robusto e fácil de refatorar.
- **Performance:** A utilização do **Vite** garante um tempo de build e HMR (Hot Module Replacement) excepcionalmente rápidos. O hook personalizado `useRevealOnScroll` demonstra uma preocupação com a experiência do usuário, adicionando animações sob demanda.

---

## 🤝 Contribuições

Sinta-se à vontade para contribuir\! Para propor mudanças ou melhorias, por favor, abra uma _issue_ ou envie um _Pull Request_ seguindo os padrões de código e a estrutura de diretórios existente.

---

## 📝 Licença

Apache 2.0 License

```

---
```
