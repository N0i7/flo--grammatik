window.LEVEL_DATA = {
level:"A2", color:"#0a5bd3",
title:"Deutsch A2 – Der Alltag",
subtitle:"Vergangenheit, Dativ und echte Gespräche.",
subtitleEn:"Past tense, dative and real conversations.",
topics:[

{id:"perfekt", chip:"Perfekt", title:"Das Perfekt", titleEn:"The spoken past tense",
explain:"<p>Beim Sprechen über Vergangenes: <b>haben/sein + Partizip II</b> (am Satzende).</p><div class='ex'>Ich <b>habe</b> Pizza <b>gegessen</b>. · Ich <b>bin</b> nach Bohol <b>gefahren</b>.</div><p><b>sein</b> bei Bewegung (gehen, fahren, fliegen, kommen) und Veränderung (aufstehen, einschlafen) + bleiben, sein, passieren. Sonst <b>haben</b>.</p><p>Partizip II: regelmäßig <b>ge…t</b> (gemacht) · unregelmäßig <b>ge…en</b> (gegessen) · trennbar: ein<b>ge</b>kauft · -ieren &amp; be-/ver-: ohne ge- (telefoniert, besucht).</p><p class='en'>Use sein with movement and change of state, otherwise haben. The participle goes to the end.</p>",
merk:"Bewegung oder Veränderung? → sein. Alles andere? → haben.",
merkEn:"Movement or change? → sein. Everything else? → haben.",
q:[
{q:"Ich ___ gestern Reis gegessen.", o:["bin","habe","hatte"], c:1, h:"essen = keine Bewegung → haben."},
{q:"Er ___ nach Manila geflogen.", o:["hat","ist","war"], c:1, h:"fliegen = Bewegung → sein."},
{q:"Partizip II von „einkaufen“:", o:["geeinkauft","eingekauft","einkauft"], c:1, h:"trennbar: ein + ge + kauft."},
{q:"Partizip II von „telefonieren“:", o:["getelefoniert","telefoniert","getelefonieren"], c:1, h:"-ieren-Verben ohne ge-."},
{q:"Wir ___ zu Hause geblieben.", o:["haben","sind","waren"], c:1, h:"bleiben nimmt immer sein."},
{type:"gap", q:"Partizip II von „trinken“: Ich habe Wasser ___.", a:["getrunken"], h:"unregelmäßig: ge…en mit Vokalwechsel."}
]},

{id:"praeteritum", chip:"war · hatte", title:"Präteritum: war, hatte, konnte", titleEn:"Simple past of sein, haben & modals",
explain:"<p>Bei <b>sein, haben und Modalverben</b> benutzt man auch beim Sprechen das Präteritum — nicht das Perfekt.</p><div class='ex'>Gestern <b>war</b> ich krank. Ich <b>hatte</b> Fieber und <b>konnte</b> nicht arbeiten. Ich <b>musste</b> zum Arzt.</div><table><tr><th></th><th>sein</th><th>haben</th><th>können</th><th>müssen</th></tr><tr><td>ich / er</td><td>war</td><td>hatte</td><td>konnte</td><td>musste</td></tr><tr><td>du</td><td>warst</td><td>hattest</td><td>konntest</td><td>musstest</td></tr><tr><td>wir / sie</td><td>waren</td><td>hatten</td><td>konnten</td><td>mussten</td></tr></table><p class='en'>For sein, haben and modal verbs, use Präteritum even when speaking.</p>",
merk:"„Ich bin krank gewesen“ klingt komisch — sag „Ich war krank“.",
merkEn:"Don't say 'bin gewesen' — just say 'war'.",
q:[
{q:"Gestern ___ ich müde.", o:["war","bin","hatte"], c:0, h:"sein → Präteritum: war."},
{q:"Wir ___ keine Zeit.", o:["waren","hatten","haben gehabt"], c:1, h:"haben → hatten."},
{q:"Er ___ nicht kommen, er musste arbeiten.", o:["kann","konnte","könnte"], c:1, h:"Vergangenheit: konnte."},
{q:"___ du gestern im Unterricht?", o:["Warst","Bist","Hattest"], c:0, h:"du warst."},
{type:"gap", q:"Als Kind ___ ich nicht schwimmen. <span class='en'>(could not)</span>", a:["konnte"], h:"können → ich konnte."}
]},

{id:"dativ", chip:"Dativ", title:"Der Dativ", titleEn:"The dative — the receiver case",
explain:"<p>Der Empfänger (wem?) steht im Dativ: der/das → <b>dem</b>, die → <b>der</b>, Plural → <b>den …n</b>.</p><div class='ex'>Ich helfe <b>dem</b> Mann. · Ich danke <b>der</b> Frau. · Er hilft <b>den</b> Kinder<b>n</b>.</div><p>Dativ-Verben: <b>helfen, danken, gehören, gefallen, schmecken, passen, antworten, gratulieren</b>.</p><p>Dativ-Präpositionen (immer!): <b>aus, bei, mit, nach, seit, von, zu</b>.</p><p>Pronomen: mir, dir, ihm, ihr, ihm, uns, euch, ihnen/Ihnen.</p><p class='en'>Dative verbs: help, thank, belong, please, taste, fit, answer, congratulate. These prepositions ALWAYS take dative: aus, bei, mit, nach, seit, von, zu.</p>",
merk:"Die Dativ-Melodie: aus – bei – mit – nach – seit – von – zu.",
merkEn:"Chant it: aus, bei, mit, nach, seit, von, zu — always dative.",
q:[
{q:"Ich helfe ___ Frau.", o:["die","der","den"], c:1, h:"helfen + Dativ, feminin: der Frau."},
{q:"Das Handy gehört ___.", o:["mich","mir","ich"], c:1, h:"gehören + Dativ: mir."},
{q:"Ich fahre mit ___ Bus.", o:["den","dem","der"], c:1, h:"mit + Dativ: dem Bus."},
{q:"Die Pizza schmeckt ___ Kindern.", o:["die","den","der"], c:1, h:"Plural-Dativ: den Kindern."},
{q:"Er kommt ___ der Arbeit nach Hause.", o:["von","vom","zu"], c:0, h:"von + Dativ: von der Arbeit."},
{type:"gap", q:"Ich danke ___ (du → Dativ).", a:["dir"], h:"danken + Dativ: dir."}
]},

{id:"wechsel", chip:"Wo? Wohin?", title:"Wechselpräpositionen", titleEn:"Two-way prepositions: Wo or Wohin?",
explain:"<p><b>an, auf, hinter, in, neben, über, unter, vor, zwischen</b> — der Fall hängt von der Frage ab:</p><table><tr><th>Wohin? → Akkusativ (Bewegung)</th><th>Wo? → Dativ (Position)</th></tr><tr><td>Ich gehe <b>in den</b> Park.<br>Ich lege das Buch <b>auf den</b> Tisch.</td><td>Ich bin <b>im</b> Park.<br>Das Buch liegt <b>auf dem</b> Tisch.</td></tr></table><p>Verb-Paare: <b>legen/liegen, stellen/stehen, setzen/sitzen</b> — Aktion/Position.</p><p class='en'>Movement (where to?) = accusative. Position (where?) = dative. Contractions: im = in dem, ins = in das, am, ans.</p>",
merk:"Aktion → Akkusativ. Da bleiben → Dativ.",
merkEn:"Action → accusative. Staying → dative.",
q:[
{q:"Ich gehe ___ Kino.", o:["im","ins","in"], c:1, h:"Wohin? → Akkusativ: in das = ins Kino."},
{q:"Ich bin jetzt ___ Kino.", o:["im","ins","in den"], c:0, h:"Wo? → Dativ: in dem = im Kino."},
{q:"Er legt das Handy ___ Tisch.", o:["auf dem","auf den","auf der"], c:1, h:"legen = Bewegung → auf den Tisch."},
{q:"Das Handy liegt ___ Tisch.", o:["auf dem","auf den","auf das"], c:0, h:"liegen = Position → auf dem Tisch."},
{q:"Wir fahren ___ Strand.", o:["am","an den","an dem"], c:1, h:"Wohin? → an den Strand."},
{type:"gap", q:"Das Bild hängt ___ der Wand. (an + Dativ)", a:["an"], h:"Wo? → an der Wand."}
]},

{id:"nebensatz", chip:"weil · dass · wenn", title:"Nebensätze: weil, dass, wenn", titleEn:"Subordinate clauses — verb to the end!",
explain:"<p>Nach <b>weil</b> (Grund), <b>dass</b> (Aussage), <b>wenn</b> (Bedingung/Zeit) geht das Verb <b>ans Ende</b>. Davor: Komma.</p><div class='ex'>Ich lerne Deutsch, <b>weil</b> ich in Deutschland arbeiten <b>will</b>.<br>Ich glaube, <b>dass</b> Deutsch nicht schwer <b>ist</b>.<br><b>Wenn</b> ich Zeit <b>habe</b>, gehe ich ins Gym.</div><p class='en'>After weil/dass/wenn, the verb moves to the very end. Comma before the conjunction. If the wenn-clause comes first, the main clause starts with its verb.</p>",
merk:"weil, dass, wenn = Verb-ans-Ende-Wörter.",
merkEn:"weil, dass, wenn = verb-to-the-end words.",
q:[
{q:"Ich bleibe zu Hause, weil ich krank ___.", o:["bin ich","ich bin","bin"], c:2, h:"Nur das Verb ans Ende: … weil ich krank bin."},
{q:"Welcher Satz ist richtig?", o:["…, weil ich habe keine Zeit.","…, weil ich keine Zeit habe.","…, weil habe ich keine Zeit."], c:1, h:"Verb ganz ans Ende."},
{q:"Ich hoffe, ___ du kommst.", o:["dass","weil","wenn"], c:0, h:"Aussage/Hoffnung → dass."},
{q:"___ es regnet, bleiben wir hier.", o:["Dass","Wenn","Weil"], c:1, h:"Bedingung → wenn."},
{q:"Wenn ich Geld habe, ___ ich ein Auto.", o:["ich kaufe","kaufe","kaufe ich"], c:1, h:"Nebensatz vorn → im Hauptsatz kommt zuerst das Verb: …, kaufe ich ein Auto."},
{type:"gap", q:"Er sagt, dass er müde ___.", a:["ist"], h:"Verb ans Ende: … dass er müde ist."}
]},

{id:"komparativ", chip:"Komparativ", title:"Komparativ & Superlativ", titleEn:"Comparative & superlative",
explain:"<p>Komparativ: <b>-er</b> · Superlativ: <b>am -sten</b>. Kurze Wörter mit a/o/u bekommen Umlaut.</p><div class='ex'>schnell → schnell<b>er</b> → am schnell<b>sten</b><br>groß → gr<b>ö</b>ßer → am größten · alt → älter → am ältesten</div><p>Unregelmäßig: <b>gut → besser → am besten</b> · <b>gern → lieber → am liebsten</b> · <b>viel → mehr → am meisten</b>.</p><p>Vergleiche: <b>so … wie</b> (gleich) · Komparativ + <b>als</b> (unterschiedlich).</p><p class='en'>Irregular: gut/besser/am besten, gern/lieber/am liebsten. Equal: so…wie. Different: comparative + als.</p>",
merk:"Vergleichen? Immer „als“ nach dem Komparativ: größer als, besser als.",
merkEn:"After a comparative always use als, never wie.",
q:[
{q:"Deutsch ist ___ als Englisch.", o:["schwerer","mehr schwer","schwieriger wie"], c:0, h:"Komparativ + als: schwerer als."},
{q:"Ich trinke ___ Tee als Kaffee.", o:["gerner","lieber","mehr gern"], c:1, h:"gern → lieber (unregelmäßig)."},
{q:"Er ist so alt ___ ich.", o:["als","wie","dass"], c:1, h:"gleich → so … wie."},
{q:"Steigerung von „gut“:", o:["guter – am gutesten","besser – am besten","mehr gut – am meisten gut"], c:1, h:"gut → besser → am besten."},
{type:"gap", q:"groß → er ist ___ als ich. <span class='en'>(with umlaut!)</span>", a:["größer","groesser"], h:"groß → größer."}
]},

{id:"reflexiv", chip:"sich …", title:"Reflexive Verben", titleEn:"Reflexive verbs",
explain:"<p>Manche Verben brauchen ein Pronomen, das zum Subjekt zurückzeigt: <b>sich freuen, sich treffen, sich interessieren, sich beeilen, sich fühlen, sich ausruhen</b>.</p><div class='ex'>Ich freue <b>mich</b>. · Du triffst <b>dich</b> mit Anna. · Er interessiert <b>sich</b> für Fußball. · Wir beeilen <b>uns</b>.</div><p>Reflexivpronomen: mich, dich, <b>sich</b>, uns, euch, <b>sich</b>.</p><p class='en'>The reflexive pronoun points back to the subject: mich, dich, sich, uns, euch, sich.</p>",
merk:"er, sie, es, Sie → immer „sich“.",
merkEn:"For er/sie/es/Sie the pronoun is always sich.",
q:[
{q:"Ich freue ___ auf das Wochenende.", o:["mir","mich","sich"], c:1, h:"ich → mich."},
{q:"Er trifft ___ mit Freunden.", o:["ihn","sich","ihm"], c:1, h:"er → sich."},
{q:"Wir müssen ___ beeilen.", o:["sich","uns","euch"], c:1, h:"wir → uns."},
{q:"Interessierst du ___ für Musik?", o:["dich","dir","sich"], c:0, h:"du → dich."},
{type:"gap", q:"Sie (die Frau) fühlt ___ gut.", a:["sich"], h:"sie → sich."}
]},

{id:"konnektoren", chip:"deshalb · trotzdem", title:"Konnektoren: deshalb, trotzdem, denn", titleEn:"Connectors for main clauses",
explain:"<p><b>Position 0</b> (Wortstellung normal): <b>und, oder, aber, denn</b>.<br><b>Position 1</b> (danach kommt sofort das Verb!): <b>deshalb, trotzdem, dann, danach, außerdem</b>.</p><div class='ex'>Ich bin müde, <b>denn</b> ich habe schlecht geschlafen.<br>Ich war krank, <b>deshalb bin</b> ich zu Hause geblieben.<br>Es regnet, <b>trotzdem gehe</b> ich joggen.</div><p class='en'>und/oder/aber/denn don't change word order. deshalb/trotzdem/dann take position 1, so the verb comes immediately after.</p>",
merk:"deshalb = Folge (deshalb → darum). trotzdem = Gegenteil passiert.",
merkEn:"deshalb = therefore (result). trotzdem = nevertheless (unexpected).",
q:[
{q:"Ich habe Hunger, ___ esse ich etwas.", o:["denn","deshalb","aber"], c:1, h:"Folge → deshalb + Verb."},
{q:"Es regnet, ___ gehen wir spazieren.", o:["deshalb","trotzdem","denn"], c:1, h:"Unerwartet → trotzdem."},
{q:"Welcher Satz ist richtig?", o:["…, deshalb ich bleibe hier.","…, deshalb bleibe ich hier.","…, deshalb hier bleibe ich."], c:1, h:"Nach deshalb kommt sofort das Verb."},
{q:"Ich lerne Deutsch, ___ ich will nach Deutschland.", o:["denn","weil","deshalb"], c:0, h:"denn = Position 0, Wortstellung bleibt normal. (weil würde das Verb ans Ende schicken!)"},
{type:"gap", q:"Zuerst esse ich, ___ gehe ich zur Arbeit. <span class='en'>(then)</span>", a:["dann","danach"], h:"dann/danach + Verb."}
]},

{id:"imperativ", chip:"Imperativ", title:"Der Imperativ", titleEn:"Commands & requests",
explain:"<p>Befehle und Bitten:</p><table><tr><th>du</th><th>ihr</th><th>Sie</th></tr><tr><td><b>Komm!</b> Nimm! Iss!</td><td><b>Kommt!</b> Nehmt!</td><td><b>Kommen Sie!</b></td></tr><tr><td>sein: Sei ruhig!</td><td>Seid pünktlich!</td><td>Seien Sie so nett!</td></tr></table><p>du-Form: Stamm ohne -st, e→i bleibt (du nimmst → Nimm!). Höflicher mit <b>bitte, doch, mal</b>.</p><p class='en'>du: stem without ending (vowel change stays). Sie: infinitive + Sie. Soften with bitte/doch/mal.</p>",
merk:"„Bitte“ macht jeden Befehl höflich: Komm bitte her!",
merkEn:"bitte makes every command polite.",
q:[
{q:"(du, kommen) ___ bitte her!", o:["Kommst","Komm","Kommen"], c:1, h:"du-Imperativ: Stamm — Komm!"},
{q:"(Sie, helfen) ___ mir bitte!", o:["Hilf","Helft","Helfen Sie"], c:2, h:"Sie-Form: Infinitiv + Sie."},
{q:"(du, essen) ___ mehr Gemüse!", o:["Ess","Iss","Esst"], c:1, h:"e→i bleibt im Imperativ: Iss!"},
{q:"(ihr, sein) ___ bitte leise!", o:["Sind","Seid","Seien"], c:1, h:"ihr → Seid!"},
{type:"gap", q:"(du, nehmen) ___ ein Taxi!", a:["nimm"], h:"du nimmst → Nimm!"}
]}
,
{id:"deklination2", chip:"Deklination", title:"Deklinationstabelle: jetzt mit Dativ", titleEn:"Declension — now with dative",
explain:"<table class='wide'><tr><th></th><th>maskulin</th><th>feminin</th><th>neutral</th><th>Plural</th></tr><tr><td class='thn'>Nominativ</td><td class='tdn'><b>der</b> / ein</td><td class='tdn'><b>die</b> / eine</td><td class='tdn'><b>das</b> / ein</td><td class='tdn'><b>die</b></td></tr><tr><td class='tha'>Akkusativ</td><td class='tda'><b>den / einen</b></td><td class='tda'>die / eine</td><td class='tda'>das / ein</td><td class='tda'>die</td></tr><tr><td class='thd'>Dativ</td><td class='tdd'><b>dem / einem</b></td><td class='tdd'><b>der / einer</b></td><td class='tdd'><b>dem / einem</b></td><td class='tdd'><b>den</b> + Nomen-<b>n</b></td></tr></table><p>Pronomen in drei Fällen:</p><table class='wide'><tr><th></th><th>ich</th><th>du</th><th>er</th><th>sie</th><th>es</th><th>wir</th><th>ihr</th><th>sie/Sie</th></tr><tr><td class='thn'>Nom.</td><td class='tdn'>ich</td><td class='tdn'>du</td><td class='tdn'>er</td><td class='tdn'>sie</td><td class='tdn'>es</td><td class='tdn'>wir</td><td class='tdn'>ihr</td><td class='tdn'>sie/Sie</td></tr><tr><td class='tha'>Akk.</td><td class='tda'>mich</td><td class='tda'>dich</td><td class='tda'>ihn</td><td class='tda'>sie</td><td class='tda'>es</td><td class='tda'>uns</td><td class='tda'>euch</td><td class='tda'>sie/Sie</td></tr><tr><td class='thd'>Dat.</td><td class='tdd'><b>mir</b></td><td class='tdd'><b>dir</b></td><td class='tdd'><b>ihm</b></td><td class='tdd'><b>ihr</b></td><td class='tdd'><b>ihm</b></td><td class='tdd'>uns</td><td class='tdd'>euch</td><td class='tdd'><b>ihnen/Ihnen</b></td></tr></table><p class='en'>Green = dative: everything changes. Plural nouns get an extra -n (mit den Kindern).</p>",
merk:"Grün = Dativ: dem, der, dem, den + n. Alle ändern sich.",
merkEn:"Green = dative: dem, der, dem, den + n. Everything changes."},

{id:"verbtabellen2", chip:"Zeiten-Tabelle", title:"Konjugation: Präsens · Perfekt · Präteritum", titleEn:"The three tenses side by side",
explain:"<table class='wide'><tr><th>Verb</th><th>Präsens (er)</th><th>Perfekt (er)</th><th>Präteritum (er)</th><th>English</th></tr><tr><td><b>machen</b></td><td>macht</td><td>hat gemacht</td><td>machte</td><td class='en'>to do</td></tr><tr><td><b>gehen</b></td><td>geht</td><td><b>ist</b> gegangen</td><td>ging</td><td class='en'>to go</td></tr><tr><td><b>fahren</b></td><td>fährt</td><td><b>ist</b> gefahren</td><td>fuhr</td><td class='en'>to drive</td></tr><tr><td><b>essen</b></td><td>isst</td><td>hat gegessen</td><td>aß</td><td class='en'>to eat</td></tr><tr><td><b>sehen</b></td><td>sieht</td><td>hat gesehen</td><td>sah</td><td class='en'>to see</td></tr><tr><td><b>treffen</b></td><td>trifft</td><td>hat getroffen</td><td>traf</td><td class='en'>to meet</td></tr><tr><td><b>einkaufen</b></td><td>kauft … ein</td><td>hat eingekauft</td><td>kaufte … ein</td><td class='en'>to shop</td></tr><tr><td><b>anrufen</b></td><td>ruft … an</td><td>hat angerufen</td><td>rief … an</td><td class='en'>to call</td></tr><tr><td><b>aufstehen</b></td><td>steht … auf</td><td><b>ist</b> aufgestanden</td><td>stand … auf</td><td class='en'>to get up</td></tr><tr><td><b>besuchen</b></td><td>besucht</td><td>hat besucht</td><td>besuchte</td><td class='en'>to visit</td></tr><tr><td><b>telefonieren</b></td><td>telefoniert</td><td>hat telefoniert</td><td>telefonierte</td><td class='en'>to phone</td></tr><tr><td><b>bleiben</b></td><td>bleibt</td><td><b>ist</b> geblieben</td><td>blieb</td><td class='en'>to stay</td></tr></table><p class='en'>Bold ist = sein-verbs (movement, change, bleiben). On A2 you speak in Perfekt; Präteritum you mainly need for sein, haben and modals.</p>",
merk:"Sprechen: Perfekt. Nur war, hatte, konnte, musste, wollte kommen im Präteritum.",
merkEn:"Speak in Perfekt. Only war, hatte and the modals are used in Präteritum."},

{id:"reflexivarten", chip:"Reflexiv-Arten", title:"Reflexiv: echt, teilreflexiv, Dativ", titleEn:"Reflexive verbs: three types",
explain:"<p><b>1 · Echte reflexive Verben</b> — funktionieren NUR mit sich:</p><div class='ex'><b>sich beeilen, sich erholen, sich verspäten, sich erkälten, sich bedanken, sich freuen</b><br>Ich beeile <b>mich</b>. (× „Ich beeile den Bus“ geht nicht!)</div><p><b>2 · Teilreflexive Verben</b> — gehen mit sich ODER mit Objekt:</p><div class='ex'><b>waschen, kämmen, anziehen, treffen, ärgern</b><br>Ich wasche <b>mich</b>. / Ich wasche <b>das Auto</b>.<br>Ich ärgere <b>mich</b>. / Der Lärm ärgert <b>mich</b>.</div><p><b>3 · Reflexiv mit Dativ</b> — wenn noch ein Akkusativ-Objekt dazukommt:</p><div class='ex'>Ich wasche <b>mir</b> <span class='wa'>die Hände</span>. · Ich putze <b>mir</b> <span class='wa'>die Zähne</span>. · Ich wünsche <b>mir</b> <span class='wa'>ein Auto</span>.</div><table class='wide'><tr><th></th><th>ich</th><th>du</th><th>er/sie/es</th><th>wir</th><th>ihr</th><th>sie/Sie</th></tr><tr><td class='tha'>Akk.-Reflexiv</td><td class='tda'>mich</td><td class='tda'>dich</td><td class='tda'>sich</td><td class='tda'>uns</td><td class='tda'>euch</td><td class='tda'>sich</td></tr><tr><td class='thd'>Dat.-Reflexiv</td><td class='tdd'><b>mir</b></td><td class='tdd'><b>dir</b></td><td class='tdd'>sich</td><td class='tdd'>uns</td><td class='tdd'>euch</td><td class='tdd'>sich</td></tr></table><p class='en'>Type 1: only works reflexively. Type 2: reflexive OR with an object. Type 3: dative reflexive when a direct object follows (Ich wasche mir die Hände — I wash my hands). Note: mir/dir differ only for ich and du.</p>",
merk:"Kommt ein Akkusativ-Objekt dazu? Dann mir/dir statt mich/dich: Ich wasche mir die Hände.",
merkEn:"Direct object added? Then mir/dir instead of mich/dich.",
q:[
{q:"Ich beeile ___. (echtes reflexives Verb)", o:["mir","mich","–"], c:1, h:"sich beeilen geht nur reflexiv: mich."},
{q:"Ich wasche ___ die Hände.", o:["mich","mir","mein"], c:1, h:"Akkusativ-Objekt (die Hände) → Dativ-Reflexiv: mir."},
{q:"Welches Verb ist NUR reflexiv?", o:["waschen","treffen","sich verspäten"], c:2, h:"sich verspäten existiert nur mit sich. waschen/treffen gehen auch mit Objekt."},
{q:"Du putzt ___ die Zähne.", o:["dich","dir","dein"], c:1, h:"+ Akkusativ-Objekt → dir."},
{q:"Er wäscht ___ Auto.", o:["sich","sich das","das"], c:2, h:"Hier nicht reflexiv — er wäscht das Auto."},
{type:"gap", q:"Ich wünsche ___ ein neues Handy. <span class='en'>(for myself)</span>", a:["mir"], h:"wünschen + Dativ-Reflexiv: mir."}
]},

{id:"verbpraep2", chip:"warten auf …", title:"Verben mit fester Präposition (A2)", titleEn:"Verbs with fixed prepositions",
explain:"<table class='wide'><tr><th>Verb + Präposition</th><th>Kasus</th><th>Beispiel</th><th>English</th></tr><tr><td><b>warten auf</b></td><td class='wa'>A</td><td>Ich warte auf den Bus.</td><td class='en'>wait for</td></tr><tr><td><b>sich freuen auf</b></td><td class='wa'>A</td><td>Ich freue mich auf das Wochenende.</td><td class='en'>look forward to</td></tr><tr><td><b>sich freuen über</b></td><td class='wa'>A</td><td>Ich freue mich über das Geschenk.</td><td class='en'>be happy about</td></tr><tr><td><b>denken an</b></td><td class='wa'>A</td><td>Ich denke an meine Familie.</td><td class='en'>think of</td></tr><tr><td><b>sich interessieren für</b></td><td class='wa'>A</td><td>Er interessiert sich für Musik.</td><td class='en'>be interested in</td></tr><tr><td><b>sprechen mit</b></td><td class='wd'>D</td><td>Ich spreche mit der Lehrerin.</td><td class='en'>talk with</td></tr><tr><td><b>träumen von</b></td><td class='wd'>D</td><td>Sie träumt von Deutschland.</td><td class='en'>dream of</td></tr><tr><td><b>fragen nach</b></td><td class='wd'>D</td><td>Er fragt nach dem Weg.</td><td class='en'>ask about</td></tr><tr><td><b>erzählen von</b></td><td class='wd'>D</td><td>Erzähl mir von deiner Reise!</td><td class='en'>tell about</td></tr><tr><td><b>Angst haben vor</b></td><td class='wd'>D</td><td>Ich habe Angst vor der Prüfung.</td><td class='en'>be afraid of</td></tr></table><p class='en'>Red A = accusative, green D = dative. Learn verb + preposition + case as ONE unit.</p>",
merk:"Verb + Präposition + Kasus = EIN Wort. Immer zusammen lernen.",
merkEn:"Verb + preposition + case = one unit. Always learn them together.",
q:[
{q:"Ich warte ___ meine Freundin.", o:["auf","für","an"], c:0, h:"warten auf + A."},
{q:"Sie träumt ___ einem Haus am Strand.", o:["über","von","an"], c:1, h:"träumen von + D."},
{q:"Freust du dich ___ deinen Geburtstag nächste Woche?", o:["über","auf","für"], c:1, h:"Zukunft → sich freuen auf."},
{type:"gap", q:"Er hat Angst ___ Hunden.", a:["vor"], h:"Angst haben vor + D."}
]},

{id:"haeufigeverben2", chip:"Top-Verben", title:"Die 20 wichtigsten A2-Verben", titleEn:"The 20 most important A2 verbs (with Perfekt)",
explain:"<div class='vgrid'><div class='vbox'><h4>Alltag & Bewegung</h4><ul><li>aufstehen → ist aufgestanden<span class='en'>get up</span></li><li>einkaufen → hat eingekauft<span class='en'>shop</span></li><li>anfangen → hat angefangen<span class='en'>start</span></li><li>aufhören → hat aufgehört<span class='en'>stop</span></li><li>umziehen → ist umgezogen<span class='en'>move house</span></li></ul></div><div class='vbox'><h4>Kommunikation</h4><ul><li>anrufen → hat angerufen<span class='en'>call</span></li><li>erzählen → hat erzählt<span class='en'>tell</span></li><li>erklären → hat erklärt<span class='en'>explain</span></li><li>antworten → hat geantwortet<span class='en'>answer</span></li><li>einladen → hat eingeladen<span class='en'>invite</span></li></ul></div><div class='vbox'><h4>Leben & Gefühle</h4><ul><li>sich treffen → hat sich getroffen<span class='en'>meet</span></li><li>sich freuen → hat sich gefreut<span class='en'>be happy</span></li><li>gefallen → hat gefallen<span class='en'>please/like</span></li><li>schmecken → hat geschmeckt<span class='en'>taste</span></li><li>helfen → hat geholfen<span class='en'>help</span></li></ul></div><div class='vbox'><h4>Organisation</h4><ul><li>bekommen → hat bekommen<span class='en'>receive</span></li><li>bezahlen → hat bezahlt<span class='en'>pay</span></li><li>bestellen → hat bestellt<span class='en'>order</span></li><li>vergessen → hat vergessen<span class='en'>forget</span></li><li>verlieren → hat verloren<span class='en'>lose</span></li></ul></div></div>",
merk:"Lerne jedes Verb gleich mit seinem Perfekt — nie ohne.",
merkEn:"Always learn each verb together with its Perfekt form."},

{id:"wortschatz2", chip:"Wortschatz", title:"Wortschatz nach Themen", titleEn:"Core A2 vocabulary by topic",
explain:"<div class='vgrid'><div class='vbox'><h4>Arbeit & Beruf</h4><ul><li>die Stelle / der Job<span class='en'>position/job</span></li><li>der Kollege / die Kollegin<span class='en'>colleague</span></li><li>das Gehalt<span class='en'>salary</span></li><li>die Bewerbung<span class='en'>application</span></li><li>der Termin<span class='en'>appointment</span></li><li>die Schicht<span class='en'>shift</span></li></ul></div><div class='vbox'><h4>Gesundheit</h4><ul><li>die Schmerzen<span class='en'>pain</span></li><li>das Fieber<span class='en'>fever</span></li><li>die Erkältung<span class='en'>cold</span></li><li>das Rezept<span class='en'>prescription</span></li><li>die Apotheke<span class='en'>pharmacy</span></li><li>wehtun<span class='en'>to hurt</span></li></ul></div><div class='vbox'><h4>Reisen</h4><ul><li>der Zug / das Gleis<span class='en'>train/platform</span></li><li>die Fahrkarte<span class='en'>ticket</span></li><li>die Verspätung<span class='en'>delay</span></li><li>umsteigen<span class='en'>change trains</span></li><li>das Gepäck<span class='en'>luggage</span></li><li>buchen<span class='en'>to book</span></li></ul></div><div class='vbox'><h4>Einkaufen</h4><ul><li>das Sonderangebot<span class='en'>special offer</span></li><li>die Größe<span class='en'>size</span></li><li>anprobieren<span class='en'>try on</span></li><li>umtauschen<span class='en'>exchange</span></li><li>die Rechnung<span class='en'>bill</span></li><li>bar / mit Karte<span class='en'>cash/by card</span></li></ul></div></div>",
merk:"A2-Prüfung = Alltag: Arbeit, Arzt, Reisen, Einkaufen. Genau diese Wörter.",
merkEn:"The A2 exam is daily life: work, doctor, travel, shopping — exactly these words."}
,
{id:"redemittel2", chip:"Redemittel", title:"Redemittel: Meinung & Gespräch", titleEn:"Phrases for opinions & conversations",
explain:"<div class='vgrid'><div class='vbox'><h4>Meinung ausdrücken</h4><ul><li>Ich finde, dass …<span class='en'>I think that …</span></li><li>Ich denke / glaube, dass …<span class='en'>I think/believe that …</span></li><li>Meiner Meinung nach …<span class='en'>in my opinion</span></li><li>Für mich ist … wichtig.<span class='en'>for me … is important</span></li><li>Das stimmt (nicht).<span class='en'>that's (not) true</span></li></ul></div><div class='vbox'><h4>Zustimmen & Ablehnen</h4><ul><li>Da hast du recht.<span class='en'>you're right</span></li><li>Das sehe ich auch so.<span class='en'>I see it the same way</span></li><li>Das sehe ich anders.<span class='en'>I see it differently</span></li><li>Einverstanden!<span class='en'>agreed!</span></li><li>Lieber nicht.<span class='en'>rather not</span></li></ul></div><div class='vbox'><h4>Vorschlagen & Reagieren</h4><ul><li>Wollen wir …?<span class='en'>shall we …?</span></li><li>Wie wäre es mit …?<span class='en'>how about …?</span></li><li>Gute Idee!<span class='en'>good idea</span></li><li>Das passt mir (nicht).<span class='en'>that (doesn't) suit me</span></li><li>Geht auch Sonntag?<span class='en'>does Sunday work too?</span></li></ul></div><div class='vbox'><h4>Wichtige Floskeln</h4><ul><li>Es tut mir leid.<span class='en'>I'm sorry</span></li><li>Das macht nichts.<span class='en'>never mind</span></li><li>Ich bin nicht sicher.<span class='en'>I'm not sure</span></li><li>Moment mal!<span class='en'>wait a moment</span></li><li>Alles klar!<span class='en'>got it / alright</span></li></ul></div></div>",
merk:"Nach „Ich finde, dass …“ geht das Verb ans Ende!",
merkEn:"After 'Ich finde, dass …' the verb goes to the end!",
q:[
{q:"Du stimmst zu: „Da hast du ___.“", o:["richtig","recht","gut"], c:1, h:"recht haben = to be right."},
{q:"Vorschlag machen: „Wie ___ es mit Pizza?“", o:["wäre","ist","war"], c:0, h:"Wie wäre es mit …? = how about …?"},
{q:"„Ich finde, dass Deutsch wichtig ___.“", o:["ist","sein","–"], c:0, h:"dass-Satz: Verb ans Ende → ist."},
{q:"Jemand sagt „Entschuldigung“. Du antwortest:", o:["Viel Glück!","Das macht nichts.","Bis später!"], c:1, h:"Das macht nichts = never mind."},
{type:"gap", q:"Meiner ___ nach ist Cebu wunderschön. <span class='en'>(in my opinion)</span>", a:["meinung"], h:"Meiner Meinung nach + Verb."}
]}
]};
