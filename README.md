# 📋 Do Requisito à Solução: Documentação e PRD (Product Requirements Document)

> Um projeto e ecossistema dedicado ao levantamento de requisitos, arquitetura de produto, elaboração de PRD interativo e ponte direta entre regras de negócio e engenharia de software.

---

## 🎯 Visão Geral do Projeto

Transformar ideias abstratas ou demandas de negócio em especificações acionáveis para times de engenharia e design costuma ser o maior gargalo no ciclo de desenvolvimento de software.

Este repositório entrega **a solução completa**:
1. **Framework e Templates Oficiais de PRD** (Markdown & Estruturas de Engenharia de Produto).
2. **Estudo de Caso Completo: "TaskMaster Pro"** (inspirado nos wireframes e fluxo de produto do caderno à IDE).
3. **Aplicação Web Interativa (PRD Studio & Viewer)**:
   - Gerador interativo de PRD em tempo real.
   - Matriz de Rastreabilidade de Requisitos (RF, RNF, Regras de Negócio).
   - Diagrama de Fluxo de Usuário (User Flows com visualizador interativo).
   - Exportação direta em Markdown, JSON e modo de Impressão/PDF limpo.
   - Exemplos pré-carregados (TaskMaster Pro e E-Commerce Checkout).

---

## 🏗️ Estrutura do Repositório

```text
DocPRD/
├── docs/
│   ├── PRD-TEMPLATE.md            # Template mestre e reutilizável para novos produtos
│   ├── CASE-TASKMASTER-PRO.md     # PRD completo e detalhado do TaskMaster Pro
│   └── GUIA-LEVANTAMENTO-REQ.md   # Metodologia: Técnicas de elicitação, User Stories e MoSCoW
├── web/
│   ├── index.html                 # Aplicação Web: PRD Interactive Studio & Viewer
│   ├── style.css                  # Design System moderno, dark/light mode e responsivo
│   └── app.js                     # Motor interativo de geração, exportação e preview
├── README.md                      # Documentação central do projeto
```

---

## 🚀 Como Testar Imediatamente

Você pode abrir a aplicação interativa de três maneiras práticas:

### 1. Diretamente no Navegador
Abra o arquivo [`web/index.html`](file:///c:/Users/RHUANDEMELOZANFIR/Documents/Github/DocPRD/web/index.html) em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

### 2. Via Live Server / Mini Servidor HTTP Local
Se preferir rodar via HTTP local:
```bash
# Com Python
python -m http.server 8080 --directory web

# Ou com npx serve
npx -y serve web
```
Depois acesse `http://localhost:8080`.

---

## 💡 Conteúdo dos Guias e Especificações

- **[`docs/PRD-TEMPLATE.md`](file:///c:/Users/RHUANDEMELOZANFIR/Documents/Github/DocPRD/docs/PRD-TEMPLATE.md)**:
  - 1. Sumário Executivo & Objetivos de Negócio (OKRs/KPIs)
  - 2. Personas e Dores do Usuário
  - 3. Escopo (In-Scope & Out-of-Scope)
  - 4. Requisitos Funcionais (RF) com Critérios de Aceite (Gherkin/BDD)
  - 5. Requisitos Não Funcionais (RNF: Performance, Segurança, Acessibilidade)
  - 6. Fluxos de Navegação e Wireframes
  - 7. Riscos, Dependências e Cronograma / Release Plan

- **[`docs/CASE-TASKMASTER-PRO.md`](file:///c:/Users/RHUANDEMELOZANFIR/Documents/Github/DocPRD/docs/CASE-TASKMASTER-PRO.md)**:
  - Estudo de caso real mapeando exatamente as telas do wireframe físico (Home Screen, Project Dashboard, Login/Auth, Settings, User Flow) para endpoints de API, modelos de dados e matriz MoSCoW.

- **[`docs/GUIA-LEVANTAMENTO-REQ.md`](file:///c:/Users/RHUANDEMELOZANFIR/Documents/Github/DocPRD/docs/GUIA-LEVANTAMENTO-REQ.md)**:
  - Metodologia de entrevistas com stakeholders, priorização RICE/MoSCoW e escrita de histórias de usuário eficazes.

---

## ✨ Funcionalidades da Aplicação Web (PRD Studio)

- ⚡ **Alternância Rápida de Casos de Estudo**: Carregue o caso pronto do *TaskMaster Pro* ou *Checkout Express* em 1 clique.
- 📝 **Editor de Seções em Tempo Real**: Altere objetivos, métricas, personas e requisitos com renderização simultânea.
- 📊 **Matriz de Priorização Dinâmica (MoSCoW)**: Visualize e filtre o que é *Must Have*, *Should Have*, *Could Have* e *Won't Have*.
- 🗺️ **Mapeamento de Telas & Wireframes**: Integração dos fluxos desenhados e componentes de UI.
- 💾 **Exportação Pronta para o GitHub / Confluence**:
  - Exportar `.md` completo formatado.
  - Exportar `.json` estruturado.
  - Copiar para a Área de Transferência.
  - Imprimir / Salvar como PDF profissional.

---

Desenvolvido para transformar rascunhos e conversas em software de alta qualidade.
