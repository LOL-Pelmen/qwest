// Расширенная база вопросов (100 вопросов)
const allQuestions = [
  // Оригинальные 50 вопросов (первые 50)
  {
    question:
      "Какая группа выпустила песню 'Bodies' с припевом 'Let the bodies hit the floor'?",
    options: ["Drowning Pool", "Slipknot", "Limp Bizkit", "Pantera"],
    correct: 0,
    explanation:
      "Песня 'Bodies' (иногда называемая 'Let the Bodies Hit the Floor') была выпущена группой Drowning Pool в 2001 году и стала одним из их главных хитов.",
  },
  {
    question:
      "Вокалист какой группы известен своим низким, баритональным голосом и любовью к теме вампиров?",
    options: ["Type O Negative", "Powerwolf", "Iron Maiden", "Slayer"],
    correct: 0,
    explanation:
      "Питер Стил, вокалист Type O Negative, был известен своим исключительно низким голосом и тематикой вампиров в текстах песен.",
  },
  {
    question:
      "Какая группа была основана в Лас-Вегасе и известна песней 'Radioactive'?",
    options: ["Imagine Dragons", "Three Days Grace", "Skillet", "Linkin Park"],
    correct: 0,
    explanation:
      "Imagine Dragons были основаны в 2008 году в Лас-Вегасе. Их песня 'Radioactive' стала мировым хитом и возглавляла чарты в нескольких странах.",
  },
  {
    question:
      "У какой группы маскотом является зомби-персонаж по имени Скинни?",
    options: ["Slipknot", "Korn", "Mushroomhead", "Marilyn Manson"],
    correct: 0,
    explanation:
      "Скинни — это зомби-персонаж, который появляется на обложках и в клипах группы Slipknot, особенно связанный с участником #0, Сидом Уилсоном.",
  },
  {
    question:
      "Какая группа считается пионером жанра ню-метал и известна песней 'Freak on a Leash'?",
    options: ["Korn", "Limp Bizkit", "Slipknot", "Linkin Park"],
    correct: 0,
    explanation:
      "Korn считается одной из основательниц ню-метала. Их песня 'Freak on a Leash' стала классикой жанра и получила Грэмми за лучшее музыкальное видео.",
  },
  {
    question: "Какая группа выпустила альбом 'One-X' в 2006 году?",
    options: ["Three Days Grace", "Skillet", "Breaking Benjamin", "Seether"],
    correct: 0,
    explanation:
      "Three Days Grace выпустили альбом 'One-X' в 2006 году. Этот альбом стал платиновым в США и Канаде.",
  },
  {
    question:
      "Какая группа известна своими сценическими костюмами в виде клоунских масок и нумерацией участников?",
    options: ["Slipknot", "Mushroomhead", "Ghost", "Insane Clown Posse"],
    correct: 0,
    explanation:
      "Slipknot известны ношением индивидуальных масок и комбинезонов, а также нумерацией участников от 0 до 8 (ранее до 9).",
  },
  {
    question:
      "Вокалист какой группы покончил с собой в 1994 году, что привело к распаду коллектива?",
    options: [
      "Nirvana",
      "Alice in Chains",
      "Soundgarden",
      "Stone Temple Pilots",
    ],
    correct: 0,
    explanation:
      "Курт Кобейн, вокалист Nirvana, покончил с собой в 1994 году. После его смерти группа официально распалась.",
  },
  {
    question:
      "Какая группа выпустила альбом 'Hybrid Theory', который стал одним из самых продаваемых дебютных альбомов в истории?",
    options: ["Linkin Park", "Limp Bizkit", "Papa Roach", "Staind"],
    correct: 0,
    explanation:
      "'Hybrid Theory' — дебютный альбом Linkin Park, выпущенный в 2000 году. Он разошелся тиражом более 30 миллионов копий по всему миру.",
  },
  {
    question:
      "Какая христианская рок-группа известна песнями 'Monster' и 'Hero'?",
    options: ["Skillet", "Red", "Thousand Foot Krutch", "Flyleaf"],
    correct: 0,
    explanation:
      "Skillet — христианская рок-группа, известная песнями 'Monster' и 'Hero', которые стали хитами на радио и получили платиновый статус.",
  },
  {
    question:
      "Какая группа имеет маскота по имени Эдди, который появляется на всех обложках их альбомов?",
    options: ["Iron Maiden", "Megadeth", "Metallica", "Judas Priest"],
    correct: 0,
    explanation:
      "Эдди — маскот группы Iron Maiden, созданный художником Дереком Риггсом. Он появляется на всех обложках альбомов группы и стал культовым символом.",
  },
  {
    question: "Какая группа исполняет песню 'Down with the Sickness'?",
    options: ["Disturbed", "Godsmack", "Drowning Pool", "Mudvayne"],
    correct: 0,
    explanation:
      "'Down with the Sickness' — песня группы Disturbed с их дебютного альбома 'The Sickness' (2000 год).",
  },
  {
    question:
      "Какая группа известна своими текстами на тему вампиров, оборотней и религиозной символики?",
    options: [
      "Powerwolf",
      "Type O Negative",
      "Cradle of Filth",
      "Dimmu Borgir",
    ],
    correct: 0,
    explanation:
      "Powerwolf — немецкая пауэр-метал группа, известная тематикой вампиров, оборотней и религиозной символики в своих текстах и имидже.",
  },
  {
    question: "Какая группа исполняет песню 'Cowboys from Hell'?",
    options: ["Pantera", "Metallica", "Slayer", "Megadeth"],
    correct: 0,
    explanation:
      "'Cowboys from Hell' — заглавная песня с пятого студийного альбома Pantera, выпущенного в 1990 году. Эта песня стала визитной карточкой группы.",
  },
  {
    question:
      "Какая группа известна песней 'Break Stuff' и вокалистом Фредом Дёрстом?",
    options: ["Limp Bizkit", "Korn", "Slipknot", "Papa Roach"],
    correct: 0,
    explanation:
      "Limp Bizkit, возглавляемая Фредом Дёрстом, известна песней 'Break Stuff' с альбома 'Significant Other' (1999 год).",
  },
  {
    question: "Какая группа известна песней 'Raining Blood'?",
    options: ["Slayer", "Metallica", "Megadeth", "Anthrax"],
    correct: 0,
    explanation:
      "'Raining Blood' — одна из самых известных песен группы Slayer с альбома 'Reign in Blood' (1986 год).",
  },
  {
    question: "Какая группа известна альбомом 'The Blackening'?",
    options: ["Machine Head", "Slayer", "Pantera", "Slipknot"],
    correct: 0,
    explanation:
      "'The Blackening' — шестой студийный альбом группы Machine Head, выпущенный в 2007 году и получивший премию Грэмми.",
  },
  {
    question:
      "У какой группы барабанщик использует уникальную установку с вращающимися и поднимающимися барабанами?",
    options: ["Slipknot", "Korn", "Limp Bizkit", "Mushroomhead"],
    correct: 0,
    explanation:
      "Джоуи Джордисон (ранее) и нынешний барабанщик Slipknot использовали уникальные установки с вращающимися и поднимающимися элементами во время живых выступлений.",
  },
  {
    question: "Какая группа исполняет песню 'Wait and Bleed'?",
    options: ["Slipknot", "Mudvayne", "Coal Chamber", "Static-X"],
    correct: 0,
    explanation:
      "'Wait and Bleed' — песня группы Slipknot с их дебютного альбома, получившая номинацию на Грэмми.",
  },
  {
    question: "Какая группа выпустила песню 'Chop Suey!'?",
    options: ["System of a Down", "Slipknot", "Korn", "Deftones"],
    correct: 0,
    explanation:
      "'Chop Suey!' — песня группы System of a Down с альбома 'Toxicity' (2001 год), ставшая одной из их самых узнаваемых песен.",
  },
  {
    question: "Какая группа известна альбомом 'Toxicity'?",
    options: ["System of a Down", "Slipknot", "Korn", "Deftones"],
    correct: 0,
    explanation:
      "'Toxicity' — второй студийный альбом группы System of a Down, выпущенный в 2001 году и разошедшийся тиражом более 12 миллионов копий.",
  },
  {
    question: "Какая группа исполняет песню 'Aerials'?",
    options: [
      "System of a Down",
      "Tool",
      "Rage Against the Machine",
      "Audioslave",
    ],
    correct: 0,
    explanation:
      "'Aerials' — песня группы System of a Down с альбома 'Toxicity', получившая Грэмми в 2003 году.",
  },
  {
    question: "Какая группа известна песней 'Bring Me to Life'?",
    options: ["Evanescence", "Within Temptation", "Nightwish", "Lacuna Coil"],
    correct: 0,
    explanation:
      "'Bring Me to Life' — песня группы Evanescence с альбома 'Fallen' (2003 год), получившая Грэмми за лучшее хард-рок исполнение.",
  },
  {
    question: "Какая группа исполняет песню 'My Immortal'?",
    options: ["Evanescence", "Within Temptation", "Nightwish", "Lacuna Coil"],
    correct: 0,
    explanation:
      "'My Immortal' — баллада группы Evanescence, ставшая одним из их самых больших хитов.",
  },
  {
    question: "Какая группа известна альбомом 'Meteora'?",
    options: ["Linkin Park", "Limp Bizkit", "Papa Roach", "Staind"],
    correct: 0,
    explanation:
      "'Meteora' — второй студийный альбом Linkin Park, выпущенный в 2003 году и названный в честь скальных монастырей в Греции.",
  },
  {
    question: "Какая группа исполняет песню 'In the End'?",
    options: ["Linkin Park", "Limp Bizkit", "Papa Roach", "Staind"],
    correct: 0,
    explanation:
      "'In the End' — одна из самых известных песен Linkin Park с альбома 'Hybrid Theory'.",
  },
  {
    question: "Какая группа известна песней 'Numb'?",
    options: ["Linkin Park", "Coldplay", "Radiohead", "The Fray"],
    correct: 0,
    explanation:
      "'Numb' — песня Linkin Park с альбома 'Meteora', ставшая одним из их самых успешных синглов.",
  },
  {
    question: "Какая группа выпустила песню 'Dragula'?",
    options: ["Rob Zombie", "Marilyn Manson", "Alice Cooper", "White Zombie"],
    correct: 0,
    explanation:
      "'Dragula' — песня Роба Зомби с его дебютного сольного альбома 'Hellbilly Deluxe' (1998 год).",
  },
  {
    question: "Какая группа известна песней 'The Beautiful People'?",
    options: ["Marilyn Manson", "Rob Zombie", "Nine Inch Nails", "Ministry"],
    correct: 0,
    explanation:
      "'The Beautiful People' — песня Marilyn Manson с альбома 'Antichrist Superstar' (1996 год), ставшая его визитной карточкой.",
  },
  {
    question: "Какая группа исполняет песню 'Du Hast'?",
    options: ["Rammstein", "Oomph!", "Megaherz", "Eisbrecher"],
    correct: 0,
    explanation:
      "'Du Hast' — одна из самых известных песен немецкой индастриал-метал группы Rammstein.",
  },
  {
    question: "Какая группа известна альбомом 'Mother's Milk'?",
    options: [
      "Red Hot Chili Peppers",
      "Faith No More",
      "Jane's Addiction",
      "Primus",
    ],
    correct: 0,
    explanation:
      "'Mother's Milk' — четвертый студийный альбом Red Hot Chili Peppers, выпущенный в 1989 году.",
  },
  {
    question: "Какая группа исполняет песню 'Killing in the Name'?",
    options: ["Rage Against the Machine", "Audioslave", "Tool", "Puscifer"],
    correct: 0,
    explanation:
      "'Killing in the Name' — песня Rage Against the Machine с их дебютного альбома, известная своим протестным текстом.",
  },
  {
    question: "Какая группа известна альбомом 'Lateralus'?",
    options: ["Tool", "A Perfect Circle", "Puscifer", "Nine Inch Nails"],
    correct: 0,
    explanation:
      "'Lateralus' — третий студийный альбом группы Tool, выпущенный в 2001 году и получивший Грэмми.",
  },
  {
    question: "Какая группа исполняет песню 'Sober'?",
    options: ["Tool", "A Perfect Circle", "Puscifer", "Nine Inch Nails"],
    correct: 0,
    explanation:
      "'Sober' — песня группы Tool с альбома 'Undertow' (1993 год), ставшая их первым большим хитом.",
  },
  {
    question: "Какая группа известна альбомом 'White Pony'?",
    options: ["Deftones", "Tool", "Chevelle", "A Perfect Circle"],
    correct: 0,
    explanation:
      "'White Pony' — третий студийный альбом группы Deftones, выпущенный в 2000 году и получивший Грэмми.",
  },
  {
    question: "Какая группа исполняет песню 'Change (In the House of Flies)'?",
    options: ["Deftones", "Tool", "Chevelle", "A Perfect Circle"],
    correct: 0,
    explanation:
      "'Change (In the House of Flies)' — песня Deftones с альбома 'White Pony', ставшая одним из их самых известных треков.",
  },
  {
    question: "Какая группа известна песней 'My Own Summer (Shove It)'?",
    options: ["Deftones", "Tool", "Chevelle", "A Perfect Circle"],
    correct: 0,
    explanation:
      "'My Own Summer (Shove It)' — песня Deftones с альбома 'Around the Fur' (1997 год).",
  },
  {
    question: "Какая группа выпустила песню 'Last Resort'?",
    options: ["Papa Roach", "Limp Bizkit", "Linkin Park", "Staind"],
    correct: 0,
    explanation:
      "'Last Resort' — дебютный сингл Papa Roach с альбома 'Infest' (2000 год), ставший их визитной карточкой.",
  },
  {
    question: "Какая группа известна альбомом 'Infest'?",
    options: ["Papa Roach", "Limp Bizkit", "Linkin Park", "Staind"],
    correct: 0,
    explanation:
      "'Infest' — дебютный студийный альбом Papa Roach, выпущенный в 2000 году и ставший платиновым.",
  },
  {
    question: "Какая группа исполняет песню 'Scars'?",
    options: ["Papa Roach", "Staind", "Seether", "Three Days Grace"],
    correct: 0,
    explanation:
      "'Scars' — песня Papa Roach с альбома 'Getting Away with Murder' (2004 год).",
  },
  {
    question: "Какая группа известна альбомом 'Dysfunctional'?",
    options: ["Staind", "Papa Roach", "Seether", "Three Days Grace"],
    correct: 0,
    explanation:
      "'Dysfunctional' — третий студийный альбом Staind, выпущенный в 1999 году.",
  },
  {
    question: "Какая группа исполняет песню 'It's Been Awhile'?",
    options: ["Staind", "Papa Roach", "Seether", "Three Days Grace"],
    correct: 0,
    explanation:
      "'It's Been Awhile' — песня Staind с альбома 'Break the Cycle' (2001 год), ставшая их самым большим хитом.",
  },
  {
    question: "Какая группа известна песней 'Outside'?",
    options: ["Staind", "Papa Roach", "Seether", "Three Days Grace"],
    correct: 0,
    explanation:
      "'Outside' — песня Staind, первоначально исполненная акустически для MTV Unplugged, позже выпущенная как сингл.",
  },
  {
    question: "Какая группа выпустила песню 'Fine Again'?",
    options: ["Seether", "Staind", "Papa Roach", "Three Days Grace"],
    correct: 0,
    explanation:
      "'Fine Again' — песня Seether с их дебютного альбома 'Disclaimer' (2002 год).",
  },
  {
    question: "Какая группа известна альбомом 'Disclaimer'?",
    options: ["Seether", "Staind", "Papa Roach", "Three Days Grace"],
    correct: 0,
    explanation:
      "'Disclaimer' — дебютный студийный альбом южноафриканской рок-группы Seether, выпущенный в 2002 году.",
  },
  {
    question: "Какая группа исполняет песню 'Broken' (feat. Amy Lee)?",
    options: ["Seether", "Evanescence", "Staind", "Three Days Grace"],
    correct: 0,
    explanation:
      "'Broken' — песня Seether с участием Эми Ли из Evanescence, выпущенная в 2004 году.",
  },
  {
    question: "Какая группа известна песней 'Remedy'?",
    options: ["Seether", "Staind", "Papa Roach", "Three Days Grace"],
    correct: 0,
    explanation:
      "'Remedy' — песня Seether с альбома 'Karma and Effect' (2005 год).",
  },
  {
    question: "Какая группа выпустила песню 'I Hate Everything About You'?",
    options: ["Three Days Grace", "Seether", "Staind", "Papa Roach"],
    correct: 0,
    explanation:
      "'I Hate Everything About You' — дебютный сингл Three Days Grace с их одноименного альбома (2003 год).",
  },
  {
    question: "Какая группа известна альбомом 'Three Days Grace'?",
    options: ["Three Days Grace", "Seether", "Staind", "Papa Roach"],
    correct: 0,
    explanation:
      "'Three Days Grace' — дебютный студийный альбом канадской рок-группы Three Days Grace, выпущенный в 2003 году.",
  },
  {
    question: "Какая группа исполняет песню 'Animal I Have Become'?",
    options: ["Three Days Grace", "Seether", "Staind", "Papa Roach"],
    correct: 0,
    explanation:
      "'Animal I Have Become' — песня Three Days Grace с альбома 'One-X' (2006 год).",
  },
  {
    question: "Какая группа известна песней 'Pain'?",
    options: ["Three Days Grace", "Seether", "Staind", "Papa Roach"],
    correct: 0,
    explanation:
      "'Pain' — песня Three Days Grace с альбома 'One-X', ставшая одним из их самых успешных синглов.",
  },
  {
    question: "Какая группа выпустила песню 'Never Too Late'?",
    options: ["Three Days Grace", "Seether", "Staind", "Papa Roach"],
    correct: 0,
    explanation:
      "'Never Too Late' — песня Three Days Grace с альбома 'One-X', затрагивающая тему суицидальной депрессии.",
  },

  // Новые 50 вопросов (51-100)
  {
    question: "Какая группа выпустила песню 'Before I Forget'?",
    options: ["Slipknot", "Korn", "Limp Bizkit", "System of a Down"],
    correct: 0,
    explanation:
      "'Before I Forget' — песня Slipknot с альбома 'Vol. 3: (The Subliminal Verses)', получившая Грэмми в 2006 году.",
  },
  {
    question: "Какая группа известна альбомом 'The Great Southern Trendkill'?",
    options: ["Pantera", "Slayer", "Metallica", "Megadeth"],
    correct: 0,
    explanation:
      "'The Great Southern Trendkill' — девятый студийный альбом Pantera, выпущенный в 1996 году.",
  },
  {
    question: "У какой группы есть песня 'Psychosocial'?",
    options: ["Slipknot", "Mudvayne", "Coal Chamber", "Static-X"],
    correct: 0,
    explanation:
      "'Psychosocial' — песня Slipknot с альбома 'All Hope Is Gone' (2008 год), ставшая одним из их самых популярных синглов.",
  },
  {
    question: "Какая группа исполняет песню 'Duality'?",
    options: ["Slipknot", "Korn", "Deftones", "Limp Bizkit"],
    correct: 0,
    explanation:
      "'Duality' — песня Slipknot с альбома 'Vol. 3: (The Subliminal Verses)' (2004 год).",
  },
  {
    question: "Какая группа известна альбомом 'Iowa'?",
    options: ["Slipknot", "Slayer", "Pantera", "Machine Head"],
    correct: 0,
    explanation:
      "'Iowa' — второй студийный альбом Slipknot, выпущенный в 2001 году и названный в честь родного штата группы.",
  },
  {
    question: "Какая группа выпустила песню 'Snuff'?",
    options: ["Slipknot", "Stone Sour", "Korn", "Alice in Chains"],
    correct: 0,
    explanation:
      "'Snuff' — баллада Slipknot с альбома 'All Hope Is Gone' (2008 год), написанная вокалистом Кори Тейлором.",
  },
  {
    question: "Какая группа известна альбомом 'Vulgar Display of Power'?",
    options: ["Pantera", "Slayer", "Metallica", "Anthrax"],
    correct: 0,
    explanation:
      "'Vulgar Display of Power' — седьмой студийный альбом Pantera, выпущенный в 1992 году и считающийся классикой грув-метала.",
  },
  {
    question: "Какая группа исполняет песню 'Walk'?",
    options: ["Pantera", "Metallica", "Megadeth", "Slayer"],
    correct: 0,
    explanation:
      "'Walk' — песня Pantera с альбома 'Vulgar Display of Power', ставшая одним из их самых узнаваемых треков.",
  },
  {
    question: "Какая группа известна песней 'Cemetery Gates'?",
    options: ["Pantera", "Slayer", "Metallica", "Megadeth"],
    correct: 0,
    explanation:
      "'Cemetery Gates' — песня Pantera с альбома 'Cowboys from Hell' (1990 год), демонстрирующая вокальный диапазон Филла Ансельмо.",
  },
  {
    question: "Какая группа выпустила альбом 'Far Beyond Driven'?",
    options: ["Pantera", "Slipknot", "Slayer", "Machine Head"],
    correct: 0,
    explanation:
      "'Far Beyond Driven' — восьмой студийный альбом Pantera, выпущенный в 1994 году и дебютировавший на первом месте Billboard 200.",
  },
  {
    question: "Какая группа известна альбомом 'Seasons in the Abyss'?",
    options: ["Slayer", "Metallica", "Megadeth", "Anthrax"],
    correct: 0,
    explanation:
      "'Seasons in the Abyss' — пятый студийный альбом Slayer, выпущенный в 1990 году.",
  },
  {
    question: "Какая группа исполняет песню 'Angel of Death'?",
    options: ["Slayer", "Metallica", "Megadeth", "Kreator"],
    correct: 0,
    explanation:
      "'Angel of Death' — песня Slayer с альбома 'Reign in Blood', ставшая одной из самых известных и противоречивых песен трэш-метала.",
  },
  {
    question: "Какая группа известна альбомом 'South of Heaven'?",
    options: ["Slayer", "Metallica", "Megadeth", "Testament"],
    correct: 0,
    explanation:
      "'South of Heaven' — четвертый студийный альбом Slayer, выпущенный в 1988 году.",
  },
  {
    question: "Какая группа выпустила песню 'War Ensemble'?",
    options: ["Slayer", "Metallica", "Megadeth", "Exodus"],
    correct: 0,
    explanation:
      "'War Ensemble' — песня Slayer с альбома 'Seasons in the Abyss', ставшая классикой трэш-метала.",
  },
  {
    question: "Какая группа известна альбомом 'Follow the Leader'?",
    options: ["Korn", "Limp Bizkit", "Slipknot", "Deftones"],
    correct: 0,
    explanation:
      "'Follow the Leader' — третий студийный альбом Korn, выпущенный в 1998 году и принесший группе коммерческий успех.",
  },
  {
    question: "Какая группа исполняет песню 'Got the Life'?",
    options: ["Korn", "Limp Bizkit", "Slipknot", "Papa Roach"],
    correct: 0,
    explanation:
      "'Got the Life' — песня Korn с альбома 'Follow the Leader', ставшая одним из их самых популярных синглов.",
  },
  {
    question: "Какая группа известна песней 'Blind'?",
    options: ["Korn", "Deftones", "Limp Bizkit", "Slipknot"],
    correct: 0,
    explanation:
      "'Blind' — дебютный сингл Korn с их одноименного альбома 1994 года, считающийся одной из первых песен в жанре ню-метал.",
  },
  {
    question: "Какая группа выпустила альбом 'Issues'?",
    options: ["Korn", "Limp Bizkit", "Slipknot", "Papa Roach"],
    correct: 0,
    explanation:
      "'Issues' — четвертый студийный альбом Korn, выпущенный в 1999 году и дебютировавший на первом месте Billboard 200.",
  },
  {
    question: "Какая группа известна альбомом 'Untouchables'?",
    options: ["Korn", "Slipknot", "Limp Bizkit", "Deftones"],
    correct: 0,
    explanation:
      "'Untouchables' — пятый студийный альбом Korn, выпущенный в 2002 году.",
  },
  {
    question: "Какая группа исполняет песню 'Here to Stay'?",
    options: ["Korn", "Slipknot", "Limp Bizkit", "Papa Roach"],
    correct: 0,
    explanation:
      "'Here to Stay' — песня Korn с альбома 'Untouchables', получившая Грэмми за лучшее метал-исполнение в 2003 году.",
  },
  {
    question: "Какая группа известна альбомом 'Minutes to Midnight'?",
    options: ["Linkin Park", "Limp Bizkit", "Papa Roach", "Staind"],
    correct: 0,
    explanation:
      "'Minutes to Midnight' — третий студийный альбом Linkin Park, выпущенный в 2007 году и ознаменовавший изменение музыкального стиля группы.",
  },
  {
    question: "Какая группа исполняет песню 'What I've Done'?",
    options: ["Linkin Park", "Limp Bizkit", "Papa Roach", "Staind"],
    correct: 0,
    explanation:
      "'What I've Done' — песня Linkin Park с альбома 'Minutes to Midnight', ставшая саундтреком к фильму 'Трансформеры'.",
  },
  {
    question: "Какая группа известна песней 'Faint'?",
    options: ["Linkin Park", "Limp Bizkit", "Papa Roach", "Staind"],
    correct: 0,
    explanation:
      "'Faint' — песня Linkin Park с альбома 'Meteora', известная своим интенсивным скрипчинговым вступлением.",
  },
  {
    question: "Какая группа выпустила альбом 'Living Things'?",
    options: ["Linkin Park", "Limp Bizkit", "Papa Roach", "Three Days Grace"],
    correct: 0,
    explanation:
      "'Living Things' — пятый студийный альбом Linkin Park, выпущенный в 2012 году.",
  },
  {
    question: "Какая группа известна альбомом 'Collide with the Sky'?",
    options: [
      "Pierce the Veil",
      "Sleeping with Sirens",
      "Bring Me the Horizon",
      "A Day to Remember",
    ],
    correct: 0,
    explanation:
      "'Collide with the Sky' — третий студийный альбом Pierce the Veil, выпущенный в 2012 году.",
  },
  {
    question: "Какая группа исполняет песню 'King for a Day'?",
    options: [
      "Pierce the Veil",
      "Sleeping with Sirens",
      "Bring Me the Horizon",
      "A Day to Remember",
    ],
    correct: 0,
    explanation:
      "'King for a Day' — песня Pierce the Veil с альбома 'Collide with the Sky' при участии Келлана Куинна из Sleeping with Sirens.",
  },
  {
    question: "Какая группа известна альбомом 'Sempiternal'?",
    options: [
      "Bring Me the Horizon",
      "Pierce the Veil",
      "Sleeping with Sirens",
      "A Day to Remember",
    ],
    correct: 0,
    explanation:
      "'Sempiternal' — четвертый студийный альбом Bring Me the Horizon, выпущенный в 2013 году.",
  },
  {
    question: "Какая группа исполняет песню 'Can You Feel My Heart'?",
    options: [
      "Bring Me the Horizon",
      "Pierce the Veil",
      "Sleeping with Sirens",
      "A Day to Remember",
    ],
    correct: 0,
    explanation:
      "'Can You Feel My Heart' — песня Bring Me the Horizon с альбома 'Sempiternal', ставшая популярной благодаря мемам в TikTok.",
  },
  {
    question: "Какая группа известна альбомом 'Homesick'?",
    options: [
      "A Day to Remember",
      "Bring Me the Horizon",
      "Pierce the Veil",
      "Sleeping with Sirens",
    ],
    correct: 0,
    explanation:
      "'Homesick' — третий студийный альбом A Day to Remember, выпущенный в 2009 году.",
  },
  {
    question: "Какая группа исполняет песню 'The Downfall of Us All'?",
    options: [
      "A Day to Remember",
      "Bring Me the Horizon",
      "Pierce the Veil",
      "Sleeping with Sirens",
    ],
    correct: 0,
    explanation:
      "'The Downfall of Us All' — песня A Day to Remember с альбома 'Homesick', известная своим энергичным вступлением.",
  },
  {
    question: "Какая группа известна альбомом 'The Poison'?",
    options: [
      "Bullet for My Valentine",
      "Trivium",
      "As I Lay Dying",
      "Killswitch Engage",
    ],
    correct: 0,
    explanation:
      "'The Poison' — дебютный студийный альбом Bullet for My Valentine, выпущенный в 2005 году.",
  },
  {
    question: "Какая группа исполняет песню 'Tears Don't Fall'?",
    options: [
      "Bullet for My Valentine",
      "Trivium",
      "As I Lay Dying",
      "Killswitch Engage",
    ],
    correct: 0,
    explanation:
      "'Tears Don't Fall' — песня Bullet for My Valentine с альбома 'The Poison', ставшая одним из их самых известных синглов.",
  },
  {
    question: "Какая группа известна альбомом 'Ascendancy'?",
    options: [
      "Trivium",
      "Bullet for My Valentine",
      "As I Lay Dying",
      "Killswitch Engage",
    ],
    correct: 0,
    explanation:
      "'Ascendancy' — второй студийный альбом Trivium, выпущенный в 2005 году и получивший признание критиков.",
  },
  {
    question:
      "Какая группа исполняет песню 'Pull Harder on the Strings of Your Martyr'?",
    options: [
      "Trivium",
      "Bullet for My Valentine",
      "As I Lay Dying",
      "Killswitch Engage",
    ],
    correct: 0,
    explanation:
      "'Pull Harder on the Strings of Your Martyr' — песня Trivium с альбома 'Ascendancy', ставшая визитной карточкой группы.",
  },
  {
    question: "Какая группа известна альбомом 'The End of Heartache'?",
    options: [
      "Killswitch Engage",
      "Bullet for My Valentine",
      "Trivium",
      "As I Lay Dying",
    ],
    correct: 0,
    explanation:
      "'The End of Heartache' — третий студийный альбом Killswitch Engage, выпущенный в 2004 году.",
  },
  {
    question: "Какая группа исполняет песню 'My Curse'?",
    options: [
      "Killswitch Engage",
      "Bullet for My Valentine",
      "Trivium",
      "As I Lay Dying",
    ],
    correct: 0,
    explanation:
      "'My Curse' — песня Killswitch Engage с альбома 'As Daylight Dies' (2006 год), ставшая одним из их самых популярных синглов.",
  },
  {
    question: "Какая группа известна альбомом 'An Ocean Between Us'?",
    options: [
      "As I Lay Dying",
      "Killswitch Engage",
      "Bullet for My Valentine",
      "Trivium",
    ],
    correct: 0,
    explanation:
      "'An Ocean Between Us' — четвертый студийный альбом As I Lay Dying, выпущенный в 2007 году.",
  },
  {
    question: "Какая группа исполняет песню 'Nothing Left'?",
    options: [
      "As I Lay Dying",
      "Killswitch Engage",
      "Bullet for My Valentine",
      "Trivium",
    ],
    correct: 0,
    explanation:
      "'Nothing Left' — песня As I Lay Dying с альбома 'An Ocean Between Us', получившая номинацию на Грэмми.",
  },
  {
    question: "Какая группа известна альбомом 'The Number of the Beast'?",
    options: ["Iron Maiden", "Judas Priest", "Black Sabbath", "Dio"],
    correct: 0,
    explanation:
      "'The Number of the Beast' — третий студийный альбом Iron Maiden, выпущенный в 1982 году и ставший классикой хэви-метала.",
  },
  {
    question: "Какая группа исполняет песню 'The Trooper'?",
    options: ["Iron Maiden", "Judas Priest", "Black Sabbath", "Dio"],
    correct: 0,
    explanation:
      "'The Trooper' — песня Iron Maiden с альбома 'Piece of Mind' (1983 год), вдохновленная Крымской войной.",
  },
  {
    question: "Какая группа известна альбомом 'British Steel'?",
    options: ["Judas Priest", "Iron Maiden", "Black Sabbath", "Motorhead"],
    correct: 0,
    explanation:
      "'British Steel' — шестой студийный альбом Judas Priest, выпущенный в 1980 году и содержащий хит 'Breaking the Law'.",
  },
  {
    question: "Какая группа исполняет песню 'Painkiller'?",
    options: ["Judas Priest", "Iron Maiden", "Black Sabbath", "Motorhead"],
    correct: 0,
    explanation:
      "'Painkiller' — заглавная песня с одноименного альбома Judas Priest 1990 года, известная скоростным барабанным вступлением.",
  },
  {
    question: "Какая группа известна альбомом 'Paranoid'?",
    options: ["Black Sabbath", "Judas Priest", "Iron Maiden", "Dio"],
    correct: 0,
    explanation:
      "'Paranoid' — второй студийный альбом Black Sabbath, выпущенный в 1970 году и считающийся одним из основополагающих альбомов хэви-метала.",
  },
  {
    question: "Какая группа исполняет песню 'Iron Man'?",
    options: ["Black Sabbath", "Judas Priest", "Iron Maiden", "Dio"],
    correct: 0,
    explanation:
      "'Iron Man' — песня Black Sabbath с альбома 'Paranoid', ставшая одной из самых узнаваемых метал-песен всех времен.",
  },
  {
    question: "Какая группа известна альбомом 'Holy Diver'?",
    options: ["Dio", "Black Sabbath", "Judas Priest", "Iron Maiden"],
    correct: 0,
    explanation:
      "'Holy Diver' — дебютный студийный альбом Dio, выпущенный в 1983 году.",
  },
  {
    question: "Какая группа исполняет песню 'Rainbow in the Dark'?",
    options: ["Dio", "Black Sabbath", "Judas Priest", "Iron Maiden"],
    correct: 0,
    explanation:
      "'Rainbow in the Dark' — песня Dio с альбома 'Holy Diver', ставшая одним из самых популярных синглов группы.",
  },
  {
    question: "Какая группа известна альбомом 'Ace of Spades'?",
    options: ["Motorhead", "Black Sabbath", "Judas Priest", "Iron Maiden"],
    correct: 0,
    explanation:
      "'Ace of Spades' — четвертый студийный альбом Motorhead, выпущенный в 1980 году.",
  },
  {
    question: "Какая группа исполняет песню 'Overkill'?",
    options: ["Motorhead", "Black Sabbath", "Judas Priest", "Iron Maiden"],
    correct: 0,
    explanation:
      "'Overkill' — песня Motorhead с одноименного альбома 1979 года, известная своим быстрым темпом.",
  },
  {
    question: "Какая группа известна альбомом 'Nightfall in Middle-Earth'?",
    options: ["Blind Guardian", "Helloween", "Gamma Ray", "Stratovarius"],
    correct: 0,
    explanation:
      "'Nightfall in Middle-Earth' — седьмой студийный альбом Blind Guardian, выпущенный в 1998 году и основанный на 'Сильмариллионе' Дж. Р. Р. Толкина.",
  },
  {
    question: "Какая группа исполняет песню 'The Bard's Song'?",
    options: ["Blind Guardian", "Helloween", "Gamma Ray", "Stratovarius"],
    correct: 0,
    explanation:
      "'The Bard's Song' — акустическая баллада Blind Guardian с альбома 'Somewhere Far Beyond' (1992 год), часто исполняемая на концертах с участием публики.",
  },
  {
    question:
      "Какая группа известна альбомом 'Keeper of the Seven Keys Part I'?",
    options: ["Helloween", "Blind Guardian", "Gamma Ray", "Stratovarius"],
    correct: 0,
    explanation:
      "'Keeper of the Seven Keys Part I' — второй студийный альбом Helloween, выпущенный в 1987 году и считающийся классикой пауэр-метала.",
  },
  {
    question: "Какая группа исполняет песню 'I Want Out'?",
    options: ["Helloween", "Blind Guardian", "Gamma Ray", "Stratovarius"],
    correct: 0,
    explanation:
      "'I Want Out' — песня Helloween с альбома 'Keeper of the Seven Keys Part II' (1988 год), ставшая одним из их самых известных синглов.",
  },
  {
    question: "Какая группа известна альбомом 'Visions'?",
    options: ["Stratovarius", "Helloween", "Blind Guardian", "Gamma Ray"],
    correct: 0,
    explanation:
      "'Visions' — седьмой студийный альбом Stratovarius, выпущенный в 1997 году.",
  },
  {
    question: "Какая группа исполняет песню 'Black Diamond'?",
    options: ["Stratovarius", "Helloween", "Blind Guardian", "Gamma Ray"],
    correct: 0,
    explanation:
      "'Black Diamond' — песня Stratovarius с альбома 'Visions', ставшая одной из их самых узнаваемых песен.",
  },
  {
    question: "Какая группа известна альбомом 'Land of the Free'?",
    options: ["Gamma Ray", "Helloween", "Blind Guardian", "Stratovarius"],
    correct: 0,
    explanation:
      "'Land of the Free' — четвертый студийный альбом Gamma Ray, выпущенный в 1995 году.",
  },
  // Новые вопросы (151-180)
  {
    question: "Какая группа выпустила альбом 'Master of Puppets'?",
    options: ["Metallica", "Slayer", "Megadeth", "Anthrax"],
    correct: 0,
    explanation:
      "'Master of Puppets' — третий студийный альбом Metallica, выпущенный в 1986 году и считающийся одним из величайших метал-альбомов всех времен.",
  },
  {
    question:
      "Какая песня Metallica начинается с гитарного риффа 'dun-dun-dun-dun-dun-dun-dun'?",
    options: [
      "Enter Sandman",
      "Master of Puppets",
      "One",
      "Nothing Else Matters",
    ],
    correct: 0,
    explanation:
      "'Enter Sandman' — песня Metallica с альбома 'Metallica' (также известного как 'The Black Album'), выпущенного в 1991 году.",
  },
  {
    question:
      "Кто является бас-гитаристом Metallica, погибшим в автокатастрофе в 1986 году?",
    options: [
      "Клифф Бёртон",
      "Джейсон Ньюстед",
      "Роберт Трухильо",
      "Дэйв Мастейн",
    ],
    correct: 0,
    explanation:
      "Клифф Бёртон — бас-гитарист Metallica с 1982 по 1986 год, погиб в автокатастрофе в Швеции 27 сентября 1986 года.",
  },
  {
    question:
      "Какая песня Metallica была написана по мотивам романа 'Заводной апельсин'?",
    options: [
      "The God That Failed",
      "The Unforgiven",
      "...And Justice for All",
      "One",
    ],
    correct: 1,
    explanation:
      "'The Unforgiven' — песня Metallica с 'The Black Album', вдохновленная романом Энтони Бёрджесса 'Заводной апельсин'.",
  },
  {
    question:
      "Как называется единственный инструментальный трек на альбоме Metallica 'Master of Puppets'?",
    options: [
      "Orion",
      "The Call of Ktulu",
      "To Live Is to Die",
      "Anesthesia (Pulling Teeth)",
    ],
    correct: 0,
    explanation:
      "'Orion' — инструментальная композиция с альбома 'Master of Puppets', посвященная памяти Клиффа Бёртона.",
  },
  {
    question:
      "Какая песня была написана вокалистом Адамом Гонтье во время его пребывания в реабилитационном центре из-за зависимости от обезболивающих?",
    options: [
      "Animal I Have Become",
      "Pain",
      "Never Too Late",
      "I Hate Everything About You",
    ],
    correct: 0,
    explanation:
      "'Animal I Have Become' была написана Адамом Гонтье из Three Days Grace во время реабилитации от зависимости от обезболивающих препаратов.",
  },
  {
    question:
      "Кто считается самым быстрым барабанщиком в мире, установившим мировой рекорд по скорости игры на барабанах?",
    options: ["Том Гроссет", "Майк Манджини", "Дерек Родди", "Джин Хогланд"],
    correct: 0,
    explanation:
      "Том Гроссет установил мировой рекорд, сыграв 1200 ударов в минуту (20 ударов в секунду) в 2022 году.",
  },
  {
    question:
      "Какой гитарист известен как 'Палец Бога' за свою уникальную технику игры?",
    options: ["Том Морелло", "Эдди Ван Хален", "Джими Хендрикс", "Слэш"],
    correct: 1,
    explanation:
      "Эдди Ван Хален получил прозвище 'Палец Бога' за разработку техники тэппинга двумя руками.",
  },
  {
    question:
      "Какая группа исполняет песню 'A Tout le Monde', в которой поется 'A tout le monde, à tous mes amis'?",
    options: ["Megadeth", "Metallica", "Slayer", "Anthrax"],
    correct: 0,
    explanation:
      "'A Tout le Monde' — песня Megadeth с альбома 'Youthanasia' (1994 год), содержащая фразы на французском языке.",
  },
  {
    question:
      "Какой музыкант известен своей сценической личностью 'Демон-клоун' и игрой на бас-гитаре в группе Kiss?",
    options: ["Джин Симмонс", "Пол Стэнли", "Эйс Фрейли", "Питер Крисс"],
    correct: 0,
    explanation:
      "Джин Симмонс — бас-гитарист и вокалист Kiss, известный своим сценическим образом 'Демон-клоун' и длинным языком.",
  },
  {
    question: "Какая песня Nirvana стала неофициальным гимном поколения X?",
    options: [
      "Smells Like Teen Spirit",
      "Come As You Are",
      "Lithium",
      "In Bloom",
    ],
    correct: 0,
    explanation:
      "'Smells Like Teen Spirit' Nirvana стала культурным феноменом и неофициальным гимном поколения X в начале 1990-х.",
  },
  {
    question:
      "Какой гитарист известен как 'Бог тэппинга' и написал инструментальную композицию 'Eruption'?",
    options: ["Эдди Ван Хален", "Джо Сатриани", "Стив Вай", "Ингви Мальмстин"],
    correct: 0,
    explanation:
      "Эдди Ван Хален, известный как 'Бог тэппинга', написал и исполнил легендарную инструментальную композицию 'Eruption'.",
  },
  {
    question:
      "Какая группа исполнила песню 'The Sound of Silence' на концерте в Центральном парке в 1981 году?",
    options: [
      "Simon & Garfunkel",
      "The Beatles",
      "The Rolling Stones",
      "Queen",
    ],
    correct: 0,
    explanation:
      "Simon & Garfunkel исполнили 'The Sound of Silence' на своем легендарном концерте в Центральном парке Нью-Йорка в 1981 году.",
  },
  {
    question:
      "Какой барабанщик известен своим соло 'Moby Dick' и работой в Led Zeppelin?",
    options: ["Джон Бонэм", "Кит Мун", "Нил Пёрт", "Ринго Старр"],
    correct: 0,
    explanation:
      "Джон Бонэм, барабанщик Led Zeppelin, известен своим эпическим соло 'Moby Dick', которое могло длиться до 30 минут на концертах.",
  },
  {
    question: "Какая песня стала первым синглом группы Linkin Park?",
    options: ["One Step Closer", "Crawling", "In the End", "Papercut"],
    correct: 0,
    explanation:
      "'One Step Closer' был первым синглом Linkin Park с их дебютного альбома 'Hybrid Theory', выпущенный в 2000 году.",
  },
  {
    question:
      "Какой музыкант получил прозвище 'Шепчущий' за свой уникальный вокальный стиль?",
    options: ["Марк Лэнган", "Крис Корнелл", "Эдди Веддер", "Джим Моррисон"],
    correct: 0,
    explanation:
      "Марк Лэнган, вокалист Screaming Trees и участник Mad Season, получил прозвище 'Шепчущий' за свой характерный вокал.",
  },
  {
    question:
      "Какая группа исполнила саундтрек 'The End' к фильму 'Апокалипсис сегодня'?",
    options: ["The Doors", "Led Zeppelin", "The Rolling Stones", "Pink Floyd"],
    correct: 0,
    explanation:
      "The Doors исполнили песню 'The End' в фильме 'Апокалипсис сегодня' Фрэнсиса Форда Копполы.",
  },
  {
    question:
      "Какой гитарист известен тем, что играл на гитаре, подожженной им самим, на фестивале в Монтерее в 1967 году?",
    options: ["Джими Хендрикс", "Джимми Пейдж", "Эрик Клэптон", "Пит Тауншенд"],
    correct: 0,
    explanation:
      "Джими Хендрикс поджег свою гитару на фестивале в Монтерее в 1967 году, что стало одним из самых знаковых моментов в истории рок-музыки.",
  },
  {
    question:
      "Какая группа исполняет песню 'Stairway to Heaven', которая запрещена к продаже в некоторых магазинах из-за суеверий?",
    options: ["Led Zeppelin", "The Beatles", "Queen", "Pink Floyd"],
    correct: 0,
    explanation:
      "'Stairway to Heaven' Led Zeppelin иногда запрещается к продаже в некоторых магазинах из-за суеверий о 'скрытых посланиях' при проигрывании задом наперед.",
  },
  {
    question:
      "Какой вокалист известен как 'Летучая мышь' за свою привычку висеть вниз головой во время концертов?",
    options: ["Оззи Осборн", "Роб Хэлфорд", "Брюс Дикинсон", "Элис Купер"],
    correct: 0,
    explanation:
      "Оззи Осборн получил прозвище 'Летучая мышь' после того, как на концерте в 1982 году бросил на сцену живую летучую мышь, которую принял за игрушку.",
  },
  {
    question:
      "Какая песня группы Queen длится 6 минут и включает оперную часть?",
    options: [
      "Bohemian Rhapsody",
      "We Will Rock You",
      "We Are the Champions",
      "Another One Bites the Dust",
    ],
    correct: 0,
    explanation:
      "'Bohemian Rhapsody' Queen длится почти 6 минут и включает оперную часть, что было нетипично для радиоформата того времени.",
  },
  {
    question:
      "Какой барабанщик установил мировой рекорд, сыграв самый длинный барабанный марафон - 121 час?",
    options: ["Джеймс Оуэнс", "Джон Бонэм", "Кит Мун", "Нил Пёрт"],
    correct: 0,
    explanation:
      "Джеймс Оуэнс установил мировой рекорд в 2023 году, сыграв на барабанах 121 час непрерывно.",
  },
  {
    question:
      "Какая песня Slipknot была написана о самоубийстве сестры одного из участников группы?",
    options: ["Snuff", "Vermilion", "Duality", "Psychosocial"],
    correct: 0,
    explanation:
      "'Snuff' была написана Кори Тейлором о самоубийстве его сестры в 1996 году.",
  },
  {
    question: "Какой гитарист Metallica известен под прозвищем 'Papa Het'?",
    options: ["Джеймс Хэтфилд", "Кирк Хэмметт", "Клифф Бёртон", "Ларс Ульрих"],
    correct: 0,
    explanation:
      "Джеймс Хэтфилд, ритм-гитарист и вокалист Metallica, известен среди фанатов под прозвищем 'Papa Het'.",
  },
  {
    question:
      "Какая группа исполняет песню 'November Rain', в клипе на которую показана свадьба в пустыне?",
    options: ["Guns N' Roses", "Aerosmith", "Bon Jovi", "Mötley Crüe"],
    correct: 0,
    explanation:
      "'November Rain' Guns N' Roses известна своим эпическим клипом, где показана свадьба в пустыне и похороны под проливным дождем.",
  },
  {
    question:
      "Какой музыкант сломал себе шею во время выступления, но продолжил концерт?",
    options: ["Джеймс Хэтфилд", "Брюс Дикинсон", "Эксл Роуз", "Фил Ансельмо"],
    correct: 0,
    explanation:
      "Джеймс Хэтфилд сломал шею во время катания на сноуборде перед туром, но все равно продолжил выступления, выступая в специальном корсете.",
  },
  {
    question:
      "Какая песня стала саундтреком к фильму 'Криминальное чтиво' в сцене с танцем Джона Траволты и Умы Турман?",
    options: [
      "You Never Can Tell",
      "Misirlou",
      "Son of a Preacher Man",
      "Girl, You'll Be a Woman Soon",
    ],
    correct: 0,
    explanation:
      "'You Never Can Tell' Чака Берри стала саундтреком к знаменитой сцене танца в фильме 'Криминальное чтиво'.",
  },
  {
    question:
      "Какой музыкант Metallica получил ожоги второй и третьей степени во время съемок клипа?",
    options: [
      "Джеймс Хэтфилд",
      "Кирк Хэмметт",
      "Ларс Ульрих",
      "Джейсон Ньюстед",
    ],
    correct: 0,
    explanation:
      "Джеймс Хэтфилд получил серьезные ожоги во время съемок клипа на песню 'One' в 1989 году, когда пиротехника сработала неправильно.",
  },
  {
    question:
      "Какая группа исполнила самый длинный гитарный рифф в истории - 3 часа 28 минут?",
    options: ["Earthless", "Sleep", "Om", "Boris"],
    correct: 0,
    explanation:
      "Группа Earthless установила рекорд, исполнив гитарный рифф продолжительностью 3 часа 28 минут в 2019 году.",
  },
  {
    question:
      "Какой барабанщик Metallica также является продюсером и одним из основателей группы?",
    options: [
      "Ларс Ульрих",
      "Джеймс Хэтфилд",
      "Кирк Хэмметт",
      "Роберт Трухильо",
    ],
    correct: 0,
    explanation:
      "Ларс Ульрих — барабанщик Metallica, один из основателей группы, а также продюсер многих их альбомов.",
  },
  {
    question:
      "Какая песня стала гимном воссоединения группы Led Zeppelin в 2007 году?",
    options: [
      "Kashmir",
      "Stairway to Heaven",
      "Whole Lotta Love",
      "Rock and Roll",
    ],
    correct: 0,
    explanation:
      "'Kashmir' стала центральной песней на воссоединительном концерте Led Zeppelin в 2007 году, посвященном памяти Ахмета Эртегюна.",
  },
];

// Переменные состояния квиза
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let quizStarted = false;
let currentQuizQuestions = []; // Массив для 15 случайных вопросов

// DOM элементы
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const shareBtn = document.getElementById("share-btn");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const currentQuestionElement = document.getElementById("current-question");
const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");
const finalScoreElement = document.getElementById("final-score");
const percentageElement = document.getElementById("percentage");
const levelElement = document.getElementById("level");
const resultMessageElement = document.getElementById("result-message");
const answersSummaryElement = document.getElementById("answers-summary");

// Функция для перемешивания массива (алгоритм Фишера-Йетса)
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Функция для перемешивания вариантов ответов с обновлением индекса правильного ответа
function shuffleQuestionOptions(question) {
  // Создаем копию вопроса
  const shuffledQuestion = { ...question };

  // Сохраняем правильный ответ
  const correctAnswerText = shuffledQuestion.options[shuffledQuestion.correct];

  // Перемешиваем варианты ответов
  shuffledQuestion.options = shuffleArray(shuffledQuestion.options);

  // Находим новый индекс правильного ответа
  shuffledQuestion.correct =
    shuffledQuestion.options.indexOf(correctAnswerText);

  return shuffledQuestion;
}

// Функция для выбора 15 случайных вопросов
function getRandomQuestions() {
  // Создаем копию массива всех вопросов
  const allQuestionsCopy = [...allQuestions];
  const randomQuestions = [];

  // Выбираем 15 случайных вопросов
  for (let i = 0; i < 15; i++) {
    if (allQuestionsCopy.length === 0) break;

    const randomIndex = Math.floor(Math.random() * allQuestionsCopy.length);
    const question = allQuestionsCopy[randomIndex];

    // Перемешиваем варианты ответов для этого вопроса
    const shuffledQuestion = shuffleQuestionOptions(question);

    randomQuestions.push(shuffledQuestion);
    allQuestionsCopy.splice(randomIndex, 1); // Удаляем выбранный вопрос, чтобы не повторяться
  }

  return randomQuestions;
}

// Инициализация квиза
function initQuiz() {
  // Сброс состояния
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  quizStarted = false;

  // Получаем 15 случайных вопросов с перемешанными вариантами ответов
  currentQuizQuestions = getRandomQuestions();

  // Сброс интерфейса
  scoreElement.textContent = score;
  currentQuestionElement.textContent = currentQuestionIndex + 1;
  progressBar.style.width = "0%";

  // Очищаем сводку ответов
  answersSummaryElement.innerHTML = "";

  // Показать стартовый экран
  showScreen(startScreen);
}

// Показать определенный экран
function showScreen(screen) {
  // Скрыть все экраны
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));

  // Показать нужный экран
  screen.classList.add("active");
}

// Начать квиз
function startQuiz() {
  quizStarted = true;
  showScreen(questionScreen);
  loadQuestion(currentQuestionIndex);
}

// Загрузить вопрос
function loadQuestion(index) {
  // Обновить индикатор прогресса
  const progressPercentage = ((index + 1) / currentQuizQuestions.length) * 100;
  progressBar.style.width = `${progressPercentage}%`;

  // Обновить номер вопроса
  currentQuestionElement.textContent = index + 1;

  // Загрузить текст вопроса
  const question = currentQuizQuestions[index];
  questionText.textContent = question.question;

  // Очистить контейнер с вариантами ответов
  optionsContainer.innerHTML = "";

  // Создать варианты ответов
  question.options.forEach((option, optionIndex) => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");
    optionElement.dataset.index = optionIndex;
    optionElement.innerHTML = `
            <div class="option-number">${optionIndex + 1}</div>
            <div class="option-text">${option}</div>
        `;

    // Добавить обработчик клика
    optionElement.addEventListener("click", () => selectAnswer(optionIndex));

    optionsContainer.appendChild(optionElement);
  });

  // Сбросить состояние кнопки "Далее"
  nextBtn.disabled = true;
}

// Выбрать ответ
function selectAnswer(selectedIndex) {
  // Если уже был выбран ответ, не позволяем выбрать другой
  const options = document.querySelectorAll(".option");
  if (options[0].classList.contains("selected")) return;

  // Получить текущий вопрос
  const currentQuestion = currentQuizQuestions[currentQuestionIndex];

  // Отметить выбранный вариант
  options.forEach((option, index) => {
    if (index === selectedIndex) {
      option.classList.add("selected");
    }
  });

  // Проверить, правильный ли ответ
  const isCorrect = selectedIndex === currentQuestion.correct;

  // Сохранить ответ пользователя
  userAnswers.push({
    questionIndex: currentQuestionIndex,
    question: currentQuestion.question,
    selected: selectedIndex,
    selectedText: currentQuestion.options[selectedIndex],
    correct: currentQuestion.correct,
    correctText: currentQuestion.options[currentQuestion.correct],
    isCorrect: isCorrect,
    explanation: currentQuestion.explanation,
  });

  // Если ответ правильный, увеличить счет
  if (isCorrect) {
    score++;
    scoreElement.textContent = score;
  }

  // Показать правильные/неправильные ответы
  options.forEach((option, index) => {
    if (index === currentQuestion.correct) {
      option.classList.add("correct");
    } else if (index === selectedIndex && !isCorrect) {
      option.classList.add("incorrect");
    }
  });

  // Активировать кнопку "Далее"
  nextBtn.disabled = false;
}

// Перейти к следующему вопросу
function nextQuestion() {
  currentQuestionIndex++;

  // Если вопросы закончились, показать результаты
  if (currentQuestionIndex >= currentQuizQuestions.length) {
    showResults();
  } else {
    // Загрузить следующий вопрос
    loadQuestion(currentQuestionIndex);
  }
}

// Показать результаты
function showResults() {
  showScreen(resultScreen);

  // Вычислить процент правильных ответов
  const percentage = Math.round((score / currentQuizQuestions.length) * 100);

  // Определить уровень знаний
  let level = "";
  let message = "";

  if (percentage >= 90) {
    level = "Легенда рока";
    message =
      "Невероятно! Вы настоящий гуру рок-музыки! Ваши знания впечатляют даже самых заядлых меломанов.";
  } else if (percentage >= 75) {
    level = "Мега-фанат";
    message =
      "Отличный результат! Вы отлично разбираетесь в рок-музыке и знаете большинство групп и их хиты.";
  } else if (percentage >= 60) {
    level = "Истинный фанат";
    message =
      "Хороший результат! Вы хорошо знакомы с рок-музыкой, но некоторые тонкости еще можно изучить.";
  } else if (percentage >= 40) {
    level = "Любитель";
    message =
      "Неплохо! Вы знаете основные рок-группы и хиты, но мир рок-музыки намного разнообразнее!";
  } else if (percentage >= 20) {
    level = "Новичок";
    message =
      "Вы только начинаете свой путь в мире рок-музыки. Слушайте больше разных групп и возвращайтесь!";
  } else {
    level = "Случайный слушатель";
    message =
      "Рок-музыка, кажется, не ваш основной жанр, но это отличная возможность открыть для себя что-то новое!";
  }

  // Обновить данные на экране результатов
  finalScoreElement.textContent = `${score}/${currentQuizQuestions.length}`;
  percentageElement.textContent = `${percentage}%`;
  levelElement.textContent = level;
  resultMessageElement.textContent = message;

  // Показать сводку ответов
  answersSummaryElement.innerHTML = "";
  userAnswers.forEach((userAnswer, index) => {
    const summaryItem = document.createElement("div");
    summaryItem.classList.add("summary-item");
    summaryItem.classList.add(userAnswer.isCorrect ? "correct" : "incorrect");

    summaryItem.innerHTML = `
            <div class="summary-question">${index + 1}. ${
      userAnswer.question
    }</div>
            <div class="summary-answer">
                <strong>Ваш ответ:</strong> ${userAnswer.selectedText}<br>
                <strong>Правильный ответ:</strong> ${userAnswer.correctText}<br>
                <em>${userAnswer.explanation}</em>
            </div>
        `;

    answersSummaryElement.appendChild(summaryItem);
  });
}

// Поделиться результатом
function shareResult() {
  const percentage = Math.round((score / currentQuizQuestions.length) * 100);
  const shareText = `Я только что прошел квиз "Знатоки рок-исполнителей" и набрал ${score} из ${currentQuizQuestions.length} баллов (${percentage}%)! Мой уровень: ${levelElement.textContent}. Попробуй и ты!`;

  // Проверяем поддержку Web Share API
  if (navigator.share) {
    navigator
      .share({
        title: "Мой результат в музыкальном квизе",
        text: shareText,
        url: window.location.href,
      })
      .catch((err) => {
        console.log("Ошибка при использовании Web Share API:", err);
        copyToClipboard(shareText);
      });
  } else {
    // Используем fallback - копирование в буфер обмена
    copyToClipboard(shareText);
  }
}

// Копирование текста в буфер обмена
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text + " " + window.location.href)
    .then(() => {
      alert("Результат скопирован в буфер обмена! Поделитесь им в соцсетях.");
    })
    .catch((err) => {
      console.log("Ошибка при копировании в буфер обмена:", err);
      // Fallback для старых браузеров
      const textArea = document.createElement("textarea");
      textArea.value = text + " " + window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Результат скопирован в буфер обмена! Поделитесь им в соцсетях.");
    });
}

// Обработчики событий
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", initQuiz);
shareBtn.addEventListener("click", shareResult);

// Инициализировать квиз при загрузке страницы
document.addEventListener("DOMContentLoaded", initQuiz);

// Добавляем поддержку клавиатуры
document.addEventListener("keydown", (e) => {
  // Если мы на экране вопроса
  if (questionScreen.classList.contains("active")) {
    // Цифры 1-4 для выбора ответа
    if (e.key >= "1" && e.key <= "4") {
      const optionIndex = parseInt(e.key) - 1;
      const options = document.querySelectorAll(".option");
      if (
        optionIndex < options.length &&
        !options[0].classList.contains("selected")
      ) {
        selectAnswer(optionIndex);
      }
    }

    // Enter для перехода к следующему вопросу
    if (e.key === "Enter" && !nextBtn.disabled) {
      nextQuestion();
    }

    // Space для перехода к следующему вопросу
    if (e.key === " " && !nextBtn.disabled) {
      e.preventDefault(); // Предотвращаем прокрутку страницы
      nextQuestion();
    }
  }

  // Если мы на экране результатов
  if (resultScreen.classList.contains("active")) {
    // Enter или Space для перезапуска
    if (e.key === "Enter" || e.key === " ") {
      initQuiz();
    }
  }

  // Если мы на стартовом экране
  if (startScreen.classList.contains("active")) {
    // Enter для начала квиза
    if (e.key === "Enter") {
      startQuiz();
    }
  }
});