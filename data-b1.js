window.LEVEL_DATA = {
level:"B1", color:"#8e2de2",
title:"Deutsch B1 – Die Selbstständigkeit",
subtitle:"Passiv, Konjunktiv und komplexe Sätze.",
subtitleEn:"Passive, conditional and complex sentences.",
topics:[

{id:"genitiv", chip:"Genitiv", title:"Der Genitiv", titleEn:"The genitive — possession",
explain:"<p>Besitz (wessen?): der/das → <b>des … -s</b>, die → <b>der</b>.</p><div class='ex'>das Auto <b>des</b> Lehrer<b>s</b> · die Tasche <b>der</b> Frau · die Tür <b>des</b> Haus<b>es</b></div><p>Genitiv-Präpositionen: <b>wegen, trotz, während, (an)statt, innerhalb, außerhalb</b>.</p><div class='ex'><b>Wegen des</b> Regens bleiben wir zu Hause. · <b>Trotz der</b> Arbeit hat er Zeit.</div><p class='en'>Masculine/neuter add -s/-es to the noun. In spoken German, von + dative often replaces it (das Auto von Maria).</p>",
merk:"des + -s: Beim Genitiv maskulin/neutral bekommt auch das Nomen ein -s.",
merkEn:"With des, the noun itself also gets an -s.",
q:[
{q:"Das ist das Büro ___ Chefs.", o:["dem","des","der"], c:1, h:"maskulin → des Chefs."},
{q:"___ des schlechten Wetters bleiben wir hier.", o:["Trotz","Wegen","Während"], c:1, h:"Grund → wegen."},
{q:"Die Farbe ___ Autos gefällt mir.", o:["des","der","dem"], c:0, h:"das Auto → des Autos."},
{q:"___ der Prüfung darf man nicht sprechen.", o:["Wegen","Während","Statt"], c:1, h:"Zeitraum → während."},
{type:"gap", q:"die Frau → die Tasche ___ Frau", a:["der"], h:"feminin Genitiv → der."}
]},

{id:"adjektiv", chip:"Adjektivendungen", title:"Adjektivdeklination", titleEn:"Adjective endings — the full system",
explain:"<p>Drei Regeln statt 48 Formen:</p><p><b>1.</b> Nach der/die/das: nur <b>-e</b> oder <b>-en</b>. (der nett<b>e</b> Mann, den nett<b>en</b> Mann)</p><p><b>2.</b> Nach ein/kein/mein zeigt das Adjektiv das Geschlecht: ein nett<b>er</b> Mann, eine nett<b>e</b> Frau, ein nett<b>es</b> Kind.</p><p><b>3.</b> Dativ, Genitiv und Plural mit Artikel: <b>immer -en</b>. (mit dem nett<b>en</b> Mann, die nett<b>en</b> Leute)</p><p class='en'>Rule 1: after definite articles only -e/-en. Rule 2: after ein-words the adjective shows gender. Rule 3: dative, genitive, plural with article = always -en.</p>",
merk:"Im Zweifel: -en. Das stimmt in über der Hälfte aller Fälle.",
merkEn:"When in doubt: -en.",
q:[
{q:"Der ___ Mann wohnt hier.", o:["alter","alte","alten"], c:1, h:"Nach der: -e."},
{q:"Ich sehe einen ___ Film.", o:["gute","guter","guten"], c:2, h:"maskulin Akkusativ: einen guten Film."},
{q:"Das ist ein ___ Haus.", o:["schönes","schöne","schönen"], c:0, h:"Nach ein zeigt das Adjektiv das Geschlecht: das → -es."},
{q:"Ich fahre mit dem ___ Bus.", o:["neue","neuen","neuem"], c:1, h:"Dativ → immer -en."},
{q:"Die ___ Schüler lernen schnell.", o:["fleißige","fleißigen","fleißiger"], c:1, h:"Plural mit Artikel → -en."},
{type:"gap", q:"eine ___ Frau (nett)", a:["nette"], h:"feminin nach eine: -e."}
]},

{id:"relativ", chip:"Relativsätze", title:"Relativsätze", titleEn:"Relative clauses — who/which/that",
explain:"<p>Relativpronomen = fast wie der Artikel: der, die, das, den, dem, denen. Das Verb geht ans Ende.</p><div class='ex'>Das ist der Kollege, <b>der</b> in Bohol wohnt. (er wohnt → Nominativ)<br>Das ist der Film, <b>den</b> ich gesehen habe. (ich sehe ihn → Akkusativ)<br>Die Frau, <b>der</b> ich geholfen habe … (ich helfe ihr → Dativ)</div><p>Mit Präposition: Der Freund, <b>mit dem</b> ich lerne. Die Stadt, <b>in der</b> ich wohne.</p><p class='en'>The case of the relative pronoun comes from its role INSIDE the relative clause. With prepositions, the preposition comes first and sets the case.</p>",
merk:"Frag im Relativsatz: Wer? → der. Wen? → den. Wem? → dem.",
merkEn:"Ask inside the clause: who? → der. Whom? → den. To whom? → dem.",
q:[
{q:"Das ist der Lehrer, ___ Deutsch unterrichtet.", o:["den","der","dem"], c:1, h:"er unterrichtet → Nominativ: der."},
{q:"Der Film, ___ ich gestern gesehen habe, war toll.", o:["der","den","dem"], c:1, h:"ich sehe ihn → Akkusativ: den."},
{q:"Die Frau, ___ das Auto gehört, ist nett.", o:["die","der","den"], c:1, h:"gehören + Dativ: der."},
{q:"Die Stadt, ___ ich wohne, heißt Cebu.", o:["in der","in die","wo die"], c:0, h:"wohnen in + Dativ: in der. (Auch möglich: wo)"},
{q:"Die Leute, ___ ich arbeite, sind freundlich.", o:["mit denen","mit den","mit die"], c:0, h:"Plural-Dativ: denen."},
{type:"gap", q:"Das Buch, ___ auf dem Tisch liegt, ist neu.", a:["das"], h:"es liegt → Nominativ neutral: das."}
]},

{id:"passiv", chip:"Passiv", title:"Das Passiv", titleEn:"The passive voice",
explain:"<p>Die Handlung ist wichtig, nicht der Täter: <b>werden + Partizip II</b>.</p><table><tr><th>Zeit</th><th>Form</th><th>Beispiel</th></tr><tr><td>Präsens</td><td>wird + P II</td><td>Das Haus <b>wird renoviert</b>.</td></tr><tr><td>Präteritum</td><td>wurde + P II</td><td>Es <b>wurde</b> 1990 <b>gebaut</b>.</td></tr><tr><td>Perfekt</td><td>ist + P II + worden</td><td>Es <b>ist renoviert worden</b>.</td></tr><tr><td>Modal</td><td>Modal + P II + werden</td><td>Es <b>muss renoviert werden</b>.</td></tr></table><p>Täter mit <b>von</b>: Der Brief wurde <b>von</b> Gelai geschrieben.</p><p class='en'>werden + participle. The agent (if needed) takes von + dative.</p>",
merk:"Passiv Perfekt endet immer auf „worden“ — nicht „geworden“.",
merkEn:"Passive perfect ends in worden, not geworden.",
q:[
{q:"Das Formular ___ ausgefüllt.", o:["wird","ist","hat"], c:0, h:"Präsens Passiv: wird + Partizip II."},
{q:"Die Schule ___ 2025 gegründet.", o:["wird","wurde","ist"], c:1, h:"Vergangenheit: wurde gegründet."},
{q:"Das Auto ist repariert ___.", o:["geworden","worden","werden"], c:1, h:"Passiv Perfekt: worden."},
{q:"Die Hausaufgabe muss bis morgen gemacht ___.", o:["werden","worden","wird"], c:0, h:"Modal + Partizip II + werden."},
{q:"Der Brief wurde ___ meiner Freundin geschrieben.", o:["bei","von","durch"], c:1, h:"Täter → von + Dativ."},
{type:"gap", q:"Aktiv → Passiv: Man trennt hier den Müll. → Der Müll ___ hier getrennt.", a:["wird"], h:"Präsens Passiv: wird getrennt."}
]},

{id:"konj2", chip:"Konjunktiv II", title:"Konjunktiv II", titleEn:"Would, could, should — unreal & polite",
explain:"<p>Für Höflichkeit, Wünsche, irreale Bedingungen und Ratschläge:</p><div class='ex'><b>wäre, hätte, könnte, müsste, sollte</b> — alle anderen Verben: <b>würde + Infinitiv</b></div><div class='ex'>Wenn ich reich <b>wäre</b>, <b>würde</b> ich ein Haus kaufen.<br>Du <b>solltest</b> mehr schlafen. (Ratschlag)<br>Ich <b>hätte</b> gern einen Termin. (höflich)</div><p class='en'>wäre/hätte/könnte for sein/haben/können — würde + infinitive for everything else. Used for politeness, wishes, unreal conditions, advice.</p>",
merk:"An deiner Stelle würde ich … — der perfekte Ratschlag-Satz.",
merkEn:"An deiner Stelle würde ich … = the perfect advice sentence.",
q:[
{q:"Wenn ich Zeit ___, würde ich kommen.", o:["habe","hätte","hatte"], c:1, h:"irreal → hätte."},
{q:"Du ___ mehr Wasser trinken. (Ratschlag)", o:["solltest","sollst","sollest"], c:0, h:"Ratschlag → solltest."},
{q:"___ Sie mir bitte helfen?", o:["Können","Könnten","Konnten"], c:1, h:"Höflich → könnten."},
{q:"Wenn er reich wäre, ___ er nicht mehr arbeiten.", o:["wird","würde","wurde"], c:1, h:"würde + Infinitiv."},
{q:"Ich wünschte, ich ___ fliegen.", o:["kann","konnte","könnte"], c:2, h:"irrealer Wunsch → könnte."},
{type:"gap", q:"Ich ___ gern einen Kaffee. <span class='en'>(polite: would have)</span>", a:["hätte","haette"], h:"haben → hätte."}
]},

{id:"nebensatz2", chip:"obwohl · damit …", title:"Nebensätze: obwohl, damit, als, nachdem", titleEn:"More subordinate clauses",
explain:"<p>Alle schicken das Verb ans Ende:</p><table><tr><th>Konnektor</th><th>Bedeutung</th><th>Beispiel</th></tr><tr><td><b>obwohl</b></td><td>Gegengrund</td><td>Obwohl er müde war, trainierte er.</td></tr><tr><td><b>damit / um…zu</b></td><td>Ziel</td><td>Ich spare, damit wir reisen können.</td></tr><tr><td><b>als</b></td><td>einmal, Vergangenheit</td><td>Als ich Kind war, …</td></tr><tr><td><b>wenn</b></td><td>immer / Zukunft</td><td>Wenn ich Zeit habe, …</td></tr><tr><td><b>nachdem</b></td><td>danach (+ Plusquamperfekt)</td><td>Nachdem ich gegessen hatte, ging ich.</td></tr><tr><td><b>bevor / während / bis</b></td><td>Zeit</td><td>Bevor ich esse, wasche ich die Hände.</td></tr></table><p class='en'>als = single event in the past; wenn = repeated or future. Same subject + goal? Use um…zu instead of damit.</p>",
merk:"als = einmal in der Vergangenheit. Alles andere: wenn.",
merkEn:"als = once in the past. Everything else: wenn.",
q:[
{q:"___ ich 18 war, habe ich den Führerschein gemacht.", o:["Wenn","Als","Während"], c:1, h:"einmalig, Vergangenheit → als."},
{q:"___ es regnet, nehme ich einen Schirm.", o:["Als","Wenn","Nachdem"], c:1, h:"immer wenn → wenn."},
{q:"Er arbeitet viel, ___ seine Familie ein besseres Leben hat.", o:["damit","um","weil"], c:0, h:"Ziel + anderes Subjekt → damit."},
{q:"Ich lerne Deutsch, ___ in Deutschland zu arbeiten.", o:["damit","um","dass"], c:1, h:"gleiches Subjekt → um … zu."},
{q:"___ er gegessen hatte, machte er die Hausaufgaben.", o:["Bevor","Nachdem","Während"], c:1, h:"Reihenfolge: erst essen, dann … → nachdem + Plusquamperfekt."},
{type:"gap", q:"Ich bleibe hier, ___ du zurückkommst. <span class='en'>(until)</span>", a:["bis"], h:"bis = until."}
]},

{id:"infinitiv", chip:"zu + Infinitiv", title:"Infinitiv mit zu", titleEn:"Infinitive with zu",
explain:"<p>Nach vielen Verben und Ausdrücken: <b>zu + Infinitiv</b> am Satzende.</p><div class='ex'>Ich habe vergessen, die Tür <b>zu schließen</b>.<br>Es ist wichtig, pünktlich <b>zu sein</b>.<br>Ich habe keine Lust <b>zu kochen</b>.</div><p>Trennbare Verben: ein<b>zu</b>kaufen. Nach Modalverben: <b>kein</b> zu! (Ich muss arbeiten.)</p><p>Auch: <b>um … zu</b> (Ziel), <b>ohne … zu</b>, <b>statt … zu</b>.</p><p class='en'>zu + infinitive at the end. Separable verbs: einzukaufen. No zu after modal verbs!</p>",
merk:"Nach Modalverben nie „zu“: Ich muss arbeiten — nicht „zu arbeiten“.",
merkEn:"Never zu after modal verbs.",
q:[
{q:"Ich habe vor, morgen früh ___.", o:["aufstehen","aufzustehen","zu aufstehen"], c:1, h:"trennbar: auf-zu-stehen."},
{q:"Es macht Spaß, Deutsch ___.", o:["zu lernen","lernen","zum lernen"], c:0, h:"Es macht Spaß, … zu lernen."},
{q:"Ich muss jetzt ___.", o:["zu gehen","gehen","zu gehe"], c:1, h:"Nach Modalverb kein zu."},
{q:"Er ging, ___ etwas zu sagen.", o:["ohne","um","statt"], c:0, h:"ohne … zu = without doing."},
{type:"gap", q:"Ich versuche, jeden Tag ___ üben. (Wort mit z)", a:["zu"], h:"versuchen + zu + Infinitiv."}
]},

{id:"verbpraep", chip:"warten auf …", title:"Verben mit Präposition + wo/da", titleEn:"Verbs with fixed prepositions",
explain:"<p>Verb + Präposition + Fall als EIN Wort lernen: <b>warten auf</b> (A), <b>sich freuen auf/über</b> (A), <b>denken an</b> (A), <b>sich interessieren für</b> (A), <b>träumen von</b> (D), <b>Angst haben vor</b> (D), <b>sich kümmern um</b> (A), <b>teilnehmen an</b> (D).</p><div class='ex'>Sache: <b>Worauf</b> wartest du? — <b>Darauf</b>.<br>Person: <b>Auf wen</b> wartest du? — Auf <b>ihn</b>.</div><p class='en'>For things use wo(r)+prep / da(r)+prep. For persons use preposition + pronoun.</p>",
merk:"sich freuen AUF = Zukunft. sich freuen ÜBER = jetzt.",
merkEn:"freuen auf = looking forward (future). freuen über = happy about (now).",
q:[
{q:"Ich warte ___ den Bus.", o:["für","auf","an"], c:1, h:"warten auf + Akkusativ."},
{q:"Sie freut sich ___ das Geschenk. (Sie hat es gerade bekommen.)", o:["auf","über","für"], c:1, h:"jetzt → über."},
{q:"Er interessiert sich ___ Geschichte.", o:["für","über","an"], c:0, h:"sich interessieren für."},
{q:"___ denkst du? — An meine Familie.", o:["Woran","Worauf","Wovon"], c:0, h:"denken an → woran."},
{q:"Ich habe Angst ___ der Prüfung.", o:["von","vor","über"], c:1, h:"Angst haben vor + Dativ."},
{type:"gap", q:"Träumst du von Deutschland? — Ja, ich träume ___. (da + Präposition)", a:["davon"], h:"von → davon."}
]},

{id:"zweiteilig", chip:"je … desto", title:"Zweiteilige Konnektoren", titleEn:"Two-part connectors",
explain:"<p><b>nicht nur … sondern auch</b> · <b>sowohl … als auch</b> · <b>entweder … oder</b> · <b>weder … noch</b> (beide nicht!) · <b>zwar … aber</b> · <b>je … desto</b>.</p><div class='ex'>Cebu ist <b>nicht nur</b> schön, <b>sondern auch</b> günstig.<br>Er hat <b>weder</b> Zeit <b>noch</b> Geld.<br><b>Je</b> mehr du übst, <b>desto</b> besser wirst du.</div><p class='en'>weder…noch = neither…nor. je…desto = the more…the more (je + comparative, verb at end; desto + comparative + verb).</p>",
merk:"je + Verb ans Ende, desto + Verb sofort: Je mehr du übst, desto besser wirst du.",
merkEn:"je-clause: verb at the end. desto-clause: verb right after the comparative.",
q:[
{q:"Er spricht ___ Englisch ___ Deutsch. (beides!)", o:["weder … noch","sowohl … als auch","entweder … oder"], c:1, h:"beides → sowohl … als auch."},
{q:"Ich habe ___ Zeit ___ Lust. (beides nicht)", o:["weder … noch","nicht nur … sondern auch","zwar … aber"], c:0, h:"doppelte Verneinung → weder … noch."},
{q:"___ mehr ich lerne, ___ besser verstehe ich.", o:["Je … desto","Zwar … aber","Sowohl … desto"], c:0, h:"je … desto."},
{q:"Der Kurs ist ___ teuer, ___ sehr gut.", o:["weder … noch","zwar … aber","je … desto"], c:1, h:"Einschränkung → zwar … aber."},
{type:"gap", q:"___ du kommst mit, oder du bleibst hier. <span class='en'>(either)</span>", a:["entweder"], h:"entweder … oder."}
]}
,
{id:"deklination3", chip:"Deklination", title:"Die komplette Deklinationstabelle", titleEn:"The complete declension table — all 4 cases",
explain:"<table class='wide'><tr><th></th><th>maskulin</th><th>feminin</th><th>neutral</th><th>Plural</th></tr><tr><td class='thn'>Nominativ</td><td class='tdn'>der gut<b>e</b> / ein gut<b>er</b> Mann</td><td class='tdn'>die/eine gut<b>e</b> Frau</td><td class='tdn'>das gut<b>e</b> / ein gut<b>es</b> Kind</td><td class='tdn'>die gut<b>en</b> Leute</td></tr><tr><td class='tha'>Akkusativ</td><td class='tda'><b>den/einen guten</b> Mann</td><td class='tda'>die/eine gut<b>e</b> Frau</td><td class='tda'>das gut<b>e</b> / ein gut<b>es</b> Kind</td><td class='tda'>die gut<b>en</b> Leute</td></tr><tr><td class='thd'>Dativ</td><td class='tdd'><b>dem/einem guten</b> Mann</td><td class='tdd'><b>der/einer guten</b> Frau</td><td class='tdd'><b>dem/einem guten</b> Kind</td><td class='tdd'><b>den guten</b> Leute<b>n</b></td></tr><tr><td class='thg'>Genitiv</td><td class='tdg'><b>des guten</b> Mann<b>es</b></td><td class='tdg'><b>der guten</b> Frau</td><td class='tdg'><b>des guten</b> Kind<b>es</b></td><td class='tdg'><b>der guten</b> Leute</td></tr></table><p>Relativpronomen (= fast wie Artikel):</p><table class='wide'><tr><th></th><th>m</th><th>f</th><th>n</th><th>Pl</th></tr><tr><td class='thn'>Nom.</td><td class='tdn'>der</td><td class='tdn'>die</td><td class='tdn'>das</td><td class='tdn'>die</td></tr><tr><td class='tha'>Akk.</td><td class='tda'><b>den</b></td><td class='tda'>die</td><td class='tda'>das</td><td class='tda'>die</td></tr><tr><td class='thd'>Dat.</td><td class='tdd'><b>dem</b></td><td class='tdd'><b>der</b></td><td class='tdd'><b>dem</b></td><td class='tdd'><b>denen</b></td></tr><tr><td class='thg'>Gen.</td><td class='tdg'><b>dessen</b></td><td class='tdg'><b>deren</b></td><td class='tdg'><b>dessen</b></td><td class='tdg'><b>deren</b></td></tr></table><p class='en'>Blue = nominative, red = accusative, green = dative, purple = genitive. Adjective: dative/genitive/plural-with-article always -en.</p>",
merk:"Grün + Lila + Plural mit Artikel = Adjektiv immer -en.",
merkEn:"Green + purple + plural with article = adjective always -en."},

{id:"verbtabellen3", chip:"Verbtabelle", title:"Die 20 wichtigsten unregelmäßigen Verben (B1)", titleEn:"Top 20 irregular verbs — all three stems",
explain:"<table class='wide'><tr><th>Infinitiv</th><th>Präsens (er)</th><th>Präteritum</th><th>Perfekt</th><th>English</th></tr><tr><td>beginnen</td><td>beginnt</td><td>begann</td><td>hat begonnen</td><td class='en'>begin</td></tr><tr><td>bieten</td><td>bietet</td><td>bot</td><td>hat geboten</td><td class='en'>offer</td></tr><tr><td>bitten</td><td>bittet</td><td>bat</td><td>hat gebeten</td><td class='en'>request</td></tr><tr><td>bringen</td><td>bringt</td><td>brachte</td><td>hat gebracht</td><td class='en'>bring</td></tr><tr><td>denken</td><td>denkt</td><td>dachte</td><td>hat gedacht</td><td class='en'>think</td></tr><tr><td>empfehlen</td><td>empfiehlt</td><td>empfahl</td><td>hat empfohlen</td><td class='en'>recommend</td></tr><tr><td>entscheiden</td><td>entscheidet</td><td>entschied</td><td>hat entschieden</td><td class='en'>decide</td></tr><tr><td>gewinnen</td><td>gewinnt</td><td>gewann</td><td>hat gewonnen</td><td class='en'>win</td></tr><tr><td>halten</td><td>hält</td><td>hielt</td><td>hat gehalten</td><td class='en'>hold/stop</td></tr><tr><td>lassen</td><td>lässt</td><td>ließ</td><td>hat gelassen</td><td class='en'>let/leave</td></tr><tr><td>laufen</td><td>läuft</td><td>lief</td><td>ist gelaufen</td><td class='en'>run</td></tr><tr><td>steigen</td><td>steigt</td><td>stieg</td><td>ist gestiegen</td><td class='en'>climb/rise</td></tr><tr><td>sterben</td><td>stirbt</td><td>starb</td><td>ist gestorben</td><td class='en'>die</td></tr><tr><td>tragen</td><td>trägt</td><td>trug</td><td>hat getragen</td><td class='en'>carry/wear</td></tr><tr><td>treffen</td><td>trifft</td><td>traf</td><td>hat getroffen</td><td class='en'>meet</td></tr><tr><td>verbinden</td><td>verbindet</td><td>verband</td><td>hat verbunden</td><td class='en'>connect</td></tr><tr><td>vergleichen</td><td>vergleicht</td><td>verglich</td><td>hat verglichen</td><td class='en'>compare</td></tr><tr><td>verlieren</td><td>verliert</td><td>verlor</td><td>hat verloren</td><td class='en'>lose</td></tr><tr><td>wachsen</td><td>wächst</td><td>wuchs</td><td>ist gewachsen</td><td class='en'>grow</td></tr><tr><td>ziehen</td><td>zieht</td><td>zog</td><td>hat/ist gezogen</td><td class='en'>pull/move</td></tr></table><p class='en'>On B1 you must recognize Präteritum in reading and news texts — these 20 plus the A1/A2 basics cover most texts.</p>",
merk:"Präteritum brauchst du zum Lesen — Nachrichten und Geschichten sind voll davon.",
merkEn:"You need Präteritum for reading — news and stories are full of it."},

{id:"reflexivb1", chip:"Reflexiv + Präp.", title:"Reflexive Verben mit Präposition", titleEn:"Reflexive verbs with fixed prepositions",
explain:"<p>Auf B1 kombinieren sich reflexive Verben mit festen Präpositionen — das Trio <b>sich + Verb + Präposition</b> als Ganzes lernen:</p><table class='wide'><tr><th>Verb</th><th>Kasus</th><th>Beispiel</th><th>English</th></tr><tr><td><b>sich bewerben um</b></td><td class='wa'>A</td><td>Ich bewerbe mich um die Stelle.</td><td class='en'>apply for</td></tr><tr><td><b>sich kümmern um</b></td><td class='wa'>A</td><td>Sie kümmert sich um die Kunden.</td><td class='en'>take care of</td></tr><tr><td><b>sich erinnern an</b></td><td class='wa'>A</td><td>Erinnerst du dich an mich?</td><td class='en'>remember</td></tr><tr><td><b>sich gewöhnen an</b></td><td class='wa'>A</td><td>Ich gewöhne mich an das Wetter.</td><td class='en'>get used to</td></tr><tr><td><b>sich beschweren über</b></td><td class='wa'>A</td><td>Er beschwert sich über den Lärm.</td><td class='en'>complain about</td></tr><tr><td><b>sich ärgern über</b></td><td class='wa'>A</td><td>Ich ärgere mich über den Stau.</td><td class='en'>be annoyed about</td></tr><tr><td><b>sich verlassen auf</b></td><td class='wa'>A</td><td>Du kannst dich auf mich verlassen.</td><td class='en'>rely on</td></tr><tr><td><b>sich unterhalten mit/über</b></td><td class='wd'>D/A</td><td>Wir unterhalten uns über Fußball.</td><td class='en'>chat with/about</td></tr><tr><td><b>sich beschäftigen mit</b></td><td class='wd'>D</td><td>Er beschäftigt sich mit KI.</td><td class='en'>occupy oneself with</td></tr><tr><td><b>sich treffen mit</b></td><td class='wd'>D</td><td>Ich treffe mich mit Freunden.</td><td class='en'>meet with</td></tr></table><p><b>Reziprok</b> (= gegenseitig, nur Plural): Wir treffen <b>uns</b>. Sie streiten <b>sich</b>. Wir kennen <b>uns</b> seit 2025.</p><p class='en'>Reciprocal use (each other) works only in plural: Wir treffen uns = we meet each other.</p>",
merk:"sich + Verb + Präposition = ein Paket. Nie einzeln lernen.",
merkEn:"sich + verb + preposition = one package. Never learn them separately.",
q:[
{q:"Ich bewerbe mich ___ die Stelle als Pfleger.", o:["für","um","auf"], c:1, h:"sich bewerben um + A."},
{q:"Sie kann sich nicht ___ das Klima gewöhnen.", o:["an","auf","mit"], c:0, h:"sich gewöhnen an + A."},
{q:"Wir unterhalten ___ oft über Deutschland.", o:["sich","uns","euch"], c:1, h:"wir → uns."},
{q:"„Wir kennen uns“ bedeutet:", o:["Jeder kennt sich selbst","Wir kennen einander","Wir kennen es"], c:1, h:"Reziprok: einander."},
{type:"gap", q:"Du kannst dich ___ mich verlassen. <span class='en'>(rely on)</span>", a:["auf"], h:"sich verlassen auf + A."}
]},

{id:"wortschatz3", chip:"Wortschatz", title:"Wortschatz nach Themen", titleEn:"Core B1 vocabulary by topic",
explain:"<div class='vgrid'><div class='vbox'><h4>Arbeit & Bewerbung</h4><ul><li>die Stellenanzeige<span class='en'>job ad</span></li><li>das Vorstellungsgespräch<span class='en'>job interview</span></li><li>die Berufserfahrung<span class='en'>work experience</span></li><li>der Arbeitsvertrag<span class='en'>contract</span></li><li>die Probezeit<span class='en'>probation</span></li><li>kündigen<span class='en'>to quit</span></li></ul></div><div class='vbox'><h4>Wohnen</h4><ul><li>die Kaution<span class='en'>deposit</span></li><li>der Mietvertrag<span class='en'>rental contract</span></li><li>die Nebenkosten<span class='en'>utilities</span></li><li>einziehen / ausziehen<span class='en'>move in/out</span></li><li>die Verkehrsanbindung<span class='en'>transport links</span></li><li>sich beschweren<span class='en'>complain</span></li></ul></div><div class='vbox'><h4>Gesundheit</h4><ul><li>die Untersuchung<span class='en'>examination</span></li><li>die Behandlung<span class='en'>treatment</span></li><li>die Krankenversicherung<span class='en'>health insurance</span></li><li>die Überweisung<span class='en'>referral</span></li><li>die Nebenwirkung<span class='en'>side effect</span></li><li>sich erholen<span class='en'>recover</span></li></ul></div><div class='vbox'><h4>Umwelt & Gesellschaft</h4><ul><li>die Umweltverschmutzung<span class='en'>pollution</span></li><li>der Klimawandel<span class='en'>climate change</span></li><li>die Mülltrennung<span class='en'>waste separation</span></li><li>das Gesetz<span class='en'>law</span></li><li>die Gleichberechtigung<span class='en'>equality</span></li><li>ehrenamtlich<span class='en'>voluntary</span></li></ul></div></div>",
merk:"B1-Brief und B1-Gespräch drehen sich fast immer um diese vier Felder.",
merkEn:"The B1 letter and oral exam almost always revolve around these four fields."}
,
{id:"redemittel3", chip:"Redemittel", title:"Redemittel: Diskussion & Vor-/Nachteile", titleEn:"Discussion phrases & pros/cons — essential for the B1 oral exam",
explain:"<div class='vgrid'><div class='vbox'><h4>Meinung äußern</h4><ul><li>Ich bin der Meinung, dass …<span class='en'>I am of the opinion that</span></li><li>Ich bin davon überzeugt, dass …<span class='en'>I'm convinced that</span></li><li>Ich finde es wichtig/falsch, dass …<span class='en'>I find it important/wrong that</span></li><li>Aus meiner Sicht …<span class='en'>from my point of view</span></li></ul></div><div class='vbox'><h4>Vorteile & Nachteile</h4><ul><li>Ein großer Vorteil ist, dass …<span class='en'>a big advantage is that</span></li><li>Ein Nachteil könnte sein, dass …<span class='en'>a disadvantage could be that</span></li><li>Einerseits …, andererseits …<span class='en'>on the one hand … on the other</span></li><li>Dafür spricht … / Dagegen spricht …<span class='en'>in favor / against</span></li><li>Man muss auch bedenken, dass …<span class='en'>one must also consider</span></li></ul></div><div class='vbox'><h4>Diskutieren</h4><ul><li>Da stimme ich dir zu.<span class='en'>I agree with you</span></li><li>Da bin ich anderer Meinung.<span class='en'>I disagree</span></li><li>Das stimmt, aber …<span class='en'>true, but …</span></li><li>Wie siehst du das?<span class='en'>how do you see it?</span></li><li>Was hältst du davon?<span class='en'>what do you think of it?</span></li></ul></div><div class='vbox'><h4>Erfahrung & Beispiel</h4><ul><li>Ich habe die Erfahrung gemacht, dass …<span class='en'>my experience is that</span></li><li>Bei uns auf den Philippinen …<span class='en'>in the Philippines …</span></li><li>Ein Beispiel dafür ist …<span class='en'>an example of this is</span></li><li>Früher …, aber heute …<span class='en'>in the past …, but today</span></li><li>Zusammenfassend kann man sagen …<span class='en'>in summary one can say</span></li></ul></div></div>",
merk:"Einerseits – andererseits + ein eigenes Beispiel = das Grundgerüst für Sprechen Teil 2.",
merkEn:"One hand / other hand + a personal example = the skeleton of oral part 2.",
q:[
{q:"Vorteile/Nachteile abwägen: „___ ist es praktisch, ___ ist es teuer.“", o:["Erstens … zweitens","Einerseits … andererseits","Entweder … oder"], c:1, h:"einerseits … andererseits."},
{q:"Höflich widersprechen:", o:["Das ist falsch!","Da bin ich anderer Meinung.","Du verstehst nichts."], c:1, h:"Höflich: Da bin ich anderer Meinung."},
{q:"„Ich bin davon überzeugt, ___ Sport gesund ist.“", o:["weil","dass","ob"], c:1, h:"überzeugt sein, dass …"},
{q:"Den Partner einbeziehen:", o:["Wie siehst du das?","Ich bin fertig.","Das war's."], c:0, h:"Rückfragen bringen Punkte in der Prüfung!"},
{type:"gap", q:"Ein großer ___ ist, dass man online von überall lernen kann. <span class='en'>(advantage)</span>", a:["vorteil"], h:"der Vorteil ↔ der Nachteil."}
]}
]};
