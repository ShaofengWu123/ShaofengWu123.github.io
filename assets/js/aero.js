(function () {
    'use strict';
    var header = document.querySelector('.aero-header');
    var menuButton = document.querySelector('[data-aero-menu]');
    var menu = document.getElementById('navbarResponsive');
    var yearLinks = Array.from(document.querySelectorAll('#navbar-year a[href^="#"]'));
    var years = yearLinks.map(function (link) {
        return { link: link, target: document.getElementById(link.hash.slice(1)) };
    }).filter(function (entry) { return entry.target; });

    function updateYear() {
        var current = years[0];
        years.forEach(function (entry) {
            if (entry.target.getBoundingClientRect().top <= 20) current = entry;
        });
        years.forEach(function (entry) {
            var active = entry === current;
            entry.link.classList.toggle('active', active);
            if (active) entry.link.setAttribute('aria-current', 'location');
            else entry.link.removeAttribute('aria-current');
        });
    }
    function closeMenu() {
        if (!menu || !menuButton) return;
        menu.classList.remove('show');
        menuButton.setAttribute('aria-expanded', 'false');
    }
    if (menuButton && menu) {
        menuButton.addEventListener('click', function () {
            var expanded = menu.classList.toggle('show');
            menuButton.setAttribute('aria-expanded', String(expanded));
        });
        header.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && menu.classList.contains('show')) {
                closeMenu();
                menuButton.focus();
            }
        });
        var desktop = window.matchMedia('(min-width: 768px)');
        desktop.addEventListener('change', closeMenu);
    }
    if (years.length) {
        updateYear();
        var scheduled = false;
        window.addEventListener('scroll', function () {
            if (scheduled) return;
            scheduled = true;
            requestAnimationFrame(function () { updateYear(); scheduled = false; });
        }, { passive: true });
        window.addEventListener('resize', updateYear);
    }

    var themeBtn = document.querySelector('[data-aero-theme-toggle]');
    var themeLabel = document.querySelector('[data-aero-theme-label]');
    var themeIcon = themeBtn ? themeBtn.querySelector('.aero-theme-icon') : null;

    function syncThemeUI() {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (themeLabel) themeLabel.textContent = isDark ? 'Light Aero' : 'Dark Aero';
        if (themeIcon) {
            themeIcon.className = isDark ? 'fas fa-sun aero-theme-icon' : 'fas fa-moon aero-theme-icon';
        }
        if (themeBtn) {
            themeBtn.setAttribute('aria-pressed', String(isDark));
        }
    }

    if (themeBtn) {
        syncThemeUI();
        themeBtn.addEventListener('click', function () {
            var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            var next = isDark ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            try {
                localStorage.setItem('aero-theme', next);
            } catch (e) {}
            syncThemeUI();
        });
    }

    document.addEventListener('click', function (event) {
        var toggle = event.target.closest('[data-authors-toggle]');
        if (!toggle) return;
        var container = toggle.closest('.aero-authors');
        if (!container) return;
        var extra = container.querySelector('[data-authors-extra]');
        var dots = container.querySelector('[data-authors-dots]');
        if (!extra) return;
        var isHidden = extra.hasAttribute('hidden');
        if (isHidden) {
            extra.removeAttribute('hidden');
            if (dots) dots.setAttribute('hidden', '');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.textContent = toggle.getAttribute('data-less-label') || 'Collapse ▴';
        } else {
            extra.setAttribute('hidden', '');
            if (dots) dots.removeAttribute('hidden');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.textContent = toggle.getAttribute('data-more-label') || 'Show more ▾';
        }
    });
}());
