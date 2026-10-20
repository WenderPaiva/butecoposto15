/**
 * COMPONENTES EDITORIAIS & ÍCONES GEOMÉTRICOS (TRAÇO FINO 1.25PX)
 * Direção de Arte & Concepção Visual: Wender Paiva
 * 100% HTML5 Semântico + CSS3 Puro + Vanilla JS
 */

window.BUTECO_COMPONENTS = (function () {
  function formatBRL(val) {
    return Number(val).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  // Ícones geométricos lineares com stroke-width uniforme de 1.25px (sem ícones de "magic/sparkles")
  function getIcon(name, size = 15) {
    const attrs = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="square" stroke-linejoin="miter"`;
    const icons = {
      Search: `<svg ${attrs}><circle cx="10.5" cy="10.5" r="7.5"/><line x1="16" y1="16" x2="21.5" y2="21.5"/></svg>`,
      Close: `<svg ${attrs}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
      Plus: `<svg ${attrs}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
      Minus: `<svg ${attrs}><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
      ArrowDown: `<svg ${attrs}><line x1="12" y1="4" x2="12" y2="20"/><polyline points="6 14 12 20 18 14"/></svg>`,
      ArrowUpRight: `<svg ${attrs}><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
      Bookmark: `<svg ${attrs}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
      BookmarkFilled: `<svg ${attrs} fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
      Check: `<svg ${attrs}><polyline points="20 6 9 17 4 12"/></svg>`,
      Grid: `<svg ${attrs}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
      WineGlass: `<svg ${attrs}><path d="M8 22h8"/><path d="M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/></svg>`,
      SunMoon: `<svg ${attrs}><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg>`,
    };
    return icons[name] || icons.Grid;
  }

  // 1. Marca d'água tipográfica arquitetônica + Colofão fixo "Wender Paiva"
  function renderWatermark() {
    let rowsHtml = "";
    for (let r = 0; r < 12; r++) {
      let colsHtml = "";
      for (let c = 0; c < 4; c++) {
        colsHtml += `<span>WENDER PAIVA — DIREÇÃO DE ARTE &amp; PROJETO EDITORIAL</span>`;
      }
      rowsHtml += `<div class="watermark-editorial-row">${colsHtml}</div>`;
    }

    return `
      <div aria-hidden="true" class="watermark-editorial-bg">
        <div class="watermark-editorial-track">
          ${rowsHtml}
        </div>
      </div>

      <div class="colophon-badge" title="Assinatura Editorial e Arquitetura de Interface">
        <span>Colofão — Design &amp; Concepção Visual por <strong>Wender Paiva</strong></span>
      </div>
    `;
  }

  // 2. Item Editorial do Cardápio (Proporção 4:5, bordas de 1px, tipografia serifada)
  function renderDishCard(item, isSaved, quantityInOrder, catalogNumber) {
    const numStr = String(catalogNumber).padStart(2, "0");
    const stampClass =
      item.badgeVariant === "ruby" ? "dish-stamp is-ruby" : "dish-stamp";

    return `
      <article class="dish-entry">
        <div class="dish-media">
          <div class="dish-photo-frame">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
          </div>
          <div class="dish-catalog-code">
            <span>CAT. Nº ${numStr}</span>
            <span>${item.prepTime}</span>
          </div>
        </div>

        <div class="dish-content">
          <div>
            <div class="dish-top-meta">
              ${
                item.badge
                  ? `<span class="${stampClass}">${item.badge}</span>`
                  : `<span class="dish-stamp">POSTO 15</span>`
              }
              <button
                type="button"
                data-action="toggle-favorite"
                data-id="${item.id}"
                class="btn-icon-minimal ${isSaved ? "is-Saved" : ""}"
                title="${isSaved ? "Remover da seleção" : "Guardar na seleção"}"
                aria-label="Salvar prato"
              >
                ${getIcon(isSaved ? "BookmarkFilled" : "Bookmark", 13)}
              </button>
            </div>

            <div class="dish-header-line">
              <h3 class="dish-title">${item.name}</h3>
              <span class="dish-price">${formatBRL(item.price)}</span>
            </div>

            ${
              item.subtitle
                ? `<p class="dish-subtitle">${item.subtitle}</p>`
                : ""
            }

            <p class="dish-description">${item.description}</p>
          </div>

          <div>
            <div class="dish-pairing-note">
              <strong>Harmonização:</strong>
              <span>${item.pairing.name}</span>
            </div>

            <div class="dish-actions-row">
              <button
                type="button"
                data-action="open-details"
                data-id="${item.id}"
                class="btn-sheet-link"
              >
                <span>Ficha &amp; Harmonização</span>
                ${getIcon("ArrowUpRight", 13)}
              </button>

              <button
                type="button"
                data-action="add-to-order"
                data-id="${item.id}"
                class="btn-order-direct ${quantityInOrder > 0 ? "in-order" : ""}"
              >
                ${
                  quantityInOrder > 0
                    ? `${getIcon("Check", 13)} <span>Na Comanda (${quantityInOrder})</span>`
                    : `${getIcon("Plus", 13)} <span>Incluir</span>`
                }
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  // 3. Modal / Ficha Técnica Gastronômica & Harmonização
  function renderDishModal(item, isSaved) {
    if (!item) return "";

    const ingredientsList = item.ingredients
      .map((ing) => `<li>${ing}</li>`)
      .join("");

    return `
      <div class="editorial-backdrop" data-action="close-modal-backdrop">
        <div class="editorial-modal" role="dialog" aria-modal="true" aria-labelledby="modal-dish-title">
          <div class="modal-figure-col">
            <img src="${item.image}" alt="${item.name}" class="modal-photo" />
            <div class="modal-specs-list">
              <div>PORÇÃO: ${item.serving.toUpperCase()}</div>
              <div>TEMPO ESTIMADO: ${item.prepTime.toUpperCase()}</div>
              <div>CLASSIFICAÇÃO: ${item.filters.join(" / ").toUpperCase()}</div>
            </div>
          </div>

          <div class="modal-body-col">
            <div>
              <div class="modal-top-bar">
                <span style="font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent-brass);">
                  Ficha Técnica Gastronômica
                </span>
                <div style="display: flex; gap: 0.5rem;">
                  <button
                    type="button"
                    data-action="toggle-favorite"
                    data-id="${item.id}"
                    class="btn-icon-minimal ${isSaved ? "is-Saved" : ""}"
                    title="Salvar na Seleção"
                  >
                    ${getIcon(isSaved ? "BookmarkFilled" : "Bookmark", 14)}
                  </button>
                  <button
                    type="button"
                    data-action="close-modal"
                    class="btn-icon-minimal"
                    title="Fechar ficha"
                  >
                    ${getIcon("Close", 14)}
                  </button>
                </div>
              </div>

              <div style="margin-top: 1.25rem; display: flex; justify-content: space-between; align-items: baseline; gap: 1rem;">
                <h2 id="modal-dish-title" style="font-family: var(--font-serif); font-size: 2rem; font-weight: 500; line-height: 1.1;">
                  ${item.name}
                </h2>
                <span style="font-family: var(--font-mono); font-size: 1.15rem; font-weight: 500;">
                  ${formatBRL(item.price)}
                </span>
              </div>

              ${
                item.subtitle
                  ? `<p style="font-family: var(--font-serif); font-style: italic; color: var(--accent-brass); margin-top: 0.3rem;">${item.subtitle}</p>`
                  : ""
              }

              <h4 class="modal-section-heading">Método &amp; Notas de Bancada</h4>
              <p style="font-size: 0.88rem; line-height: 1.7; color: var(--ink-secondary);">
                ${item.chefNotes}
              </p>

              <h4 class="modal-section-heading">Composição &amp; Insumos</h4>
              <ul class="ingredients-list-editorial">
                ${ingredientsList}
              </ul>

              <div class="pairing-card-editorial">
                <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 0.75rem;">
                  <div>
                    <span style="font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent-brass);">
                      Harmonização Recomendada — ${item.pairing.type}
                    </span>
                    <h5 style="font-family: var(--font-serif); font-size: 1.25rem; font-weight: 600; margin-top: 0.2rem;">
                      ${item.pairing.name}
                    </h5>
                  </div>
                  <span style="font-family: var(--font-mono); font-size: 0.82rem;">
                    ${formatBRL(item.pairing.price)}
                  </span>
                </div>

                <p style="margin-top: 0.55rem; font-size: 0.82rem; color: var(--ink-secondary); line-height: 1.6;">
                  “${item.pairing.notes}”
                </p>

                <div style="margin-top: 0.9rem; padding-top: 0.75rem; border-top: 1px solid var(--border-hairline); display: flex; justify-content: flex-end;">
                  <button
                    type="button"
                    data-action="add-pairing"
                    data-drink-id="${item.pairing.drinkId}"
                    class="btn-sheet-link"
                    style="flex: 0 0 auto; padding: 0.45rem 0.9rem;"
                  >
                    ${getIcon("Plus", 12)}
                    <span>Incluir Bebida (${formatBRL(item.pairing.price)})</span>
                  </button>
                </div>
              </div>
            </div>

            <div style="margin-top: 1.75rem; padding-top: 1rem; border-top: 1px solid var(--border-hairline);">
              <button
                type="button"
                data-action="add-from-modal"
                data-id="${item.id}"
                class="btn-editorial-primary"
                style="width: 100%; justify-content: center;"
              >
                ${getIcon("Plus", 14)}
                <span>Incluir Prato na Comanda — ${formatBRL(item.price)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return {
    formatBRL,
    getIcon,
    renderWatermark,
    renderDishCard,
    renderDishModal,
  };
})();
