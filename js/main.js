/* ============================================================
   CALCIFY — MAIN RUNTIME
   File: js/main.js
   Version: 1.0.0
   Purpose: Shared site behaviors + global utilities.
            Works on index.html (enhances existing bootstrap)
            and standalone on all tool pages.
   ============================================================ */

(function () {
  'use strict';

  /* ------------------------------------------------------------
     0. NAMESPACE
     ------------------------------------------------------------ */
  var Calcify = window.Calcify = window.Calcify || {};
  Calcify.version = '1.0.0';

  /* ------------------------------------------------------------
     1. TINY UTILITIES
     ------------------------------------------------------------ */
  function qs(sel, ctx)  { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function debounce(fn, wait) {
    var t;
    return function () {
      var ctx = this, args = arguments;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(ctx, args); }, wait || 200);
    };
  }

  function throttle(fn, wait) {
    var last = 0, t;
    return function () {
      var now = Date.now(), ctx = this, args = arguments;
      var remaining = wait - (now - last);
      if (remaining <= 0) {
        clearTimeout(t); t = null;
        last = now;
        fn.apply(ctx, args);
      } else if (!t) {
        t = setTimeout(function () {
          last = Date.now();
          t = null;
          fn.apply(ctx, args);
        }, remaining);
      }
    };
  }

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  function isRTL() {
    return document.documentElement.getAttribute('dir') === 'ar' ||
           document.documentElement.dir === 'rtl';
  }

  /* ------------------------------------------------------------
     2. SAFE STORAGE
     ------------------------------------------------------------ */
  var storage = {
    get: function (key, fallback) {
      try {
        var v = localStorage.getItem(key);
        return v === null ? fallback : v;
      } catch (e) { return fallback; }
    },
    set: function (key, val) {
      try { localStorage.setItem(key, val); return true; }
      catch (e) { return false; }
    },
    remove: function (key) {
      try { localStorage.removeItem(key); } catch (e) {}
    }
  };

  /* ------------------------------------------------------------
     3. NUMBER & CURRENCY FORMATTING (used by tool pages)
     ------------------------------------------------------------ */
  function formatNumber(n, opts) {
    opts = opts || {};
    if (typeof n !== 'number' || !isFinite(n)) return '—';
    var decimals = opts.decimals !== undefined ? opts.decimals : 2;
    var locale = opts.locale || (storage.get('calcify-lang') === 'hi' ? 'en-IN' :
                                 storage.get('calcify-lang') === 'ar' ? 'ar-EG' :
                                 storage.get('calcify-lang') === 'es' ? 'es-ES' : 'en-US');
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(n);
  }

  function formatCurrency(n, currency) {
    if (typeof n !== 'number' || !isFinite(n)) return '—';
    currency = currency || (storage.get('calcify-lang') === 'hi' ? 'INR' : 'USD');
    var locale = currency === 'INR' ? 'en-IN' : 'en-US';
    try {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: 2
      }).format(n);
    } catch (e) {
      return currency + ' ' + formatNumber(n);
    }
  }

  function parseNumberInput(el) {
    if (!el) return NaN;
    var raw = String(el.value || '').replace(/,/g, '').trim();
    if (!raw) return NaN;
    var n = parseFloat(raw);
    return isFinite(n) ? n : NaN;
  }

  /* ------------------------------------------------------------
     4. CLIPBOARD
     ------------------------------------------------------------ */
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        resolve();
      } catch (e) { reject(e); }
    });
  }

  /* ------------------------------------------------------------
     5. TOAST NOTIFICATIONS
     ------------------------------------------------------------ */
  function showToast(message, type) {
    var existing = qs('.calcify-toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'calcify-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');

    var bg = type === 'error' ? '#dc2626' : type === 'warning' ? '#d97706' : '#0f172a';
    var icon = type === 'error' ? '✕' : type === 'warning' ? '!' : '✓';

    toast.style.cssText =
      'position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);' +
      'background:' + bg + ';color:#fff;padding:12px 20px;border-radius:12px;' +
      'font-size:14px;font-weight:600;font-family:Inter,sans-serif;' +
      'box-shadow:0 12px 32px -8px rgba(0,0,0,.35);z-index:9999;' +
      'opacity:0;transition:opacity .25s, transform .25s;' +
      'display:flex;align-items:center;gap:10px;max-width:92vw;pointer-events:none;';

    var span = document.createElement('span');
    span.textContent = icon;
    span.style.cssText = 'display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,.18);font-size:11px;flex-shrink:0;';

    var txt = document.createElement('span');
    txt.textContent = message;

    toast.appendChild(span);
    toast.appendChild(txt);
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(function () { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 300);
    }, 2600);
   }

   /* ------------------------------------------------------------
   6. THEME MODULE
   ------------------------------------------------------------ */
var Theme = {
  STORAGE_KEY: 'calcify-theme',

  current: function () {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  },

  set: function (mode) {
    if (mode === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    storage.set(this.STORAGE_KEY, mode);
    document.dispatchEvent(new CustomEvent('calcify:themechange', { detail: { mode: mode } }));
  },

  toggle: function () {
    this.set(this.current() === 'dark' ? 'light' : 'dark');
  },

  init: function () {
    // Bootstrap script in <head> already set the initial class.
    // Here we only wire the toggle button (if not already wired).
    var btn = qs('#themeToggle');
    if (!btn || btn.dataset.calcifyBound === '1') return;
    btn.dataset.calcifyBound = '1';
    btn.addEventListener('click', function () { Theme.toggle(); });
  }
};

/* ------------------------------------------------------------
   7. MOBILE MENU
   ------------------------------------------------------------ */
var MobileMenu = {
  init: function () {
    var btn = qs('#mobileToggle');
    var menu = qs('#mobileMenu');
    if (!btn || !menu || btn.dataset.calcifyBound === '1') return;
    btn.dataset.calcifyBound = '1';

    btn.addEventListener('click', function () {
      var open = !menu.classList.contains('hidden');
      menu.classList.toggle('hidden', open);
      btn.setAttribute('aria-expanded', String(!open));
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (menu.classList.contains('hidden')) return;
      if (menu.contains(e.target) || btn.contains(e.target)) return;
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    });
  }
};

/* ------------------------------------------------------------
   8. LANGUAGE DROPDOWN (visual only — i18n.js does translation)
   ------------------------------------------------------------ */
var LangDropdown = {
  init: function () {
    var btn = qs('#langBtn');
    var menu = qs('#langMenu');
    if (!btn || !menu || btn.dataset.calcifyBound === '1') return;
    btn.dataset.calcifyBound = '1';

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = !menu.classList.contains('invisible');
      menu.classList.toggle('invisible', isOpen);
      menu.classList.toggle('opacity-0', isOpen);
      menu.classList.toggle('translate-y-1', isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });

    document.addEventListener('click', function () {
      menu.classList.add('invisible', 'opacity-0', 'translate-y-1');
      btn.setAttribute('aria-expanded', 'false');
    });

    // Language buttons — set lang, dir, update label
    qsa('.lang-opt').forEach(function (opt) {
      if (opt.dataset.calcifyBound === '1') return;
      opt.dataset.calcifyBound = '1';
      opt.addEventListener('click', function () {
        var lang = opt.getAttribute('data-lang');
        if (!lang) return;
        storage.set('calcify-lang', lang);
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        var lbl = qs('#langLabel');
        if (lbl) lbl.textContent = lang.toUpperCase();
        document.dispatchEvent(new CustomEvent('calcify:langchange', { detail: { lang: lang } }));
      });
    });
  }
};

/* ------------------------------------------------------------
   9. HEADER SHADOW ON SCROLL
   ------------------------------------------------------------ */
var HeaderShadow = {
  init: function () {
    var header = qs('#siteHeader');
    if (!header) return;
    var update = function () {
      if (window.scrollY > 8) header.classList.add('shadow-soft');
      else header.classList.remove('shadow-soft');
    };
    window.addEventListener('scroll', throttle(update, 100), { passive: true });
    update();
  }
};

/* ------------------------------------------------------------
   10. BACK TO TOP
   ------------------------------------------------------------ */
var BackToTop = {
  init: function () {
    var btn = qs('#backToTop');
    if (!btn || btn.dataset.calcifyBound === '1') return;
    btn.dataset.calcifyBound = '1';

    var update = function () {
      if (window.scrollY > 600) {
        btn.classList.remove('hidden');
        btn.classList.add('grid');
      } else {
        btn.classList.add('hidden');
        btn.classList.remove('grid');
      }
    };
    window.addEventListener('scroll', throttle(update, 150), { passive: true });
    update();

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

/* ------------------------------------------------------------
   11. NEWSLETTER FORMS
   ------------------------------------------------------------ */
var Newsletter = {
  init: function () {
    qsa('[data-newsletter]').forEach(function (form) {
      if (form.dataset.calcifyBound === '1') return;
      form.dataset.calcifyBound = '1';

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = form.querySelector('input[type="email"]');
        var msg = form.querySelector('[data-newsletter-msg]');
        if (!input) return;

        var value = (input.value || '').trim();
        var valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

        if (!valid) {
          input.classList.add('border-red-400');
          input.focus();
          showToast('Please enter a valid email address', 'error');
          setTimeout(function () { input.classList.remove('border-red-400'); }, 1600);
          return;
        }

        if (msg) msg.classList.remove('hidden');
        input.value = '';
        input.disabled = true;

        var btn = form.querySelector('button[type="submit"]');
        if (btn) {
          btn.disabled = true;
          btn.textContent = 'Subscribed ✓';
        }
        showToast('You are subscribed. Thank you!', 'success');
      });
    });
  }
};

/* ------------------------------------------------------------
   12. REVEAL ON SCROLL (IntersectionObserver)
   ------------------------------------------------------------ */
var RevealOnScroll = {
  init: function () {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var targets = qsa('[data-reveal]');
    if (!targets.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.removeAttribute('data-reveal');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });

    targets.forEach(function (t) { io.observe(t); });
  }
};

/* ------------------------------------------------------------
   13. COPY BUTTONS FOR <pre><code> BLOCKS
   ------------------------------------------------------------ */
var CopyButtons = {
  init: function () {
    qsa('pre').forEach(function (pre) {
      if (pre.dataset.calcifyCopy === '1') return;
      if (!pre.querySelector('code')) return;
      pre.dataset.calcifyCopy = '1';
      pre.style.position = 'relative';

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'calcify-copy-btn';
      btn.setAttribute('aria-label', 'Copy code');
      btn.textContent = 'Copy';
      btn.style.cssText =
        'position:absolute;top:8px;right:8px;padding:5px 10px;font-size:11px;' +
        'font-weight:700;border-radius:8px;background:rgba(255,255,255,.08);' +
        'color:inherit;border:1px solid rgba(255,255,255,.15);cursor:pointer;' +
        'font-family:Inter,sans-serif;transition:background .2s;';

      btn.addEventListener('mouseenter', function () {
        btn.style.background = 'rgba(255,255,255,.16)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.background = 'rgba(255,255,255,.08)';
      });

      btn.addEventListener('click', function () {
        var code = pre.querySelector('code').innerText;
        copyText(code).then(function () {
          btn.textContent = 'Copied ✓';
          showToast('Code copied to clipboard', 'success');
          setTimeout(function () { btn.textContent = 'Copy'; }, 1800);
        }).catch(function () {
          showToast('Copy failed', 'error');
        });
      });

      pre.appendChild(btn);
    });
  }
};

/* ------------------------------------------------------------
   14. LINK PREFETCH ON HOVER (performance)
   ------------------------------------------------------------ */
var Prefetch = {
  done: {},
  init: function () {
    if (!('requestIdleCallback' in window)) return;
    var links = qsa('a[href$=".html"]');
    links.forEach(function (a) {
      a.addEventListener('mouseenter', function () {
        var href = a.getAttribute('href');
        if (!href || Prefetch.done[href]) return;
        Prefetch.done[href] = true;
        requestIdleCallback(function () {
          var link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = href;
          document.head.appendChild(link);
        });
      }, { once: true });
    });
  }
};

  /* ------------------------------------------------------------
     15. GLOBAL KEYBOARD SHORTCUTS
     ------------------------------------------------------------ */
  var GlobalShortcuts = {
    init: function () {
      document.addEventListener('keydown', function (e) {
        var tag = (document.activeElement && document.activeElement.tagName) || '';
        var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(tag);

        // "/"  → focus search
        if (e.key === '/' && !typing) {
          var s = qs('#gridSearch') || qs('#heroSearch');
          if (s) {
            e.preventDefault();
            s.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(function () { s.focus(); }, 350);
          }
        }

        // "d" → toggle dark
        if ((e.key === 'd' || e.key === 'D') && !typing && !e.ctrlKey && !e.metaKey) {
          Theme.toggle();
        }

        // "Esc" → close menus
        if (e.key === 'Escape') {
          var mm = qs('#mobileMenu');
          if (mm && !mm.classList.contains('hidden')) mm.classList.add('hidden');
          var lm = qs('#langMenu');
          if (lm) lm.classList.add('invisible', 'opacity-0', 'translate-y-1');
        }
      });
    }
  };

  /* ------------------------------------------------------------
     16. FAQ ACCORDION — single-open behavior (optional)
     ------------------------------------------------------------ */
  var FAQAccordion = {
    init: function () {
      var faq = qs('#faqList');
      if (!faq || faq.dataset.calcifyBound === '1') return;
      faq.dataset.calcifyBound = '1';

      qsa('details', faq).forEach(function (d) {
        d.addEventListener('toggle', function () {
          if (!d.open) return;
          qsa('details', faq).forEach(function (other) {
            if (other !== d && other.open) other.open = false;
          });
        });
      });
    }
  };

  /* ------------------------------------------------------------
     17. TOOL PAGE HELPERS (used by tools/*.html)
     ------------------------------------------------------------ */
  var ToolPage = {
    /**
     * Bind live calculation to input fields.
     * Usage: Calcify.bindCalculator('#calcForm', function(values){ ... })
     */
    bindCalculator: function (formSelector, handler, opts) {
      opts = opts || {};
      var form = qs(formSelector);
      if (!form) return;

      var delay = opts.debounce || 120;
      var run = debounce(function () {
        var values = {};
        qsa('input, select, textarea', form).forEach(function (el) {
          var key = el.name || el.id;
          if (!key) return;
          values[key] = el.type === 'checkbox' ? el.checked :
                        el.type === 'radio'    ? (el.checked ? el.value : values[key]) :
                        el.value;
        });
        try { handler(values, form); }
        catch (err) { console.error('[Calcify] Calculator error:', err); }
      }, delay);

      form.addEventListener('input', run);
      form.addEventListener('change', run);
      if (opts.submit !== false) {
        form.addEventListener('submit', function (e) { e.preventDefault(); run(); });
      }
      run();
    },

    /**
     * Copy the result text from an element to the clipboard.
     * Usage: Calcify.copyResult('#resultValue')
     */
    copyResult: function (selector) {
      var el = qs(selector);
      if (!el) { showToast('Nothing to copy', 'warning'); return; }
      var text = (el.innerText || el.textContent || '').trim();
      if (!text) { showToast('Nothing to copy', 'warning'); return; }
      copyText(text).then(function () {
        showToast('Result copied to clipboard', 'success');
      }).catch(function () {
        showToast('Copy failed', 'error');
      });
    },

    /**
     * Auto-bind any element with [data-copy] to copy its target's text.
     * Usage: <button data-copy="#result">Copy</button>
     */
    bindCopyButtons: function () {
      qsa('[data-copy]').forEach(function (btn) {
        if (btn.dataset.calcifyBound === '1') return;
        btn.dataset.calcifyBound = '1';
        btn.addEventListener('click', function () {
          ToolPage.copyResult(btn.getAttribute('data-copy'));
        });
      });
    },

    /**
     * Simple input validation with error messages.
     * Returns true if all inputs pass; false otherwise.
     */
    validate: function (formSelector) {
      var form = qs(formSelector);
      if (!form) return true;
      var ok = true;
      qsa('[required]', form).forEach(function (el) {
        var isEmpty = !el.value || !String(el.value).trim();
        if (isEmpty) {
          ok = false;
          el.classList.add('border-red-400');
          el.setAttribute('aria-invalid', 'true');
          setTimeout(function () {
            el.classList.remove('border-red-400');
            el.removeAttribute('aria-invalid');
          }, 1800);
        }
      });
      if (!ok) showToast('Please fill in all required fields', 'warning');
      return ok;
    }
  };

  /* ------------------------------------------------------------
     18. GLOBAL ERROR HANDLER (silent fail, no user-visible crash)
     ------------------------------------------------------------ */
  function initErrorHandler() {
    window.addEventListener('error', function (e) {
      // Log for debugging, do not show to user
      if (window.console && console.warn) {
        console.warn('[Calcify] Runtime error:', e.message);
      }
    });
  }

  /* ------------------------------------------------------------
     19. PERFORMANCE — mark paint timing
     ------------------------------------------------------------ */
  function logPerf() {
    if (!window.performance || !performance.mark) return;
    try {
      performance.mark('calcify-ready');
    } catch (e) {}
  }

  /* ------------------------------------------------------------
     20. PUBLIC API
     ------------------------------------------------------------ */
  Calcify.qs              = qs;
  Calcify.qsa             = qsa;
  Calcify.debounce        = debounce;
  Calcify.throttle        = throttle;
  Calcify.onReady         = onReady;
  Calcify.isRTL           = isRTL;
  Calcify.storage         = storage;
  Calcify.formatNumber    = formatNumber;
  Calcify.formatCurrency  = formatCurrency;
  Calcify.parseNumber     = parseNumberInput;
  Calcify.copy            = copyText;
  Calcify.toast           = showToast;
  Calcify.theme           = Theme;
  Calcify.tool            = ToolPage;

  /* ------------------------------------------------------------
     21. BOOT
     ------------------------------------------------------------ */
  function boot() {
    // Core site behaviors — safe to run always (idempotent guards inside)
    Theme.init();
    MobileMenu.init();
    LangDropdown.init();
    HeaderShadow.init();
    BackToTop.init();
    Newsletter.init();

    // Enhancements
    RevealOnScroll.init();
    CopyButtons.init();
    Prefetch.init();
    GlobalShortcuts.init();
    FAQAccordion.init();

    // Tool-page helpers (only wire if the page has them)
    ToolPage.bindCopyButtons();

    // Diagnostics
    initErrorHandler();
    logPerf();

    // Signal ready
    document.documentElement.setAttribute('data-calcify-main', 'ready');
    document.dispatchEvent(new CustomEvent('calcify:mainready'));
  }

  onReady(boot);

})();
   
