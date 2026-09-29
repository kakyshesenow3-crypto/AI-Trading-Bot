(() => {
  if (document.getElementById("smc-indicator-panel")) return;

  const panel = document.createElement("div");
  panel.id = "smc-indicator-panel";

  panel.innerHTML = `
    <div class="smc-header">
      <div>
        <div class="smc-title">SMC • ICT</div>
        <div class="smc-subtitle">MARKET INDICATOR</div>
      </div>

      <div class="smc-buttons">
        <button id="smc-min">−</button>
        <button id="smc-close">×</button>
      </div>
    </div>

    <div class="smc-content">

      <div class="smc-section-title">MARKET STRUCTURE</div>

      <div class="smc-row">
        <span>BOS</span>
        <strong class="bullish">BULLISH</strong>
      </div>

      <div class="smc-row">
        <span>CHoCH</span>
        <strong>—</strong>
      </div>

      <div class="smc-divider"></div>

      <div class="smc-section-title">LIQUIDITY</div>

      <div class="smc-row">
        <span>Liquidity High</span>
        <strong>—</strong>
      </div>

      <div class="smc-row">
        <span>Liquidity Low</span>
        <strong>—</strong>
      </div>

      <div class="smc-row">
        <span>Liquidity Sweep</span>
        <strong class="warning">DETECTED</strong>
      </div>

      <div class="smc-divider"></div>

      <div class="smc-section-title">SMC / ICT</div>

      <div class="smc-row">
        <span>FVG</span>
        <strong class="bullish">DETECTED</strong>
      </div>

      <div class="smc-row">
        <span>IFVG</span>
        <strong>—</strong>
      </div>

      <div class="smc-row">
        <span>Order Block</span>
        <strong class="bullish">BULLISH</strong>
      </div>

      <div class="smc-row">
        <span>Breaker Block</span>
        <strong>—</strong>
      </div>

      <div class="smc-row">
        <span>Imbalance</span>
        <strong class="bullish">DETECTED</strong>
      </div>

      <div class="smc-row">
        <span>Displacement</span>
        <strong class="bullish">STRONG</strong>
      </div>

      <div class="smc-divider"></div>

      <div class="smc-section-title">LEVELS</div>

      <div class="smc-row">
        <span>Support</span>
        <strong>—</strong>
      </div>

      <div class="smc-row">
        <span>Resistance</span>
        <strong>—</strong>
      </div>

      <div class="smc-row">
        <span>Premium / Discount</span>
        <strong>DISCOUNT</strong>
      </div>

    </div>
  `;

  document.body.appendChild(panel);

  const style = document.createElement("style");

  style.textContent = `
    #smc-indicator-panel {
      position: fixed;
      top: 110px;
      right: 25px;
      width: 285px;
      z-index: 999999999;
      background: rgba(13,17,23,.97);
      color: #e6edf3;
      border: 1px solid #30363d;
      border-radius: 12px;
      box-shadow: 0 15px 40px rgba(0,0,0,.45);
      font-family: Arial, sans-serif;
      user-select: none;
      overflow: hidden;
    }

    #smc-indicator-panel .smc-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 14px;
      background: #111820;
      border-bottom: 1px solid #30363d;
      cursor: move;
    }

    #smc-indicator-panel .smc-title {
      font-size: 15px;
      font-weight: 800;
      letter-spacing: 1.2px;
    }

    #smc-indicator-panel .smc-subtitle {
      margin-top: 3px;
      font-size: 9px;
      color: #7d8590;
      letter-spacing: 1.5px;
    }

    #smc-indicator-panel .smc-buttons {
      display: flex;
      gap: 5px;
    }

    #smc-indicator-panel .smc-buttons button {
      width: 25px;
      height: 25px;
      border: 1px solid #30363d;
      border-radius: 6px;
      background: #1b222c;
      color: #c9d1d9;
      cursor: pointer;
      font-size: 16px;
    }

    #smc-indicator-panel .smc-content {
      padding: 11px 13px;
    }

    #smc-indicator-panel .smc-section-title {
      margin: 4px 0 7px;
      color: #8b949e;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    #smc-indicator-panel .smc-row {
      min-height: 26px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 10px;
    }

    #smc-indicator-panel .smc-row span {
      color: #b1bac4;
    }

    #smc-indicator-panel .smc-row strong {
      color: #c9d1d9;
      font-size: 9px;
      letter-spacing: .4px;
    }

    #smc-indicator-panel .bullish {
      color: #3fb950 !important;
    }

    #smc-indicator-panel .warning {
      color: #d29922 !important;
    }

    #smc-indicator-panel .smc-divider {
      height: 1px;
      margin: 8px 0;
      background: #21262d;
    }

    #smc-indicator-panel.minimized .smc-content {
      display: none;
    }
  `;

  document.head.appendChild(style);

  const minButton = document.getElementById("smc-min");
  const closeButton = document.getElementById("smc-close");

  minButton.addEventListener("click", () => {
    panel.classList.toggle("minimized");
  });

  closeButton.addEventListener("click", () => {
    panel.remove();
  });

  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;

  const header = panel.querySelector(".smc-header");

  header.addEventListener("mousedown", (event) => {
    if (event.target.closest("button")) return;

    dragging = true;

    const rect = panel.getBoundingClientRect();

    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;

    panel.style.right = "auto";
  });

  document.addEventListener("mousemove", (event) => {
    if (!dragging) return;

    panel.style.left = `${event.clientX - offsetX}px`;
    panel.style.top = `${event.clientY - offsetY}px`;
  });

  document.addEventListener("mouseup", () => {
    dragging = false;
  });
})();
