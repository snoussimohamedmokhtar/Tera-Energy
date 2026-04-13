// ========== SHARED LANGUAGE SYSTEM ==========
const languageSwitcher = {
    currentLang: 0,
    languages: [
        { code: 'en', name: 'English', flag: './assets/flags/uk.svg' },
        { code: 'ar', name: 'Arabic',  flag: './assets/flags/tn.svg' },
        { code: 'fr', name: 'French',  flag: './assets/flags/fr.svg' },
        { code: 'de', name: 'German',  flag: './assets/flags/de.svg' }
    ],

    translations: {
        en: {
            'home': 'Home', 'products': 'Products', 'retailers': 'Retailers',
            'events': 'Events', 'about-us': 'About Us', 'locations': 'Locations',
            'contact': 'Contact', 'drinks': 'Drinks', 'snacks': 'Snacks',
            'copyright': '© 2013 Tera Energy. All rights reserved. | Tunis & Vienna | Strength of the Lion, Power of Royalty',

            // ========== CHIPS ==========
            'biscuits-chips-title': 'Premium Chips',
            'biscuits-chips-description': 'Crispy, vacuum soft-fried chips bursting with natural flavor and satisfying crunch',
            'product-sweet-potato-chips': 'Sweet Potato Chips',
            'product-sweet-potato-chips-type': 'Vacuum Soft-Fried',
            'product-sweet-potato-chips-desc': 'Is it the 2,000 hours of sunshine per year that give the spices such a unique flavor? Or is it the love and experience with which we produce our incomparable seasoning? One thing is certain: Only the sweet potato chips made using the SNACKS-TEAM vacuum soft-fried process are crispy, fresh, and simply delicious!',
            'product-beetroot-chips': 'Beetroot Chips',
            'product-beetroot-chips-type': 'Vacuum Soft-Fried',
            'product-beetroot-chips-desc': 'Is it the 2,000 hours of sunshine per year that give the spices such a unique flavor? Or is it the love and experience with which we produce our incomparable seasoning? One thing is certain: Only the beetroot chips made using the SNACKS-TEAM vacuum soft-fried process are crispy, fresh, and simply delicious!',
            'product-carrot-chips': 'Carrot Chips',
            'product-carrot-chips-type': 'Vacuum Soft-Fried',
            'product-carrot-chips-desc': 'Is it the 2,000 hours of sunshine per year that give the spices such a unique flavor? Or is it the love and experience with which we produce our incomparable seasoning? One thing is certain: Only the carrot chips made using the SNACKS-TEAM vacuum soft-fried process are crispy, fresh, and simply delicious!'
        },
        ar: {
            'home': 'الرئيسية', 'products': 'المنتجات', 'retailers': 'التجار',
            'events': 'الفعاليات', 'about-us': 'من نحن', 'locations': 'المواقع',
            'contact': 'اتصل بنا', 'drinks': 'المشروبات', 'snacks': 'الوجبات الخفيفة',
            'copyright': '© 2013 تيرا إنرجي. جميع الحقوق محفوظة. | تونس وفينا | قوة الأسد، قوة الملوك',

            // ========== CHIPS ==========
            'biscuits-chips-title': 'شيبس مميز',
            'biscuits-chips-description': 'شيبس مقرمش ومقلي ينفجر بالنكهة الطبيعية والقرمشة المرضية',
            'product-sweet-potato-chips': 'شيبس البطاطا الحلوة',
            'product-sweet-potato-chips-type': 'مقلي ',
            'product-sweet-potato-chips-desc': 'هل هي ساعات الشمس الـ 2000 سنوياً التي تمنح التوابل نكهتها الفريدة؟ أم هو الحب والخبرة التي ننتج بها تتبيلنا الذي لا مثيل له؟ شيء واحد مؤكد: فقط شيبس البطاطا الحلوة المصنوع بتقنية القلي الناعم بالفراغ لفريق SNACKS-TEAM يكون مقرمشاً وطازجاً ولذيذاً ببساطة!',
            'product-beetroot-chips': 'شيبس الشمندر',
            'product-beetroot-chips-type': 'مقلي ',
            'product-beetroot-chips-desc': 'هل هي ساعات الشمس الـ 2000 سنوياً التي تمنح التوابل نكهتها الفريدة؟ أم هو الحب والخبرة التي ننتج بها تتبيلنا الذي لا مثيل له؟ شيء واحد مؤكد: فقط شيبس الشمندر المصنوع بتقنية القلي الناعم بالفراغ لفريق SNACKS-TEAM يكون مقرمشاً وطازجاً ولذيذاً ببساطة!',
            'product-carrot-chips': 'شيبس الجزر',
            'product-carrot-chips-type': 'مقلي ',
            'product-carrot-chips-desc': 'هل هي ساعات الشمس الـ 2000 سنوياً التي تمنح التوابل نكهتها الفريدة؟ أم هو الحب والخبرة التي ننتج بها تتبيلنا الذي لا مثيل له؟ شيء واحد مؤكد: فقط شيبس الجزر المصنوع بتقنية القلي الناعم بالفراغ لفريق SNACKS-TEAM يكون مقرمشاً وطازجاً ولذيذاً ببساطة!'
        },
        fr: {
            'home': 'Accueil', 'products': 'Produits', 'retailers': 'Détaillants',
            'events': 'Événements', 'about-us': 'À propos', 'locations': 'Emplacements',
            'contact': 'Contact', 'drinks': 'Boissons', 'snacks': 'Collations',
            'copyright': '© 2013 Tera Energy. Tous droits réservés. | Tunis & Vienne | Force du Lion, Puissance Royale',

            // ========== CHIPS ==========
            'biscuits-chips-title': 'Chips Premium',
            'biscuits-chips-description': 'Chips croustillantes et frites sous vide, débordant de saveur naturelle et de croquant satisfaisant',
            'product-sweet-potato-chips': 'Chips de Patate Douce',
            'product-sweet-potato-chips-type': 'Frites sous Vide',
            'product-sweet-potato-chips-desc': 'Est-ce les 2 000 heures de soleil par an qui donnent aux épices une saveur si unique? Ou est-ce l\'amour et l\'expérience avec lesquels nous produisons notre assaisonnement incomparable? Une chose est certaine: seules les chips de patate douce préparées selon le procédé de friture douce sous vide de la SNACKS-TEAM sont croustillantes, fraîches et tout simplement délicieuses!',
            'product-beetroot-chips': 'Chips de Betterave',
            'product-beetroot-chips-type': 'Frites sous Vide',
            'product-beetroot-chips-desc': 'Est-ce les 2 000 heures de soleil par an qui donnent aux épices une saveur si unique? Ou est-ce l\'amour et l\'expérience avec lesquels nous produisons notre assaisonnement incomparable? Une chose est certaine: seules les chips de betterave préparées selon le procédé de friture douce sous vide de la SNACKS-TEAM sont croustillantes, fraîches et tout simplement délicieuses!',
            'product-carrot-chips': 'Chips de Carotte',
            'product-carrot-chips-type': 'Frites sous Vide',
            'product-carrot-chips-desc': 'Est-ce les 2 000 heures de soleil par an qui donnent aux épices une saveur si unique? Ou est-ce l\'amour et l\'expérience avec lesquels nous produisons notre assaisonnement incomparable? Une chose est certaine: seules les chips de carotte préparées selon le procédé de friture douce sous vide de la SNACKS-TEAM sont croustillantes, fraîches et tout simplement délicieuses!'
        },
        de: {
            'home': 'Startseite', 'products': 'Produkte', 'retailers': 'Händler',
            'events': 'Events', 'about-us': 'Über Uns', 'locations': 'Standorte',
            'contact': 'Kontakt', 'drinks': 'Getränke', 'snacks': 'Snacks',
            'copyright': '© 2013 Tera Energy. Alle Rechte vorbehalten. | Tunis & Wien | Stärke des Löwen, Kraft der Königlichkeit',

            // ========== CHIPS ==========
            'biscuits-chips-title': 'Premium Chips',
            'biscuits-chips-description': 'Knusprige, vakuum-weich-frittierte Chips voller natürlichem Geschmack und befriedigendem Crunch',
            'product-sweet-potato-chips': 'Süßkartoffel Chips',
            'product-sweet-potato-chips-type': 'Vakuum Weich-Frittiert',
            'product-sweet-potato-chips-desc': 'Sind es die 2.000 Sonnenstunden pro Jahr, die den Gewürzen einen so einzigartigen Geschmack verleihen? Oder ist es die Liebe und Erfahrung, mit der wir unsere unvergleichliche Würzung herstellen? Eines ist sicher: Nur die Süßkartoffel-Chips, die nach dem Vakuum-Weich-Frittier-Verfahren des SNACKS-TEAM hergestellt werden, sind knusprig, frisch und einfach köstlich!',
            'product-beetroot-chips': 'Rote-Bete Chips',
            'product-beetroot-chips-type': 'Vakuum Weich-Frittiert',
            'product-beetroot-chips-desc': 'Sind es die 2.000 Sonnenstunden pro Jahr, die den Gewürzen einen so einzigartigen Geschmack verleihen? Oder ist es die Liebe und Erfahrung, mit der wir unsere unvergleichliche Würzung herstellen? Eines ist sicher: Nur die Rote-Bete-Chips, die nach dem Vakuum-Weich-Frittier-Verfahren des SNACKS-TEAM hergestellt werden, sind knusprig, frisch und einfach köstlich!',
            'product-carrot-chips': 'Karotten Chips',
            'product-carrot-chips-type': 'Vakuum Weich-Frittiert',
            'product-carrot-chips-desc': 'Sind es die 2.000 Sonnenstunden pro Jahr, die den Gewürzen einen so einzigartigen Geschmack verleihen? Oder ist es die Liebe und Erfahrung, mit der wir unsere unvergleichliche Würzung herstellen? Eines ist sicher: Nur die Karotten-Chips, die nach dem Vakuum-Weich-Frittier-Verfahren des SNACKS-TEAM hergestellt werden, sind knusprig, frisch und einfach köstlich!'
        }
    },

    init(pageTranslations = {}) {
        // Merge page-specific translations
        Object.keys(pageTranslations).forEach(lang => {
            if (this.translations[lang]) {
                this.translations[lang] = { ...this.translations[lang], ...pageTranslations[lang] };
            }
        });

        // Load saved language
        const saved = localStorage.getItem('tera-language');
        if (saved) {
            const idx = this.languages.findIndex(l => l.code === saved);
            if (idx > -1) this.currentLang = idx;
        }

        this.injectStyles();
        this.buildDropdown();
        this.updateButton();
        this.translatePage();
    },

    injectStyles() {
        if (document.getElementById('lang-switcher-styles')) return;
        const style = document.createElement('style');
        style.id = 'lang-switcher-styles';
        style.textContent = `
            .language-switcher { position: relative; }

            .language-btn {
                background: rgba(37,99,235,0.1);
                border: 1px solid rgba(37,99,235,0.25);
                border-radius: 8px;
                padding: 7px 12px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: all 0.3s ease;
                color: #f8fafc;
                font-family: 'Montserrat', sans-serif;
                font-size: 0.78rem;
                font-weight: 600;
                letter-spacing: 0.5px;
            }

            .language-btn:hover {
                background: rgba(37,99,235,0.22);
                border-color: rgba(37,99,235,0.5);
            }

            .language-btn .flag-img {
                width: 22px; height: 16px;
                object-fit: cover;
                border-radius: 2px;
                flex-shrink: 0;
            }

            .language-btn .lang-chevron {
                font-size: 0.6rem;
                transition: transform 0.3s ease;
                margin-left: 2px;
                opacity: 0.7;
            }

            .language-switcher.open .lang-chevron {
                transform: rotate(180deg);
            }

            .lang-dropdown {
                display: none;
                position: absolute;
                top: calc(100% + 10px);
                right: 0;
                background: rgba(10, 17, 35, 0.98);
                border: 1px solid rgba(37,99,235,0.25);
                border-radius: 14px;
                padding: 8px;
                min-width: 170px;
                backdrop-filter: blur(20px);
                box-shadow: 0 20px 50px rgba(0,0,0,0.6), 0 0 20px rgba(37,99,235,0.1);
                z-index: 3000;
                animation: langDropIn 0.2s ease-out;
            }

            @keyframes langDropIn {
                from { opacity: 0; transform: translateY(-8px) scale(0.97); }
                to   { opacity: 1; transform: translateY(0) scale(1); }
            }

            .language-switcher.open .lang-dropdown {
                display: block;
            }

            .lang-option {
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 10px 14px;
                border-radius: 8px;
                cursor: pointer;
                transition: background 0.2s ease;
                border: none;
                background: transparent;
                width: 100%;
                color: #94a3b8;
                font-family: 'Montserrat', sans-serif;
                font-size: 0.82rem;
                font-weight: 600;
                letter-spacing: 0.3px;
                text-align: left;
            }

            .lang-option:hover {
                background: rgba(37,99,235,0.12);
                color: #f8fafc;
            }

            .lang-option.active {
                background: rgba(37,99,235,0.18);
                color: #f8fafc;
            }

            .lang-option .opt-flag {
                width: 24px; height: 17px;
                object-fit: cover;
                border-radius: 3px;
                flex-shrink: 0;
                box-shadow: 0 1px 4px rgba(0,0,0,0.4);
            }

            .lang-option .opt-check {
                margin-left: auto;
                color: #2563eb;
                font-size: 0.75rem;
                opacity: 0;
            }

            .lang-option.active .opt-check {
                opacity: 1;
            }

            /* Divider between options */
            .lang-option + .lang-option {
                border-top: 1px solid rgba(255,255,255,0.04);
            }
        `;
        document.head.appendChild(style);
    },

    buildDropdown() {
        const switcher = document.getElementById('language-switcher');
        if (!switcher) return;

        // Remove old tooltip if present
        const oldTooltip = document.getElementById('language-tooltip');
        if (oldTooltip) oldTooltip.remove();

        // Build dropdown panel
        const dropdown = document.createElement('div');
        dropdown.className = 'lang-dropdown';
        dropdown.id = 'lang-dropdown';

        this.languages.forEach((lang, index) => {
            const btn = document.createElement('button');
            btn.className = 'lang-option' + (index === this.currentLang ? ' active' : '');
            btn.dataset.index = index;
            btn.innerHTML = `
                <img src="${lang.flag}" alt="${lang.name}" class="opt-flag">
                <span>${lang.name}</span>
                <i class="fas fa-check opt-check"></i>
            `;
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.setLanguage(index);
                this.closeDropdown();
            });
            dropdown.appendChild(btn);
        });

        switcher.appendChild(dropdown);

        // Toggle on button click
        const btn = document.getElementById('language-btn');
        if (btn) {
            // Remove old click listener by cloning
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);

            // Add chevron icon to button
            const chevron = document.createElement('i');
            chevron.className = 'fas fa-chevron-down lang-chevron';
            newBtn.appendChild(chevron);

            newBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                switcher.classList.toggle('open');
            });
        }

        // Close on outside click
        document.addEventListener('click', () => this.closeDropdown());
    },

    closeDropdown() {
        const switcher = document.getElementById('language-switcher');
        if (switcher) switcher.classList.remove('open');
    },

    setLanguage(index) {
        this.currentLang = index;
        this.updateButton();
        this.updateDropdownActive();
        this.translatePage();
        this.saveLanguage();
    },

    updateButton() {
        const lang = this.languages[this.currentLang];
        const flagImg = document.getElementById('flag-img');
        if (flagImg) { flagImg.src = lang.flag; flagImg.alt = lang.name; }
        // Update old current-language span if still present
        const langText = document.getElementById('current-language');
        if (langText) langText.textContent = lang.name;
    },

    updateDropdownActive() {
        document.querySelectorAll('.lang-option').forEach((el, i) => {
            el.classList.toggle('active', i === this.currentLang);
        });
    },

    translatePage() {
        const lang = this.languages[this.currentLang];
        const translations = this.translations[lang.code];
        if (!translations) return;

        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (!translations[key]) return;
            if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') &&
                el.getAttribute('data-translate-type') === 'placeholder') {
                el.placeholder = translations[key];
            } else if (el.tagName === 'OPTION') {
                el.textContent = translations[key];
            } else {
                el.textContent = translations[key];
            }
        });

        document.documentElement.lang = lang.code;
    },

    saveLanguage() {
        localStorage.setItem('tera-language', this.languages[this.currentLang].code);
    }
};