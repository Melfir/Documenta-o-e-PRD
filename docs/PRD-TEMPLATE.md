# Product Requirements Document (PRD) Template Mestre

**Nome do Produto:** [Nome do Produto / Módulo]  
**Versão:** 1.0.0  
**Data:** [DD/MM/AAAA]  
**Autor / Product Manager:** [Nome do PM / Responsável]  
**Status:** [Rascunho | Em Revisão | Aprovado | Em Desenvolvimento]  
**Links Relevantes:** [Figma/Wireframes] | [Repositório GitHub] | [Jira/Trello]

---

## 1. Visão Geral & Oportunidade de Negócio

### 1.1 Declaração do Problema
*Qual dor real o usuário ou a empresa está enfrentando hoje? Por que as soluções atuais não atendem satisfatoriamente?*
- Problema central: ...
- Impacto atual: ...

### 1.2 Proposta de Valor
*Como este produto resolve essa dor de maneira única e sustentável?*
- ...

### 1.3 Objetivos e Métricas de Sucesso (KPIs & OKRs)
| Métrica (KPI) | Situação Atual (Baseline) | Meta Almejada (Target) | Prazo de Avaliação |
| :--- | :--- | :--- | :--- |
| Taxa de Conversão | X% | Y% | 60 dias pós-lançamento |
| Tempo médio de execução de tarefa | X min | Y min | 30 dias |
| CSAT / NPS | 70 | > 85 | Contínuo |

---

## 2. Personas e Cenários de Uso

### Persona Primária: [Nome da Persona]
- **Perfil:** [Cargo, idade, contexto de trabalho/vida]
- **Objetivos principais:** [O que ela quer conquistar usando o software?]
- **Maiores frustrações:** [O que a impede hoje?]
- **Jornada típica:** [Como ela interage no dia a dia?]

---

## 3. Escopo do Produto

### 3.1 Dentro do Escopo (In-Scope - MVP)
- [ ] Funcionalidade A
- [ ] Funcionalidade B
- [ ] Funcionalidade C

### 3.2 Fora do Escopo (Out-of-Scope - Próximas Fases)
- Funcionalidade X (planejada para v2.0)
- Suporte a dispositivo legado Y

---

## 4. Requisitos Funcionais (RF) com Critérios de Aceite

Use o framework MoSCoW para priorização: **Must-have (M)**, **Should-have (S)**, **Could-have (C)**, **Won't-have (W)**.

### RF-01: [Título do Requisito]
- **Prioridade:** Must-Have
- **Descrição:** Como [tipo de usuário], eu quero [ação], para que [benefício de negócio].
- **Critérios de Aceite (BDD / Gherkin):**
  - **Cenário 1: Sucesso**
    - **Dado que** o usuário está autenticado na plataforma
    - **Quando** preenche os campos obrigatórios e clica em "Salvar"
    - **Então** o registro é persistido e uma notificação de sucesso é exibida em até 1 segundo.
  - **Cenário 2: Validação de campo incorreto**
    - **Dado que** o campo obrigatório "X" está vazio
    - **Quando** o usuário clica em "Salvar"
    - **Então** o formulário exibe uma mensagem de erro inline e impede a submissão.

---

## 5. Requisitos Não Funcionais (RNF)

| Categoria | ID | Especificação / Requisito | Métrica / Critério de Teste |
| :--- | :--- | :--- | :--- |
| **Performance** | RNF-01 | Tempo de resposta de APIs | 95% das requisições < 300ms sob carga normal |
| **Disponibilidade** | RNF-02 | Uptime da aplicação | 99.9% (máximo 43 minutos de indisponibilidade/mês) |
| **Segurança** | RNF-03 | Criptografia de dados sensíveis | Em repouso (AES-256) e em trânsito (TLS 1.3) |
| **Acessibilidade** | RNF-04 | Conformidade de UI | WCAG 2.1 nível AA |
| **Compatibilidade**| RNF-05 | Suporte a navegadores | Chrome, Edge, Safari e Firefox (últimas 2 versões) |

---

## 6. Arquitetura de Telas & User Flows

### 6.1 Mapeamento de Telas
1. **Home / Login Screen:** Autenticação, recuperação de senha e onboard rápido.
2. **Dashboard Principal:** Visão geral de métricas, atalhos rápidos e listas de tarefas/projetos.
3. **Editor / Detalhes de Item:** Formulário com validação e salvamento dinâmico.
4. **Configurações (Settings):** Gestão de perfil, preferências de tema e integrações.

### 6.2 Fluxo Principal de Navegação (Happy Path)
```text
[Início] 
   └──> [Tela de Login / Autenticação]
            └──> [Project Dashboard]
                     ├──> [Criar / Editar Projeto] ──> [Salvar e Retornar]
                     └──> [Configurações do Usuário]
```

---

## 7. Riscos, Dependências e Mitigações

| Risco Identificado | Severidade | Probabilidade | Estratégia de Mitigação |
| :--- | :---: | :---: | :--- |
| Dependência de API externa com limite de cota | Alta | Média | Implementar camada de cache local e fallback gracioso |
| Curva de aprendizado da equipe no novo framework | Média | Alta | Realizar Spike técnico e pair programming no primeiro ciclo |

---

## 8. Cronograma e Plano de Release

- **Sprint 1 (Semana 1-2):** Setup de ambiente, banco de dados e telas de autenticação.
- **Sprint 2 (Semana 3-4):** Dashboard central, listagem e criação básica de recursos.
- **Sprint 3 (Semana 5):** Testes integrados, acessibilidade, auditoria de segurança e beta fechado.
- **Sprint 4 (Semana 6):** Release oficial v1.0.0 em produção.
