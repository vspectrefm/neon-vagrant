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
    mugshot: 'assets/mugshot-mara.jpg', // TODO: 300x400 Mara booking photo
    reference: 'assets/reference-mara.jpg', // TODO: large Mara full-body/reference art
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
    mugshot: 'assets/mugshot-jett.jpg', // TODO: 300x400 cheerful Jett mugshot
    reference: 'assets/reference-jett.jpg', // TODO: Jett full-body reference art
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
    mugshot: 'assets/mugshot-boone.jpg', // TODO: 300x400 Boone mugshot
    reference: 'assets/reference-boone.jpg', // TODO: Boone full-body/reference art
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
    mugshot: 'assets/mugshot-ivo.jpg', // TODO: 300x400 Ivo mugshot
    reference: 'assets/reference-ivo.jpg', // TODO: Ivo large reference art
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
    mugshot: 'assets/mugshot-calder.jpg', // TODO: 300x400 Calder mugshot
    reference: 'assets/reference-calder.jpg', // TODO: Calder large reference art
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
    mugshot: 'assets/mugshot-sabine.jpg', // TODO: 300x400 editorial-looking Sabine mugshot
    reference: 'assets/reference-sabine.jpg', // TODO: Sabine large reference art
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
    mugshot: 'assets/mugshot-pip-human.jpg', // TODO: 300x400 HUMAN-FORM Pip mugshot, clearly wrestled into frame
    reference: 'assets/reference-pip.jpg', // TODO: human-form Pip reference art (or transformation art)
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
    mugshot: 'assets/id-veda.jpg', // TODO: 300x400 official Space Patrol ID badge portrait
    reference: 'assets/reference-veda.jpg', // TODO: Veda full-body/reference art
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
    mugshot: 'assets/capture-mercy.jpg', // TODO: 300x400 digital enforcement capture; face too close to camera
    reference: 'assets/reference-mercy.jpg', // TODO: MERCY hologram full-body/reference art
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
    mugshot: 'assets/mugshot-cass.jpg', // TODO: 300x400 Cass mugshot, posing like it is iconic
    reference: 'assets/reference-cass.jpg', // TODO: Cass reference art
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
    mugshot: 'assets/mugshot-beck.jpg', // TODO: 300x400 Beck mugshot
    reference: 'assets/reference-beck.jpg', // TODO: Beck reference art
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
    mugshot: 'assets/mugshot-orion.jpg', // TODO: 300x400 Orion mugshot, resigned and impeccably cooperative
    reference: 'assets/reference-orion.jpg', // TODO: Orion reference art
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
    mugshot: 'assets/magazine-celestine.jpg', // TODO: 300x400 elite business magazine cover featuring Celestine
    reference: 'assets/reference-celestine.jpg', // TODO: Celestine executive reference art
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
  'Never gamble against an AI. Unless it is me. I like you. Probably.'
];

const state = {
  crewSelected: null,
  galaxySelected: null,
  mercyDismissed: false
};

function createPortraitCard(person, group) {
  const button = document.createElement('button');
  button.className = 'portrait-card';
  button.type = 'button';
  button.dataset.person = person.id;
  button.dataset.group = group;

  const img = document.createElement('img');
  img.src = person.mugshot;
  img.alt = `${person.name} portrait`;
  img.loading = 'lazy';
  img.onerror = () => {
    img.remove();
    const ph = document.createElement('div');
    ph.className = 'portrait-placeholder';
    ph.textContent = person.placeholder;
    button.prepend(ph);
  };

  const overlay = document.createElement('div');
  overlay.className = 'portrait-overlay';
  overlay.innerHTML = `<b>${person.name}</b><span>${person.role}</span>`;

  button.append(img, overlay);
  button.addEventListener('click', () => selectPerson(person, group, button));
  return button;
}

function selectPerson(person, group, button) {
  const gallery = document.querySelector(`#${group}-gallery`);
  gallery.querySelectorAll('.portrait-card').forEach(card => card.classList.remove('active'));
  button.classList.add('active');

  if (group === 'crew') state.crewSelected = person.id;
  else state.galaxySelected = person.id;

  renderBio(person, document.querySelector(`#${group}-bio`));
}

function renderBio(person, target) {
  const meta = Object.entries(person.meta)
    .map(([label, value]) => `<div><span>${label}</span><b>${value}</b></div>`)
    .join('');

  target.innerHTML = `
    <div class="bio-inner">
      <div class="bio-image placeholder-art" data-placeholder="${person.refPlaceholder}">
        <img src="${person.reference}" alt="${person.name} reference art" />
        <span class="bio-fallback-label">ART SLOT // ${person.name.toUpperCase()} REFERENCE</span>
      </div>
      <div class="bio-content">
        <div class="bio-topline">
          <span class="bio-role">${person.role.toUpperCase()}</span>
          <span class="bio-status">${person.status}</span>
        </div>
        <h3>${person.name}</h3>
        <p>${person.bio}</p>
        <blockquote class="bio-quote">${person.quote}</blockquote>
        <div class="bio-meta">${meta}</div>
      </div>
    </div>`;

  const image = target.querySelector('.bio-image img');
  const fallback = target.querySelector('.bio-fallback-label');
  image.addEventListener('load', () => { fallback.style.display = 'none'; });
  image.addEventListener('error', () => { image.remove(); fallback.style.display = 'block'; });

  target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function populateGallery(data, group) {
  const gallery = document.querySelector(`#${group}-gallery`);
  data.forEach(person => gallery.appendChild(createPortraitCard(person, group)));
  const target = document.querySelector(`#${group}-bio`);
  target.innerHTML = `<div class="bio-empty">SELECT A FILE // DOSSIER WILL OPEN HERE</div>`;
}

function switchTab(id) {
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.toggle('active', panel.id === id));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Small chance MERCY interrupts on navigation.
  if (!state.mercyDismissed && Math.random() > 0.45) showMercyTip();
}

document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => switchTab(button.dataset.tab));
});
document.querySelectorAll('[data-jump]').forEach(button => {
  button.addEventListener('click', () => switchTab(button.dataset.jump));
});

function showMercyTip() {
  const cutIn = document.querySelector('#mercy-cut-in');
  const tip = mercyTips[Math.floor(Math.random() * mercyTips.length)];
  document.querySelector('#mercy-tip').textContent = tip;
  cutIn.classList.add('visible');
}

document.querySelector('.mercy-close').addEventListener('click', () => {
  document.querySelector('#mercy-cut-in').classList.remove('visible');
  state.mercyDismissed = true;
});

populateGallery(crew, 'crew');
populateGallery(galaxyPeople, 'galaxy');

// First MERCY appearance after the page has settled.
setTimeout(() => {
  if (!state.mercyDismissed) showMercyTip();
}, 2600);
