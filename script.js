/* ==========================================================================
   CalcVora.online - Global Search & Natural Language Filter Engine
   Domain: CalcVora.online
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) {
        searchInput.addEventListener('input', filterTools);
    }
});

/**
 * Filter tools across all categories using keywords and natural language search phrases
 */
function filterTools() {
    const query = document.getElementById('globalSearch').value.toLowerCase().trim();
    const toolCards = document.querySelectorAll('.tool-card');
    const categories = document.querySelectorAll('.tool-category');

    toolCards.forEach(card => {
        const title = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
        const desc = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '';
        const keywords = card.getAttribute('data-keywords') ? card.getAttribute('data-keywords').toLowerCase() : '';

        // Match against title, description, or keyword mapping
        const isMatch = title.includes(query) || desc.includes(query) || keywords.includes(query);

        if (isMatch || query === '') {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });

    // Hide empty category sections when searching
    categories.forEach(category => {
        const visibleCards = category.querySelectorAll('.tool-card[style*="display: flex"], .tool-card:not([style*="display: none"])');
        if (query !== '' && visibleCards.length === 0) {
            category.style.display = 'none';
        } else {
            category.style.display = 'block';
        }
    });
}

