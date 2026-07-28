# FLOß Grammatik – Interaktive Deutsch-Website (A1–B2)

Statische Website ohne Abhängigkeiten: HTML + CSS + Vanilla-JS. Kein Build nötig.

## Struktur
- `index.html` – Startseite mit Level-Auswahl
- `a1.html` … `b2.html` – Level-Seiten (laden `data/*.js` + `engine.js`)
- `data-a1.js` … `data-b2.js` – Grammatik-Inhalte & Übungen (hier neue Themen/Fragen ergänzen)
- `engine.js` – Quiz-Engine · `styles.css` – Apple-Style-Design

## Kostenlos online stellen mit GitHub Pages (ca. 10 Minuten)
1. Account auf github.com erstellen (kostenlos).
2. Oben rechts **+** → **New repository** → Name: `floss-grammatik` → Public → **Create repository**.
3. **uploading an existing file** anklicken → ALLE Dateien aus diesem Ordner hineinziehen
   → **Commit changes** → **Commit changes**.
4. Im Repository: **Settings** → links **Pages** → unter "Branch" `main` auswählen, Ordner `/ (root)` → **Save**.
5. Nach 1–2 Minuten ist die Seite live unter:
   `https://DEIN-BENUTZERNAME.github.io/floss-grammatik/`

## Inhalte erweitern
Neues Thema = neues Objekt im `topics`-Array einer `data/*.js`:
- `explain` = HTML-Erklärung, `merk` = Merksatz
- Fragen: `{q, o:[Optionen], c:IndexRichtig, h:Hinweis}` oder `{type:"gap", q, a:[Antworten], h}`

Später möglich: eigene Domain (z. B. floss-deutsch.com) in Settings → Pages → Custom domain.
