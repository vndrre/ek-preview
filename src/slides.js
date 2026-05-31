import { LIVE_LOGIN, LIVE_APP_LABEL, REPO, icon } from './content.js'
import { flowSlideBody, flowSlideBodyDual, flowSlideBodyDiagram } from './flows.js'

export function getSlides() {
  return [
    {
      variant: 'title',
      tag: 'Kooli lõputöö',
      title: 'E-Kaltsukas',
      subtitle: 'Teise ringi riiete turuplatvorm',
      body: `
        <p class="slide-tagline">Osta ja müü kasutatud riideid — veebis ja mobiilis</p>
        <div class="slide-actions">
          <span class="slide-hint">${icon('keyboard_arrow_right')} Järgmine slaid: nooled, tühik või klõps paremal</span>
        </div>
      `,
    },
    {
      tag: '1. Probleem',
      title: 'Mis probleemi lahendame?',
      body: `
        <ul class="slide-bullets">
          <li>Kodus on palju <strong>kasutatud riideid</strong>, mis jäävad riiulile seisma</li>
          <li>Teised otsivad soodsalt <strong>teise ringi</strong> riideid</li>
          <li>Praegu müüakse tihti <strong>killustatult</strong> (Facebook, Instagram, Messenger)</li>
          <li>Puuduvad ühised otsingud, filtrid, ostuvoog ja tellimuste jälgimine</li>
          <li>Toetab <strong>keskkonnasäästlikku</strong> tarbimist — riiete taaskasutus</li>
        </ul>
        <p class="slide-footnote">Tulemus: aeglane müük, keeruline ost — mõlemale poolele ebamugav</p>
      `,
    },
    {
      tag: '2. Eesmärgid',
      title: 'Kuidas probleemi lahendada kavatsesime?',
      body: `
        <ul class="slide-bullets slide-bullets--compact">
          <li><strong>Üks platvorm</strong> — kuulutus, otsing, vestlus, korv, tellimus</li>
          <li><strong>Lihtne UX</strong> — 5 vahekaarti, selged voogud, hele/tume teema</li>
          <li><strong>Universaalne app</strong> — sama kood veeb + iOS + Android (Expo)</li>
          <li><strong>REST API</strong> — front ja back eraldi, paralleelne arendus</li>
          <li><strong>Slaididel</strong> — kasutajavoogude näited; <strong>live</strong> — kui komisjon tahab päriselt proovida</li>
        </ul>
      `,
    },
    {
      tag: 'Lisa · valikuline',
      title: 'Live demo — kui aega jagub',
      variant: 'center',
      body: `
        <p class="slide-lead">
          Põhifunktsionaalsus on <strong>slaididel illustratsioonidega</strong> allpool.
          Kui komisjonil on aega ja soovi, avame <strong>töötava rakenduse</strong> brauseris.
        </p>
        <ul class="slide-bullets slide-bullets--inline">
          <li>${LIVE_APP_LABEL}</li>
        </ul>
        <a class="btn btn-primary btn--lg" href="${LIVE_LOGIN}" target="_blank" rel="noopener">
          ${icon('open_in_new')} Ava live (uus vahekaart)
        </a>
        <p class="slide-footnote">Esitluse käigus võid jätta live vahele — voogude slaidid katavad põhifunktsionaalsuse</p>
      `,
    },
    {
      tag: '3. Tehnoloogiad',
      title: 'Stack — ülevaade',
      layout: 'two-col',
      body: `
        <div class="arch-diagram arch-diagram--slide">
          <div class="arch-row">
            <div class="arch-box">${icon('person')} Kasutaja</div>
            <span class="arch-arrow">→</span>
            <div class="arch-box">${icon('smartphone')} Expo app</div>
            <span class="arch-arrow">→</span>
            <div class="arch-box">${icon('api')} Node + Express</div>
            <span class="arch-arrow">→</span>
            <div class="arch-box">${icon('database')} Supabase + pilv</div>
          </div>
        </div>
        <p class="slide-footnote">Andmebaasi/ORM detailidesse ei süvene — front suhtleb REST API endpointidega</p>
      `,
      aside: `
        <p class="slide-aside-title">Miks räägime valikutest?</p>
        <p>Iga tehnoloogia all on <strong>põhjendus</strong>, mitte „see on populaarne“. Komisjon võib küsida otse.</p>
      `,
    },
    {
      tag: '3. Tehnoloogiad',
      title: 'React Native + Expo · TypeScript',
      body: `
        <div class="slide-cards">
          <div class="slide-card">
            <h3>React Native + Expo</h3>
            <p><strong>Miks:</strong> Reacti kogemus koolis; üks koodibaas veebile ja mobiilile ilma eraldi native setup’ita.</p>
            <p><strong>Mõju:</strong> Avaleht, müük (kaamera), postkast — esitluseks Vercel veeb.</p>
          </div>
          <div class="slide-card">
            <h3>TypeScript</h3>
            <p><strong>Miks:</strong> Keerukad API vastused (kuulutus, tellimus, chat).</p>
            <p><strong>Mõju:</strong> Vähem vigu integratsioonis; selgem leping back-endiga.</p>
          </div>
        </div>
      `,
    },
    {
      tag: '3. Tehnoloogiad',
      title: 'Backend · integratsioonid · UI',
      body: `
        <ul class="slide-bullets slide-bullets--compact">
          <li><strong>Node.js + Express</strong> — REST API ja äriloogika; JavaScript mõlemal poolel, kiire arendus</li>
          <li><strong>Socket.io</strong> — reaalajas vestlus postkastis; sõnum tuleb kohe, mitte lehe värskendamisega</li>
          <li><strong>Cloudinary</strong> — kuulutuse fotod; ei pea ise failiserverit haldama</li>
          <li><strong>Expo Router + NativeWind</strong> — failipõhine routing ja ühtne kuldne teema</li>
          <li><strong>JWT + axios</strong> — stateless auth; <strong>Vercel</strong> — Expo web build live demoks</li>
        </ul>
      `,
    },
    {
      tag: '3. Tehnoloogiad',
      title: 'Cursor · ChatGPT (Codex)',
      body: `
        <div class="slide-cards">
          <div class="slide-card slide-card--accent">
            <h3>${icon('code')} Cursor</h3>
            <p>AI-editor projekti kontekstis — API ühendused, vigade parandus, refaktoring.</p>
            <p class="slide-card-note">Muudatused läbisid ülevaatuse + manuaalne test.</p>
          </div>
          <div class="slide-card slide-card--accent">
            <h3>${icon('smart_toy')} ChatGPT (Codex)</h3>
            <p>Ideed, veateated, API struktuur, esitlusteksti mustandid.</p>
            <p class="slide-card-note">AI abistaja — loogika ja deploy meeskonna töö.</p>
          </div>
        </div>
      `,
    },
    {
      tag: '4. Töövoog',
      title: 'Kuidas arendasime?',
      layout: 'two-col',
      body: `
        <ul class="slide-bullets">
          <li><strong>Tööjaotus</strong> — eraldi piletisüsteemi (Jira jms) ei olnud; jagasime suuliselt, kes mida teeb, ja vaatasime edenemist koos</li>
          <li><strong>Iteratiivne arendus</strong> — väikesed sammud, prioriteedid, tulemusi testiti regulaarselt</li>
          <li><strong>Git / GitHub</strong> — harud, commitid, merge enne live’i (kood, mitte ülesannete haldus)</li>
          <li><strong>Paarisprogrammeerimine</strong> — müük, kassa, chat</li>
          <li><strong>Front / back eraldus</strong> — UI vs API endpointid</li>
        </ul>
      `,
      aside: `
        <h3 class="slide-aside-title">${icon('bug_report')} Testimine</h3>
        <p><strong>Automaatteste ei olnud</strong> (unit / e2e).</p>
        <p>Testisime <strong>manuaalselt</strong>, API-d <strong>Postmaniga</strong> + <code>expo lint</code>.</p>
        <ul class="slide-bullets slide-bullets--small">
          <li>Postman: login, items, veakäsitlus (401)</li>
          <li>Sisselogimine, kuulutus, otsing</li>
          <li>Korv → kassa → tellimus</li>
          <li>Chat, profiil, rahakott</li>
          <li>Chrome + vajadusel Expo Go</li>
        </ul>
      `,
    },
    {
      tag: '4. Töövoog',
      title: 'Meeskonna rollid',
      body: `
        <div class="table-wrap table-wrap--slide">
          <table class="team-table">
            <thead>
              <tr><th>Liige</th><th>Roll</th><th>Vastutus</th></tr>
            </thead>
            <tbody>
              <tr><td>Andre Leppik</td><td>Full-stack</td><td>Arhitektuur, Node/Express API, auth, integratsioonid; Expo UI ja voogude arendus</td></tr>
              <tr><td>Kaspar Truu</td><td>Full-stack</td><td>Expo UI, ekraanid, API sidumine, korv/kassa; <strong>rohkem backendi vigade parandust</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p class="slide-footnote">Mõlemad tegime frontendi ja backendi — rollid kattuvad, rõhk erineb. Koordineerimine suuliselt; kood Gitis</p>
      `,
    },
    {
      tag: '5. Tulemused',
      title: 'Mis läks hästi?',
      body: `
        <ul class="slide-bullets slide-bullets--check">
          <li>Töötav <strong>live demo</strong> põhivoogudega (UI hilisem versioon kirjaliku töö prototüübist)</li>
          <li>Üks koodibaas veeb + mobiil; ühtne disain</li>
          <li>API eraldus → paralleelne front/back töö</li>
          <li>Selge tööjaotus ja Git hoidsid arenduse korraldatuna</li>
        </ul>
        <p class="slide-footnote">Makse on Stripe UI <strong>demo</strong> — päris teenus on edasiarendus (nagu kirjalikus töös)</p>
      `,
    },
    {
      tag: '5. Tulemused',
      title: 'Mis oli keeruline?',
      body: `
        <ul class="slide-bullets slide-bullets--warn">
          <li>API ↔ front andmevorming (nt pildid JSON-ina)</li>
          <li>Kaamera/galerii erinev veeb vs natiiv</li>
          <li>Regressioon ilma autotestideta — palju käsitsi kontrolli</li>
          <li>Makse on <strong>demo</strong>, mitte päris teenus</li>
        </ul>
        <p class="slide-footnote">Takistused lahendati: React contextid, Expo Router struktuur, ajaplaneerimine</p>
      `,
    },
    {
      tag: '6. Edasiarendused',
      title: 'Mis järgmisena?',
      body: `
        <ul class="slide-bullets slide-bullets--compact">
          <li>Päris makselahendus (nt Stripe)</li>
          <li>Automatiseeritud testid (unit, e2e)</li>
          <li>Push-teavitused</li>
          <li>Hinnangud ja raporteerimine</li>
          <li>Admin-paneel</li>
          <li>Täiustatud soovitused</li>
        </ul>
      `,
    },
    {
      tag: 'Kasutajavoogud',
      title: 'Rakenduse ülesehitus',
      layout: 'flow',
      body: flowSlideBody(
        [
          { n: '1', text: '5 vahekaarti + keskel Müü-nupp' },
          { n: '2', text: 'Korv, kassa, toode, vestlus, tellimused' },
          { n: '3', text: 'Menüü: profiil, rahakott, teema' },
        ],
        'tabs'
      ),
    },
    {
      tag: 'Kasutajavoogud',
      title: 'Ost ja müük kahe kasutaja vahel',
      layout: 'flow',
      body: flowSlideBodyDiagram(
        [
          { n: '1', text: 'Müüja loob kuulutuse — ostja leiab selle avalehelt või Avastast' },
          { n: '2', text: 'Ostja maksab — tellimus tekib mõlemale nähtav' },
          { n: '3', text: 'Müüja saadab → ostja kinnitab kättesaamise → raha müüja rahakotti' },
        ],
        'twoUsers'
      ),
    },
    {
      tag: 'Kasutajavoogud · Ostja',
      title: 'Ostja: leiab toote ja lisab korvi',
      layout: 'flow',
      body: flowSlideBodyDual(
        [
          { n: '1', text: 'Avasta: filtrid (sugu, kategooria, suurus, bränd)' },
          { n: '2', text: 'Toote leht: detailid, müüja, korvi / vestlus' },
          { n: '3', text: 'Üks kuulutus = üks eksemplar korvis' },
        ],
        'explore',
        'Avasta',
        'product',
        'Toode'
      ),
    },
    {
      tag: 'Kasutajavoogud · Ostja',
      title: 'Ostja: kassa ja makse',
      layout: 'flow',
      body: flowSlideBodyDual(
        [
          { n: '1', text: 'Tellimuse kokkuvõte ja tarneaadress' },
          { n: '2', text: 'Demo makse (Stripe UI) — õppeprojektis' },
          { n: '3', text: 'Pärast makset: tellimus staatuses Paid' },
        ],
        'checkout',
        'Kassa',
        'payment',
        'Makse'
      ),
    },
    {
      tag: 'Kasutajavoogud · Müüja',
      title: 'Müüja: kuulutuse loomine',
      layout: 'flow',
      body: flowSlideBodyDual(
        [
          { n: '1', text: 'Kuni 4 fotot, esimene = kaanepilt' },
          { n: '2', text: 'Järjekorra muutmine enne detailide täitmist' },
          { n: '3', text: 'Kategooria, hind, seisukord — avalda kuulutus' },
        ],
        'sellPhotos',
        'Fotod',
        'sellReview',
        'Ülevaatus'
      ),
    },
    {
      tag: 'Kasutajavoogud · Müüja',
      title: 'Müüja: hind ja avaldamine',
      layout: 'flow',
      body: flowSlideBody(
        [
          { n: '1', text: 'Kategooria, suurus, bränd — rippmenüüd' },
          { n: '2', text: 'Hind + 10% tasu — nähtav eeldatav tulu' },
          { n: '3', text: 'Publish — kuulutus ilmub ostjatele' },
        ],
        'sellDetails'
      ),
    },
    {
      tag: 'Kasutajavoogud · Tehing',
      title: 'Tellimus: ostja ja müüja vaade',
      layout: 'flow',
      body: flowSlideBodyDual(
        [
          { n: '1', text: 'Ostja jälgib: Paid → Shipped → Confirmed' },
          { n: '2', text: 'Müüja näeb Sales vaates sama tellimust' },
          { n: '3', text: 'Tracking number pärast saatmist' },
        ],
        'orderBuyer',
        'Ostja',
        'orderSeller',
        'Müüja'
      ),
    },
    {
      tag: 'Kasutajavoogud · Tehing',
      title: 'Kättesaamise kinnitamine',
      layout: 'flow',
      body: flowSlideBodyDual(
        [
          { n: '1', text: 'Ostja kinnitab alles pärast kättesaamist' },
          { n: '2', text: 'See lõpetab tellimuse ja vabastab makse müüjale' },
          { n: '3', text: 'Müüja rahakott uueneb — profiililt Purchases / Sales' },
        ],
        'confirmDelivery',
        'Kinnitus',
        'profile',
        'Profiil'
      ),
    },
    {
      tag: 'Kasutajavoogud',
      title: 'Raha ja vestlus',
      layout: 'flow',
      body: flowSlideBodyDual(
        [
          { n: '1', text: 'Müüja rahakott: saadaval ja ootel summa' },
          { n: '2', text: 'Vestlus enne ostu — küsitlus kuulutuse kohta' },
          { n: '3', text: 'Sisselogimine — kõik kaitstud tegevused nõuavad kontot' },
        ],
        'wallet',
        'Rahakott',
        'inbox',
        'Postkast'
      ),
    },
    {
      variant: 'title',
      tag: 'Kokkuvõte',
      title: 'Aitäh!',
      subtitle: 'E-Kaltsukas — teise ringi riiete turg',
      body: `
        <p class="slide-tagline">
          Töötav MVP · React/Expo · REST API · manuaalne testimine · live demo valmis
        </p>
        <div class="slide-actions">
          <a class="btn btn-primary" href="${LIVE_LOGIN}" target="_blank" rel="noopener">${icon('open_in_new')} Live</a>
          <a class="btn btn-outline" href="${REPO}" target="_blank" rel="noopener">${icon('code')} GitHub</a>
        </div>
      `,
    },
  ]
}
