export const blogPosts = [
  {
    id: "responsive-layout",
    image: "1",
    comments: 10,
    translations: {
      es: {
        slug: "como-cuida-la-maquetacion-responsive-en-proyectos-reales",
        date: { day: 20, month: "Jun" },
        metaDate: "20 Jun 2024",
        tag: "Responsive",
        title: "Cómo cuido la maquetación responsive en proyectos reales",
        excerpt:
          "Un repaso práctico a decisiones que ayudan a que una interfaz funcione bien en diferentes tamaños de pantalla...",
        paragraphs: [
          "Cuando trabajo una interfaz responsive, intento que cada decisión tenga sentido más allá del ajuste visual. No se trata solo de que todo quepa en pantalla, sino de que la jerarquía, la lectura y la interacción sigan funcionando bien en móvil, tablet y escritorio.",
          "Suelo empezar por revisar estructura, espaciados, tipografía y puntos de ruptura reales. Muchas veces el problema no está en un único componente, sino en cómo varias piezas conviven cuando el ancho disponible cambia de verdad.",
          "También me fijo mucho en detalles como textos largos, botones, tarjetas o bloques con metadatos. Son justo esos elementos los que suelen romper layouts en producción si no se plantean con algo de margen y criterio frontend.",
        ],
      },
      ca: {
        slug: "com-cuido-la-maquetacio-responsive-en-projectes-reals",
        date: { day: 20, month: "Jun" },
        metaDate: "20 Jun 2024",
        tag: "Responsive",
        title: "Com cuido la maquetació responsive en projectes reals",
        excerpt:
          "Un repàs pràctic a decisions que ajuden que una interfície funcioni bé en diferents mides de pantalla...",
        paragraphs: [
          "Quan treballo una interfície responsive, intento que cada decisió tingui sentit més enllà de l'ajust visual. No es tracta només que tot hi càpiga a la pantalla, sinó que la jerarquia, la lectura i la interacció continuïn funcionant bé en mòbil, tauleta i escriptori.",
          "Acostumo a començar revisant estructura, espaiats, tipografia i punts de ruptura reals. Moltes vegades el problema no és en un únic component, sinó en com diverses peces conviuen quan l'amplada disponible canvia de debò.",
          "També em fixo molt en detalls com textos llargs, botons, targetes o blocs amb metadades. Són justament aquests elements els que solen trencar layouts en producció si no es plantegen amb una mica de marge i criteri frontend.",
        ],
      },
      en: {
        slug: "how-i-approach-responsive-layout-in-real-projects",
        date: { day: 20, month: "Jun" },
        metaDate: "20 Jun 2024",
        tag: "Responsive",
        title: "How I approach responsive layout in real projects",
        excerpt:
          "A practical look at decisions that help interfaces work well across different screen sizes...",
        paragraphs: [
          "When I work on a responsive interface, I want every decision to make sense beyond just fitting content on screen. It is not only about making things smaller, but about preserving hierarchy, readability and interaction across mobile, tablet and desktop.",
          "I usually start by reviewing structure, spacing, typography and realistic breakpoints. In many cases the issue is not a single component, but the way several pieces interact when the available width changes for real.",
          "I also pay a lot of attention to long titles, buttons, cards and metadata blocks. Those are often the elements that break layouts in production if they are not designed with enough frontend margin and intention.",
        ],
      },
      sv: {
        slug: "sa-arbetar-jag-med-responsiv-layout-i-riktiga-projekt",
        date: { day: 20, month: "Jun" },
        metaDate: "20 Jun 2024",
        tag: "Responsivt",
        title: "Så arbetar jag med responsiv layout i riktiga projekt",
        excerpt:
          "En praktisk genomgång av beslut som hjälper gränssnitt att fungera bra på olika skärmstorlekar...",
        paragraphs: [
          "När jag arbetar med ett responsivt gränssnitt vill jag att varje beslut ska hålla även utanför den perfekta desktopvyn. Det handlar inte bara om att få allt att rymmas, utan om att bevara hierarki, läsbarhet och interaktion i mobil, surfplatta och desktop.",
          "Jag brukar börja med att granska struktur, spacing, typografi och realistiska brytpunkter. Ofta är problemet inte en enskild komponent, utan hur flera delar beter sig tillsammans när bredden faktiskt förändras.",
          "Jag lägger också mycket fokus på långa rubriker, knappar, kort och metadata. Det är ofta just de elementen som får layouts att gå sönder i produktion om de inte byggs med tillräcklig frontend-marginal och eftertanke.",
        ],
      },
    },
  },
  {
    id: "frontend-accessibility",
    image: "2",
    comments: 8,
    translations: {
      es: {
        slug: "accesibilidad-frontend-mas-alla-del-checklist",
        date: { day: 12, month: "May" },
        metaDate: "12 May 2024",
        tag: "Accesibilidad",
        title: "Accesibilidad frontend más allá del checklist",
        excerpt:
          "Pequeños detalles de semántica, foco y estructura que mejoran de verdad la experiencia de usuario...",
        paragraphs: [
          "La accesibilidad frontend no la veo como una tarea separada que se revisa al final, sino como parte de construir una interfaz correcta desde el principio. Etiquetas, foco, orden del DOM y contraste son cosas que afectan al producto real, no solo a una checklist.",
          "Muchas mejoras importantes son pequeñas: usar bien encabezados, cuidar estados de foco visibles, no romper la navegación por teclado o evitar componentes que dependen solo del hover. Son decisiones sencillas, pero con mucho impacto en la experiencia.",
          "Además, trabajar la accesibilidad casi siempre mejora también la claridad general del frontend. Una interfaz más semántica, más consistente y mejor estructurada suele ser también más mantenible y más fácil de entender para todo el mundo.",
        ],
      },
      ca: {
        slug: "accessibilitat-frontend-mes-enlla-del-checklist",
        date: { day: 12, month: "Mai" },
        metaDate: "12 Mai 2024",
        tag: "Accessibilitat",
        title: "Accessibilitat frontend més enllà del checklist",
        excerpt:
          "Petits detalls de semàntica, focus i estructura que milloren de debò l'experiència d'usuari...",
        paragraphs: [
          "No veig l'accessibilitat frontend com una tasca separada que es revisa al final, sinó com una part de construir una interfície correcta des del principi. Etiquetes, focus, ordre del DOM i contrast són coses que afecten el producte real, no només una checklist.",
          "Moltes millores importants són petites: fer servir bé els encapçalaments, cuidar estats de focus visibles, no trencar la navegació amb teclat o evitar components que depenen només del hover. Són decisions senzilles, però amb molt impacte en l'experiència.",
          "A més, treballar l'accessibilitat gairebé sempre millora també la claredat general del frontend. Una interfície més semàntica, més consistent i millor estructurada acostuma a ser també més mantenible i més fàcil d'entendre per a tothom.",
        ],
      },
      en: {
        slug: "frontend-accessibility-beyond-the-checklist",
        date: { day: 12, month: "May" },
        metaDate: "12 May 2024",
        tag: "Accessibility",
        title: "Frontend accessibility beyond the checklist",
        excerpt:
          "Small details in semantics, focus and structure that genuinely improve user experience...",
        paragraphs: [
          "I do not see frontend accessibility as a separate task to review at the end, but as part of building the interface correctly from the start. Labels, focus, DOM order and contrast affect the real product, not just a checklist.",
          "Many of the most important improvements are small ones: proper headings, visible focus states, solid keyboard navigation and avoiding components that depend only on hover. They are simple decisions, but they have a strong effect on the overall experience.",
          "Working on accessibility usually improves the frontend in broader ways too. A more semantic, consistent and well-structured interface tends to be easier to maintain and easier to understand for everyone.",
        ],
      },
      sv: {
        slug: "frontend-tillganglighet-bortom-checklistan",
        date: { day: 12, month: "Maj" },
        metaDate: "12 Maj 2024",
        tag: "Tillgänglighet",
        title: "Frontend-tillgänglighet bortom checklistan",
        excerpt:
          "Små detaljer i semantik, fokus och struktur som faktiskt förbättrar användarupplevelsen...",
        paragraphs: [
          "Jag ser inte frontend-tillgänglighet som något man kontrollerar i slutet, utan som en del av att bygga gränssnitt rätt från början. Etiketter, fokus, DOM-ordning och kontrast påverkar den verkliga produkten, inte bara en checklista.",
          "Många av de viktigaste förbättringarna är små: tydliga rubriknivåer, synliga fokuslägen, fungerande tangentbordsnavigering och att undvika komponenter som bara fungerar med hover. Enkla beslut, men med stor påverkan.",
          "När man arbetar med tillgänglighet blir frontend nästan alltid bättre även i stort. Ett mer semantiskt, konsekvent och välstrukturerat gränssnitt blir också lättare att underhålla och lättare att förstå för fler användare.",
        ],
      },
    },
  },
  {
    id: "web-performance",
    image: "3",
    comments: 6,
    translations: {
      es: {
        slug: "performance-web-que-suelo-revisar-primero",
        date: { day: 28, month: "Apr" },
        metaDate: "28 Apr 2024",
        tag: "Performance",
        title: "Performance web: qué suelo revisar primero",
        excerpt:
          "Carga de recursos, imágenes, CSS y jerarquía de contenido: un punto de partida realista para optimizar...",
        paragraphs: [
          "Cuando reviso el rendimiento de una web, intento empezar por lo que más impacto tiene y menos complejidad añade. Muchas veces el primer salto viene de imágenes, carga de CSS, fuentes o scripts que no deberían bloquear tan pronto.",
          "También suelo observar cómo se prioriza el contenido visible. Si el hero, los títulos o los bloques principales tardan en estabilizarse, la percepción de calidad baja mucho aunque el proyecto no sea especialmente pesado.",
          "Para mí, optimizar no es solo mejorar métricas. Es conseguir una experiencia más rápida y más estable para quien usa la web, manteniendo al mismo tiempo una base técnica razonable para seguir evolucionando el proyecto.",
        ],
      },
      ca: {
        slug: "performance-web-que-acostumo-a-revisar-primer",
        date: { day: 28, month: "Abr" },
        metaDate: "28 Abr 2024",
        tag: "Performance",
        title: "Performance web: què acostumo a revisar primer",
        excerpt:
          "Càrrega de recursos, imatges, CSS i jerarquia de contingut: un punt de partida realista per optimitzar...",
        paragraphs: [
          "Quan reviso el rendiment d'una web, intento començar pel que té més impacte i afegeix menys complexitat. Moltes vegades el primer salt ve d'imatges, càrrega de CSS, fonts o scripts que no haurien de bloquejar tan aviat.",
          "També acostumo a observar com es prioritza el contingut visible. Si l'hero, els títols o els blocs principals triguen a estabilitzar-se, la percepció de qualitat baixa molt encara que el projecte no sigui especialment pesat.",
          "Per a mi, optimitzar no és només millorar mètriques. És aconseguir una experiència més ràpida i més estable per a qui fa servir la web, mantenint alhora una base tècnica raonable per continuar evolucionant el projecte.",
        ],
      },
      en: {
        slug: "web-performance-what-i-usually-review-first",
        date: { day: 28, month: "Apr" },
        metaDate: "28 Apr 2024",
        tag: "Performance",
        title: "Web performance: what I usually review first",
        excerpt:
          "Resource loading, images, CSS and content hierarchy: a realistic starting point for optimization...",
        paragraphs: [
          "When I review website performance, I try to begin with the areas that create the biggest impact without adding unnecessary complexity. Very often the first gains come from images, CSS delivery, fonts or scripts that should not block so early.",
          "I also look at how visible content is prioritized. If the hero, headings or main blocks take too long to stabilize, the perceived quality drops quickly even when the site is not especially heavy.",
          "For me, optimization is not only about improving metrics. It is about delivering a faster, more stable experience while keeping a technical base that still makes sense for the future of the project.",
        ],
      },
      sv: {
        slug: "webbprestanda-det-jag-brukar-granska-forst",
        date: { day: 28, month: "Apr" },
        metaDate: "28 Apr 2024",
        tag: "Prestanda",
        title: "Webbprestanda: det jag brukar granska först",
        excerpt:
          "Resursladdning, bilder, CSS och innehållshierarki: en realistisk startpunkt för optimering...",
        paragraphs: [
          "När jag granskar prestanda försöker jag börja där effekten är störst och komplexiteten lägst. Ofta kommer de första förbättringarna från bilder, CSS-laddning, typsnitt eller script som inte borde blockera så tidigt.",
          "Jag tittar också på hur synligt innehåll prioriteras. Om hero-sektion, rubriker eller huvudblock tar för lång tid att stabilisera sig, sjunker den upplevda kvaliteten snabbt även om sidan inte är särskilt tung.",
          "För mig handlar optimering inte bara om bättre siffror. Det handlar om att skapa en snabbare och stabilare upplevelse, samtidigt som den tekniska grunden fortfarande är rimlig att vidareutveckla.",
        ],
      },
    },
  },
];

export const getBlogPosts = (language) =>
  blogPosts.map((post) => ({
    id: post.id,
    image: post.image,
    comments: post.comments,
    ...post.translations[language],
  }));

export const getBlogPostBySlug = (slug) => {
  for (const post of blogPosts) {
    for (const [language, translation] of Object.entries(post.translations)) {
      if (translation.slug === slug) {
        return {
          id: post.id,
          image: post.image,
          comments: post.comments,
          language,
          ...translation,
        };
      }
    }
  }

  return null;
};

export const getBlogPostById = (id, language) => {
  const post = blogPosts.find((item) => item.id === id);

  if (!post) {
    return null;
  }

  return {
    id: post.id,
    image: post.image,
    comments: post.comments,
    ...post.translations[language],
  };
};

export const getAllBlogParams = () =>
  blogPosts.flatMap((post) =>
    Object.values(post.translations).map((translation) => ({
      slug: translation.slug,
    }))
  );

export const getBlogParamsByLanguages = (languages) =>
  blogPosts.flatMap((post) =>
    languages.flatMap((language) => {
      const translation = post.translations[language];

      return translation ? [{ slug: translation.slug }] : [];
    })
  );
