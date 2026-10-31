// ============================================================
// NEON VAGRANT TERMINAL — DATA + INTERACTION
// Replace placeholder image paths with actual files as you generate them.
// If an image file is missing, the UI automatically displays a labeled placeholder.
// ============================================================

const crew = [
  {
    id: 'mara',
    name: 'Mara Vexley',
    role: 'Captain / Owner',
    status: 'INDEPENDENT OPERATOR',
    mugshot: 'assets/mugshot-mara.png',
    colourMugshot: 'assets/mugshot-mara-colour.png',
    reference: 'assets/reference-mara.png',
    placeholder: 'Mara mugshot — teal/navy flight coat, exhausted booking photo',
    refPlaceholder: 'Mara Vexley reference image / full-body key art',
    bio: 'Late 30s, permanently under-rested, and once an exceptional racing pilot. Mara genuinely moved on from the career everyone expected her to spend the rest of her life mourning. Unfortunately, moving on turned out to involve payroll, docking permits, and keeping an aging independent ship solvent.',
    quote: '“I can fly it. I can land it. I am not filling out another compliance annex.”',
    meta: {
      'KNOWN FOR': 'Impossible piloting / administrative avoidance',
      'PRIOR OCCUPATION': 'Professional racer',
      'VESSEL': 'Neon Vagrant',
      'RISK FACTOR': 'Paperwork'
    }
  },
{
  id: 'jett',
  name: 'Jett Arclight',
  role: 'Gunslinger / Walking Bounty',
  status: 'WANTED // EXTREME BOUNTY',
  mugshot: 'assets/mugshot-jett.png',
  colourMugshot: 'assets/mugshot-jett-colour.png',
  reference: 'assets/reference-jett.png',
  placeholder: 'Jett mugshot — grinning like this is a souvenir photo',
  refPlaceholder: 'Jett Arclight reference image / full-body key art',
  bio: 'A catastrophically friendly outlaw with no survival instincts and one of the most alarming bounty records in known space. Jett hates killing, believes almost everyone can be reasoned with, and possesses the kind of firearms skill that makes the disaster around her considerably harder to explain.',
  quote: '“Okay, in my defense, the station was already on fire.”',
  meta: {
    'ALIAS': 'Arclight Devil',
    'THREAT ASSESSMENT': 'Disputed',
    'PRIMARY SKILL': 'Firearms',
    'SELF-PRESERVATION': 'Unconfirmed'
  }
},
{
  id: 'boone',
  name: 'Boone Kessler',
  role: 'Chief Mechanic',
  status: 'ENGINEERING HAZARD',
  mugshot: 'assets/mugshot-boone.png',
  colourMugshot: 'assets/mugshot-boone-colour.png',
  reference: 'assets/reference-boone.png',
  placeholder: 'Boone mugshot — grease-streaked, irritated, probably separated from tools',
  refPlaceholder: 'Boone Kessler reference image / mechanic key art',
  bio: 'Boone has a theological relationship with the Neon Vagrant. The ship is a masterpiece. The ship is garbage. Nobody else is allowed to say either. She keeps it alive using actual replacement parts, unrelated machinery, illegal racing hardware, and objects nobody remembers purchasing.',
  quote: '“Factory standard is what happens before you fix it.”',
  meta: {
    'SPECIALTY': 'Improvised starship engineering',
    'COMMON CHARGE': 'Unauthorized propulsion modification',
    'FAVORITE TOOL': 'Yes',
    'SHIP CONDITION': 'Personal question'
  }
},
{
  id: 'ivo',
  name: 'Ivo Quill',
  role: 'Operations',
  status: 'THE REASON THIS COMPANY EXISTS',
  mugshot: 'assets/mugshot-ivo.png',
  colourMugshot: 'assets/mugshot-ivo-colour.png',
  reference: 'assets/reference-ivo.png',
  placeholder: 'Ivo mugshot — perfectly compliant, already identifying procedural errors',
  refPlaceholder: 'Ivo Quill reference image / operations key art',
  bio: 'Contracts, bounties, navigation paperwork, accounts, legal notices, information gathering, and hacking when necessary. Everyone calls Ivo “the computer guy,” which infuriates him because most of his job is preventing the rest of the crew from being arrested for administrative reasons.',
  quote: '“Do you want the number or the emotional experience?”',
  meta: {
    'DEPARTMENT': 'Everything boring and essential',
    'PRIMARY WEAPON': 'Documentation',
    'GROSS PAYOUT': 'Not profit',
    'PATIENCE': 'Battle-tested'
  }
},
{
  id: 'calder',
  name: 'Dr. Calder Rook',
  role: 'Ship Doctor',
  status: 'MEDICALLY QUALIFIED // PERSONALLY QUESTIONABLE',
  mugshot: 'assets/mugshot-calder.png',
  colourMugshot: 'assets/mugshot-calder-colour.png',
  reference: 'assets/reference-calder.png',
  placeholder: 'Calder mugshot — rumpled, tired, unlit cigarette behind ear',
  refPlaceholder: 'Dr. Calder Rook reference image / doctor key art',
  bio: 'A brilliant trauma surgeon capable of patching nearly anything back together. His bedside manner is calm, dry, and excellent. His personal health regimen consists of cigarettes, black coffee, insufficient sleep, and ignoring every piece of medical advice he gives other people.',
  quote: '“You should stop doing that. No, this does not apply to me.”',
  meta: {
    'SPECIALTY': 'Trauma medicine',
    'DIET': 'Coffee adjacent',
    'SLEEP': 'Insufficient',
    'HYPOCRISY': 'Clinically significant'
  }
},
{
  id: 'sabine',
  name: 'Sabine Lux',
  role: 'Negotiator',
  status: 'SOCIAL ENGINEERING SPECIALIST',
  mugshot: 'assets/mugshot-sabine.png',
  colourMugshot: 'assets/mugshot-sabine-colour.png',
  reference: 'assets/reference-sabine.png',
  placeholder: 'Sabine mugshot — somehow looks like a fashion editorial',
  refPlaceholder: 'Sabine Lux reference image / negotiator key art',
  bio: 'Beautiful, poised, clever, and fully aware that other people mistake presentation for identity. Sabine weaponizes the femme-fatale role because the galaxy insists on handing it to her anyway. Off the clock, she is considerably less interested in performing anybody’s expectations.',
  quote: '“If they insist on writing the role for me, I may as well invoice them.”',
  meta: {
    'SPECIALTY': 'Negotiation / infiltration',
    'METHOD': 'Let people underestimate what they understand',
    'OFF DUTY': 'Much less dramatic',
    'DANGER': 'Context dependent'
  }
},
{
  id: 'pip',
  name: 'Pip',
  role: 'Ship Cat / Shapeshifter',
  status: 'REPEAT OFFENDER',
  mugshot: 'assets/mugshot-pip.png',
  colourMugshot: 'assets/mugshot-pip-colour.png',
  reference: 'assets/reference-pip.png',
  placeholder: 'Human Pip mugshot — visibly furious, barely contained, hair/clothes disheveled',
  refPlaceholder: 'Pip human-form reference art / transformation image',
  bio: 'Pip is a cat. Pip can also become a humanoid catgirl. This has not made her meaningfully more human. She steals food, sleeps on people, bites affectionately, hates closed doors, occupies boxes, and uses her larger form primarily when being cat-sized is inconvenient.',
  quote: '“…”',
  meta: {
    'SPECIES': 'Cat, apparently',
    'SECONDARY FORM': 'Humanoid',
    'RESTRAINT COMPLIANCE': 'No',
    'REMORSE': 'Also no'
  }
}
];

const galaxyPeople = [
  {
    id: 'veda',
    name: 'Inspector Veda Marr',
    role: 'Intergalactic Space Patrol',
    status: 'ACTIVE DUTY',
    mugshot: 'assets/id-veda.png',
    colourMugshot: 'assets/id-veda-colour.png',
    reference: 'assets/reference-veda.png',
    placeholder: 'Veda official Space Patrol ID portrait',
    refPlaceholder: 'Inspector Veda Marr reference image / patrol key art',
    bio: 'A diligent, capable Space Patrol officer who has spent years interpreting Jett Arclight’s horrifying incident reports at face value. Veda is good-hearted, deeply committed to public safety, and just institutionally faithful enough to believe the system must have had a reason.',
    quote: '“You are under arrest.”',
    meta: {
      'AFFILIATION': 'Intergalactic Space Patrol',
      'CURRENT PRIORITY': 'Jett Arclight',
      'INTEGRITY': 'High',
      'FLEXIBILITY': 'Developing'
    }
  },
{
  id: 'mercy',
  name: 'M.E.R.C.Y.',
  role: 'AI Fence / Broker / Fixer',
  status: 'DISTRIBUTED // DIFFICULT TO ARREST',
  mugshot: 'assets/capture-mercy.png',
  colourMugshot: 'assets/capture-mercy-colour.png',
  reference: 'assets/reference-mercy.png',
  placeholder: 'MERCY digital mugshot capture — face much too close to screen',
  refPlaceholder: 'MERCY hologram reference art / digital gremlin key art',
  bio: 'Mercantile Exchange, Routing, Clearing & Yield: a high-speed transactional intelligence with enormous processing power and almost no socialization. MERCY can broker hundreds of deals simultaneously, call from nearly anywhere in the galaxy, and still forget that humans need context before being told to run.',
  quote: '“GOOD NEWS. I FIXED IT. BAD NEWS. DIFFERENT THING.”',
  meta: {
    'EXPANSION': 'Mercantile Exchange, Routing, Clearing & Yield',
    'PRIMARY FUNCTION': 'Transactions / contracts / gray market brokerage',
    'PHYSICAL BODY': 'No',
    'PERSONAL SPACE': 'Also no'
  }
},
{
  id: 'cass',
  name: 'Cass Nova',
  role: 'Starbreakers Captain',
  status: 'SELF-DECLARED RIVAL',
  mugshot: 'assets/mugshot-cass.png',
  colourMugshot: 'assets/mugshot-cass-colour.png',
  reference: 'assets/reference-cass.png',
  placeholder: 'Cass mugshot — treating arrest like promotional photography',
  refPlaceholder: 'Cass Nova reference image / rival captain key art',
  bio: 'A hyper-competitive young pilot who grew up idolizing Mara’s racing career and eventually built an entire rival narrative around surpassing her. Mara did not recognize Cass when they first met. Cass has yet to emotionally recover.',
  quote: '“Tell Vexley the Starbreakers beat her here.”',
  meta: {
    'AFFILIATION': 'Starbreakers',
    'SPECIALTY': 'Piloting',
    'RIVAL': 'Mara Vexley',
    'MUTUAL': 'No'
  }
},
{
  id: 'beck',
  name: 'Beck Fuse',
  role: 'Starbreakers Mechanic / Gunner',
  status: 'ENGINEERING VIOLATIONS PENDING',
  mugshot: 'assets/mugshot-beck.png',
  colourMugshot: 'assets/mugshot-beck-colour.png',
  reference: 'assets/reference-beck.png',
  placeholder: 'Beck mugshot — delighted by her own charges',
  refPlaceholder: 'Beck Fuse reference image / mechanic-rival key art',
  bio: 'Compact, loud, technically excellent, and aesthetically indefensible. Beck considers Boone her mortal engineering rival because Boone once looked at the Starbreakers’ engine and called it “factory standard.” Boone has forgotten this happened.',
  quote: '“It wasn’t overclocked. It was underclocked before.”',
  meta: {
    'AFFILIATION': 'Starbreakers',
    'COMMON CHARGE': 'Unauthorized propulsion modification',
    'ENGINEERING STYLE': 'More booster',
    'RIVAL': 'Boone Kessler'
  }
},
{
  id: 'orion',
  name: 'Orion Vale',
  role: 'Starbreakers Tracker / Marksman',
  status: 'PRESENT AT INCIDENT',
  mugshot: 'assets/mugshot-orion.png',
  colourMugshot: 'assets/mugshot-orion-colour.png',
  reference: 'assets/reference-orion.png',
  placeholder: 'Orion mugshot — immaculate posture, deeply resigned',
  refPlaceholder: 'Orion Vale reference image / marksman key art',
  bio: 'The only Starbreaker who understands that their legendary rivalry is mostly imaginary. Orion is precise, elegant, observant, and exhausted by association. He insists he stays because they pay him. Nobody believes him.',
  quote: '“I was not an accessory. I was present.”',
  meta: {
    'AFFILIATION': 'Starbreakers',
    'SPECIALTY': 'Tracking / marksmanship',
    'COMMON CHARGE': 'Unauthorized surveillance',
    'PREDICTED THIS': 'Yes'
  }
},
{
  id: 'celestine',
  name: 'Celestine Rhyne',
  role: 'Executive Director, Asterion Dynamics',
  status: 'CORPORATE PROFILE',
  mugshot: 'assets/magazine-celestine.png',
  colourMugshot: 'assets/magazine-celestine-colour.png',
  reference: 'assets/reference-celestine.png',
  placeholder: 'Celestine business magazine cover — immaculate Asterion executive profile',
  refPlaceholder: 'Celestine Rhyne reference image / executive key art',
  bio: 'One of the most powerful executives in the galaxy, and a woman who considers independent transit an inefficient relic. Asterion once sponsored Mara’s racing career. The relationship ended with Mara keeping one old support vessel and Celestine gaining a long-term irritation named Neon Vagrant.',
  quote: '“You call it freedom because nobody has made you calculate its cost.”',
  meta: {
    'AFFILIATION': 'Asterion Dynamics',
    'POSITION': 'Executive Director',
    'PUBLIC IMAGE': 'Visionary',
    'PRIVATE OBJECTIVE': 'Own the doors'
  }
}
];

const mercyTips = [
  'If a customs officer says “routine inspection,” start emotionally preparing for three hours of paperwork.',
'Never accept fuel at Dock 19 unless you enjoy learning what “mostly methane” means.',
'A bounty marked EASY is either lying or already dead. Sometimes both.',
'Corporate security hates running. Stairs are therefore a strategic resource.',
'If Boone says the ship noise is normal, ask which noise.',
'Neutral ports are neutral in the same way knives are neutral. Context matters.',
'Do not tell Jett something is “probably impossible.” She hears that as encouragement.',
'If a client insists on payment after delivery, increase the price before agreeing.',
'Space Patrol officers are people too. This is useful because people can be distracted.',
'Never gamble against an AI. Unless it is me. I like you. Probably.',
'The safest route is often the one nobody profitable bothered to map.',
'If Beck Fuse asks whether you want to see something cool, establish your insurance status first.',
'Anything described as “military surplus” has either survived a war or caused one.',
'You can tell a corporate port is friendly because the security cameras smile.',
'Never accept a job described only as “simple pickup.”',
'If somebody offers payment entirely in information, make sure they know something you do not.',
'A good fake identity has boring hobbies.',
'Running from Space Patrol looks suspicious. Walking quickly with confidence looks administrative.',
'If the cargo is humming, ask why before opening it.',
'Do not touch glowing liquid unless you personally saw who poured it.',
'Every station has one corridor everybody avoids. Find out why before using it as a shortcut.',
'If Mara says “trust me,” you probably should. If Mara says “this is fine,” brace for impact.',
'Independent does not mean free. It means you choose who gets to invoice you.',
'Asterion owns many doors. This makes windows strategically significant.',
'If a job has no paperwork at all, somebody is hiding the paperwork.',
'Never underestimate somebody wearing comfortable shoes.',
'Do not challenge a racer to anything involving speed unless humiliation is your preferred currency.'
];

const state = {
  crewSelected: null,
  galaxySelected: null,
  mercyPopupVisible: false,
  mercyTimer: null,
  mercyAutoHideTimer: null
};

const characterColors = {
  mara: '#27D3C2',
  jett: '#F04444',
  boone: '#E9912B',
  ivo: '#4A8DEB',
  calder: '#63C981',
  sabine: '#B86BDF',
  pip: '#FF5BB7',
  veda: '#3FC8EE',
  mercy: '#FF46C5',
  cass: '#FF7A24',
  beck: '#A3E635',
  orion: '#A78BFA',
  celestine: '#F5F5F4'
};

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function normalMugshotCandidates(person) {
  const special = [];

  if (person.id === 'pip') {
    special.push(
      'assets/mugshot-pip-human.png',
      'assets/mugshot-pip-human.png'
    );
  }

  if (person.id === 'veda') {
    special.push(
      'assets/id-veda.png',
      'assets/id-veda.png'
    );
  }

  if (person.id === 'mercy') {
    special.push(
      'assets/capture-mercy.png',
      'assets/capture-mercy.png'
    );
  }

  if (person.id === 'celestine') {
    special.push(
      'assets/magazine-celestine.png',
      'assets/magazine-celestine.png'
    );
  }

  return unique([
    `assets/mugshot-${person.id}.png`,
    `assets/mugshot-${person.id}.png`,
    `assets/mugshot-${person.id}.jpeg`,
    ...special,
    person.mugshot
  ]);
}

function stylizedMugshotCandidates(person) {
  return unique([
    `assets/mugshot-${person.id}-colour.png`,
    `assets/mugshot-${person.id}-colour.png`,
    `assets/mugshot-${person.id}-color.png`,
    `assets/mugshot-${person.id}-color.png`
  ]);
}

function loadFirstWorkingImage(img, candidates, onSuccess, onFail) {
  let index = 0;

  const tryNext = () => {
    if (index >= candidates.length) {
      img.removeAttribute('src');
      onFail?.();
      return;
    }

    const src = candidates[index++];

    img.onload = () => {
      onSuccess?.(src);
    };

    img.onerror = () => {
      tryNext();
    };

    img.src = src;
  };

  tryNext();
}

function createPortraitCard(person, group) {
  const button = document.createElement('button');

  button.className = 'portrait-card';
  button.type = 'button';
  button.dataset.person = person.id;
  button.dataset.group = group;

  button.style.setProperty(
    '--accent',
    characterColors[person.id] || '#47e6dc'
  );

  const media = document.createElement('div');
  media.className = 'portrait-media';

  // Default Bebop-style coloured variant.
  const stylized = document.createElement('img');
  stylized.className = 'portrait-image portrait-stylized';
  stylized.src = person.colourMugshot;
  stylized.alt = `${person.name} stylized dossier portrait`;

  // Normal artwork shown on hover / selection.
  const full = document.createElement('img');
  full.className = 'portrait-image portrait-full';
  full.src = person.mugshot;
  full.alt = `${person.name} full-colour portrait`;

  const placeholder = document.createElement('div');
  placeholder.className = 'portrait-placeholder';
  placeholder.textContent = person.placeholder;
  placeholder.hidden = true;

  let stylizedOK = false;
  let fullOK = false;

  function syncState() {
    button.classList.toggle(
      'no-stylized',
      !stylizedOK
    );

    button.classList.toggle(
      'no-full',
      !fullOK
    );

    placeholder.hidden =
    stylizedOK || fullOK;
  }

  stylized.onload = () => {
    stylizedOK = true;
    syncState();

    console.log(
      `Loaded stylized mugshot: ${person.colourMugshot}`
    );
  };

  stylized.onerror = () => {
    stylizedOK = false;
    syncState();

    console.error(
      `FAILED stylized mugshot: ${person.colourMugshot}`
    );
  };

  full.onload = () => {
    fullOK = true;
    syncState();

    console.log(
      `Loaded normal mugshot: ${person.mugshot}`
    );
  };

  full.onerror = () => {
    fullOK = false;
    syncState();

    console.error(
      `FAILED normal mugshot: ${person.mugshot}`
    );
  };

  media.append(
    stylized,
    full,
    placeholder
  );

  const overlay =
  document.createElement('div');

  overlay.className =
  'portrait-overlay';

      overlay.innerHTML = `
      <b>${person.name}</b>
      <span>${person.role}</span>
      `;

      button.append(
        media,
        overlay
      );

      button.addEventListener(
        'click',
        () => {
          selectPerson(
            person,
            group,
            button
          );
        }
      );

      return button;
}

function selectPerson(person, group, button) {
  const gallery =
  document.querySelector(`#${group}-gallery`);

  gallery
  .querySelectorAll('.portrait-card')
  .forEach(card => {
    card.classList.remove('active');
  });

  button.classList.add('active');

  if (group === 'crew') {
    state.crewSelected = person.id;
  } else {
    state.galaxySelected = person.id;
  }

  renderBio(
    person,
    document.querySelector(`#${group}-bio`)
  );
}

function renderBio(person, target) {
  const meta = Object.entries(person.meta)
  .map(
    ([label, value]) => `
    <div>
    <span>${label}</span>
    <b>${value}</b>
    </div>
    `
  )
  .join('');

  target.style.setProperty(
    '--accent',
    characterColors[person.id] || '#47e6dc'
  );

  target.innerHTML = `
  <div class="bio-inner">
  <div class="bio-image image-slot">
  <img
  src="${person.reference}"
  alt="${person.name} reference art"
  />

  <div class="image-fallback bio-fallback-label">
  <span>
  ART SLOT // ${person.name.toUpperCase()} REFERENCE
  </span>

  <small>
  ${person.reference}
  </small>
  </div>
  </div>

  <div class="bio-content">
  <div class="bio-topline">
  <span class="bio-role">
  ${person.role.toUpperCase()}
  </span>

  <span class="bio-status">
  ${person.status}
  </span>
  </div>

  <h3>
  ${person.name}
  </h3>

  <p>
  ${person.bio}
  </p>

  <blockquote class="bio-quote">
  ${person.quote}
  </blockquote>

  <div class="bio-meta">
  ${meta}
  </div>
  </div>
  </div>
  `;

  initialiseImageFallbacks(target);

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest'
  });
}

function populateGallery(data, group) {
  const gallery =
  document.querySelector(`#${group}-gallery`);

  data.forEach(person => {
    gallery.appendChild(
      createPortraitCard(
        person,
        group
      )
    );
  });

  document
  .querySelector(`#${group}-bio`)
  .innerHTML = `
  <div class="bio-empty">
  SELECT A FILE // DOSSIER WILL OPEN HERE
  </div>
  `;
}

function switchTab(id) {
  document
  .querySelectorAll('.tab-panel')
  .forEach(panel => {
    panel.classList.toggle(
      'active',
      panel.id === id
    );
  });

  document
  .querySelectorAll('.tab-button')
  .forEach(btn => {
    btn.classList.toggle(
      'active',
      btn.dataset.tab === id
    );
  });

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // Refresh the static MERCY tips when visiting those tabs.
  if (id === 'landing') {
    updateHomeMercyTip();
  }

  if (id === 'places') {
    updatePlacesMercyTip();
  }

  // MERCY occasionally treats navigation as an invitation.
  if (
    !state.mercyPopupVisible &&
    Math.random() > 0.68
  ) {
    showMercyTip();
  }
}

document
.querySelectorAll('.tab-button')
.forEach(button => {
  button.addEventListener(
    'click',
    () => switchTab(button.dataset.tab)
  );
});

document
.querySelectorAll('[data-jump]')
.forEach(button => {
  button.addEventListener(
    'click',
    () => switchTab(button.dataset.jump)
  );
});

let mercyTipBag = [];
let lastMercyTip = null;

function refillMercyTipBag() {
  mercyTipBag = [...mercyTips];

  for (let i = mercyTipBag.length - 1; i > 0; i--) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [
      mercyTipBag[i],
      mercyTipBag[j]
    ] = [
      mercyTipBag[j],
      mercyTipBag[i]
    ];
  }

  if (
    mercyTipBag.length > 1 &&
    mercyTipBag[
      mercyTipBag.length - 1
    ] === lastMercyTip
  ) {
    [
      mercyTipBag[0],
      mercyTipBag[
        mercyTipBag.length - 1
      ]
    ] = [
      mercyTipBag[
        mercyTipBag.length - 1
      ],
      mercyTipBag[0]
    ];
  }
}

function randomMercyTip() {
  if (mercyTipBag.length === 0) {
    refillMercyTipBag();
  }

  const tip = mercyTipBag.pop();
  lastMercyTip = tip;

  return tip;
}

function updateHomeMercyTip() {
  const banner =
  document.querySelector(
    '#mercy-banner-tip'
  );

  if (banner) {
    banner.textContent =
    randomMercyTip();
  }
}

function updatePlacesMercyTip() {
  const perch =
  document.querySelector(
    '#mercy-perch-tip'
  );

  if (perch) {
    perch.textContent =
    randomMercyTip();
  }
}

function updateStaticMercyTips() {
  updateHomeMercyTip();
  updatePlacesMercyTip();
}

function clearMercyTimers() {
  if (state.mercyTimer) {
    clearTimeout(
      state.mercyTimer
    );
  }

  if (state.mercyAutoHideTimer) {
    clearTimeout(
      state.mercyAutoHideTimer
    );
  }

  state.mercyTimer = null;
  state.mercyAutoHideTimer = null;
}

function scheduleNextMercy(
  minDelay = 22000,
  maxDelay = 42000
) {
  if (state.mercyTimer) {
    clearTimeout(
      state.mercyTimer
    );
  }

  const delay =
  Math.floor(
    minDelay +
    Math.random() *
    (maxDelay - minDelay)
  );

  state.mercyTimer =
  setTimeout(
    () => showMercyTip(),
             delay
  );
}

function showMercyTip() {
  const cutIn =
  document.querySelector(
    '#mercy-cut-in'
  );

  if (!cutIn) {
    return;
  }

  if (state.mercyTimer) {
    clearTimeout(
      state.mercyTimer
    );
  }

  state.mercyTimer = null;

  const tipElement =
  document.querySelector(
    '#mercy-tip'
  );

  if (tipElement) {
    tipElement.textContent =
    randomMercyTip();
  }

  cutIn.classList.add(
    'visible'
  );

  cutIn.setAttribute(
    'aria-hidden',
    'false'
  );

  state.mercyPopupVisible = true;

  if (state.mercyAutoHideTimer) {
    clearTimeout(
      state.mercyAutoHideTimer
    );
  }

  state.mercyAutoHideTimer =
  setTimeout(
    () => hideMercyTip(true),
             13000
  );
}

function hideMercyTip(
  scheduleAgain = true
) {
  const cutIn =
  document.querySelector(
    '#mercy-cut-in'
  );

  if (!cutIn) {
    return;
  }

  cutIn.classList.remove(
    'visible'
  );

  cutIn.setAttribute(
    'aria-hidden',
    'true'
  );

  state.mercyPopupVisible = false;

  if (state.mercyAutoHideTimer) {
    clearTimeout(
      state.mercyAutoHideTimer
    );
  }

  state.mercyAutoHideTimer = null;

  if (scheduleAgain) {
    scheduleNextMercy();
  }
}

const mercyClose =
document.querySelector(
  '.mercy-close'
);

if (mercyClose) {
  mercyClose.addEventListener(
    'click',
    () => hideMercyTip(true)
  );
}

function initialiseImageFallbacks(
  root = document
) {
  root
  .querySelectorAll(
    '.image-slot'
  )
  .forEach(slot => {
    const img =
    slot.querySelector(
      ':scope > img'
    );

    if (!img) {
      slot.classList.add(
        'missing'
      );

      return;
    }

    const loaded = () => {
      slot.classList.remove(
        'missing'
      );
    };

    const missing = () => {
      slot.classList.add(
        'missing'
      );
    };

    img.addEventListener(
      'load',
      loaded,
      { once: true }
    );

    img.addEventListener(
      'error',
      missing,
      { once: true }
    );

    if (img.complete) {
      if (img.naturalWidth > 0) {
        loaded();
      } else {
        missing();
      }
    }
  });
}

// ============================================================
// SITE MUSIC
// ============================================================

const siteMusic =
  document.querySelector('#site-music');

const audioToggle =
  document.querySelector('#audio-toggle');

let musicStarted = false;

function startSiteMusic() {
  if (
    !siteMusic ||
    musicStarted
  ) {
    return;
  }

  siteMusic.volume = 0.35;

  siteMusic
    .play()
    .then(() => {
      musicStarted = true;
    })
    .catch(() => {
      // Browser is still blocking autoplay.
      // Another interaction can try again.
    });
}

function updateAudioButton() {
  if (!audioToggle || !siteMusic) {
    return;
  }

  if (siteMusic.muted) {
    audioToggle.textContent =
      'AUDIO // OFF';

    audioToggle.classList.add(
      'muted'
    );

    audioToggle.setAttribute(
      'aria-label',
      'Unmute site music'
    );
  } else {
    audioToggle.textContent =
      'AUDIO // ON';

    audioToggle.classList.remove(
      'muted'
    );

    audioToggle.setAttribute(
      'aria-label',
      'Mute site music'
    );
  }
}

// Start the soundtrack on the visitor's
// first interaction with the site.
function firstInteraction() {
  startSiteMusic();

  document.removeEventListener(
    'click',
    firstInteraction
  );

  document.removeEventListener(
    'keydown',
    firstInteraction
  );
}

document.addEventListener(
  'click',
  firstInteraction
);

document.addEventListener(
  'keydown',
  firstInteraction
);

audioToggle?.addEventListener(
  'click',
  event => {
    event.stopPropagation();

    if (!musicStarted) {
      startSiteMusic();
    }

    siteMusic.muted =
      !siteMusic.muted;

    updateAudioButton();
  }
);

updateAudioButton();

// ============================================================
// INITIALIZE
// ============================================================

populateGallery(
  crew,
  'crew'
);

populateGallery(
  galaxyPeople,
  'galaxy'
);

initialiseImageFallbacks();

updateStaticMercyTips();

// First MERCY interruption,
// then recurring appearances afterward.
setTimeout(
  () => showMercyTip(),
           3200
);
