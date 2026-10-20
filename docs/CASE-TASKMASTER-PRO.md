# 📱 Estudo de Caso Completo: TaskMaster Pro (PRD v1.2)

> **Contexto:** Baseado no levantamento de requisitos dos wireframes concebidos em caderno de anotações e transferidos para o ciclo de desenvolvimento em VS Code e arquitetura moderna.

**Produto:** TaskMaster Pro (Web & Mobile Responsive)  
**Versão do Documento:** 1.2  
**Status:** Pronto para Desenvolvimento (Sprint 1)  
**Target:** Q4 / 2026

---

## 1. Visão do Produto & Problema

### 1.1 Problema
Profissionais autônomos e equipes pequenas perdem em média 35% do tempo útil gerenciando tarefas em ferramentas excessivamente complexas ou em papéis dispersos sem sincronização digital imediata.

### 1.2 Solução Proposta
Uma plataforma minimalista, com experiência idêntica à fluidez de um bloco de notas físico, mas com o poder de dashboards com filtros instantâneos, categorização por projetos e sincronização em tempo real.

### 1.3 Objetivos & Métricas de Sucesso
- **Tempo para criar a 1ª tarefa pós-cadastro:** < 20 segundos.
- **Engajamento diário (DAU/MAU):** > 45%.
- **NPS pós 14 dias:** > 65.

---

## 2. Personas

### Persona Principal: Lucas Santana (Tech Lead & Desenvolvedor)
- **Necessidade:** Quer registrar requisitos rápidos, abrir projetos no laptop enquanto valida anotações em reuniões de design e manter foco nas entregas.
- **Frustração:** Ferramentas pesadas com excesso de formulários obrigatórios que desviam a atenção.

---

## 3. Matriz de Requisitos Funcionais (RF) com Priorização MoSCoW

| ID | Requisito Funcional | Prioridade | Critérios de Aceite BDD |
| :--- | :--- | :--- | :--- |
| **RF-01** | **Autenticação Segura (Login Screen)** | **Must** | Dado que o usuário insere email e senha válidos, deve ser redirecionado para o Project Dashboard em < 1s. |
| **RF-02** | **Project Dashboard com Cards e Busca** | **Must** | O usuário pode pesquisar em tempo real por título de projeto e visualizar status em grid de cards. |
| **RF-03** | **Criação e Edição Dinâmica de Projetos** | **Must** | Ao clicar em "Edit Button" ou "New Card", modal inline permite atualizar título, descrição e tags. |
| **RF-04** | **Navegação com Menu Lateral Retrátil** | **Should** | Menu hambúrguer lateral permitindo alternar entre Home, Menu de Tarefas e Settings. |
| **RF-05** | **Tela de Configurações (Settings Screen)** | **Should** | Permite alterar tema (Dark/Light), preferências de notificações e logout da sessão. |
| **RF-06** | **Exportação para Markdown / JSON** | **Could** | Usuário pode exportar seus dados de projeto em formato Markdown para documentar no Git. |
| **RF-07** | **Modo Offline com Sincronização em Fundo** | **Could** | Armazenamento via LocalStorage/IndexedDB quando a conexão cair. |

---

## 4. Requisitos Não Funcionais (RNF)

1. **RNF-01 (Performance):** First Contentful Paint (FCP) inferior a 0.8s; tamanho do pacote inicial menor que 200KB.
2. **RNF-02 (Responsividade):** Layout otimizado tanto para telas mobile (360px+) quanto monitores widescreen (1920px+).
3. **RNF-03 (Segurança):** Senhas com hash Argon2/Bcrypt e tokens JWT armazenados em cookies HTTP-Only com SameSite=Strict.
4. **RNF-04 (Usabilidade):** Suporte a navegação 100% por atalhos de teclado (`Ctrl+K` para busca global, `N` para nova tarefa).

---

## 5. Mapeamento dos Wireframes do Bloco de Notas

Conforme desenhado no caderno de especificações:

```text
+-------------------------+      +-------------------------+
| [=] TaskMaster App  [Q] |      |  Project Dashboard   [=]|
+-------------------------+      +-------------------------+
| > Menu                  |      | [ Search...          Q ]|
| > Menu                  | ---> | [Card 1]     [Card 2]   |
| > Search                |      | [Card 3]     [Card 4]   |
|                         |      |       [+ Button]        |
+-------------------------+      +-------------------------+
            |                                 |
            v                                 v
+-------------------------+      +-------------------------+
| Login Screen            |      | Settings                |
+-------------------------+      +-------------------------+
| [ Header ]              |      | <- Voltar               |
| [ Email / Password ]    |      | > Menu Geral            |
| [ Login / Edit Button ] |      | > Preferências          |
+-------------------------+      | > Theme (Dark/Light)    |
                                 +-------------------------+
```

### User Flow Formal:
`Home Screen` ──> `Login` ──> `Project Dashboard` ──> `Edit Project / Tasks` ──> `Settings`
