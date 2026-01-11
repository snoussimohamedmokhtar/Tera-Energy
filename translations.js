// ========== SHARED LANGUAGE SYSTEM ==========
const languageSwitcher = {
    currentLang: 0,
    languages: [
        { code: 'en', name: 'English', flag: './assets/flags/uk.svg' },
        { code: 'ar', name: 'Arabic', flag: './assets/flags/tn.svg' },
        { code: 'fr', name: 'French', flag: './assets/flags/fr.svg' },
        { code: 'de', name: 'German', flag: './assets/flags/de.svg' }
    ],
    
    // Base translations (common for all pages)
    translations: {
        en: {
            // Navigation (common for all pages)
            'home': 'Home',
            'products': 'Products',
            'retailers': 'Retailers',
            'about-us': 'About Us',
            'locations': 'Locations',
            'contact': 'Contact',
            'drinks': 'Drinks',
            'snacks': 'Snacks',
            
            // Footer (common)
            'copyright': '© 2013 Tera Energy. All rights reserved. | Tunis & Vienna | Strength of the Lion, Power of Royalty'
        },
        ar: {
            'home': 'الرئيسية',
            'products': 'المنتجات',
            'retailers': 'التجار',
            'about-us': 'من نحن',
            'locations': 'المواقع',
            'contact': 'اتصل بنا',
            'drinks': 'المشروبات',
            'snacks': 'الوجبات الخفيفة',
            'copyright': '© 2013 تيرا إنرجي. جميع الحقوق محفوظة. | تونس وفينا | قوة الأسد، قوة الملوك'
        },
        fr: {
            'home': 'Accueil',
            'products': 'Produits',
            'retailers': 'Détaillants',
            'about-us': 'À propos',
            'locations': 'Emplacements',
            'contact': 'Contact',
            'drinks': 'Boissons',
            'snacks': 'Collations',
            'copyright': '© 2013 Tera Energy. Tous droits réservés. | Tunis & Vienne | Force du Lion, Puissance Royale'
        },
        de: {
            'home': 'Startseite',
            'products': 'Produkte',
            'retailers': 'Händler',
            'about-us': 'Über Uns',
            'locations': 'Standorte',
            'contact': 'Kontakt',
            'drinks': 'Getränke',
            'snacks': 'Snacks',
            'copyright': '© 2013 Tera Energy. Alle Rechte vorbehalten. | Tunis & Wien | Stärke des Löwen, Kraft der Königlichkeit'
        }
    },
    
    // Initialize with page-specific translations
    init(pageTranslations = {}) {
        // Merge page-specific translations with base translations
        Object.keys(pageTranslations).forEach(lang => {
            if (this.translations[lang]) {
                this.translations[lang] = {
                    ...this.translations[lang],
                    ...pageTranslations[lang]
                };
            }
        });
        
        // Load saved language from localStorage
        const savedLang = localStorage.getItem('tera-language');
        if (savedLang) {
            const langIndex = this.languages.findIndex(lang => lang.code === savedLang);
            if (langIndex > -1) {
                this.currentLang = langIndex;
            }
        }
        
        this.updateButton();
        this.setupEventListeners();
        this.translatePage();
    },
    
    setupEventListeners() {
        const btn = document.getElementById('language-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                this.nextLanguage();
            });
        }
    },
    
    nextLanguage() {
        this.currentLang = (this.currentLang + 1) % this.languages.length;
        this.updateButton();
        this.translatePage();
        this.saveLanguage();
        
        // Force reset direction to LTR
        document.body.style.direction = 'ltr';
        document.body.style.textAlign = 'left';
    },
    
    updateButton() {
        const currentLang = this.languages[this.currentLang];
        const flagImg = document.getElementById('flag-img');
        const langText = document.getElementById('current-language');
        
        if (flagImg) {
            flagImg.src = currentLang.flag;
            flagImg.alt = currentLang.name;
        }
        
        if (langText) {
            langText.textContent = currentLang.name;
        }
    },
    
    translatePage() {
        const currentLang = this.languages[this.currentLang];
        const translations = this.translations[currentLang.code];
        
        if (!translations) {
            console.error('No translations found for language:', currentLang.code);
            return;
        }
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                // Special handling for different element types
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    // Check if it's a placeholder or value
                    if (element.hasAttribute('data-translate-type') && 
                        element.getAttribute('data-translate-type') === 'placeholder') {
                        element.placeholder = translations[key];
                    } else {
                        element.value = translations[key];
                    }
                } else if (element.tagName === 'OPTION') {
                    element.textContent = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        });
        
        // Also translate select options
        document.querySelectorAll('select option').forEach(option => {
            const key = option.getAttribute('data-translate');
            if (key && translations[key]) {
                option.textContent = translations[key];
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = currentLang.code;
    },
    
    saveLanguage() {
        const currentLang = this.languages[this.currentLang];
        localStorage.setItem('tera-language', currentLang.code);
    }
};