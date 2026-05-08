# marioisernia.com

Sito ufficiale di **Mario Isernia** — Consulente.
Sito statico (HTML/CSS/JS) identico alla versione Replit, pronto per GitHub Pages
e per il dominio personalizzato **marioisernia.com**.

---

## 📁 Struttura dei file

```
marioisernia.com/
├── index.html         # Home (hero, chi sono, servizi, perché me, CTA)
├── contatti.html      # Pagina contatti con form e sidebar
├── style.css          # Stile completo
├── script.js          # Navbar, menu mobile, animazioni, form
├── favicon.svg        # Icona del sito
├── opengraph.jpg      # Immagine per condivisioni social
├── images/
│   ├── hero-bg.png
│   └── mario-portrait.png
├── CNAME              # Dominio personalizzato (per GitHub Pages)
├── robots.txt         # SEO
├── sitemap.xml        # SEO
└── README.md          # Questa guida
```

---

## ✅ Cosa funziona già

Tutti i tasti/link sono funzionanti:

- **Menu**: Home, Contatti, Parliamone (desktop + mobile)
- **WhatsApp**: `https://wa.me/393473240929`
- **LinkedIn**: `https://www.linkedin.com/in/marioiserniasmm/`
- **Email**: `mailto:info@marioisernia.com`
- **Form contatti** (pagina `contatti.html`): apre il client email precompilato
- **Animazioni** on-scroll e navbar dinamica

⚠️ Gli unici link da completare sono nel footer: **Privacy Policy** e **Cookie Policy** attualmente vanno a `#`. Quando avrai le pagine pronte, sostituisci `href="#"` con i link reali (es. `href="privacy.html"`).

---

## ✏️ Come aggiornare i contenuti

Apri `index.html` o `contatti.html` con un editor di testo (VS Code, TextEdit, Blocco note) e modifica direttamente il testo tra i tag.

Le sezioni in `index.html` sono delimitate da commenti ben visibili:

```html
<!-- ========== HERO ========== -->
<!-- ========== CHI SONO ========== -->
<!-- ========== COSA POSSO FARE ========== -->
<!-- ========== SERVIZI ========== -->
<!-- ========== VISIONE ========== -->
<!-- ========== PERCHÉ LAVORARE CON ME ========== -->
<!-- ========== CTA FINALE ========== -->
<!-- ========== FOOTER ========== -->
```

### Cambiare contatti in tutto il sito
Cerca e sostituisci in `index.html`, `contatti.html` e `script.js`:
- Email: `info@marioisernia.com`
- WhatsApp: `393473240929`
- LinkedIn: `https://www.linkedin.com/in/marioiserniasmm/`

### Cambiare le immagini
- Hero background: sostituisci `images/hero-bg.png`
- Ritratto: sostituisci `images/mario-portrait.png`
(usa lo stesso nome file per evitare di modificare l'HTML)

---

## 🚀 Pubblicare online con GitHub Pages (gratis)

### 1. Crea un account su github.com (se non l'hai)

### 2. Crea un nuovo repository
- Clicca **"New repository"**
- Nome: `marioisernia.com`
- Visibilità: **Public**
- **NON** spuntare nulla (no README, no .gitignore)

### 3. Carica i file
Nel repository appena creato clicca **"uploading an existing file"** e
trascina **tutti i file** di questa cartella (incluso `CNAME` e la cartella `images/`).
Poi clicca **Commit changes**.

### 4. Attiva GitHub Pages
- Nel repository vai su **Settings → Pages**
- In *Build and deployment*: `Source = Deploy from a branch`
- Branch: `main`  /  folder: `/ (root)`  →  **Save**

Dopo 1-2 minuti il sito è online all'URL temporaneo `https://TUONOME.github.io/marioisernia.com/`.

### 5. Collega il dominio marioisernia.com
Il file **CNAME** in questa cartella contiene già `marioisernia.com`.
Ora vai nel pannello del registrar dove hai comprato il dominio (Aruba, GoDaddy, Namecheap, ecc.)
e imposta questi record DNS:

| Tipo   | Nome / Host | Valore                    |
|--------|-------------|---------------------------|
| A      | @           | 185.199.108.153           |
| A      | @           | 185.199.109.153           |
| A      | @           | 185.199.110.153           |
| A      | @           | 185.199.111.153           |
| CNAME  | www         | TUONOME.github.io         |

Dopo 15 min ÷ 24 h la propagazione è completa.
Poi torna in **GitHub → Settings → Pages**, inserisci `marioisernia.com` nel campo
*Custom domain* e spunta **Enforce HTTPS**.

---

## 🔁 Aggiornare il sito dopo la pubblicazione

**Metodo semplice (dal browser)**:
1. Apri il repository su github.com
2. Clicca sul file da modificare (es. `index.html`)
3. Clicca sulla matita ✏️ in alto a destra
4. Modifica il testo → in fondo clicca **Commit changes**
5. Il sito si aggiorna automaticamente in 1-2 minuti

**Metodo avanzato (Git da terminale)**:
```bash
git clone https://github.com/TUONOME/marioisernia.com.git
cd marioisernia.com
# modifica i file...
git add .
git commit -m "Aggiornamento contenuti"
git push
```

---

## 👀 Anteprima sul tuo computer

Apri `index.html` con doppio click nel browser. Tutto funziona:
menu, animazioni, link social e form (che aprirà il tuo client email).
