window.LEVEL_DATA = {
level:"A1", color:"#2db150",
title:"Deutsch A1 – Der Anfang",
subtitle:"Die Grammatik für deine ersten Sätze.",
subtitleEn:"The grammar for your first sentences.",
topics:[

{id:"artikel", chip:"der · die · das", title:"Artikel: der, die, das", titleEn:"Articles — every noun has a gender",
explain:"<p>Jedes Nomen hat ein Geschlecht: <b>der</b> (maskulin), <b>die</b> (feminin), <b>das</b> (neutral). Unbestimmt: <b>ein / eine / ein</b>.</p><p class='en'>Every noun has a gender. Indefinite: ein/eine/ein (= a).</p><div class='ex'>der Mann, der Tisch · die Frau, die Lampe · das Kind, das Haus</div><p>Hilfreiche Endungen: <b>-e → die</b> (die Lampe) · <b>-er → der</b> (der Computer) · <b>-chen → das</b> (das Mädchen) · <b>-ung, -heit, -keit → die</b>.</p><p class='en'>Helpful endings: -e is usually feminine, -er masculine, -chen neuter, -ung/-heit/-keit feminine.</p>",
merk:"Lerne jedes Nomen immer MIT Artikel — „die Lampe“, nie nur „Lampe“.",
merkEn:"Always learn nouns WITH their article.",
q:[
{q:"___ Frau wohnt in Cebu.", o:["Der","Die","Das"], c:1, h:"Frau ist feminin → die. <span class='en'>Frau is feminine.</span>"},
{q:"Das ist ___ Tisch.", o:["ein","eine","einen"], c:0, h:"der Tisch → ein Tisch (maskulin, Nominativ)."},
{q:"___ Kind spielt.", o:["Der","Die","Das"], c:2, h:"Kind ist neutral → das."},
{q:"Welcher Artikel? Wörter auf -ung, z. B. „Wohnung“:", o:["der","die","das"], c:1, h:"-ung ist immer feminin → die Wohnung."},
{type:"gap", q:"Ergänze den Artikel: ___ Mädchen ist klein. <span class='en'>(word ends in -chen!)</span>", a:["das"], h:"-chen ist immer neutral → das Mädchen."}
]},

{id:"praesens", chip:"Präsens", title:"Präsens: die Verb-Endungen", titleEn:"Present tense: the verb endings",
explain:"<p>Stamm + Endung: ich <b>-e</b>, du <b>-st</b>, er/sie/es <b>-t</b>, wir <b>-en</b>, ihr <b>-t</b>, sie/Sie <b>-en</b>.</p><div class='ex'>ich wohn<b>e</b> · du wohn<b>st</b> · er wohn<b>t</b> · wir wohn<b>en</b> · ihr wohn<b>t</b> · sie wohn<b>en</b></div><p>Unregelmäßig bei <b>du</b> und <b>er/sie/es</b>: fahren → du f<b>ä</b>hrst · essen → er <b>i</b>sst · sprechen → sie spr<b>i</b>cht · schlafen → er schl<b>ä</b>ft.</p><p class='en'>Irregular verbs change their vowel only for du and er/sie/es.</p><table><tr><th></th><th>sein</th><th>haben</th></tr><tr><td>ich</td><td>bin</td><td>habe</td></tr><tr><td>du</td><td>bist</td><td>hast</td></tr><tr><td>er/sie/es</td><td>ist</td><td>hat</td></tr><tr><td>wir / sie</td><td>sind</td><td>haben</td></tr><tr><td>ihr</td><td>seid</td><td>habt</td></tr></table>",
merk:"sein und haben sind die wichtigsten Verben — auswendig lernen!",
merkEn:"sein and haben are the most important verbs — memorize them!",
q:[
{q:"Du ___ aus Cebu.", o:["kommst","kommt","komme"], c:0, h:"du → -st: du kommst."},
{q:"Er ___ Deutsch.", o:["sprecht","spricht","sprichst"], c:1, h:"sprechen ist unregelmäßig: er spricht (e→i)."},
{q:"Ihr ___ müde.", o:["seid","sind","bist"], c:0, h:"ihr seid — Ausnahme von sein."},
{q:"Sie (= die Frau) ___ ein Auto.", o:["habe","hast","hat"], c:2, h:"er/sie/es hat."},
{type:"gap", q:"Konjugiere: fahren → du ___", a:["fährst","faehrst"], h:"a → ä bei du und er: du fährst."}
]},

{id:"akkusativ", chip:"Akkusativ", title:"Der Akkusativ", titleEn:"The accusative — the object case",
explain:"<p>Das Objekt (wen? was?) steht im Akkusativ. <b>Nur maskulin ändert sich:</b> der → <b>den</b>, ein → <b>einen</b>. Feminin, neutral, Plural bleiben gleich.</p><p class='en'>The object takes the accusative. Only masculine changes: der→den, ein→einen. Everything else stays the same.</p><div class='ex'>Ich sehe <b>den</b> Mann. · Ich habe <b>einen</b> Bruder. · Ich kaufe die Lampe / das Brot.</div><p>Typische Akkusativ-Verben: <b>haben, kaufen, essen, trinken, sehen, suchen, brauchen, möchten, es gibt</b>.</p><p class='en'>Typical accusative verbs: have, buy, eat, drink, see, look for, need, would like, there is.</p>",
merk:"80%-Regel: Fast alle Objekte sind Akkusativ. Nur „der“ wird zu „den“.",
merkEn:"80% rule: almost all objects are accusative. Only der becomes den.",
q:[
{q:"Ich kaufe ___ Tisch.", o:["der","den","dem"], c:1, h:"kaufen + Akkusativ, maskulin: den Tisch."},
{q:"Sie hat ___ Schwester.", o:["ein","einen","eine"], c:2, h:"die Schwester → eine (feminin ändert sich nicht)."},
{q:"Es gibt ___ Supermarkt hier.", o:["ein","einen","einem"], c:1, h:"es gibt + Akkusativ: einen Supermarkt."},
{q:"Ich trinke ___ Wasser.", o:["das","den","dem"], c:0, h:"das Wasser bleibt das (neutral ändert sich nicht)."},
{type:"gap", q:"Ich sehe ___ Mann. (der Mann)", a:["den"], h:"Maskulin im Akkusativ: den."}
]},

{id:"satzbau", chip:"Satzbau", title:"Satzbau: Verb auf Position 2", titleEn:"Word order: verb in position 2",
explain:"<p>Im Hauptsatz steht das Verb <b>immer auf Position 2</b>. Position 1 kann das Subjekt sein — oder Zeit/Ort. Dann rückt das Subjekt hinter das Verb.</p><p class='en'>In a main clause the verb is always in position 2. If something else is first, the subject moves behind the verb.</p><div class='ex'><b>Ich</b> lerne heute Deutsch. → <b>Heute</b> lerne <b>ich</b> Deutsch.</div><p>Reihenfolge: <b>Zeit vor Ort</b> — Ich fahre <b>morgen nach Manila</b>.</p><p class='en'>Time before place.</p>",
merk:"Egal was auf Position 1 steht — das Verb bleibt auf Position 2.",
merkEn:"No matter what comes first — the verb stays in position 2.",
q:[
{q:"Welcher Satz ist richtig?", o:["Heute ich lerne Deutsch.","Heute lerne ich Deutsch.","Heute Deutsch ich lerne."], c:1, h:"Position 1: Heute → Position 2: Verb → dann Subjekt."},
{q:"Welcher Satz ist richtig?", o:["Ich fahre nach Cebu morgen.","Ich fahre morgen nach Cebu.","Morgen ich fahre nach Cebu."], c:1, h:"Zeit vor Ort: morgen nach Cebu."},
{q:"„Am Montag ___ wir Unterricht.“ — was fehlt?", o:["haben","wir haben","haben wir"], c:0, h:"Am Montag (Pos. 1) haben (Pos. 2) wir …"},
{q:"Welcher Satz ist falsch?", o:["Ich trinke Kaffee.","Kaffee trinke ich gern.","Ich Kaffee trinke."], c:2, h:"Das Verb muss auf Position 2 stehen."},
{type:"gap", q:"Ordne: „jetzt / ich / lerne“ → ___ (Beginne mit „Jetzt“)", a:["jetzt lerne ich","Jetzt lerne ich"], h:"Jetzt (1) lerne (2) ich (3)."}
]},

{id:"fragen", chip:"Fragen", title:"Fragen stellen", titleEn:"Asking questions",
explain:"<p><b>W-Fragen:</b> Fragewort + Verb + Subjekt. <b>Ja/Nein-Fragen:</b> Verb zuerst!</p><div class='ex'><b>Wo</b> wohnst du? · <b>Was</b> machst du? · <b>Wann</b> kommt er?<br><b>Wohnst</b> du in Cebu? — Ja. / Nein.</div><p>Die Fragewörter: <b>wer</b> (who), <b>was</b> (what), <b>wo</b> (where), <b>wohin</b> (where to), <b>woher</b> (where from), <b>wann</b> (when), <b>wie</b> (how), <b>warum</b> (why), <b>wie viel</b> (how much).</p>",
merk:"Ja/Nein-Frage? Verb an den Anfang: „Kommst du mit?“",
merkEn:"Yes/no question? Verb goes first.",
q:[
{q:"___ kommst du? — Aus den Philippinen.", o:["Wo","Woher","Wohin"], c:1, h:"woher = where from."},
{q:"___ du Kaffee? — Ja, gern!", o:["Trinkst","Du trinkst","Was trinkst"], c:0, h:"Ja/Nein-Frage: Verb zuerst."},
{q:"___ kostet das Ticket?", o:["Wie","Wie viel","Was für"], c:1, h:"wie viel = how much."},
{q:"___ gehst du? — Nach Hause.", o:["Wohin","Woher","Wo"], c:0, h:"wohin = where to (Richtung)."},
{type:"gap", q:"Frage nach der Zeit: ___ beginnt der Kurs? <span class='en'>(when?)</span>", a:["wann"], h:"wann = when."}
]},

{id:"modalverben", chip:"Modalverben", title:"Modalverben: können, müssen, wollen", titleEn:"Modal verbs — the helpers",
explain:"<p>Modalverb auf Position 2, Infinitiv <b>ans Ende</b> (Satzklammer).</p><div class='ex'>Ich <b>kann</b> gut schwimmen. · Ich <b>muss</b> morgen arbeiten. · Ich <b>möchte</b> einen Kaffee.</div><table><tr><th></th><th>können</th><th>müssen</th><th>wollen</th><th>möchten</th></tr><tr><td>ich / er</td><td>kann</td><td>muss</td><td>will</td><td>möchte</td></tr><tr><td>du</td><td>kannst</td><td>musst</td><td>willst</td><td>möchtest</td></tr><tr><td>wir / sie</td><td>können</td><td>müssen</td><td>wollen</td><td>möchten</td></tr></table><p class='en'>können = can · müssen = must · wollen = want · möchten = would like. ich and er are always identical.</p>",
merk:"ich kann, er kann — bei Modalverben sind ich und er immer gleich.",
merkEn:"With modal verbs, ich and er are always the same form.",
q:[
{q:"Ich ___ heute nicht kommen.", o:["kann","kannst","können"], c:0, h:"ich kann."},
{q:"Er ___ Deutsch lernen, er braucht B2.", o:["musst","muss","müssen"], c:1, h:"er muss (wie ich muss)."},
{q:"Welcher Satz ist richtig?", o:["Ich muss arbeiten heute.","Ich muss heute arbeiten.","Ich heute muss arbeiten."], c:1, h:"Infinitiv ans Ende: … heute arbeiten."},
{q:"___ du einen Kaffee? — Ja, gern!", o:["Möchtest","Möchte","Möchten"], c:0, h:"du möchtest."},
{type:"gap", q:"Wir ___ nach Deutschland gehen. <span class='en'>(want to)</span>", a:["wollen","möchten","moechten"], h:"wir wollen / möchten."}
]},

{id:"trennbar", chip:"Trennbare Verben", title:"Trennbare Verben", titleEn:"Separable verbs",
explain:"<p>Verben mit Vorsilbe wie <b>ein-, auf-, an-, mit-, aus-</b> trennen sich: Verb auf Position 2, <b>Vorsilbe ans Ende</b>.</p><div class='ex'>einkaufen → Ich <b>kaufe</b> im Supermarkt <b>ein</b>.<br>aufstehen → Er <b>steht</b> um 6 Uhr <b>auf</b>.<br>anrufen → Sie <b>ruft</b> ihre Mutter <b>an</b>.</div><p class='en'>Separable verbs split: conjugated part in position 2, prefix at the very end.</p>",
merk:"Die Vorsilbe fliegt ans Satzende — immer.",
merkEn:"The prefix always flies to the end of the sentence.",
q:[
{q:"aufstehen: Ich ___ um 7 Uhr ___.", o:["stehe … auf","aufstehe … –","stehe auf … –"], c:0, h:"Ich stehe um 7 Uhr auf."},
{q:"Welcher Satz ist richtig?", o:["Ich einkaufe heute.","Ich kaufe heute ein.","Ich kaufe ein heute."], c:1, h:"Vorsilbe ans Ende: … heute ein."},
{q:"anrufen: Er ___ seine Freundin ___.", o:["ruft … an","anruft … –","ruft an … –"], c:0, h:"Er ruft seine Freundin an."},
{q:"Mit Modalverb: „Ich muss ___.“", o:["einkaufen","kaufen ein","ein kaufen"], c:0, h:"Nach Modalverb bleibt das Verb zusammen: einkaufen."},
{type:"gap", q:"mitkommen: ___ du ___? (2 Wörter, Frage)", a:["kommst du mit"], h:"Kommst du mit?"}
]},

{id:"negation", chip:"nicht / kein", title:"Negation: nicht oder kein?", titleEn:"Negation: nicht or kein?",
explain:"<p><b>kein</b> verneint Nomen mit ein/ohne Artikel. <b>nicht</b> verneint alles andere (Verben, Adjektive, Namen, bestimmte Artikel).</p><div class='ex'>Ich habe <b>kein</b> Auto. · Ich habe <b>keine</b> Zeit.<br>Ich komme <b>nicht</b>. · Das ist <b>nicht</b> mein Buch. · Der Film ist <b>nicht</b> gut.</div><p class='en'>kein negates nouns with ein or no article. nicht negates everything else.</p>",
merk:"ein/kein sind Zwillinge: ein Auto → kein Auto, eine Zeit → keine Zeit.",
merkEn:"ein and kein are twins — same endings.",
q:[
{q:"Ich habe ___ Geld.", o:["nicht","kein","keine"], c:1, h:"das Geld (ohne Artikel hier) → kein Geld."},
{q:"Er kommt heute ___.", o:["nicht","kein","keinen"], c:0, h:"Verb verneinen → nicht."},
{q:"Sie hat ___ Schwester.", o:["nicht","kein","keine"], c:2, h:"eine Schwester → keine Schwester."},
{q:"Das ist ___ gut.", o:["kein","nicht","keine"], c:1, h:"Adjektiv → nicht gut."},
{type:"gap", q:"Ich trinke ___ Alkohol. <span class='en'>(no alcohol)</span>", a:["keinen"], h:"der Alkohol, Akkusativ → keinen Alkohol."}
]},

{id:"possessiv", chip:"mein · dein", title:"Possessivartikel: mein, dein, sein …", titleEn:"Possessive articles — my, your, his …",
explain:"<p><b>mein</b> (ich), <b>dein</b> (du), <b>sein</b> (er/es), <b>ihr</b> (sie), <b>unser</b> (wir), <b>euer</b> (ihr), <b>ihr/Ihr</b> (sie/Sie). Endungen wie bei <b>ein</b>: mein Bruder, mein<b>e</b> Schwester, mein Kind.</p><div class='ex'>Das ist <b>meine</b> Familie. · <b>Sein</b> Auto ist neu. (das Auto von ihm) · <b>Ihre</b> Tochter lernt Deutsch. (von ihr)</div><p class='en'>Endings work like ein/eine. sein = his, ihr = her — look at the OWNER.</p>",
merk:"sein = von ihm, ihr = von ihr. Die Endung kommt vom Nomen dahinter.",
merkEn:"sein = his, ihr = her. The ending comes from the noun that follows.",
q:[
{q:"Das ist Anna. ___ Bruder wohnt in Manila.", o:["Sein","Ihr","Ihre"], c:1, h:"Anna = sie → ihr Bruder."},
{q:"Das ist Tom. ___ Schwester ist nett.", o:["Sein","Seine","Ihre"], c:1, h:"Tom = er → sein + -e (die Schwester) = seine."},
{q:"Wir lieben ___ Schule.", o:["unser","unsere","euer"], c:1, h:"die Schule → unsere."},
{q:"___ Name ist Lion. (ich)", o:["Mein","Meine","Dein"], c:0, h:"der Name → mein Name."},
{type:"gap", q:"du → ___ Buch <span class='en'>(your book)</span>", a:["dein"], h:"das Buch → dein Buch."}
]}
,
{id:"verbtabellen", chip:"Konjugation", title:"Konjugationstabellen", titleEn:"Conjugation tables — your reference",
explain:"<p><b>Regelmäßig</b> und die wichtigsten <b>unregelmäßigen</b> Verben im Präsens:</p><table class='wide'><tr><th></th><th>wohnen</th><th>arbeiten*</th><th>fahren</th><th>essen</th><th>nehmen</th><th>lesen</th></tr><tr><td><b>ich</b></td><td>wohne</td><td>arbeite</td><td>fahre</td><td>esse</td><td>nehme</td><td>lese</td></tr><tr><td><b>du</b></td><td>wohnst</td><td>arbeit<b>e</b>st</td><td>f<b>ä</b>hrst</td><td><b>i</b>sst</td><td>n<b>imm</b>st</td><td>l<b>ie</b>st</td></tr><tr><td><b>er/sie/es</b></td><td>wohnt</td><td>arbeit<b>e</b>t</td><td>f<b>ä</b>hrt</td><td><b>i</b>sst</td><td>n<b>imm</b>t</td><td>l<b>ie</b>st</td></tr><tr><td><b>wir</b></td><td>wohnen</td><td>arbeiten</td><td>fahren</td><td>essen</td><td>nehmen</td><td>lesen</td></tr><tr><td><b>ihr</b></td><td>wohnt</td><td>arbeit<b>e</b>t</td><td>fahrt</td><td>esst</td><td>nehmt</td><td>lest</td></tr><tr><td><b>sie/Sie</b></td><td>wohnen</td><td>arbeiten</td><td>fahren</td><td>essen</td><td>nehmen</td><td>lesen</td></tr></table><p class='en'>*Verbs ending in -t/-d insert an e: du arbeitest. Irregular verbs change their vowel only for du and er/sie/es.</p><p>Die drei Superstars — komplett unregelmäßig:</p><table class='wide'><tr><th></th><th>sein <span class='en'>to be</span></th><th>haben <span class='en'>to have</span></th><th>werden <span class='en'>to become</span></th></tr><tr><td><b>ich</b></td><td>bin</td><td>habe</td><td>werde</td></tr><tr><td><b>du</b></td><td>bist</td><td>hast</td><td>wirst</td></tr><tr><td><b>er/sie/es</b></td><td>ist</td><td>hat</td><td>wird</td></tr><tr><td><b>wir</b></td><td>sind</td><td>haben</td><td>werden</td></tr><tr><td><b>ihr</b></td><td>seid</td><td>habt</td><td>werdet</td></tr><tr><td><b>sie/Sie</b></td><td>sind</td><td>haben</td><td>werden</td></tr></table>",
merk:"du → -st, er → -t. Vokalwechsel nur bei du und er/sie/es.",
merkEn:"du → -st, er → -t. Vowel change only for du and er/sie/es."},

{id:"deklination", chip:"Deklination", title:"Deklinationstabelle: Nominativ & Akkusativ", titleEn:"Declension table — color-coded",
explain:"<table class='wide'><tr><th></th><th>maskulin</th><th>feminin</th><th>neutral</th><th>Plural</th></tr><tr><td class='thn'>Nominativ<br><span style='font-weight:400;font-size:11px'>wer? was?</span></td><td class='tdn'><b>der</b> / ein Mann</td><td class='tdn'><b>die</b> / eine Frau</td><td class='tdn'><b>das</b> / ein Kind</td><td class='tdn'><b>die</b> Leute</td></tr><tr><td class='tha'>Akkusativ<br><span style='font-weight:400;font-size:11px'>wen? was?</span></td><td class='tda'><b>den / einen</b> Mann</td><td class='tda'>die / eine Frau</td><td class='tda'>das / ein Kind</td><td class='tda'>die Leute</td></tr></table><p>Personalpronomen:</p><table class='wide'><tr><th></th><th>ich</th><th>du</th><th>er</th><th>sie</th><th>es</th><th>wir</th><th>ihr</th><th>sie/Sie</th></tr><tr><td class='thn'>Nom.</td><td class='tdn'>ich</td><td class='tdn'>du</td><td class='tdn'>er</td><td class='tdn'>sie</td><td class='tdn'>es</td><td class='tdn'>wir</td><td class='tdn'>ihr</td><td class='tdn'>sie/Sie</td></tr><tr><td class='tha'>Akk.</td><td class='tda'>mich</td><td class='tda'>dich</td><td class='tda'><b>ihn</b></td><td class='tda'>sie</td><td class='tda'>es</td><td class='tda'>uns</td><td class='tda'>euch</td><td class='tda'>sie/Sie</td></tr></table><p class='en'>Only masculine changes in the accusative: der→den, ein→einen, er→ihn. Everything else stays identical.</p>",
merk:"Rot = Akkusativ: Nur der Mann wird zu den Mann, er wird zu ihn.",
merkEn:"Red = accusative: only masculine changes."},

{id:"haeufige-verben", chip:"Top-Verben", title:"Die 24 häufigsten A1-Verben", titleEn:"The 24 most frequent A1 verbs",
explain:"<div class='vgrid'><div class='vbox'><h4>Sein & Haben-Welt</h4><ul><li>sein<span class='en'>to be</span></li><li>haben<span class='en'>to have</span></li><li>werden<span class='en'>to become</span></li><li>heißen<span class='en'>to be called</span></li><li>wohnen<span class='en'>to live</span></li><li>kommen<span class='en'>to come</span></li></ul></div><div class='vbox'><h4>Alltag</h4><ul><li>machen<span class='en'>to do/make</span></li><li>gehen<span class='en'>to go</span></li><li>fahren<span class='en'>to drive/go</span></li><li>essen<span class='en'>to eat</span></li><li>trinken<span class='en'>to drink</span></li><li>kaufen<span class='en'>to buy</span></li></ul></div><div class='vbox'><h4>Kommunikation</h4><ul><li>sprechen<span class='en'>to speak</span></li><li>sagen<span class='en'>to say</span></li><li>fragen<span class='en'>to ask</span></li><li>verstehen<span class='en'>to understand</span></li><li>lernen<span class='en'>to learn</span></li><li>lesen<span class='en'>to read</span></li></ul></div><div class='vbox'><h4>Mehr Basics</h4><ul><li>sehen<span class='en'>to see</span></li><li>nehmen<span class='en'>to take</span></li><li>geben<span class='en'>to give</span></li><li>arbeiten<span class='en'>to work</span></li><li>schlafen<span class='en'>to sleep</span></li><li>trinken → möchten<span class='en'>would like</span></li></ul></div></div>",
merk:"Diese 24 Verben decken über 60 % aller A1-Sätze ab.",
merkEn:"These 24 verbs cover more than 60% of all A1 sentences."},

{id:"wortschatz", chip:"Wortschatz", title:"Wortschatz nach Themen", titleEn:"Core A1 vocabulary by topic",
explain:"<div class='vgrid'><div class='vbox'><h4>Familie & Leute</h4><ul><li>die Familie<span class='en'>family</span></li><li>die Eltern<span class='en'>parents</span></li><li>der Bruder / die Schwester<span class='en'>brother/sister</span></li><li>der Freund / die Freundin<span class='en'>friend</span></li><li>das Kind<span class='en'>child</span></li><li>der Mann / die Frau<span class='en'>man/woman</span></li></ul></div><div class='vbox'><h4>Essen & Trinken</h4><ul><li>das Brot<span class='en'>bread</span></li><li>der Reis<span class='en'>rice</span></li><li>das Wasser<span class='en'>water</span></li><li>der Kaffee / der Tee<span class='en'>coffee/tea</span></li><li>das Obst / das Gemüse<span class='en'>fruit/vegetables</span></li><li>lecker<span class='en'>tasty</span></li></ul></div><div class='vbox'><h4>Zeit</h4><ul><li>heute / morgen / gestern<span class='en'>today/tomorrow/yesterday</span></li><li>die Woche / der Monat / das Jahr<span class='en'>week/month/year</span></li><li>der Montag … Sonntag<span class='en'>Monday…Sunday</span></li><li>die Uhr / die Uhrzeit<span class='en'>clock/time</span></li><li>jetzt / später<span class='en'>now/later</span></li><li>immer / oft / nie<span class='en'>always/often/never</span></li></ul></div><div class='vbox'><h4>Wohnen & Stadt</h4><ul><li>die Wohnung / das Haus<span class='en'>apartment/house</span></li><li>das Zimmer<span class='en'>room</span></li><li>die Straße<span class='en'>street</span></li><li>der Supermarkt<span class='en'>supermarket</span></li><li>der Bahnhof<span class='en'>train station</span></li><li>die Schule / die Arbeit<span class='en'>school/work</span></li></ul></div></div>",
merk:"Lerne Wörter in Paaren und Gruppen — nie einzeln.",
merkEn:"Learn words in pairs and groups — never alone."}
,
{id:"redemittel", chip:"Redemittel", title:"Redemittel: die wichtigsten Sätze", titleEn:"Essential phrases for beginners",
explain:"<div class='vgrid'><div class='vbox'><h4>Meinung sagen (einfach)</h4><ul><li>Ich finde … gut / nicht gut.<span class='en'>I think … is good/bad</span></li><li>Ich glaube, …<span class='en'>I believe …</span></li><li>Ich mag (kein) …<span class='en'>I (don't) like …</span></li><li>… gefällt mir (nicht).<span class='en'>I (don't) like …</span></li><li>Ja, gern! / Nein, danke.<span class='en'>yes, gladly / no, thanks</span></li></ul></div><div class='vbox'><h4>Höflichkeit</h4><ul><li>Bitte. / Danke schön!<span class='en'>please / thank you</span></li><li>Entschuldigung!<span class='en'>excuse me/sorry</span></li><li>Kein Problem.<span class='en'>no problem</span></li><li>Ich hätte gern …<span class='en'>I would like …</span></li><li>Können Sie mir helfen?<span class='en'>can you help me?</span></li></ul></div><div class='vbox'><h4>Nachfragen</h4><ul><li>Wie bitte?<span class='en'>pardon?</span></li><li>Können Sie das wiederholen?<span class='en'>can you repeat that?</span></li><li>Sprechen Sie bitte langsamer.<span class='en'>please speak more slowly</span></li><li>Was bedeutet das?<span class='en'>what does that mean?</span></li><li>Ich verstehe (nicht).<span class='en'>I (don't) understand</span></li></ul></div><div class='vbox'><h4>Alltags-Floskeln</h4><ul><li>Wie geht's? — Gut, danke!<span class='en'>how are you? — fine, thanks</span></li><li>Schönen Tag noch!<span class='en'>have a nice day</span></li><li>Bis später / bis morgen!<span class='en'>see you later/tomorrow</span></li><li>Viel Glück! / Viel Spaß!<span class='en'>good luck / have fun</span></li><li>Gute Besserung!<span class='en'>get well soon</span></li></ul></div></div>",
merk:"Diese Sätze als ganze Blöcke lernen — nicht Wort für Wort übersetzen.",
merkEn:"Learn these as whole chunks — don't translate word by word.",
q:[
{q:"Du hast etwas nicht verstanden. Was sagst du?", o:["Schönen Tag noch!","Wie bitte?","Viel Glück!"], c:1, h:"Wie bitte? = pardon?"},
{q:"Höflich bestellen: „Ich ___ gern einen Kaffee.“", o:["will","hätte","habe"], c:1, h:"Ich hätte gern = polite order."},
{q:"Jemand ist krank. Du sagst:", o:["Gute Besserung!","Guten Appetit!","Viel Spaß!"], c:0, h:"Gute Besserung = get well soon."},
{type:"gap", q:"Der Film ___ mir. <span class='en'>(I like the film — with gefallen)</span>", a:["gefällt","gefaellt"], h:"Der Film gefällt mir."}
]}
]};
