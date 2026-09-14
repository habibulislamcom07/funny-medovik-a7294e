/**
 * CalcVora — Core Common JavaScript
 * High performance, zero dependencies
 */

(function () {
  'use strict';

  // Global CalcVora utility object
  window.CalcVora = {
    // Toast notification
    toast: function (message, duration = 3000) {
      let toastEl = document.getElementById('calc-toast');
      if (!toastEl) {
        toastEl = document.createElement('div');
        toastEl.id = 'calc-toast';
        toastEl.className = 'toast-notice';
        document.body.appendChild(toastEl);
      }
      toastEl.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${message}</span>
      `;
      toastEl.classList.add('show');
      clearTimeout(window._toastTimeout);
      window._toastTimeout = setTimeout(() => {
        toastEl.classList.remove('show');
      }, duration);
    },

    // Copy to clipboard
    copyText: function (text, label = 'Copied to clipboard!') {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
          this.toast(label);
        }).catch(() => {
          this._fallbackCopy(text, label);
        });
      } else {
        this._fallbackCopy(text, label);
      }
    },

    _fallbackCopy: function (text, label) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        this.toast(label);
      } catch (err) {
        this.toast('Press Ctrl+C to copy');
      }
      document.body.removeChild(textArea);
    },

    // Print result
    print: function () {
      window.print();
    },

    // Share tool
    share: function () {
      if (navigator.share) {
        navigator.share({
          title: document.title,
          url: window.location.href
        }).catch(() => {});
      } else {
        this.copyText(window.location.href, 'Tool link copied to clipboard!');
      }
    },

    // Open Premium Modal
    openPremiumModal: function () {
      let modal = document.getElementById('premium-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'premium-modal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
          <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="prem-title">
            <button class="modal-close-btn" aria-label="Close modal" onclick="CalcVora.closePremiumModal()">&times;</button>
            <div style="font-size: 0.75rem; font-weight: 800; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">CalcVora Pro Preview</div>
            <h3 id="prem-title" style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.75rem; color: var(--text-main);">Experience 100% Ad-Free Precision</h3>
            <p style="color: var(--text-muted); font-size: 0.925rem; margin-bottom: 1.5rem; line-height: 1.6;">
              CalcVora Pro is coming soon. Enjoy clean, distraction-free calculation tools with instant cloud formula presets, multi-currency conversions, and custom PDF export reports.
            </p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.75rem; font-size: 0.9rem; color: var(--text-muted);">
              <li style="display: flex; align-items: center; gap: 0.5rem;"><span style="color: var(--accent-emerald);">✓</span> Complete Zero-Ad Experience</li>
              <li style="display: flex; align-items: center; gap: 0.5rem;"><span style="color: var(--accent-emerald);">✓</span> High-Resolution PDF & Excel Exporting</li>
              <li style="display: flex; align-items: center; gap: 0.5rem;"><span style="color: var(--accent-emerald);">✓</span> Saved Calculation History & Presets</li>
              <li style="display: flex; align-items: center; gap: 0.5rem;"><span style="color: var(--accent-emerald);">✓</span> Priority Offline PWA Access</li>
            </ul>
            <div style="display: flex; gap: 0.75rem; justify-content: flex-end;">
              <button class="btn btn-secondary" onclick="CalcVora.closePremiumModal()">Maybe Later</button>
              <button class="btn btn-primary" onclick="CalcVora.notifyPremiumInterest()">Notify Me at Launch</button>
            </div>
          </div>
        `;
        document.body.appendChild(modal);
      }
      setTimeout(() => modal.classList.add('active'), 10);
    },

    closePremiumModal: function () {
      const modal = document.getElementById('premium-modal');
      if (modal) modal.classList.remove('active');
    },

    notifyPremiumInterest: function () {
      this.closePremiumModal();
      this.toast('Thank you! You are on our launch priority list.');
    }
  };

  // DOM ready init
  document.addEventListener('DOMContentLoaded', function () {
    // 1. FAQ Accordions
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      if (questionBtn) {
        questionBtn.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          // Close siblings if desired or let multiple open
          item.classList.toggle('active', !isActive);
          questionBtn.setAttribute('aria-expanded', !isActive);
        });
      }
    });

    // 2. Theme toggle logic
    const themeBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('calcvora-theme');
    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        if (current === 'light') {
          document.documentElement.removeAttribute('data-theme');
          localStorage.setItem('calcvora-theme', 'dark');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('calcvora-theme', 'light');
        }
      });
    }

    // 3. Premium button hooks
    document.querySelectorAll('[data-action="open-premium"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.CalcVora.openPremiumModal();
      });
    });

    // 4. Modal click away
    document.addEventListener('click', (e) => {
      const modal = document.getElementById('premium-modal');
      if (modal && e.target === modal) {
        window.CalcVora.closePremiumModal();
      }
    });

    // 5. Tool Directory Filter & Search (if present on page)
    const searchInput = document.getElementById('tool-search-input');
    const filterChips = document.querySelectorAll('.filter-chip');
    const toolCards = document.querySelectorAll('.tool-card[data-category]');

    if (searchInput || filterChips.length > 0) {
      let activeCategory = 'all';
      let searchQuery = '';

      function filterTools() {
        toolCards.forEach(card => {
          const title = (card.querySelector('.tool-card-title')?.textContent || '').toLowerCase();
          const desc = (card.querySelector('.tool-card-desc')?.textContent || '').toLowerCase();
          const category = card.getAttribute('data-category') || '';
          
          const matchesCategory = (activeCategory === 'all' || category === activeCategory);
          const matchesSearch = !searchQuery || title.includes(searchQuery) || desc.includes(searchQuery);

          if (matchesCategory && matchesSearch) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      }

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          searchQuery = e.target.value.trim().toLowerCase();
          filterTools();
        });
      }

      filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
          filterChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          activeCategory = chip.getAttribute('data-filter') || 'all';
          filterTools();
        });
      });
    }
  });
})();
