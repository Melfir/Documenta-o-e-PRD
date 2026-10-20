// Dados pré-configurados dos Casos de Estudo
const PRD_DATASETS = {
  taskmaster: {
    title: "TaskMaster Pro",
    subtitle: "Do Bloco de Notas à IDE: Plataforma Ágil de Gestão com Sincronização em Tempo Real",
    version: "v1.2",
    status: "Aprovado p/ Sprint",
    author: "Equipe de Engenharia de Produto",
    updatedAt: "2026-10-19",
    problem: "Equipes e desenvolvedores perdem até 35% do tempo útil gerenciando tarefas em ferramentas monolíticas e burocráticas. Anotações feitas em papel durante brainstormings frequentemente se perdem por falta de uma ponte digital fluida e rastreável.",
    valueProposition: "Combina a velocidade instantânea de rascunhos com a inteligência de dashboards modernos, filtros preditivos e integração direta com o ambiente do desenvolvedor.",
    kpis: [
      { metric: "Tempo médio para 1ª tarefa", baseline: "3.5 min", target: "< 20 seg", timeline: "30 dias pós-lançamento" },
      { metric: "Índice de Retenção D14", baseline: "22%", target: "> 48%", timeline: "Trimestral" },
      { metric: "NPS do Usuário", baseline: "41", target: "> 65", timeline: "Contínuo" }
    ],
    personas: [
      {
        name: "Lucas Santana (Tech Lead & Dev)",
        role: "Desenvolvedor Sênior / Engenheiro de Software",
        needs: "Gosta de rascunhar wireframes rápidos no bloco de notas físico e quer transformar esses requisitos em endpoints e telas sem burocracia.",
        frustrations: "Formulários cheios de campos obrigatórios desnecessários e ferramentas que travam ou exigem 10 cliques para criar um card."
      }
    ],
    requirements: [
      { id: "RF-01", name: "Autenticação e Login Rápido", priority: "must", desc: "Suporte a login por e-mail/senha e OAuth (GitHub/Google) com persistência segura de sessão.", bdd: "Dado usuário credenciado, quando submeter login, deve ser redirecionado ao Dashboard em < 1s." },
      { id: "RF-02", name: "Project Dashboard Interativo", priority: "must", desc: "Grid de cartões com status de projetos, barra de pesquisa em tempo real e atalho rápido de criação.", bdd: "Dado que digito texto na busca, a lista deve filtrar os cards em tempo real (< 100ms)." },
      { id: "RF-03", name: "Edição e Gestão de Tarefas (Cards)", priority: "must", desc: "Modal ou inline edit para alterar título, prioridade, prazos e membros designados.", bdd: "Ao clicar em Edit Button, abrir visualização de edição com salvamento em clique único." },
      { id: "RF-04", name: "Menu Lateral Retrátil com Atalhos", priority: "should", desc: "Barra lateral de navegação colapsável para alternar entre Projetos, Busca e Configurações.", bdd: "Deve permitir recolher menu para ganhar 100% de foco no conteúdo do card." },
      { id: "RF-05", name: "Tela de Configurações & Temas", priority: "should", desc: "Personalização de tema Dark/Light, preferências de notificações e chave de API.", bdd: "Mudança de tema deve refletir instantaneamente sem recarregar página." },
      { id: "RF-06", name: "Exportação Direta para Markdown / Git", priority: "could", desc: "Exportar as tarefas e PRD diretamente para arquivos .md no repositório GitHub.", bdd: "Gera arquivo estruturado compatível com GitHub Flavored Markdown." }
    ],
    rnfs: [
      { category: "Performance", id: "RNF-01", spec: "Tempo de carregamento inicial (FCP)", criteria: "< 0.8s em conexões 4G" },
      { category: "Segurança", id: "RNF-02", spec: "Criptografia ponta a ponta e tokens JWT", criteria: "Armazenamento em cookies HttpOnly com SameSite" },
      { category: "Acessibilidade", id: "RNF-03", spec: "Navegação por teclado e leitor de tela", criteria: "Total conformidade com WCAG 2.1 nível AA" },
      { category: "Offline", id: "RNF-04", spec: "Resiliência a quedas de rede", criteria: "Armazenamento local em IndexedDB com sync automático" }
    ],
    wireframes: [
      { name: "Home Screen", desc: "Menu principal com cabeçalho de busca e lista de acessos rápidos desenhados no caderno.", elements: ["Header com busca", "Menu vertical", "Cards em destaque", "Link para login"] },
      { name: "Login Screen", desc: "Tela de autenticação com campos de email, senha e botão 'Edit / Sign in'.", elements: ["Logo do TaskMaster", "Formulário de credenciais", "Ação rápida de login"] },
      { name: "Project Dashboard", desc: "Visão central com Search Bar no topo, grid de 4 cartões e botão de adicionar na base.", elements: ["Busca instantânea", "Grid 2x2 responsivo", "Cards de tarefas", "Botão de ação"] },
      { name: "Settings Screen", desc: "Tela de preferências do usuário com botão voltar, menu e toggles.", elements: ["Botão de retorno (<-)", "Opções de Menu", "Seletor Dark/Light Mode"] }
    ]
  },
  ecommerce: {
    title: "Checkout 1-Clique Express",
    subtitle: "Módulo de Finalização de Compra de Alta Conversão para E-Commerce",
    version: "v2.0",
    status: "Em Homologação",
    author: "Product Growth Team",
    updatedAt: "2026-10-18",
    problem: "O abandono de carrinho na etapa de pagamento atinge 72% devido ao excesso de etapas e formulários redundantes.",
    valueProposition: "Fluxo de checkout transparente em etapa única com PIX instantâneo e preenchimento de endereço inteligente.",
    kpis: [
      { metric: "Taxa de Abandono de Checkout", baseline: "72%", target: "< 45%", timeline: "60 dias" },
      { metric: "Tempo de Finalização", baseline: "180s", target: "< 35s", timeline: "Imediato" }
    ],
    personas: [
      {
        name: "Camila Rocha (Mobile Shopper)",
        role: "Consumidora via Smartphone",
        needs: "Pagar rápido com PIX ou Biometria sem precisar preencher dados cadastrais extensos.",
        frustrations: "Telas que dão reload e perdem os dados já digitados."
      }
    ],
    requirements: [
      { id: "RF-01", name: "Checkout Transparente One-Page", priority: "must", desc: "Todos os dados de envio e pagamento na mesma página sem redirecionamentos externos.", bdd: "O usuário visualiza resumo do pedido e métodos de pagamento simultaneamente." },
      { id: "RF-02", name: "Geração Dinâmica de QR Code PIX", priority: "must", desc: "Exibir QR Code e botão 'Copia e Cola' com contagem regressiva de expiração.", bdd: "PIX gerado em menos de 500ms com confirmação por WebSocket." },
      { id: "RF-03", name: "Autopreenchimento Inteligente por CEP", priority: "should", desc: "Preenchimento de rua, bairro e cidade a partir de consulta assíncrona ao CEP.", bdd: "Ao digitar 8 dígitos do CEP, endereço preenchido em < 300ms." }
    ],
    rnfs: [
      { category: "Segurança", id: "RNF-01", spec: "Conformidade PCI-DSS", criteria: "Tokens de cartão não trafegam desprotegidos" },
      { category: "Disponibilidade", id: "RNF-02", spec: "Uptime da API de Pagamento", criteria: "99.99% com redundância de adquirentes" }
    ],
    wireframes: [
      { name: "Single Page Checkout", desc: "Layout em duas colunas: formulário minimalista à esquerda e resumo com gatilho à direita.", elements: ["Resumo do Carrinho", "Formulário de Entrega", "Opção PIX / Cartão", "Botão Finalizar"] }
    ]
  }
};

let currentDatasetKey = "taskmaster";
let activeData = JSON.parse(JSON.stringify(PRD_DATASETS[currentDatasetKey]));

// Renderizar o Documento na Tela
function renderPRDView() {
  // Cabeçalho
  document.getElementById("view-title").textContent = activeData.title;
  document.getElementById("view-subtitle").textContent = activeData.subtitle;
  document.getElementById("view-version").textContent = activeData.version;
  document.getElementById("view-status").textContent = activeData.status;
  document.getElementById("view-author").textContent = activeData.author;
  document.getElementById("view-updated").textContent = activeData.updatedAt;

  // 1. Visão Geral
  document.getElementById("view-problem").textContent = activeData.problem;
  document.getElementById("view-value").textContent = activeData.valueProposition;

  // KPIs
  const kpiTableBody = document.getElementById("kpi-table-body");
  kpiTableBody.innerHTML = activeData.kpis.map(kpi => `
    <tr>
      <td><strong>${escapeHtml(kpi.metric)}</strong></td>
      <td>${escapeHtml(kpi.baseline)}</td>
      <td><span style="color: var(--accent-primary); font-weight:700;">${escapeHtml(kpi.target)}</span></td>
      <td>${escapeHtml(kpi.timeline)}</td>
    </tr>
  `).join("");

  // Personas
  const personasContainer = document.getElementById("personas-container");
  personasContainer.innerHTML = activeData.personas.map(p => `
    <div style="background: var(--bg-tertiary); padding: 1.25rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-primary); margin-bottom: 1rem;">
      <h4 style="color: var(--text-main); margin-bottom: 0.25rem;">${escapeHtml(p.name)}</h4>
      <p style="font-size: 0.85rem; color: var(--accent-primary); margin-bottom: 0.75rem;">${escapeHtml(p.role)}</p>
      <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>Necessidades:</strong> ${escapeHtml(p.needs)}</p>
      <p style="font-size: 0.9rem; color: var(--text-muted);"><strong>Frustrações:</strong> ${escapeHtml(p.frustrations)}</p>
    </div>
  `).join("");

  // Requisitos Funcionais
  renderRequirementsTable(activeData.requirements);

  // Requisitos Não Funcionais
  const rnfTableBody = document.getElementById("rnf-table-body");
  rnfTableBody.innerHTML = activeData.rnfs.map(r => `
    <tr>
      <td><span class="badge badge-version">${escapeHtml(r.category)}</span></td>
      <td><strong>${escapeHtml(r.id)}</strong></td>
      <td>${escapeHtml(r.spec)}</td>
      <td>${escapeHtml(r.criteria)}</td>
    </tr>
  `).join("");

  // Wireframes / Telas
  const wireframesContainer = document.getElementById("wireframes-container");
  wireframesContainer.innerHTML = activeData.wireframes.map(w => `
    <div class="wireframe-card">
      <div class="wireframe-header">
        <span>${escapeHtml(w.name)}</span>
        <span style="font-size: 0.75rem; color: var(--accent-primary);">Wireframe v1.2</span>
      </div>
      <p style="font-size: 0.82rem; color: var(--text-muted);">${escapeHtml(w.desc)}</p>
      <div class="mockup-screen">
        <div style="font-weight:700; color: var(--accent-primary); margin-bottom: 4px;">// ${escapeHtml(w.name)}</div>
        <div class="mock-bar medium"></div>
        <div class="mock-bar short"></div>
        <ul style="list-style-type: none; padding-left: 0; margin-top: 6px;">
          ${w.elements.map(e => `<li style="color: var(--text-muted);">• ${escapeHtml(e)}</li>`).join("")}
        </ul>
        <div class="mock-btn">Interagir</div>
      </div>
    </div>
  `).join("");
}

// Render da Tabela de Requisitos com Filtro
function renderRequirementsTable(reqs) {
  const reqTableBody = document.getElementById("req-table-body");
  reqTableBody.innerHTML = reqs.map(req => `
    <tr>
      <td><strong>${escapeHtml(req.id)}</strong></td>
      <td><span class="moscow-tag ${req.priority}">${req.priority.toUpperCase()}</span></td>
      <td>
        <strong>${escapeHtml(req.name)}</strong>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem;">${escapeHtml(req.desc)}</p>
      </td>
      <td style="font-family: var(--font-mono); font-size: 0.8rem; background: rgba(0,0,0,0.15);">${escapeHtml(req.bdd)}</td>
    </tr>
  `).join("");
}

// Preencher o Editor com os dados atuais
function populateEditorForm() {
  document.getElementById("edit-title").value = activeData.title;
  document.getElementById("edit-subtitle").value = activeData.subtitle;
  document.getElementById("edit-version").value = activeData.version;
  document.getElementById("edit-status").value = activeData.status;
  document.getElementById("edit-author").value = activeData.author;
  document.getElementById("edit-problem").value = activeData.problem;
  document.getElementById("edit-value").value = activeData.valueProposition;
  document.getElementById("edit-json").value = JSON.stringify(activeData, null, 2);
}

// Salvar dados do editor
function saveEditorChanges() {
  try {
    const rawJson = document.getElementById("edit-json").value;
    const parsed = JSON.parse(rawJson);
    
    // Atualizar dados com o JSON validado
    activeData = parsed;
    activeData.title = document.getElementById("edit-title").value || activeData.title;
    activeData.subtitle = document.getElementById("edit-subtitle").value || activeData.subtitle;
    activeData.version = document.getElementById("edit-version").value || activeData.version;
    activeData.status = document.getElementById("edit-status").value || activeData.status;
    activeData.author = document.getElementById("edit-author").value || activeData.author;
    activeData.problem = document.getElementById("edit-problem").value || activeData.problem;
    activeData.valueProposition = document.getElementById("edit-value").value || activeData.valueProposition;

    renderPRDView();
    showToast("✅ PRD atualizado com sucesso!");
    switchTab("view");
  } catch (err) {
    alert("Erro ao validar o JSON: " + err.message);
  }
}

// Gerar e Exportar Markdown
function generateMarkdown() {
  return `# ${activeData.title}
> ${activeData.subtitle}

**Versão:** ${activeData.version} | **Status:** ${activeData.status} | **Autor:** ${activeData.author} | **Data:** ${activeData.updatedAt}

---

## 1. Visão Geral & Oportunidade
### Declaração do Problema
${activeData.problem}

### Proposta de Valor
${activeData.valueProposition}

### Objetivos e Métricas (KPIs)
| Métrica | Situação Atual | Meta | Prazo |
| :--- | :--- | :--- | :--- |
${activeData.kpis.map(k => `| ${k.metric} | ${k.baseline} | ${k.target} | ${k.timeline} |`).join("\n")}

---

## 2. Requisitos Funcionais (Priorização MoSCoW)
| ID | Prioridade | Requisito | Critério de Aceite BDD |
| :--- | :--- | :--- | :--- |
${activeData.requirements.map(r => `| **${r.id}** | ${r.priority.toUpperCase()} | **${r.name}** - ${r.desc} | \`${r.bdd}\` |`).join("\n")}

---

## 3. Requisitos Não Funcionais (RNF)
| Categoria | ID | Requisito | Critério de Teste |
| :--- | :--- | :--- | :--- |
${activeData.rnfs.map(r => `| ${r.category} | ${r.id} | ${r.spec} | ${r.criteria} |`).join("\n")}

---

## 4. Arquitetura de Telas & Wireframes
${activeData.wireframes.map(w => `### ${w.name}\n- **Descrição:** ${w.desc}\n- **Componentes:** ${w.elements.join(", ")}`).join("\n\n")}
`;
}

// Download de arquivo
function downloadFile(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
}

// Utilitários e Notificações
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function switchTab(tabId) {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  document.querySelectorAll(".tab-content").forEach(pane => {
    pane.classList.toggle("active", pane.id === `tab-${tabId}`);
  });
  if (tabId === "edit") {
    populateEditorForm();
  }
}

// Configuração de Eventos
document.addEventListener("DOMContentLoaded", () => {
  renderPRDView();

  // Seletor de Dataset
  document.getElementById("dataset-selector").addEventListener("change", (e) => {
    currentDatasetKey = e.target.value;
    activeData = JSON.parse(JSON.stringify(PRD_DATASETS[currentDatasetKey]));
    renderPRDView();
    populateEditorForm();
    showToast(`Carregado: ${activeData.title}`);
  });

  // Filtro MoSCoW
  document.getElementById("moscow-filter").addEventListener("change", (e) => {
    const val = e.target.value;
    if (val === "all") {
      renderRequirementsTable(activeData.requirements);
    } else {
      const filtered = activeData.requirements.filter(r => r.priority === val);
      renderRequirementsTable(filtered);
    }
  });

  // Alternar Abas
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  // Alternar Tema Light/Dark
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    themeToggle.textContent = newTheme === "light" ? "🌙 Modo Escuro" : "☀️ Modo Claro";
  });

  // Exportar Markdown
  document.getElementById("btn-export-md").addEventListener("click", () => {
    const md = generateMarkdown();
    downloadFile(md, `${activeData.title.toLowerCase().replace(/\s+/g, "-")}-prd.md`, "text/markdown");
    showToast("📥 Arquivo Markdown baixado!");
  });

  // Exportar JSON
  document.getElementById("btn-export-json").addEventListener("click", () => {
    const jsonStr = JSON.stringify(activeData, null, 2);
    downloadFile(jsonStr, `${activeData.title.toLowerCase().replace(/\s+/g, "-")}-prd.json`, "application/json");
    showToast("📥 Arquivo JSON baixado!");
  });

  // Copiar Markdown
  document.getElementById("btn-copy-md").addEventListener("click", () => {
    const md = generateMarkdown();
    navigator.clipboard.writeText(md).then(() => {
      showToast("📋 Markdown copiado para a Área de Transferência!");
    });
  });

  // Imprimir / Salvar PDF
  document.getElementById("btn-print-doc").addEventListener("click", () => {
    window.print();
  });

  // Salvar no Editor
  document.getElementById("btn-save-editor").addEventListener("click", saveEditorChanges);
});
