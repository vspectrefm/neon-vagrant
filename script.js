const crew = [
  {
    id: 'mara',
    name: 'Mara Vexley',
    color: '#27D3C2',
    role: 'Captain / Owner',
    status: 'LICENSED INDEPENDENT OPERATOR',
    mugshot: 'assets/mugshot-mara.png',
    reference: 'assets/reference-mara.png',
    placeholder: 'Mara mugshot — tired captain, aviator shades, booking wall',
    refPlaceholder: 'Mara Vexley reference image / full-body key art',
    bio: 'Former racing prodigy, current captain of the Neon Vagrant, and a woman who can thread a ship through an asteroid field while holding coffee. Mara genuinely moved on from the glamorous career she lost and discovered that moving on involves payroll, docking permits, insurance, and an alarming number of forms.',
    quote: '“I can land it.”',
    meta: {
      'ROLE': 'Captain / Pilot',
      'SHIP': 'Neon Vagrant',
      'KNOWN WEAKNESS': 'Administration',
      'CURRENT MOOD': 'Under-rested'
    }
  },
  {
    id: 'jett',
    name: 'Jett Arclight',
    color: '#F04444',
    role: 'Gunslinger / Catastrophic Good Samaritan',
    status: 'WANTED // MULTIPLE SYSTEMS',
    mugshot: 'assets/mugshot-jett.png',
    reference: 'assets/reference-jett.png',
    placeholder: 'Jett mugshot — cheerful outlaw treating booking like a souvenir photo',
    refPlaceholder: 'Jett Arclight reference image / full-body key art',
    bio: 'One of the most wanted people in the galaxy and perhaps the least convincing criminal mastermind ever photographed. Jett is friendly, danger-blind, absurdly skilled with firearms, and committed to avoiding lethal force. Her record is horrifying until somebody explains the context.',
    quote: '“Can we do the arrest thing after lunch?”',
    meta: {
      'KNOWN AS': 'Arclight Devil',
      'SPECIALTY': 'Firearms',
      'SURVIVAL INSTINCT': 'Unconfirmed',
      'THREAT LEVEL': 'Complicated'
    }
  },
  {
    id: 'calder',
    name: 'Dr. Calder Rook',
    color: '#63C981',
    role: 'Ship Doctor',
    status: 'MEDICAL LICENSE: ACTIVE',
    mugshot: 'assets/mugshot-calder.png',
    reference: 'assets/reference-calder.png',
    placeholder: 'Calder mugshot — exhausted doctor, rumpled, mildly inconvenienced',
    refPlaceholder: 'Dr. Calder Rook reference image / full-body key art',
    bio: 'A brilliant trauma surgeon with excellent bedside manner and absolutely catastrophic personal health habits. Calder can patch almost anyone back together, then immediately ignore every piece of medical advice he just gave them.',
    quote: '“You need sleep. No, that does not apply to me.”',
    meta: {
      'ROLE': 'Medical Officer',
      'SPECIALTY': 'Trauma medicine',
      'PERSONAL REGIMEN': 'Coffee / cigarettes / denial',
      'SELF CARE': 'Pending'
    }
  },
  {
    id: 'sabine',
    name: 'Sabine Lux',
    color: '#B86BDF',
    role: 'Negotiator / Social Specialist',
    status: 'CHARGES DISMISSED',
    mugshot: 'assets/mugshot-sabine.png',
    reference: 'assets/reference-sabine.png',
    placeholder: 'Sabine mugshot — somehow making Space Patrol intake look editorial',
    refPlaceholder: 'Sabine Lux reference image / full-body key art',
    bio: 'Poised, clever, sexually confident, and exceptionally good at letting people underestimate what parts of her presentation are deliberate. Sabine uses the expectations surrounding the femme-fatale archetype as professional leverage, then goes back to eating crackers over the sink in a sweatshirt.',
    quote: '“If they insist on writing the role for me, I may as well invoice them.”',
    meta: {
      'ROLE': 'Negotiator',
      'SPECIALTY': 'People',
      'PRESENTATION': 'Deliberate',
      'OFF-DUTY GLAMOUR': 'Minimal'
    }
  },
  {
    id: 'boone',
    name: 'Boone Kessler',
    color: '#E9912B',
    role: 'Chief Mechanic',
    status: 'ENGINEERING COMPLIANCE: DISPUTED',
    mugshot: 'assets/mugshot-boone.png',
    reference: 'assets/reference-boone.png',
    placeholder: 'Boone mugshot — grease-streaked mechanic annoyed about confiscated tools',
    refPlaceholder: 'Boone Kessler reference image / full-body mechanic key art',
    bio: 'Chief mechanic and high priest of the Neon Vagrant. Boone considers the ship simultaneously a masterpiece and a pile of garbage, and nobody else is permitted to share either opinion. Her repairs occasionally incorporate racing hardware, unrelated ship components, kitchen equipment, and objects nobody remembers buying.',
    quote: '“Don’t touch that. Actually, don’t breathe near it.”',
    meta: {
      'ROLE': 'Chief Mechanic',
      'RELIGION': 'The ship',
      'METHOD': 'Whatever works',
      'WARRANTY': 'Void'
    }
  },
  {
    id: 'ivo',
    name: 'Ivo Quill',
    color: '#4A8DEB',
    role: 'Operations',
    status: 'NO ACTIVE WARRANTS',
    mugshot: 'assets/mugshot-ivo.png',
    reference: 'assets/reference-ivo.png',
    placeholder: 'Ivo mugshot — perfectly cooperative and calculating legal fees',
    refPlaceholder: 'Ivo Quill reference image / full-body operations key art',
    bio: 'Operations manager, dispatcher, accountant, contract specialist, information gatherer, occasional hacker, and the only reason the company technically exists. Everyone calls him the computer guy. Approximately seventy percent of his job is preventing the rest of the crew from being arrested for administrative reasons.',
    quote: '“Do you want the number or the emotional experience?”',
    meta: {
      'ROLE': 'Operations',
      'SPECIALTY': 'Keeping them legal',
      'PET PEEVE': 'Gross payout ≠ profit',
      'PATIENCE': 'Weaponized'
    }
  },
  {
    id: 'pip',
    name: 'Pip',
    color: '#FF5BB7',
    role: 'Ship Cat / Shapeshifter',
    status: 'REPEAT OFFENDER',
    mugshot: 'assets/mugshot-pip.png',
    reference: 'assets/reference-pip.png',
    placeholder: 'Pip human-form mugshot — officers clearly had to wrestle her into frame',
    refPlaceholder: 'Pip reference image / human or transformation key art',
    bio: 'A small feral ship cat who can inconveniently become a full-size catgirl. Pip is emphatically a cat that can become human, not a human with cat traits. She steals food, hates closed doors, occupies inappropriate surfaces, bites affectionately, and has never encountered a social boundary she considered binding.',
    quote: '“Mrrp.”',
    meta: {
      'ROLE': 'Cat',
      'SECONDARY ROLE': 'Also cat',
      'FORM': 'Variable',
      'REMORSE': 'None'
    }
  }
];

const galaxyPeople = [
  {
    id: 'veda',
    name: 'Inspector Veda Marr',
    color: '#3FC8EE',
    role: 'Intergalactic Space Patrol',
    status: 'ACTIVE OFFICER',
    mugshot: 'assets/mugshot-veda.png',
    reference: 'assets/reference-veda.png',
    placeholder: 'Veda official Space Patrol ID portrait — crisp white/cobalt uniform',
    refPlaceholder: 'Inspector Veda Marr reference image / patrol key art',
    bio: 'A diligent Space Patrol officer who genuinely wants to protect people and genuinely believes Jett Arclight is a horrific galactic menace. Veda’s greatest flaw is institutional faith: if the records say something happened, she assumes there must be a good reason the system reached that conclusion.',
    quote: '“You are under arrest.”',
    meta: {
      'AFFILIATION': 'Intergalactic Space Patrol',
      'SPECIALTY': 'Investigation',
      'CURRENT PRIORITY': 'Jett Arclight',
      'MORAL ALIGNMENT': 'Unfortunately sincere'
    }
  },
  {
    id: 'mercy',
    name: 'M.E.R.C.Y.',
    color: '#FF46C5',
    role: 'AI Fence / Broker / Fixer',
    status: 'DISTRIBUTED INTELLIGENCE',
    mugshot: 'assets/mugshot-mercy.png',
    reference: 'assets/reference-mercy.png',
    placeholder: 'MERCY digital enforcement capture — face far too close to virtual camera',
    refPlaceholder: 'MERCY reference image / holographic gremlin key art',
    bio: 'Mercantile Exchange, Routing, Clearing & Yield: a distributed AI built to process transactions at ludicrous speed who somehow developed the social instincts of an unsupervised digital stray. MERCY fences goods, brokers jobs, moves money, buys information and routinely forgets that humans require context.',
    quote: '“HELLO.”',
    meta: {
      'FULL NAME': 'Mercantile Exchange, Routing, Clearing & Yield',
      'ROLE': 'Broker / Fence',
      'LOCATION': 'Yes',
      'PERSONAL SPACE': 'Not implemented'
    }
  },
  {
    id: 'cass',
    name: 'Cass Nova',
    color: '#FF7A24',
    role: 'Starbreakers Captain',
    status: 'INDEPENDENT OPERATOR',
    mugshot: 'assets/mugshot-cass.png',
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
    color: '#A3E635',
    role: 'Starbreakers Mechanic / Gunner',
    status: 'ENGINEERING VIOLATIONS PENDING',
    mugshot: 'assets/mugshot-beck.png',
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
    color: '#A78BFA',
    role: 'Starbreakers Tracker / Marksman',
    status: 'PRESENT AT INCIDENT',
    mugshot: 'assets/mugshot-orion.png',
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
    color: '#F5F5F4',
    role: 'Executive Director, Asterion Dynamics',
    status: 'CORPORATE PROFILE',
    mugshot: 'assets/mugshot-celestine.png',
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
  button.style.setProperty('--accent', person.color || '#47e6dc');

  // Cowboy Bebop-style thresholded colour variant.
  // Default view:
  // assets/mugshot-CHARACTER-colour.png
  //
  // Hover / focus / active view:
  // assets/mugshot-CHARACTER.png
  //
  // Examples:
  // assets/mugshot-mara-colour.png
  // assets/mugshot-mara.png

  const colourPath =
    person.colourMugshot ||
    `assets/mugshot-${person.id}-colour.png`;

  const media = document.createElement('div');
  media.className = 'portrait-media';

  const stylized = document.createElement('img');
  stylized.className = 'portrait-image portrait-stylized';
  stylized.src = colourPath;
  stylized.alt = `${person.name} stylized dossier portrait`;
  stylized.loading = 'lazy';

  const full = document.createElement('img');
  full.className = 'portrait-image portrait-full';
  full.src = person.mugshot;
  full.alt = `${person.name} portrait`;
  full.loading = 'lazy';

  const ph = document.createElement('div');
  ph.className = 'portrait-placeholder';
  ph.textContent = person.placeholder;
  ph.hidden = true;

  let stylizedOK = true;
  let fullOK = true;

  const syncFallback = () => {
    button.classList.toggle('no-stylized', !stylizedOK);
    button.classList.toggle('no-full', !fullOK);
    ph.hidden = stylizedOK || fullOK;
  };

  stylized.addEventListener('error', () => {
    stylizedOK = false;
    stylized.remove();
    syncFallback();
  });

  full.addEventListener('error', () => {
    fullOK = false;
    full.remove();
    syncFallback();
  });

  media.append(stylized, full, ph);

  const overlay = document.createElement('div');
  overlay.className = 'portrait-overlay';
  overlay.innerHTML = `
    <b>${person.name}</b>
    <span>${person.role}</span>
  `;

  button.append(media, overlay);

  button.addEventListener('click', () => {
    selectPerson(person, group, button);
  });

  return button;
}

function selectPerson(person, group, button) {
  const gallery = document.querySelector(`#${group}-gallery`);

  gallery
    .querySelectorAll('.portrait-card')
    .forEach(card => card.classList.remove('active'));

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
    person.color || '#47e6dc'
  );

  target.innerHTML = `
    <div class="bio-inner">
      <div class="bio-image image-slot">
        <img
          src="${person.reference}"
          alt="${person.name} reference art"
        />
        <div class="image-fallback bio-fallback-label">
          <span>ART SLOT // ${person.name.toUpperCase()} REFERENCE</span>
          <small>${person.reference}</small>
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

        <h3>${person.name}</h3>

        <p>${person.bio}</p>

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
  const gallery = document.querySelector(`#${group}-gallery`);

  data.forEach(person => {
    gallery.appendChild(
      createPortraitCard(person, group)
    );
  });

  const target = document.querySelector(`#${group}-bio`);

  target.innerHTML = `
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

  // Small chance MERCY interrupts navigation.
  if (
    !state.mercyDismissed &&
    Math.random() > 0.45
  ) {
    showMercyTip();
  }
}

document
  .querySelectorAll('.tab-button')
  .forEach(button => {
    button.addEventListener('click', () => {
      switchTab(button.dataset.tab);
    });
  });

document
  .querySelectorAll('[data-jump]')
  .forEach(button => {
    button.addEventListener('click', () => {
      switchTab(button.dataset.jump);
    });
  });

function showMercyTip() {
  const cutIn =
    document.querySelector('#mercy-cut-in');

  const tip =
    mercyTips[
      Math.floor(Math.random() * mercyTips.length)
    ];

  document
    .querySelector('#mercy-tip')
    .textContent = tip;

  cutIn.classList.add('visible');
}

document
  .querySelector('.mercy-close')
  .addEventListener('click', () => {
    document
      .querySelector('#mercy-cut-in')
      .classList.remove('visible');

    state.mercyDismissed = true;
  });

function initialiseImageFallbacks(root = document) {
  root
    .querySelectorAll('.image-slot')
    .forEach(slot => {
      const img = slot.querySelector(':scope > img');

      if (!img) {
        slot.classList.add('missing');
        return;
      }

      const markLoaded = () => {
        slot.classList.remove('missing');
      };

      const markMissing = () => {
        slot.classList.add('missing');
      };

      img.addEventListener('load', markLoaded);
      img.addEventListener('error', markMissing);

      if (img.complete) {
        if (img.naturalWidth > 0) {
          markLoaded();
        } else {
          markMissing();
        }
      }
    });
}

populateGallery(crew, 'crew');
populateGallery(galaxyPeople, 'galaxy');

initialiseImageFallbacks();

// First MERCY appearance after the page settles.
setTimeout(() => {
  if (!state.mercyDismissed) {
    showMercyTip();
  }
}, 2600);
