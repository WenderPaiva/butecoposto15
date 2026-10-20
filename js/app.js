/**
 * CONTROLADOR VANILLA JS — ARQUITETURA EDITORIAL & MINIMALISMO CONTEMPORÂNEO
 * Direção de Arte & Concepção Visual: Wender Paiva
 * 100% JavaScript Puro • Sem Frameworks
 */

(function () {
  const { categories, filterTags, menuItems } = window.BUTECO_DATA;
  const { formatBRL, getIcon, renderWatermark, renderDishCard, renderDishModal } =
    window.BUTECO_COMPONENTS;

  const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V"];

  const state = {
    theme: "charcoal", // "charcoal" (Carvão & Pedra) ou "linen" (Papel & Linho)
    activeCategory: "todos",
    searchQuery: "",
    activeFilters: [],
    favorites: ["aperitivo-monaco", "chapa-picanha-maturatta"],
    orderItems: [
      { item: menuItems[0], quantity: 1 },
      { item: menuItems[5], quantity: 1 },
      { item: menuItems[11], quantity: 2 },
    ],
    selectedDishId: null,
    isDrawerOpen: false,
    drawerTab: "comanda",
    tableNumber: "15",
    customerNotes: "",
    includeService: true,
    toastMessage: null,
    toastTimer: null,
  };

  function showToast(msg) {
    state.toastMessage = msg;
    renderToast();
    if (state.toastTimer) clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => {
      state.toastMessage = null;
      renderToast();
    }, 2400);
  }

  function getFilteredItems() {
    const q = state.searchQuery.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesCategory =
        state.activeCategory === "todos" || item.category === state.activeCategory;
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(q)) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(q));
      const matchesFilters =
        state.activeFilters.length === 0 ||
        state.activeFilters.every((f) => item.filters.includes(f));
      return matchesCategory && matchesSearch && matchesFilters;
    });
  }

  function getCategoryCounts() {
    const counts = {
      todos: 0,
      petiscos: 0,
      chapas: 0,
      milanesas: 0,
      coquetelaria: 0,
    };
    const q = state.searchQuery.trim().toLowerCase();
    menuItems.forEach((item) => {
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(q));
      const matchesFilters =
        state.activeFilters.length === 0 ||
        state.activeFilters.every((f) => item.filters.includes(f));
      if (matchesSearch && matchesFilters) {
        counts.todos += 1;
        counts[item.category] += 1;
      }
    });
    return counts;
  }

  function getTotalOrderCount() {
    return state.orderItems.reduce((acc, curr) => acc + curr.quantity, 0);
  }

  function getSubtotal() {
    return state.orderItems.reduce(
      (acc, curr) => acc + curr.item.price * curr.quantity,
      0
    );
  }

  // ==========================================
  // RENDERIZAÇÃO DAS SEÇÕES DA INTERFACE
  // ==========================================
  function renderHeaderStatus() {
    const favCountEl = document.getElementById("header-fav-count");
    const orderCountEl = document.getElementById("header-order-count");
    const floatingCountEl = document.getElementById("floating-order-count");
    const floatingSubtotalEl = document.getElementById("floating-order-subtotal");
    const themeLabelEl = document.getElementById("theme-toggle-label");

    const totalOrder = getTotalOrderCount();
    const subtotal = getSubtotal();

    if (favCountEl) favCountEl.textContent = state.favorites.length;
    if (orderCountEl) orderCountEl.textContent = totalOrder;
    if (floatingCountEl) floatingCountEl.textContent = totalOrder;
    if (floatingSubtotalEl) {
      floatingSubtotalEl.textContent =
        totalOrder > 0 ? formatBRL(subtotal) : "R$ 0,00";
    }
    if (themeLabelEl) {
      themeLabelEl.textContent =
        state.theme === "charcoal" ? "Papel & Linho" : "Carvão & Pedra";
    }
  }

  function renderCategoryBar() {
    const container = document.getElementById("category-nav-container");
    if (!container) return;
    const counts = getCategoryCounts();

    container.innerHTML = categories
      .map((cat) => {
        const isActive = state.activeCategory === cat.id;
        const count = counts[cat.id] || 0;
        return `
          <button
            type="button"
            data-action="select-category"
            data-category="${cat.id}"
            class="category-tab ${isActive ? "is-active" : ""}"
          >
            <span>${cat.shortLabel}</span>
            <span class="category-tab-count">[${String(count).padStart(2, "0")}]</span>
          </button>
        `;
      })
      .join("");
  }

  function renderFilterToolbar() {
    const container = document.getElementById("filter-pills-container");
    const countEl = document.getElementById("results-count");
    const clearSearchBtn = document.getElementById("clear-search-btn");

    const filtered = getFilteredItems();
    if (countEl) {
      countEl.textContent = `${String(filtered.length).padStart(2, "0")} REGISTROS EXIBIDOS`;
    }
    if (clearSearchBtn) {
      clearSearchBtn.style.display = state.searchQuery.trim()
        ? "inline-block"
        : "none";
    }

    if (!container) return;
    const hasFilters =
      state.searchQuery.trim().length > 0 || state.activeFilters.length > 0;

    let html = filterTags
      .map((f) => {
        const isSelected = state.activeFilters.includes(f.id);
        return `
          <button
            type="button"
            data-action="toggle-filter"
            data-filter="${f.id}"
            title="${f.description}"
            class="filter-btn ${isSelected ? "is-selected" : ""}"
          >
            <span>${f.label}</span>
          </button>
        `;
      })
      .join("");

    if (hasFilters) {
      html += `
        <button
          type="button"
          data-action="clear-filters"
          class="filter-btn"
          style="color: var(--accent-organic); font-weight: 600;"
        >
          <span>Redefinir Filtros</span>
        </button>
      `;
    }

    container.innerHTML = html;
  }

  function renderMenuSections() {
    const mainEl = document.getElementById("menu-sections-container");
    if (!mainEl) return;

    const filtered = getFilteredItems();
    const visibleCategories = categories.filter(
      (cat) =>
        cat.id !== "todos" &&
        (state.activeCategory === "todos" || cat.id === state.activeCategory)
    );

    const groups = visibleCategories
      .map((cat) => ({
        category: cat,
        items: filtered.filter((item) => item.category === cat.id),
      }))
      .filter((g) => g.items.length > 0);

    if (groups.length === 0) {
      mainEl.innerHTML = `
        <div style="padding: 5rem 2rem; text-align: center; border-bottom: 1px solid var(--border-hairline);">
          <p style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-muted);">
            ÍNDICE VAZIO
          </p>
          <h3 style="font-family: var(--font-serif); font-size: 1.85rem; font-weight: 500; margin-top: 0.5rem;">
            Nenhum prato corresponde aos parâmetros selecionados
          </h3>
          <p style="font-size: 0.88rem; color: var(--ink-secondary); margin-top: 0.5rem;">
            Redefina a busca textual ou os filtros de classificação para visualizar o catálogo completo.
          </p>
          <div style="margin-top: 1.75rem;">
            <button type="button" data-action="clear-filters" class="btn-editorial-primary">
              <span>Restaurar Catálogo Integral</span>
            </button>
          </div>
        </div>
      `;
      return;
    }

    let runningIndex = 1;
    mainEl.innerHTML = groups
      .map(({ category, items }, secIdx) => {
        const roman = ROMAN_NUMERALS[secIdx] || String(secIdx + 1);
        const cardsHtml = items
          .map((dish) => {
            const isSaved = state.favorites.includes(dish.id);
            const ord = state.orderItems.find((o) => o.item.id === dish.id);
            const html = renderDishCard(
              dish,
              isSaved,
              ord ? ord.quantity : 0,
              runningIndex
            );
            runningIndex += 1;
            return html;
          })
          .join("");

        return `
          <section class="menu-section" id="sec-${category.id}">
            <header class="section-header-bar">
              <span class="section-num">SEC. ${roman}</span>
              <div class="section-title-wrap">
                <h2>${category.label}</h2>
                <p>${category.subtitle}</p>
              </div>
              <span class="section-count-label">
                ${String(items.length).padStart(2, "0")} ${
          items.length === 1 ? "ITEM" : "ITENS"
        }
              </span>
            </header>

            <div class="dishes-editorial-grid">
              ${cardsHtml}
            </div>
          </section>
        `;
      })
      .join("");
  }

  function renderModal() {
    const container = document.getElementById("modal-container");
    if (!container) return;
    if (!state.selectedDishId) {
      container.innerHTML = "";
      return;
    }
    const dish = menuItems.find((i) => i.id === state.selectedDishId);
    const isSaved = state.favorites.includes(state.selectedDishId);
    container.innerHTML = renderDishModal(dish, isSaved);
  }

  function renderDrawer() {
    const container = document.getElementById("drawer-container");
    if (!container) return;
    if (!state.isDrawerOpen) {
      container.innerHTML = "";
      return;
    }

    const totalOrderCount = getTotalOrderCount();
    const subtotal = getSubtotal();
    const serviceFee = state.includeService ? subtotal * 0.1 : 0;
    const grandTotal = subtotal + serviceFee;
    const savedDishes = menuItems.filter((i) => state.favorites.includes(i.id));

    let bodyHtml = "";
    if (state.drawerTab === "comanda") {
      if (state.orderItems.length === 0) {
        bodyHtml = `
          <div style="padding: 4rem 1rem; text-align: center;">
            <p style="font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.14em; color: var(--ink-muted); text-transform: uppercase;">
              COMANDA EM BRANCO
            </p>
            <p style="font-family: var(--font-serif); font-size: 1.35rem; margin-top: 0.5rem;">
              Nenhum item selecionado para a mesa
            </p>
            <p style="font-size: 0.82rem; color: var(--ink-secondary); margin-top: 0.4rem;">
              Utilize o botão “Incluir” em qualquer item do cardápio para simular sua comanda.
            </p>
          </div>
        `;
      } else {
        const rows = state.orderItems
          .map(
            ({ item, quantity }) => `
            <div class="drawer-item-row">
              <div>
                <div style="font-family: var(--font-serif); font-size: 1.1rem; font-weight: 600;">
                  ${item.name}
                </div>
                <div style="font-family: var(--font-mono); font-size: 0.74rem; color: var(--ink-secondary); margin-top: 0.2rem;">
                  ${formatBRL(item.price)} un. — Subtotal: ${formatBRL(
              item.price * quantity
            )}
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 0.4rem;">
                <div class="qty-box">
                  <button type="button" data-action="qty-minus" data-id="${
                    item.id
                  }" class="qty-btn" aria-label="Diminuir">−</button>
                  <span class="qty-val">${quantity}</span>
                  <button type="button" data-action="qty-plus" data-id="${
                    item.id
                  }" class="qty-btn" aria-label="Aumentar">+</button>
                </div>
              </div>
            </div>
          `
          )
          .join("");

        bodyHtml = `
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 1rem; border-bottom: 1px solid var(--border-hairline);">
              <label style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-secondary);">
                IDENTIFICAÇÃO DA MESA:
                <input
                  id="drawer-table-input"
                  type="text"
                  value="${state.tableNumber}"
                  style="width: 54px; margin-left: 0.5rem; padding: 0.25rem 0.4rem; border: 1px solid var(--border-strong); font-family: var(--font-mono); text-align: center; color: var(--ink-primary);"
                />
              </label>

              <button
                type="button"
                data-action="clear-order"
                style="font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-organic); text-decoration: underline;"
              >
                Esvaziar
              </button>
            </div>

            <div>${rows}</div>

            <div style="margin-top: 1.25rem;">
              <label style="display: block; font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-muted);">
                Observações de Preparo (Ponto da Carne, Restrições):
              </label>
              <textarea
                id="drawer-notes-input"
                rows="2"
                placeholder="Ex.: Picanha ao ponto para mal; servir entradas antes..."
                style="width: 100%; margin-top: 0.45rem; padding: 0.65rem; border: 1px solid var(--border-hairline); background-color: var(--bg-secondary); font-size: 0.82rem; color: var(--ink-primary); outline: none;"
              >${state.customerNotes}</textarea>
            </div>

            <label style="margin-top: 1rem; padding: 0.75rem; border: 1px solid var(--border-hairline); display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; color: var(--ink-secondary); cursor: pointer;">
              <span>Incluir taxa opcional de serviço de salão (10%)</span>
              <input
                id="drawer-service-checkbox"
                type="checkbox"
                ${state.includeService ? "checked" : ""}
                style="accent-color: var(--accent-organic);"
              />
            </label>
          </div>
        `;
      }
    } else {
      if (savedDishes.length === 0) {
        bodyHtml = `
          <div style="padding: 4rem 1rem; text-align: center;">
            <p style="font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.14em; color: var(--ink-muted); text-transform: uppercase;">
              SELEÇÃO VAZIA
            </p>
            <p style="font-family: var(--font-serif); font-size: 1.35rem; margin-top: 0.5rem;">
              Nenhum prato salvo nos favoritos
            </p>
            <p style="font-size: 0.82rem; color: var(--ink-secondary); margin-top: 0.4rem;">
              Marque o ícone de marcador nos itens do cardápio para guardar sua curadoria pessoal.
            </p>
          </div>
        `;
      } else {
        bodyHtml = savedDishes
          .map(
            (fav) => `
            <div class="drawer-item-row">
              <div>
                <div style="font-family: var(--font-serif); font-size: 1.1rem; font-weight: 600;">
                  ${fav.name}
                </div>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--ink-secondary); margin-top: 0.2rem;">
                  ${formatBRL(fav.price)}
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 0.45rem;">
                <button
                  type="button"
                  data-action="add-to-order"
                  data-id="${fav.id}"
                  class="btn-sheet-link"
                  style="padding: 0.4rem 0.75rem;"
                >
                  + Comanda
                </button>
                <button
                  type="button"
                  data-action="toggle-favorite"
                  data-id="${fav.id}"
                  class="btn-icon-minimal"
                  title="Remover"
                >
                  ${getIcon("Close", 12)}
                </button>
              </div>
            </div>
          `
          )
          .join("");
      }
    }

    const footerHtml =
      state.drawerTab === "comanda" && state.orderItems.length > 0
        ? `
          <div class="drawer-footer">
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--ink-secondary); margin-bottom: 0.35rem;">
              <span>Subtotal</span>
              <span style="font-family: var(--font-mono);">${formatBRL(subtotal)}</span>
            </div>
            ${
              state.includeService
                ? `<div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--ink-secondary); margin-bottom: 0.65rem;">
                    <span>Taxa de Serviço (10%)</span>
                    <span style="font-family: var(--font-mono);">${formatBRL(serviceFee)}</span>
                  </div>`
                : ""
            }
            <div style="display: flex; justify-content: space-between; align-items: baseline; padding-top: 0.65rem; border-top: 1px solid var(--border-hairline); margin-bottom: 1.15rem;">
              <span style="font-family: var(--font-mono); font-size: 0.74rem; letter-spacing: 0.12em; text-transform: uppercase;">
                Total Estimado
              </span>
              <strong style="font-family: var(--font-mono); font-size: 1.1rem;">
                ${formatBRL(grandTotal)}
              </strong>
            </div>

            <div style="display: grid; grid-template-columns: auto 1fr; gap: 0.6rem;">
              <button
                type="button"
                data-action="copy-order"
                class="btn-editorial-secondary"
                style="padding: 0.8rem 1rem;"
              >
                <span>Copiar</span>
              </button>
              <button
                type="button"
                data-action="send-whatsapp"
                class="btn-editorial-primary"
                style="justify-content: center; padding: 0.8rem 1rem;"
              >
                <span>Enviar Comanda via WhatsApp</span>
                ${getIcon("ArrowUpRight", 13)}
              </button>
            </div>
          </div>
        `
        : "";

    container.innerHTML = `
      <div class="editorial-drawer-overlay" data-action="close-drawer-backdrop">
        <aside class="editorial-drawer" role="dialog" aria-label="Comanda da Mesa">
          <div class="drawer-header">
            <div>
              <span style="font-family: var(--font-mono); font-size: 0.66rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent-brass);">
                BOTECO POSTO 15 — ATENDIMENTO
              </span>
              <h3 style="font-family: var(--font-serif); font-size: 1.45rem; font-weight: 500;">
                Caderno de Mesa &amp; Seleção
              </h3>
            </div>
            <button type="button" data-action="close-drawer" class="btn-icon-minimal" aria-label="Fechar">
              ${getIcon("Close", 14)}
            </button>
          </div>

          <div class="drawer-tabs">
            <button
              type="button"
              data-action="drawer-tab"
              data-tab="comanda"
              class="drawer-tab-btn ${state.drawerTab === "comanda" ? "is-active" : ""}"
            >
              Comanda [${String(totalOrderCount).padStart(2, "0")}]
            </button>
            <button
              type="button"
              data-action="drawer-tab"
              data-tab="favoritos"
              class="drawer-tab-btn ${state.drawerTab === "favoritos" ? "is-active" : ""}"
            >
              Salvos [${String(savedDishes.length).padStart(2, "0")}]
            </button>
          </div>

          <div class="drawer-body">
            ${bodyHtml}
          </div>

          ${footerHtml}
        </aside>
      </div>
    `;
  }

  function renderToast() {
    const container = document.getElementById("toast-container");
    if (!container) return;
    if (!state.toastMessage) {
      container.innerHTML = "";
      return;
    }
    container.innerHTML = `
      <div class="editorial-toast">
        ${state.toastMessage}
      </div>
    `;
  }

  function buildWhatsAppMessage() {
    const subtotal = getSubtotal();
    const serviceFee = state.includeService ? subtotal * 0.1 : 0;
    const grandTotal = subtotal + serviceFee;

    const lines = [
      `COMANDA DE MESA — BOTECO POSTO 15`,
      `Mesa: ${state.tableNumber || "Balcão"}`,
      `--------------------------------`,
      ...state.orderItems.map(
        (entry) =>
          `${entry.quantity}x ${entry.item.name} — ${formatBRL(
            entry.item.price * entry.quantity
          )}`
      ),
      `--------------------------------`,
      `Subtotal: ${formatBRL(subtotal)}`,
      state.includeService
        ? `Serviço (10%): ${formatBRL(serviceFee)}`
        : `Serviço: Não incluído`,
      `Total Estimado: ${formatBRL(grandTotal)}`,
    ];

    if (state.customerNotes.trim()) {
      lines.push(`\nObservações: ${state.customerNotes.trim()}`);
    }
    lines.push(`\nDesign & Concepção Visual por Wender Paiva`);
    return lines.join("\n");
  }

  function renderAll() {
    renderHeaderStatus();
    renderCategoryBar();
    renderFilterToolbar();
    renderMenuSections();
    renderModal();
    renderDrawer();
  }

  // ==========================================
  // EVENTOS E MICROINTERAÇÕES ESSENCIAIS
  // ==========================================
  document.addEventListener("DOMContentLoaded", () => {
    const watermarkRoot = document.getElementById("watermark-root");
    if (watermarkRoot) {
      watermarkRoot.innerHTML = renderWatermark();
    }

    renderAll();

    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        renderCategoryBar();
        renderFilterToolbar();
        renderMenuSections();
      });
    }

    document.body.addEventListener("click", (e) => {
      if (e.target.matches('[data-action="close-modal-backdrop"]')) {
        state.selectedDishId = null;
        renderModal();
        return;
      }
      if (e.target.matches('[data-action="close-drawer-backdrop"]')) {
        state.isDrawerOpen = false;
        renderDrawer();
        return;
      }

      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const action = btn.getAttribute("data-action");

      if (action === "scroll-to-menu") {
        const anchor = document.getElementById("menu-anchor");
        if (anchor) anchor.scrollIntoView({ behavior: "smooth" });
      } else if (action === "toggle-theme") {
        state.theme = state.theme === "charcoal" ? "linen" : "charcoal";
        if (state.theme === "linen") {
          document.documentElement.setAttribute("data-theme", "linen");
        } else {
          document.documentElement.removeAttribute("data-theme");
        }
        renderHeaderStatus();
      } else if (action === "select-category") {
        state.activeCategory = btn.getAttribute("data-category");
        renderCategoryBar();
        renderMenuSections();
      } else if (action === "toggle-filter") {
        const tag = btn.getAttribute("data-filter");
        if (state.activeFilters.includes(tag)) {
          state.activeFilters = state.activeFilters.filter((t) => t !== tag);
        } else {
          state.activeFilters.push(tag);
        }
        renderCategoryBar();
        renderFilterToolbar();
        renderMenuSections();
      } else if (action === "clear-filters") {
        state.searchQuery = "";
        state.activeFilters = [];
        state.activeCategory = "todos";
        if (searchInput) searchInput.value = "";
        renderCategoryBar();
        renderFilterToolbar();
        renderMenuSections();
      } else if (action === "clear-search") {
        state.searchQuery = "";
        if (searchInput) {
          searchInput.value = "";
          searchInput.focus();
        }
        renderCategoryBar();
        renderFilterToolbar();
        renderMenuSections();
      } else if (action === "toggle-favorite") {
        const id = btn.getAttribute("data-id");
        const dish = menuItems.find((i) => i.id === id);
        if (state.favorites.includes(id)) {
          state.favorites = state.favorites.filter((f) => f !== id);
          if (dish) showToast(`Removido da seleção: ${dish.name}`);
        } else {
          state.favorites.push(id);
          if (dish) showToast(`Salvo na seleção: ${dish.name}`);
        }
        renderHeaderStatus();
        renderMenuSections();
        renderModal();
        renderDrawer();
      } else if (action === "add-to-order") {
        const id = btn.getAttribute("data-id");
        const dish = menuItems.find((i) => i.id === id);
        if (dish) {
          const existing = state.orderItems.find((o) => o.item.id === id);
          if (existing) existing.quantity += 1;
          else state.orderItems.push({ item: dish, quantity: 1 });
          showToast(`Incluído na comanda: ${dish.name}`);
          renderHeaderStatus();
          renderMenuSections();
          renderDrawer();
        }
      } else if (action === "open-details") {
        state.selectedDishId = btn.getAttribute("data-id");
        renderModal();
      } else if (action === "close-modal") {
        state.selectedDishId = null;
        renderModal();
      } else if (action === "add-from-modal") {
        const id = btn.getAttribute("data-id");
        const dish = menuItems.find((i) => i.id === id);
        if (dish) {
          const existing = state.orderItems.find((o) => o.item.id === id);
          if (existing) existing.quantity += 1;
          else state.orderItems.push({ item: dish, quantity: 1 });
          showToast(`Incluído na comanda: ${dish.name}`);
        }
        state.selectedDishId = null;
        renderHeaderStatus();
        renderMenuSections();
        renderModal();
      } else if (action === "add-pairing") {
        const drinkId = btn.getAttribute("data-drink-id");
        const drink = menuItems.find((i) => i.id === drinkId);
        if (drink) {
          const existing = state.orderItems.find((o) => o.item.id === drinkId);
          if (existing) existing.quantity += 1;
          else state.orderItems.push({ item: drink, quantity: 1 });
          showToast(`Harmonização incluída: ${drink.name}`);
          renderHeaderStatus();
          renderMenuSections();
        }
      } else if (action === "open-drawer") {
        state.drawerTab = btn.getAttribute("data-tab") || "comanda";
        state.isDrawerOpen = true;
        renderDrawer();
      } else if (action === "close-drawer") {
        state.isDrawerOpen = false;
        renderDrawer();
      } else if (action === "drawer-tab") {
        state.drawerTab = btn.getAttribute("data-tab");
        renderDrawer();
      } else if (action === "qty-plus") {
        const id = btn.getAttribute("data-id");
        const entry = state.orderItems.find((o) => o.item.id === id);
        if (entry) entry.quantity += 1;
        renderHeaderStatus();
        renderMenuSections();
        renderDrawer();
      } else if (action === "qty-minus") {
        const id = btn.getAttribute("data-id");
        const entry = state.orderItems.find((o) => o.item.id === id);
        if (entry) {
          entry.quantity -= 1;
          if (entry.quantity <= 0) {
            state.orderItems = state.orderItems.filter((o) => o.item.id !== id);
          }
        }
        renderHeaderStatus();
        renderMenuSections();
        renderDrawer();
      } else if (action === "clear-order") {
        state.orderItems = [];
        renderHeaderStatus();
        renderMenuSections();
        renderDrawer();
      } else if (action === "copy-order") {
        navigator.clipboard.writeText(buildWhatsAppMessage());
        showToast("Comanda copiada para a área de transferência");
      } else if (action === "send-whatsapp") {
        const text = encodeURIComponent(buildWhatsAppMessage());
        window.open(`https://wa.me/5562999999999?text=${text}`, "_blank");
      }
    });

    // Tecla ESC fecha modal ou drawer
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (state.selectedDishId) {
          state.selectedDishId = null;
          renderModal();
        } else if (state.isDrawerOpen) {
          state.isDrawerOpen = false;
          renderDrawer();
        }
      }
    });

    document.body.addEventListener("input", (e) => {
      if (e.target.id === "drawer-table-input") {
        state.tableNumber = e.target.value;
      } else if (e.target.id === "drawer-notes-input") {
        state.customerNotes = e.target.value;
      }
    });

    document.body.addEventListener("change", (e) => {
      if (e.target.id === "drawer-service-checkbox") {
        state.includeService = e.target.checked;
        renderDrawer();
      }
    });
  });
})();
