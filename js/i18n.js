/* ============================================================
   CALCIFY — INTERNATIONALIZATION (i18n)
   File: js/i18n.js
   Version: 1.0.0
   Supports: en, hi, es, ar (RTL)
   ============================================================ */

(function () {
  'use strict';

  var Calcify = window.Calcify = window.Calcify || {};

  /* ------------------------------------------------------------
     1. TRANSLATION DICTIONARIES
     ------------------------------------------------------------ */
  var TRANSLATIONS = {

    en: {
      meta: { code: 'en', name: 'English', dir: 'ltr' },
      nav: {
        allTools: 'All Tools',
        categories: 'Categories',
        popular: 'Popular',
        about: 'About',
        contact: 'Contact',
        premium: 'Go Premium',
        search: 'Search tools…',
        searchShort: 'Search calculator…',
        language: 'Language',
        theme: 'Toggle dark mode',
        menu: 'Open menu'
      },
      hero: {
        badge: '150+ Free Smart Calculators & Tools',
        title1: 'Every calculator you need,',
        title2: 'in one fast place.',
        subtitle: 'Finance, health, math, converters, text and date tools — all free, all instant, all private. No signup. No downloads. Results calculated right inside your browser.',
        searchPlaceholder: 'Search calculator…',
        searchBtn: 'Search',
        popular: 'Popular:',
        statTools: 'Free Tools',
        statUses: 'Monthly Uses',
        statPrivate: 'Private',
        statLangs: 'Languages'
      },
      sections: {
        categoriesTitle: 'Browse by category',
        categoriesSub: 'Eight focused collections covering everything.',
        viewAll: 'View all tools',
        popularTitle: 'Most popular tools',
        popularSub: 'The calculators people open every single day.',
        allToolsTitle: 'All calculators & tools',
        allToolsSub: 'Filter by category or search',
        toolsAvailable: 'tools available',
        filterPlaceholder: 'Filter tools by name…',
        loadMore: 'Load more tools',
        showing: 'Showing',
        of: 'of',
        noResultsTitle: 'No tools matched your search',
        noResultsSub: 'Try a different keyword or clear the filters.',
        clearFilters: 'Clear filters',
        openTool: 'Open tool'
      },
      about: {
        title: 'About Calcify',
        aboutHeading: 'About the tool',
        aboutBody: 'Calcify is a free online calculator hub built for people who need an answer in seconds. The platform hosts more than 150 individual tools across eight practical categories: finance, health and fitness, mathematics, unit converters, text utilities, date and time helpers, developer utilities and everyday lifestyle calculators. Every tool runs entirely inside your browser using plain JavaScript — results appear instantly and your numbers never leave your device.',
        howHeading: 'How to use Calcify',
        step1: 'Pick a category from the eight cards above or open the All Tools list.',
        step2: 'Search by name — type “EMI”, “BMI” or “percentage” and results filter live.',
        step3: 'Open the tool and enter your values — most recalculate instantly.',
        step4: 'Read the breakdown with formulas, charts and plain-English explanations.',
        step5: 'Copy or share the result. Nothing is stored on our servers.'
      },
      premium: {
        badge: 'Calcify Premium',
        title: 'Remove every ad. Unlock pro features.',
        body: 'Ad-free browsing, unlimited saved calculations, CSV & PDF export, priority support and early access to new tools — for less than a cup of coffee a month.',
        f1: 'Zero ads, ever',
        f2: 'Unlimited saved results',
        f3: 'PDF & CSV export',
        f4: 'Priority email support',
        price: '₹99',
        perMonth: '/ month',
        yearly: 'or ₹799/year — save 33%',
        cta: 'Go Premium — Remove Ads',
        guarantee: '7-day money-back guarantee · Cancel anytime',
        miniCta: 'Remove Ads — ₹99/mo'
      },
      newsletter: {
        sideTitle: 'New tools weekly',
        sideBody: 'Get one short email whenever we ship a new calculator. No spam, unsubscribe in one click.',
        subscribe: 'Subscribe free',
        success: 'You are subscribed. Check your inbox!',
        bigTitle: 'Never miss a new calculator',
        bigBody: 'Join 48,000+ readers who get a short weekly digest of new tools, money tips and productivity hacks. One email, zero spam.',
        bigBtn: 'Subscribe',
        privacy: 'We respect your privacy. Unsubscribe anytime.',
        emailPlaceholder: 'you@example.com'
      },
      footer: {
        tagline: '150+ free smart calculators & tools. Fast, private, accurate — built for the whole world.',
        categories: 'Categories',
        popularTools: 'Popular Tools',
        company: 'Company',
        aboutUs: 'About Us',
        contact: 'Contact',
        goPremium: 'Go Premium',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        sitemap: 'Sitemap',
        rights: 'All rights reserved.'
      },
      categories: {
        finance: 'Finance',
        health: 'Health',
        math: 'Math',
        converter: 'Converters',
        text: 'Text Tools',
        date: 'Date & Time',
        dev: 'Developer',
        other: 'Everyday'
      },
      common: {
        backToTop: 'Back to top',
        advertisement: 'Advertisement',
        skipToContent: 'Skip to content'
      }
    },

    hi: {
      meta: { code: 'hi', name: 'हिन्दी', dir: 'ltr' },
      nav: {
        allTools: 'सभी टूल्स',
        categories: 'श्रेणियाँ',
        popular: 'लोकप्रिय',
        about: 'हमारे बारे में',
        contact: 'संपर्क',
        premium: 'प्रीमियम लें',
        search: 'टूल्स खोजें…',
        searchShort: 'कैलकुलेटर खोजें…',
        language: 'भाषा',
        theme: 'डार्क मोड बदलें',
        menu: 'मेन्यू खोलें'
      },
      hero: {
        badge: '150+ मुफ्त स्मार्ट कैलकुलेटर और टूल्स',
        title1: 'आपको जो भी कैलकुलेटर चाहिए,',
        title2: 'सब एक तेज़ जगह पर।',
        subtitle: 'फाइनेंस, हेल्थ, मैथ, कन्वर्टर, टेक्स्ट और डेट टूल्स — सब मुफ्त, तुरंत और प्राइवेट। कोई साइनअप नहीं। कोई डाउनलोड नहीं। परिणाम आपके ब्राउज़र में ही।',
        searchPlaceholder: 'कैलकुलेटर खोजें…',
        searchBtn: 'खोजें',
        popular: 'लोकप्रिय:',
        statTools: 'मुफ्त टूल्स',
        statUses: 'मासिक उपयोग',
        statPrivate: 'प्राइवेट',
        statLangs: 'भाषाएँ'
      },
      sections: {
        categoriesTitle: 'श्रेणी से ब्राउज़ करें',
        categoriesSub: 'आठ केंद्रित संग्रह, सब कुछ कवर।',
        viewAll: 'सभी टूल्स देखें',
        popularTitle: 'सबसे लोकप्रिय टूल्स',
        popularSub: 'रोज़ खोले जाने वाले कैलकुलेटर।',
        allToolsTitle: 'सभी कैलकुलेटर और टूल्स',
        allToolsSub: 'श्रेणी से फ़िल्टर करें या खोजें',
        toolsAvailable: 'टूल्स उपलब्ध',
        filterPlaceholder: 'नाम से टूल्स फ़िल्टर करें…',
        loadMore: 'और टूल्स लोड करें',
        showing: 'दिखा रहे हैं',
        of: 'में से',
        noResultsTitle: 'कोई टूल नहीं मिला',
        noResultsSub: 'दूसरा कीवर्ड आज़माएँ या फ़िल्टर हटाएँ।',
        clearFilters: 'फ़िल्टर हटाएँ',
        openTool: 'टूल खोलें'
      },
      about: {
        title: 'Calcify के बारे में',
        aboutHeading: 'टूल के बारे में',
        aboutBody: 'Calcify एक मुफ्त ऑनलाइन कैलकुलेटर हब है उन लोगों के लिए जिन्हें सेकंडों में जवाब चाहिए। प्लेटफ़ॉर्म पर 150 से अधिक टूल्स आठ व्यावहारिक श्रेणियों में हैं: फाइनेंस, हेल्थ और फिटनेस, गणित, यूनिट कन्वर्टर, टेक्स्ट यूटिलिटीज़, डेट और टाइम, डेवलपर टूल्स और रोज़मर्रा के टूल्स। हर टूल सीधे आपके ब्राउज़र में चलता है — परिणाम तुरंत और आपका डेटा कहीं नहीं जाता।',
        howHeading: 'Calcify का उपयोग कैसे करें',
        step1: 'ऊपर आठ कार्ड्स में से श्रेणी चुनें या All Tools सूची खोलें।',
        step2: 'नाम से खोजें — “EMI”, “BMI” या “percentage” टाइप करें, परिणाम तुरंत फ़िल्टर होंगे।',
        step3: 'टूल खोलें और मान भरें — ज़्यादातर तुरंत पुनर्गणना करते हैं।',
        step4: 'सूत्रों, चार्ट और आसान भाषा में व्याख्या पढ़ें।',
        step5: 'परिणाम कॉपी या शेयर करें। हमारे सर्वर पर कुछ भी सेव नहीं होता।'
      },
      premium: {
        badge: 'Calcify प्रीमियम',
        title: 'हर विज्ञापन हटाएँ। प्रो फीचर्स अनलॉक करें।',
        body: 'विज्ञापन-मुक्त ब्राउज़िंग, असीमित सेव्ड गणनाएँ, CSV और PDF एक्सपोर्ट, प्राथमिकता सपोर्ट और नए टूल्स तक जल्दी पहुँच — एक कप कॉफ़ी से भी कम में।',
        f1: 'कभी कोई विज्ञापन नहीं',
        f2: 'असीमित सेव्ड परिणाम',
        f3: 'PDF और CSV एक्सपोर्ट',
        f4: 'प्राथमिकता ईमेल सपोर्ट',
        price: '₹99',
        perMonth: '/ माह',
        yearly: 'या ₹799/वर्ष — 33% बचाएँ',
        cta: 'प्रीमियम लें — विज्ञापन हटाएँ',
        guarantee: '7-दिन मनी-बैक गारंटी · कभी भी रद्द करें',
        miniCta: 'विज्ञापन हटाएँ — ₹99/माह'
      },
      newsletter: {
        sideTitle: 'हर हफ़्ते नए टूल्स',
        sideBody: 'जब भी हम नया कैलकुलेटर जारी करें, एक छोटा ईमेल पाएँ। कोई स्पैम नहीं।',
        subscribe: 'मुफ्त सब्सक्राइब करें',
        success: 'आप सब्सक्राइब हो गए। इनबॉक्स देखें!',
        bigTitle: 'नया कैलकुलेटर कभी न चूकें',
        bigBody: '48,000+ पाठकों से जुड़ें जिन्हें हर हफ़्ते नए टूल्स, मनी टिप्स और प्रोडक्टिविटी हैक्स मिलते हैं। एक ईमेल, शून्य स्पैम।',
        bigBtn: 'सब्सक्राइब करें',
        privacy: 'हम आपकी प्राइवेसी का सम्मान करते हैं। कभी भी अनसब्सक्राइब करें।',
        emailPlaceholder: 'you@example.com'
      },
      footer: {
        tagline: '150+ मुफ्त स्मार्ट कैलकुलेटर और टूल्स। तेज़, प्राइवेट, सटीक — पूरी दुनिया के लिए।',
        categories: 'श्रेणियाँ',
        popularTools: 'लोकप्रिय टूल्स',
        company: 'कंपनी',
        aboutUs: 'हमारे बारे में',
        contact: 'संपर्क',
        goPremium: 'प्रीमियम लें',
        privacy: 'प्राइवेसी पॉलिसी',
        terms: 'उपयोग की शर्तें',
        sitemap: 'साइटमैप',
        rights: 'सर्वाधिकार सुरक्षित।'
      },
      categories: {
        finance: 'फाइनेंस',
        health: 'हेल्थ',
        math: 'गणित',
        converter: 'कन्वर्टर',
        text: 'टेक्स्ट टूल्स',
        date: 'डेट और टाइम',
        dev: 'डेवलपर',
        other: 'रोज़मर्रा'
      },
      common: {
        backToTop: 'ऊपर जाएँ',
        advertisement: 'विज्ञापन',
        skipToContent: 'सामग्री पर जाएँ'
      }
    }
  };

    es: {
    meta: { code: 'es', name: 'Español', dir: 'ltr' },
    nav: {
      allTools: 'Todas las herramientas',
      categories: 'Categorías',
      popular: 'Populares',
      about: 'Acerca de',
      contact: 'Contacto',
      premium: 'Hazte Premium',
      search: 'Buscar herramientas…',
      searchShort: 'Buscar calculadora…',
      language: 'Idioma',
      theme: 'Cambiar modo oscuro',
      menu: 'Abrir menú'
    },
    hero: {
      badge: '150+ Calculadoras y Herramientas Gratis',
      title1: 'Todas las calculadoras que necesitas,',
      title2: 'en un solo lugar rápido.',
      subtitle: 'Finanzas, salud, matemáticas, conversores, texto y fechas — todo gratis, todo instantáneo, todo privado. Sin registro. Sin descargas.',
      searchPlaceholder: 'Buscar calculadora…',
      searchBtn: 'Buscar',
      popular: 'Populares:',
      statTools: 'Herramientas Gratis',
      statUses: 'Usos Mensuales',
      statPrivate: 'Privado',
      statLangs: 'Idiomas'
    },
    sections: {
      categoriesTitle: 'Explorar por categoría',
      categoriesSub: 'Ocho colecciones enfocadas que cubren todo.',
      viewAll: 'Ver todas las herramientas',
      popularTitle: 'Herramientas más populares',
      popularSub: 'Las calculadoras que la gente abre cada día.',
      allToolsTitle: 'Todas las calculadoras y herramientas',
      allToolsSub: 'Filtra por categoría o busca',
      toolsAvailable: 'herramientas disponibles',
      filterPlaceholder: 'Filtrar herramientas por nombre…',
      loadMore: 'Cargar más herramientas',
      showing: 'Mostrando',
      of: 'de',
      noResultsTitle: 'Ninguna herramienta coincide',
      noResultsSub: 'Prueba otra palabra o limpia los filtros.',
      clearFilters: 'Limpiar filtros',
      openTool: 'Abrir herramienta'
    },
    about: {
      title: 'Acerca de Calcify',
      aboutHeading: 'Sobre la herramienta',
      aboutBody: 'Calcify es un centro de calculadoras online gratis para personas que necesitan una respuesta en segundos. La plataforma alberga más de 150 herramientas en ocho categorías prácticas: finanzas, salud, matemáticas, conversores, texto, fecha y hora, desarrollo y utilidades cotidianas. Cada herramienta funciona directamente en tu navegador — los resultados aparecen al instante y tus datos nunca salen de tu dispositivo.',
      howHeading: 'Cómo usar Calcify',
      step1: 'Elige una categoría de las ocho tarjetas o abre la lista de Todas las herramientas.',
      step2: 'Busca por nombre — escribe “EMI”, “BMI” o “percentage” y los resultados se filtran al instante.',
      step3: 'Abre la herramienta e introduce tus valores — la mayoría recalcula al instante.',
      step4: 'Lee el desglose con fórmulas, gráficos y explicaciones claras.',
      step5: 'Copia o comparte el resultado. Nada se guarda en nuestros servidores.'
    },
    premium: {
      badge: 'Calcify Premium',
      title: 'Elimina todos los anuncios. Desbloquea funciones pro.',
      body: 'Navegación sin anuncios, cálculos guardados ilimitados, exportación CSV y PDF, soporte prioritario y acceso anticipado a nuevas herramientas.',
      f1: 'Cero anuncios, siempre',
      f2: 'Resultados guardados ilimitados',
      f3: 'Exportación PDF y CSV',
      f4: 'Soporte prioritario',
      price: '₹99',
      perMonth: '/ mes',
      yearly: 'o ₹799/año — ahorra 33%',
      cta: 'Hazte Premium — Sin Anuncios',
      guarantee: 'Garantía de 7 días · Cancela cuando quieras',
      miniCta: 'Sin anuncios — ₹99/mes'
    },
    newsletter: {
      sideTitle: 'Nuevas herramientas cada semana',
      sideBody: 'Recibe un correo corto cuando publiquemos una nueva calculadora. Sin spam.',
      subscribe: 'Suscribirse gratis',
      success: '¡Estás suscrito! Revisa tu correo.',
      bigTitle: 'Nunca te pierdas una nueva calculadora',
      bigBody: 'Únete a 48,000+ lectores que reciben un resumen semanal de nuevas herramientas, consejos y trucos.',
      bigBtn: 'Suscribirse',
      privacy: 'Respetamos tu privacidad. Cancela cuando quieras.',
      emailPlaceholder: 'tu@ejemplo.com'
    },
    footer: {
      tagline: '150+ calculadoras y herramientas gratis. Rápido, privado, preciso.',
      categories: 'Categorías',
      popularTools: 'Herramientas Populares',
      company: 'Empresa',
      aboutUs: 'Sobre Nosotros',
      contact: 'Contacto',
      goPremium: 'Hazte Premium',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Uso',
      sitemap: 'Mapa del Sitio',
      rights: 'Todos los derechos reservados.'
    },
    categories: {
      finance: 'Finanzas',
      health: 'Salud',
      math: 'Matemáticas',
      converter: 'Conversores',
      text: 'Herramientas de Texto',
      date: 'Fecha y Hora',
      dev: 'Desarrollo',
      other: 'Cotidianas'
    },
    common: {
      backToTop: 'Volver arriba',
      advertisement: 'Publicidad',
      skipToContent: 'Saltar al contenido'
    }
  },

  ar: {
    meta: { code: 'ar', name: 'العربية', dir: 'rtl' },
    nav: {
      allTools: 'كل الأدوات',
      categories: 'الفئات',
      popular: 'الأكثر شيوعاً',
      about: 'حول',
      contact: 'اتصل بنا',
      premium: 'احصل على بريميوم',
      search: 'ابحث عن الأدوات…',
      searchShort: 'ابحث عن آلة حاسبة…',
      language: 'اللغة',
      theme: 'تبديل الوضع الليلي',
      menu: 'فتح القائمة'
    },
    hero: {
      badge: 'أكثر من 150 حاسبة وأداة مجانية',
      title1: 'كل الآلات الحاسبة التي تحتاجها،',
      title2: 'في مكان واحد سريع.',
      subtitle: 'أدوات المال والصحة والرياضيات والتحويل والنصوص والتواريخ — كلها مجانية وفورية وخاصة. بدون تسجيل. بدون تنزيل.',
      searchPlaceholder: 'ابحث عن آلة حاسبة…',
      searchBtn: 'ابحث',
      popular: 'الأكثر شيوعاً:',
      statTools: 'أدوات مجانية',
      statUses: 'استخدامات شهرية',
      statPrivate: 'خاص',
      statLangs: 'لغات'
    },
    sections: {
      categoriesTitle: 'تصفح حسب الفئة',
      categoriesSub: 'ثماني مجموعات تغطي كل شيء.',
      viewAll: 'عرض جميع الأدوات',
      popularTitle: 'الأدوات الأكثر شيوعاً',
      popularSub: 'الحاسبات التي يفتحها الناس كل يوم.',
      allToolsTitle: 'كل الحاسبات والأدوات',
      allToolsSub: 'قم بالتصفية حسب الفئة أو ابحث',
      toolsAvailable: 'أدوات متاحة',
      filterPlaceholder: 'تصفية الأدوات بالاسم…',
      loadMore: 'تحميل المزيد',
      showing: 'عرض',
      of: 'من',
      noResultsTitle: 'لا توجد أدوات مطابقة',
      noResultsSub: 'جرّب كلمة أخرى أو امسح الفلاتر.',
      clearFilters: 'مسح الفلاتر',
      openTool: 'افتح الأداة'
    },
    about: {
      title: 'حول Calcify',
      aboutHeading: 'حول الأداة',
      aboutBody: 'Calcify هو مركز حاسبات مجاني على الإنترنت للأشخاص الذين يحتاجون إجابة في ثوانٍ. تستضيف المنصة أكثر من 150 أداة في ثماني فئات: المال والصحة والرياضيات والمحولات والنصوص والتواريخ وأدوات المطورين والأدوات اليومية. كل أداة تعمل مباشرة في متصفحك — النتائج فورية وبياناتك لا تغادر جهازك.',
      howHeading: 'كيفية استخدام Calcify',
      step1: 'اختر فئة من البطاقات الثماني أو افتح قائمة كل الأدوات.',
      step2: 'ابحث بالاسم — اكتب “EMI” أو “BMI” أو “percentage” وستُصفى النتائج فوراً.',
      step3: 'افتح الأداة وأدخل القيم — معظمها يعيد الحساب فوراً.',
      step4: 'اقرأ الشرح مع الصيغ والرسوم البيانية.',
      step5: 'انسخ أو شارك النتيجة. لا يتم حفظ أي شيء على خوادمنا.'
    },
    premium: {
      badge: 'Calcify بريميوم',
      title: 'أزل كل الإعلانات. افتح الميزات الاحترافية.',
      body: 'تصفح بدون إعلانات، حسابات محفوظة غير محدودة، تصدير CSV وPDF، دعم ذو أولوية ووصول مبكر للأدوات الجديدة.',
      f1: 'صفر إعلانات، دائماً',
      f2: 'نتائج محفوظة غير محدودة',
      f3: 'تصدير PDF وCSV',
      f4: 'دعم بريد إلكتروني ذو أولوية',
      price: '₹99',
      perMonth: '/ شهرياً',
      yearly: 'أو ₹799/سنوياً — وفّر 33%',
      cta: 'احصل على بريميوم — بلا إعلانات',
      guarantee: 'ضمان استرداد 7 أيام · إلغاء في أي وقت',
      miniCta: 'بلا إعلانات — ₹99/شهر'
    },
    newsletter: {
      sideTitle: 'أدوات جديدة أسبوعياً',
      sideBody: 'احصل على بريد قصير عند إصدار حاسبة جديدة. بدون إزعاج.',
      subscribe: 'اشترك مجاناً',
      success: 'تم اشتراكك! تحقق من بريدك.',
      bigTitle: 'لا تفوّت أي حاسبة جديدة',
      bigBody: 'انضم إلى أكثر من 48000 قارئ يحصلون على ملخص أسبوعي قصير.',
      bigBtn: 'اشترك',
      privacy: 'نحن نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.',
      emailPlaceholder: 'you@example.com'
    },
    footer: {
      tagline: 'أكثر من 150 حاسبة وأداة مجانية. سريعة وآمنة ودقيقة.',
      categories: 'الفئات',
      popularTools: 'الأدوات الشائعة',
      company: 'الشركة',
      aboutUs: 'من نحن',
      contact: 'اتصل بنا',
      goPremium: 'احصل على بريميوم',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
      sitemap: 'خريطة الموقع',
      rights: 'جميع الحقوق محفوظة.'
    },
    categories: {
      finance: 'المال',
      health: 'الصحة',
      math: 'الرياضيات',
      converter: 'المحولات',
      text: 'أدوات النص',
      date: 'التاريخ والوقت',
      dev: 'المطورون',
      other: 'يومية'
    },
    common: {
      backToTop: 'العودة للأعلى',
      advertisement: 'إعلان',
      skipToContent: 'تخطَّ إلى المحتوى'
    }
  }
};

  /* ------------------------------------------------------------
     2. CORE — current language, get, set, translate
     ------------------------------------------------------------ */
  var STORAGE_KEY = 'calcify-lang';
  var DEFAULT_LANG = 'en';
  var SUPPORTED = ['en', 'hi', 'es', 'ar'];

  var currentLang = DEFAULT_LANG;

  function normalizeLang(code) {
    if (!code) return DEFAULT_LANG;
    code = String(code).toLowerCase().slice(0, 2);
    return SUPPORTED.indexOf(code) !== -1 ? code : DEFAULT_LANG;
  }

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase().slice(0, 2);
    return SUPPORTED.indexOf(nav) !== -1 ? nav : DEFAULT_LANG;
  }

  /**
   * Translate a key path like "hero.title1" using the current language.
   * Falls back to English if key missing; returns the key itself if missing everywhere.
   */
  function t(path, fallback) {
    if (!path) return fallback || '';
    var parts = String(path).split('.');
    var dict = TRANSLATIONS[currentLang] || TRANSLATIONS[DEFAULT_LANG];
    var en = TRANSLATIONS[DEFAULT_LANG];
    var val = walk(dict, parts);
    if (val == null) val = walk(en, parts);
    return val != null ? val : (fallback != null ? fallback : path);
  }

  function walk(obj, parts) {
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null || typeof cur !== 'object') return null;
      cur = cur[parts[i]];
    }
    return cur;
  }

  /* ------------------------------------------------------------
     3. DIRECTION (LTR / RTL)
     ------------------------------------------------------------ */
  function applyDirection(lang) {
    var meta = (TRANSLATIONS[lang] && TRANSLATIONS[lang].meta) || { dir: 'ltr' };
    var dir = meta.dir || 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
    // Body class to allow CSS hooks
    if (dir === 'rtl') document.body.classList.add('is-rtl');
    else document.body.classList.remove('is-rtl');
  }

  /* ------------------------------------------------------------
     4. DOM SCANNER — [data-i18n], [data-i18n-placeholder], [data-i18n-aria]
     ------------------------------------------------------------ */
  function applyTranslations(root) {
    root = root || document;

    // Text content
    root.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      var val = t(key);
      if (val == null) return;
      // Preserve child elements that have their own data-i18n? Simple: just set textContent
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
      else el.textContent = val;
    });

    // Placeholder
    root.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (!key) return;
      var val = t(key);
      if (val != null) el.setAttribute('placeholder', val);
    });

    // Title attribute
    root.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (!key) return;
      var val = t(key);
      if (val != null) el.setAttribute('title', val);
    });

    // aria-label
    root.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (!key) return;
      var val = t(key);
      if (val != null) el.setAttribute('aria-label', val);
    });
  }

  /* ------------------------------------------------------------
     5. LANGUAGE SWITCHER UI
     ------------------------------------------------------------ */
  function updateSwitcherUI(lang) {
    var label = document.getElementById('langLabel');
    if (label) label.textContent = lang.toUpperCase();

    document.querySelectorAll('.lang-opt').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }

  function setLang(code, opts) {
    opts = opts || {};
    var lang = normalizeLang(code);
    if (lang === currentLang && !opts.force) {
      updateSwitcherUI(lang);
      return;
    }
    currentLang = lang;

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    applyDirection(lang);
    applyTranslations(document);
    updateSwitcherUI(lang);

    // Update html lang + meta
    document.documentElement.setAttribute('lang', lang);

    // Notify the rest of the app
    document.dispatchEvent(new CustomEvent('calcify:langchange', {
      detail: { lang: lang, meta: TRANSLATIONS[lang].meta }
    }));
  }

  function initSwitcher() {
    document.querySelectorAll('.lang-opt').forEach(function (btn) {
      if (btn.dataset.i18nBound === '1') return;
      btn.dataset.i18nBound = '1';
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        setLang(lang);
        // Close dropdown if open
        var menu = document.getElementById('langMenu');
        if (menu) {
          menu.classList.add('invisible', 'opacity-0', 'translate-y-1');
        }
      });
    });
  }

  /* ------------------------------------------------------------
     6. LOCALISED FORMATTERS (currency, number, date)
     ------------------------------------------------------------ */
  var LOCALE_MAP = {
    en: 'en-US',
    hi: 'en-IN',
    es: 'es-ES',
    ar: 'ar-EG'
  };

  function locale() {
    return LOCALE_MAP[currentLang] || 'en-US';
  }

  function formatNumber(n, decimals) {
    if (n == null || isNaN(n)) return '—';
    decimals = (decimals == null) ? 2 : decimals;
    try {
      return new Intl.NumberFormat(locale(), {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      }).format(n);
    } catch (e) {
      return String(n);
    }
  }

  function formatCurrency(n, currencyCode) {
    if (n == null || isNaN(n)) return '—';
    currencyCode = currencyCode || (currentLang === 'hi' ? 'INR' : 'USD');
    try {
      return new Intl.NumberFormat(locale(), {
        style: 'currency',
        currency: currencyCode,
        maximumFractionDigits: 2
      }).format(n);
    } catch (e) {
      return currencyCode + ' ' + formatNumber(n);
    }
  }

  function formatDate(date, style) {
    if (!date) return '—';
    var d = (date instanceof Date) ? date : new Date(date);
    if (isNaN(d.getTime())) return '—';
    style = style || 'medium';
    try {
      return new Intl.DateTimeFormat(locale(), { dateStyle: style }).format(d);
    } catch (e) {
      return d.toLocaleDateString();
    }
  }

  /* ------------------------------------------------------------
     7. PUBLIC API
     ------------------------------------------------------------ */
  var I18n = {
    version: '1.0.0',
    supported: SUPPORTED.slice(),
    dictionaries: TRANSLATIONS,

    get current() { return currentLang; },
    get locale()  { return locale(); },

    t: t,
    translate: t,

    set: setLang,
    setLang: setLang,

    apply: applyTranslations,

    formatNumber: formatNumber,
    formatCurrency: formatCurrency,
    formatDate: formatDate,

    /** Returns the language meta object for the current language */
    meta: function () { return TRANSLATIONS[currentLang].meta; },

    /** Register a tool page's extra dictionary (per-page translations) */
    extend: function (lang, payload) {
      lang = normalizeLang(lang);
      if (!TRANSLATIONS[lang]) return;
      deepMerge(TRANSLATIONS[lang], payload);
      if (lang === currentLang) applyTranslations(document);
    }
  };

  function deepMerge(target, src) {
    if (!src || typeof src !== 'object') return target;
    Object.keys(src).forEach(function (k) {
      if (src[k] && typeof src[k] === 'object' && !Array.isArray(src[k])) {
        target[k] = target[k] || {};
        deepMerge(target[k], src[k]);
      } else {
        target[k] = src[k];
      }
    });
    return target;
  }

  Calcify.i18n = I18n;

  /* ------------------------------------------------------------
     8. BOOT
     ------------------------------------------------------------ */
  function boot() {
    // Detect initial language (bootstrap in <head> already set html lang/dir)
    var initial = detectLang();
    currentLang = initial;
    applyDirection(initial);

    // Apply translations to static content (if any data-i18n attributes present)
    applyTranslations(document);

    // Wire language switcher buttons
    initSwitcher();

    // Update label in header
    updateSwitcherUI(initial);

    // Re-apply when DOM changes (lightweight observer for dynamic content)
    if (window.MutationObserver) {
      var mo = new MutationObserver(function (mutations) {
        var needsApply = false;
        mutations.forEach(function (m) {
          if (m.type === 'childList' && m.addedNodes.length) {
            for (var i = 0; i < m.addedNodes.length; i++) {
              var n = m.addedNodes[i];
              if (n.nodeType === 1 &&
                  (n.hasAttribute && (n.hasAttribute('data-i18n') ||
                   n.querySelector && n.querySelector('[data-i18n]')))) {
                needsApply = true;
                break;
              }
            }
          }
        });
        if (needsApply) applyTranslations(document);
      });
      mo.observe(document.body, { childList: true, subtree: true });
    }

    // Signal ready
    document.documentElement.setAttribute('data-calcify-i18n', 'ready');
    document.dispatchEvent(new CustomEvent('calcify:i18nready'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
