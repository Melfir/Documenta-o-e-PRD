# 📋 Do Requisito à Solução: Documentação e PRD (Product Requirements Document)

> Um ecossistema completo e agnóstico dedicado à engenharia de requisitos, elaboração estruturada de PRDs, prototipagem conceitual e ponte contínua entre regras de negócio e engenharia de software.

---

## 🧭 Guia Geral do Framework

Transformar demandas de negócio ou anotações preliminares em especificações claras para times de produto, design e engenharia costuma ser o principal ponto de atrito em projetos de tecnologia.

Este projeto estabelece um fluxo de trabalho em 4 pilares:

```text
  [ 1. Elicitação ] ──► [ 2. Priorização ] ──► [ 3. Especificação ] ──► [ 4. Engenharia ]
  Entrevistas &          Framework MoSCoW       PRD Estruturado        Endpoints REST &
  Wireframes Rápidos     e Matriz RICE          e Critérios BDD        Componentes de UI
```

1. **Elicitação e Descoberta:** Identificação de personas, problemas reais e mapeamento de jornadas de usuário.
2. **Priorização Racional:** Separação objetiva entre o escopo essencial para o MVP (*Must Have*) e itens evolutivos (*Should*, *Could*, *Won't Have*).
3. **Especificação Verificável:** Construção de critérios de aceite no formato BDD/Gherkin (`Dado que... Quando... Então...`) eliminando ambiguidades.
4. **Alinhamento com Engenharia:** Rastreabilidade direta com modelos de dados, endpoints e contratos de interface.

---

## 🏗️ Estrutura do Repositório

```text
.
├── docs/
│   ├── PRD-TEMPLATE.md            # Template mestre e reutilizável para novos produtos
│   ├── CASE-TASKMASTER-PRO.md     # Estudo de caso completo com wireframes e arquitetura
│   └── GUIA-LEVANTAMENTO-REQ.md   # Metodologia de elicitação, User Stories e MoSCoW
├── web/
│   ├── index.html                 # Aplicação Web: PRD Interactive Studio & Viewer
│   ├── style.css                  # Design System moderno, responsivo e com Dark Mode
│   └── app.js                     # Motor interativo de renderização, edição e exportação
└── README.md                      # Este guia geral
```

---

## 🚀 Como Executar e Testar

A aplicação interativa funciona diretamente em qualquer navegador moderno, sem necessidade obrigatória de build ou instalação de dependências pesadas.

### Opção 1: Execução Direta no Navegador
Basta abrir o arquivo `web/index.html` com dois cliques ou através do seu navegador favorito (Chrome, Edge, Firefox ou Safari).

### Opção 2: Servidor HTTP Local (Recomendado)
Para rodar com um servidor local leve:

```bash
# Utilizando Node.js (npx)
npx serve web

# Ou utilizando Python 3
python -m http.server 8080 --directory web
```

Após iniciar, abra o endereço exibido no terminal (ex.: `http://localhost:8080` ou `http://localhost:3000`).

---

## 📚 Documentações e Recursos Inclusos

- **Template Mestre de PRD (`docs/PRD-TEMPLATE.md`)**:
  Estrutura padronizada para novos produtos contendo Sumário Executivo, OKRs/KPIs, Personas, Escopo (In/Out), Requisitos Funcionais (RF) com BDD, Requisitos Não Funcionais (RNF) e Release Plan.

- **Estudo de Caso Prático (`docs/CASE-TASKMASTER-PRO.md`)**:
  Demonstração ponta a ponta da transição de wireframes desenhados à mão (Home, Login, Project Dashboard, Settings) para requisitos funcionais, critérios de teste e arquitetura de software.

- **Guia de Engenharia de Requisitos (`docs/GUIA-LEVANTAMENTO-REQ.md`)**:
  Manual de boas práticas para conduzir dinâmicas com stakeholders, técnicas de priorização e escrita de critérios verificáveis.

---

## ✨ Recursos da Aplicação Web (PRD Studio)

- ⚡ **Alternância Dinâmica de Casos de Estudo**: Carregamento imediato de cenários de exemplo (TaskMaster Pro e Checkout Express).
- 📝 **Editor Integrado em Tempo Real**: Atualização instantânea dos campos do documento e manipulação via JSON estruturado.
- 🎯 **Filtro MoSCoW Interativo**: Visualização seletiva de requisitos por prioridade (*Must*, *Should*, *Could*).
- 🎨 **Visualizador de Telas e Fluxos**: Mapeamento dos wireframes e fluxos de navegação da interface.
- 📤 **Exportação Flexível**:
  - Download direto do PRD em formato **Markdown (`.md`)**.
  - Exportação dos dados estruturados em **JSON (`.json`)**.
  - Cópia com um clique para a área de transferência (Clipboard).
  - Folha de estilo otimizada para **Impressão e PDF**.
- 🌓 **Modo Escuro / Modo Claro**: Alternância de tema com contraste acessível.

---

## 📄 Licença

Este projeto é disponibilizado sob a licença [MIT](https://opensource.org/licenses/MIT), livre para uso, estudo e adaptação em seus próprios projetos e produtos.
