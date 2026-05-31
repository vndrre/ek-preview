import { LIVE_LOGIN, REPO, icon } from './content.js'
import { flowSlideBody, flowSlideBodyDual, flowSlideBodyDiagram } from './flows.js'

export function getSlides() {
  return [
    {
      variant: 'title',
      tag: 'Eksamitöö',
      title: 'E-Kaltsukas',
      subtitle: 'Teise ringi riiete turuplatvorm',
      body: `
        <p class="slide-tagline">Andre Leppik & Kaspar Truu, TAK-23</p>
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
      `,
    },
    {
      tag: '2. Eesmärgid',
      title: 'Kuidas probleemi lahendada kavatsesime?',
      body: `
        <ul class="slide-bullets">
          <li><strong>Üks platvorm</strong> — kuulutus, otsing, vestlus, korv, tellimus</li>
          <li><strong>Lihtne UX</strong> — 5 vahekaarti, selged voogud, hele/tume teema</li>
          <li><strong>Universaalne app</strong> — sama kood veeb + iOS + Android (Expo)</li>
          <li><strong>REST API</strong> — front ja back eraldi, paralleelne arendus</li>
        </ul>
      `,
    },
    {
      tag: '3. Tehnoloogiad · Frontend',
      title: 'Frontend — Expo rakendus',
      layout: 'tech-fill',
      body: `
        <div class="slide-cards slide-cards--tech">
          <div class="slide-card">
            <h3>${icon('smartphone')} React Native + Expo</h3>
            <p><strong>Miks:</strong> Reacti kogemus koolis; üks koodibaas veebile ja mobiilile.</p>
            <p><strong>Mõju:</strong> Avaleht, müük (kaamera), postkast, profiil — live demoks Vercel veeb.</p>
          </div>
          <div class="slide-card">
            <h3>${icon('code')} TypeScript</h3>
            <p><strong>Miks:</strong> Keerukad ekraanid ja API vastused (kuulutus, tellimus, chat).</p>
            <p><strong>Mõju:</strong> Vähem vigu; selgem leping backendiga.</p>
          </div>
          <div class="slide-card">
            <h3>${icon('route')} Expo Router + NativeWind</h3>
            <p><strong>Miks:</strong> Failipõhine navigatsioon; ühtne kuldne teema (tume/hele).</p>
            <p><strong>Mõju:</strong> 5 vahekaarti, selged voogud — sama välimus kogu äpis.</p>
          </div>
          <div class="slide-card">
            <h3>${icon('lock')} axios + JWT (klient)</h3>
            <p><strong>Miks:</strong> Turvaline suhtlus API-ga; token salvestatakse seadmesse.</p>
            <p><strong>Mõju:</strong> Sisselogimine, kaitstud ekraanid — front <em>ei</em> puutu otse andmebaasi.</p>
          </div>
        </div>
      `,
    },
    {
      tag: '3. Tehnoloogiad · Backend',
      title: 'Backend — API ja pilv',
      layout: 'tech-fill',
      body: `
        <div class="slide-cards slide-cards--tech">
          <div class="slide-card">
            <h3>${icon('api')} Node.js + Express</h3>
            <p><strong>Miks:</strong> REST API ja äriloogika; JavaScript mõlemal poolel, kiire arendus kahekesi.</p>
            <p><strong>Mõju:</strong> Login, kuulutused, korv, tellimused, profiil — kõik läbi <code>/api</code> endpointide.</p>
          </div>
          <div class="slide-card">
            <h3>${icon('forum')} Socket.io</h3>
            <p><strong>Miks:</strong> Reaalajas vestlus müüja ja ostja vahel.</p>
            <p><strong>Mõju:</strong> Vestluse olemasolu on meie rakenduse üks tähtsamatest põhifunktsioonidest.</p>
          </div>
          <div class="slide-card">
            <h3>${icon('database')} Supabase (PostgreSQL)</h3>
            <p><strong>Miks:</strong> Kasutajad, kuulutused, tellimused ühes andmebaasis.</p>
            <p><strong>Mõju:</strong> Autentimine + andmed; front loeb ainult API kaudu.</p>
          </div>
          <div class="slide-card">
            <h3>${icon('cloud_upload')} Cloudinary · Stripe (demo)</h3>
            <p><strong>Miks:</strong> Fotod ja maksevoog ilma oma serveri haldamiseta.</p>
            <p><strong>Mõju:</strong> Kuulutuse pildid pilves; demo-kassa õppeprojektis (mitte päris teenus).</p>
          </div>
        </div>
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
          <li><strong>Tööjaotus</strong> — eraldi piletisüsteemi (Jira jms) ei olnud; jagasime arenduse protsessi käigus, kes mida teeb, ja vaatasime edenemist koos</li>
          <li><strong>Iteratiivne arendus</strong> — väikesed sammud, prioriteedid, tulemusi testiti regulaarselt</li>
          <li><strong>Git / GitHub</strong> — koodihaldus (branching, merging, pull requests)</li>
          <li><strong>Paarisprogrammeerimine</strong> — müük, kassa, chat</li>
          <li><strong>Front / back eraldus</strong> — UI vs API endpointid</li>
        </ul>
      `,
      aside: `
        <div class="slide-aside--testing">
          <h3 class="slide-aside-title">${icon('bug_report')} Testimine</h3>
          <p>Testisime <strong>manuaalselt</strong>, API-d <strong>Postmaniga</strong>.</p>
          <ul class="slide-bullets">
            <li>Postman: login, items, veakäsitlus (401)</li>
            <li>Sisselogimine, kuulutus, otsing</li>
            <li>Korv → kassa → tellimus</li>
            <li>Chat, profiil, rahakott</li>
            <li>Chrome + vajadusel Expo Go</li>
          </ul>
        </div>
      `,
    },
    {
      tag: '4. Töövoog',
      title: 'Meeskonna rollid',
      layout: 'team-table',
      body: `
        <div class="table-wrap table-wrap--slide table-wrap--team">
          <table class="team-table">
            <thead>
              <tr><th>Liige</th><th>Roll</th><th>Vastutus</th></tr>
            </thead>
            <tbody>
              <tr>
                <td class="team-table__member">Andre Leppik</td>
                <td class="team-table__role">Full-stack</td>
                <td>Node/Express API, auth, integratsioonid; Expo UI ja voogude arendus</td>
              </tr>
              <tr>
                <td class="team-table__member">Kaspar Truu</td>
                <td class="team-table__role">Full-stack</td>
                <td>Expo UI, ekraanid, API sidumine, korv/kassa; rohkem backendi vigade parandust</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="slide-footnote slide-footnote--team">Mõlemad tegime frontendi ja backendi — rollid kattuvad, rõhk erineb. Koordineerimine suuliselt; kood GitHubis</p>
      `,
    },
    {
      tag: '5. Tulemused',
      title: 'Mis läks hästi?',
      body: `
        <ul class="slide-bullets slide-bullets--check">
          <li><strong>Töötav rakendus</strong> põhivoogudega</li>
          <li>Üks koodibaas veeb + mobiil; ühtne disain</li>
          <li>API eraldus → paralleelne front/back töö</li>
          <li>Selge tööjaotus ja Git hoidsid arenduse korraldatuna</li>
        </ul>
        <p class="slide-footnote">Makse on Stripe <strong>demo</strong> — päris teenus on edasiarendus</p>
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
      `,
    },
    {
      tag: '6. Edasiarendused',
      title: 'Mis järgmisena?',
      body: `
        <ul class="slide-bullets">
          <li>Päris makselahendus</li>
          <li>Push-teavitused</li>
          <li>Hinnangud ja raporteerimine</li>
          <li>Admin-paneel</li>
          <li>Google Play ja App Store deployment</li>
        </ul>
      `,
    },
    {
      tag: 'Kasutajavoogud',
      title: 'Rakenduse ülesehitus',
      layout: 'flow',
      body: flowSlideBodyDual(
        [
          { n: '1', text: '5 vahekaarti + keskel Müü-nupp (sell)' },
          { n: '2', text: 'Menüü: profiil, rahakott, teema' },
          { n: '3', text: 'Korv, kassa, toode, vestlus, tellimused' },
        ],
        'tabs',
        'Avaleht',
        'appMenu',
        'Menüü',
        { flowClass: 'slide-flow--structure-screens' }
      ),
    },
    {
      tag: 'Kasutajavoogud',
      title: 'Tehingu ülevaade — kaks poolt',
      layout: 'flow',
      body: flowSlideBodyDiagram(
        [
          { n: '1', text: 'Müüja avaldab → ostja leiab, vestleb või teeb pakkumise' },
          { n: '2', text: 'Ostja maksab — sama tellimus on mõlemal nähtav' },
          { n: '3', text: 'Paid → Shipped → Confirmed — profiililt Purchases / Sales' },
        ],
        'twoUsers'
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
      tag: 'Kasutajavoogud · Ostja',
      title: 'Ostja: leiab toote',
      layout: 'flow',
      body: flowSlideBodyDual(
        [
          { n: '1', text: 'Avasta: filtrid (sugu, kategooria, suurus, bränd)' },
          { n: '2', text: 'Toote leht: detailid, müüja, korv' },
          { n: '3', text: 'Message seller või Make offer — enne ostu' },
        ],
        'explore',
        'Avasta',
        'product',
        'Toode'
      ),
    },
    {
      tag: 'Kasutajavoogud · Ostja',
      title: 'Ostja: vestlus ja pakkumine',
      layout: 'flow',
      body: flowSlideBodyDual(
        [
          { n: '1', text: 'Postkast — vestlus kuulutuse kohta' },
          { n: '2', text: 'Make offer: ostja pakub hinda (nt €4 kuigi list €5)' },
          { n: '3', text: 'Müüja võtab vastu / lükkab tagasi — seejärel ost või korv' },
        ],
        'inbox',
        'Postkast',
        'makeOffer',
        'Pakkumine'
      ),
    },
    {
      tag: 'Kasutajavoogud · Müüja',
      title: 'Müüja: vastab vestluses ja pakkumisele',
      layout: 'flow',
      body: flowSlideBody(
        [
          { n: '1', text: 'Sama vestlus Inboxis — kontekst: kuulutus ja hind' },
          { n: '2', text: 'Ostja pakkumine vestluses — Accept või Decline' },
          { n: '3', text: 'Pärast aktsepti läheb ostja kassasse (või lisab korvi)' },
        ],
        'chatThread'
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
      tag: 'Kasutajavoogud · Tehing',
      title: 'Profiil: Purchases ja Sales',
      layout: 'flow',
      body: flowSlideBodyDual(
        [
          { n: '1', text: 'Mõlemal pool profiil → Purchases või Sales' },
          { n: '2', text: 'Ostja (Kaspar): oma ostud ja staatus' },
          { n: '3', text: 'Müüja (Andre): oma müügid — sama tellimus, teine vaade' },
        ],
        'profilePurchases',
        'Ostja · Purchases',
        'profileSales',
        'Müüja · Sales'
      ),
    },
    {
      tag: 'Kasutajavoogud · Ostja',
      title: 'Ostja: tellimuse staatus',
      layout: 'flow',
      body: flowSlideBodyDual(
        [
          { n: '1', text: 'Orders → Purchases — nimekiri' },
          { n: '2', text: 'Paid: ootab müüja saatmist' },
          { n: '3', text: 'Shipped: tracking + Confirm delivery' },
        ],
        'ordersPurchases',
        'Nimekiri',
        'orderBuyerPaid',
        'Paid'
      ),
    },
    {
      tag: 'Kasutajavoogud · Ostja',
      title: 'Ostja: pärast saatmist',
      layout: 'flow',
      body: flowSlideBodyDual(
        [
          { n: '1', text: 'Staatus Shipped + DPD tracking' },
          { n: '2', text: 'Confirm delivery — alles pärast kättesaamist' },
          { n: '3', text: 'Lõpetab tellimuse, vabastab makse müüjale' },
        ],
        'orderBuyerShipped',
        'Tellimus',
        'confirmDelivery',
        'Kinnitus'
      ),
    },
    {
      tag: 'Kasutajavoogud · Müüja',
      title: 'Müüja: tellimuse staatus',
      layout: 'flow',
      body: flowSlideBodyDual(
        [
          { n: '1', text: 'Profiil → Sales või Orders → Sales' },
          { n: '2', text: 'Paid: müüja näeb ostja (Kaspar) ja hinda' },
          { n: '3', text: 'Shipped: lisab tracking, ootab ostja kinnitust' },
        ],
        'orderSeller',
        'Sales · Paid',
        'orderSellerShipped',
        'Shipped'
      ),
    },
    {
      tag: 'Kasutajavoogud · Tehing',
      title: 'Lõpp: raha müüja rahakotti',
      layout: 'flow',
      body: flowSlideBodyDual(
        [
          { n: '1', text: 'Pärast Confirmed liigub summa müüja walletisse' },
          { n: '2', text: 'Menüüst Wallet — saadaval vs pending' },
          { n: '3', text: 'Kogu voog: vestlus → ost → jälgimine → kinnitus' },
        ],
        'wallet',
        'Rahakott',
        'profileSales',
        'Sales kokkuvõte'
      ),
    },
    {
      variant: 'title',
      tag: 'Kokkuvõte',
      title: 'Aitäh!',
      subtitle: 'E-Kaltsukas — teise ringi riiete turg',
      body: `

      `,
    },
  ]
}
