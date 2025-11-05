# 🌎 Plataforma ONG — Cultura & Arte

Projeto desenvolvido como entrega final da disciplina, com foco em acessibilidade, versionamento profissional e implantação em ambiente de produção.  
A plataforma apresenta informações sobre projetos sociais, oficinas culturais e campanhas de arrecadação de forma acessível e otimizada.

---

## 🚀 Funcionalidades Principais

- **Single Page Application (SPA)** com navegação via hash (`#cadastro`, `#projetos`)
- **Formulário de cadastro interativo** com validações de:
  - CPF, e-mail, telefone e idade mínima
  - Preenchimento automático de endereço via **API ViaCEP**
- **Sistema de temas** (modo claro e escuro) com persistência local
- **Navegação por teclado** e suporte completo a **leitores de tela**
- **Design acessível** conforme diretrizes **WCAG 2.1 Nível AA**
- **Conteúdo salvo localmente** com `localStorage`
- **Layout responsivo e otimizado para dispositivos móveis**

---

## 🧱 Estrutura do Projeto
📁 projeto-ong/
├── index.html
├── css/
│ ├── style.css
│ └── style.min.css
├── js/
│ ├── app.js
│ └── app.min.js
├── img/
│ └── (imagens otimizadas)
├── LICENSE
└── README.md


---

## ⚙️ Tecnologias Utilizadas

- **HTML5** — Estrutura semântica e acessível  
- **CSS3** — Estilo responsivo com alto contraste  
- **JavaScript (ES6)** — Lógica de interação e manipulação de DOM  
- **API ViaCEP** — Consulta automática de endereço  
- **LocalStorage** — Armazenamento local de dados  

---

## 🔀 Estratégia de Versionamento — GitFlow

O projeto utiliza **GitFlow** para manter um ciclo de desenvolvimento organizado e rastreável.

### Estrutura de Branches:
- `main` → versão estável e pronta para produção  
- `develop` → branch de desenvolvimento principal  
- `feature/*` → novas funcionalidades  
- `release/*` → preparação para nova versão  
- `hotfix/*` → correções urgentes na versão de produção

### Fluxo de Trabalho:
```bash
# Clonar o repositório
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git

# Criar nova feature
git checkout develop
git checkout -b feature/nome-da-feature

# Fazer commits semânticos
git commit -m "feat: adiciona validação de CPF no formulário"

# Enviar alterações
git push origin feature/nome-da-feature

# Após revisão → merge para develop
# Após testes → merge para main (release)

Versionamento Semântico

Cada versão segue o padrão:

MAJOR.MINOR.PATCH
ex: v1.2.0

♿ Acessibilidade (WCAG 2.1 AA)

Navegação completa por teclado (Tab, Enter, Shift+Tab)

Estrutura semântica com header, nav, main, section, footer

Contraste mínimo de 4.5:1

Compatibilidade com leitores de tela

Modo escuro e versão de alto contraste

Labels, aria-labels e feedbacks visuais/auditivos

🧩 Otimização para Produção

CSS, JavaScript e HTML minificados

Imagens otimizadas (TinyPNG / Squoosh)

Cache local e carregamento rápido

Tamanho de arquivo reduzido (~80% menor)

🧪 Como Executar o Projeto
# Clonar o repositório
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git

# Acessar a pasta
cd projeto-ong

# Abrir o index.html no navegador

📦 Deploy em Produção

O projeto pode ser publicado facilmente em:

GitHub Pages

Vercel

Netlify

Exemplo de publicação via GitHub Pages:

Vá em Settings > Pages

Escolha a branch main

Clique em Save

O site estará disponível em:
https://seuusuario.github.io/nome-do-repositorio

🤝 Contribuição

Siga o fluxo GitFlow e utilize commits semânticos:
feat: nova funcionalidade
fix: correção de bug
docs: atualização de documentação
style: ajustes de estilo (sem impacto funcional)
refactor: melhoria de código

🧾 Licença

Este projeto está licenciado sob os termos da MIT License.
Consulte o arquivo LICENSE
 para mais detalhes.

 👨‍💻 Autor

Johnny Souza
💼 GitHub: https://github.com/JohnnySouza27/instituto-crescer-