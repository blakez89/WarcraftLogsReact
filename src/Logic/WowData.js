export const Zones = [
    {
"id": 19,
"name": "Uldir",
"frozen": true,
"encounters": [
{
  "id": 2144,
  "name": "Taloc",
  "npcID": 137119
},
{
  "id": 2141,
  "name": "MOTHER",
  "npcID": 135452
},
{
  "id": 2128,
  "name": "Fetid Devourer",
  "npcID": 133298
},
{
  "id": 2136,
  "name": "Zek'voz",
  "npcID": 134445
},
{
  "id": 2134,
  "name": "Vectis",
  "npcID": 134442
},
{
  "id": 2145,
  "name": "Zul",
  "npcID": 138967
},
{
  "id": 2135,
  "name": "Mythrax",
  "npcID": 134546
},
{
  "id": 2122,
  "name": "G'huun",
  "npcID": 132998
}
]
},

{
"id": 21,
"name": "Battle of Dazar'alor",
"frozen": false,
"encounters": [
{
  "id": 2265,
  "name": "Champion of the Light",
  "npcID": 144680
},
{
  "id": 2266,
  "name": "Jadefire Masters",
  "npcID": 144690
},
{
  "id": 2263,
  "name": "Grong",
  "npcID": 144637
},
{
  "id": 2271,
  "name": "Opulence",
  "npcID": 145261
},
{
  "id": 2268,
  "name": "Conclave of the Chosen",
  "npcID": 144747
},
{
  "id": 2272,
  "name": "King Rastakhan",
  "npcID": 145616
},
{
  "id": 2276,
  "name": "Mekkatorque",
  "npcID": 144796
},
{
  "id": 2280,
  "name": "Stormwall Blockade",
  "npcID": 146256
},
{
  "id": 2281,
  "name": "Lady Jaina Proudmoore",
  "npcID": 146416
}
]
},
{
"id": 22,
"name": "Crucible of Storms",
"frozen": false,
"encounters": [
{
  "id": 2269,
  "name": "The Restless Cabal",
  "npcID": 146497
},
{
  "id": 2273,
  "name": "Uu'nat, Harbinger of the Void",
  "npcID": 145371
}
]
},
{
"id": 23,
"name": "The Eternal Palace",
"frozen": true,
"encounters": [
{
  "id": 2298,
  "name": "Abyssal Commander Sivarra",
  "npcID": 145371
},
{
  "id": 2305,
  "name": "Radiance of Azshara",
  "npcID": 145371
},
{
  "id": 2289,
  "name": "Blackwater Behemoth",
  "npcID": 145371
},
{
  "id": 2304,
  "name": "Lady Ashvane",
  "npcID": 145371
},
{
  "id": 2303,
  "name": "Orgozoa",
  "npcID": 145371
},
{
  "id": 2311,
  "name": "The Queen's Court",
  "npcID": 145371
},
{
  "id": 2293,
  "name": "Za'qul, Harbinger of Ny'alotha",
  "npcID": 145371
},
{
  "id": 2299,
  "name": "Queen Azshara",
  "npcID": 145371
}
]
}
]

export const Classes  = [
  {
    id: 1,
    name: "Death Knight",
    specs: [
      {
        id: 1,
        name: "Blood"
      },
      {
        id: 2,
        name: "Frost"
      },
      {
        id: 3,
        name: "Unholy"
      }
    ]
  },
  {
    id: 2,
    name: "Druid",
    specs: [
      {
        id: 1,
        name: "Balance"
      },
      {
        id: 2,
        name: "Feral"
      },
      {
        id: 3,
        name: "Guardian"
      },
      {
        id: 4,
        name: "Restoration"
      }
    ]
  },
  {
    id: 3,
    name: "Hunter",
    specs: [
      {
        id: 1,
        name: "Beast Mastery"
      },
      {
        id: 2,
        name: "Marksmanship"
      },
      {
        id: 3,
        name: "Survival"
      }
    ]
  },
  {
    id: 4,
    name: "Mage",
    specs: [
      {
        id: 1,
        name: "Arcane"
      },
      {
        id: 2,
        name: "Fire"
      },
      {
        id: 3,
        name: "Frost"
      }
    ]
  },
  {
    id: 5,
    name: "Monk",
    specs: [
      {
        id: 1,
        name: "Brewmaster"
      },
      {
        id: 2,
        name: "Mistweaver"
      },
      {
        id: 3,
        name: "Windwalker"
      }
    ]
  },
  {
    id: 6,
    name: "Paladin",
    specs: [
      {
        id: 1,
        name: "Holy"
      },
      {
        id: 2,
        name: "Protection"
      },
      {
        id: 3,
        name: "Retribution"
      }
    ]
  },
  {
    id: 7,
    name: "Priest",
    specs: [
      {
        id: 1,
        name: "Discipline"
      },
      {
        id: 2,
        name: "Holy"
      },
      {
        id: 3,
        name: "Shadow"
      }
    ]
  },
  {
    id: 8,
    name: "Rogue",
    specs: [
      {
        id: 1,
        name: "Assassination"
      },
      {
        id: 2,
        name: "Combat"
      },
      {
        id: 3,
        name: "Subtlety"
      },
      {
        id: 4,
        name: "Outlaw"
      }
    ]
  },
  {
    id: 9,
    name: "Shaman",
    specs: [
      {
        id: 1,
        name: "Elemental"
      },
      {
        id: 2,
        name: "Enhancement"
      },
      {
        id: 3,
        name: "Restoration"
      }
    ]
  },
  {
    id: 10,
    name: "Warlock",
    specs: [
      {
        id: 1,
        name: "Affliction"
      },
      {
        id: 2,
        name: "Demonology"
      },
      {
        id: 3,
        name: "Destruction"
      }
    ]
  },
  {
    id: 11,
    name: "Warrior",
    specs: [
      {
        id: 1,
        name: "Arms"
      },
      {
        id: 2,
        name: "Fury"
      },
      {
        id: 3,
        name: "Protection"
      },
      {
        id: 4,
        name: "Gladiator"
      }
    ]
  },
  {
    id: 12,
    name: "Demon Hunter",
    specs: [
      {
        id: 1,
        name: "Havoc"
      },
      {
        id: 2,
        name: "Vengeance"
      }
    ]
  }
]


export const Difficulty = [
      {
        id:1,
        name: 'LFR'
      },
      {
        id:3,
        name: 'Normal'
      },
      {
        id:4,
        name: 'Heroic'
      },
      {
        id:5,
        name: 'Mythic'
      }
]


/* export const Classes = theClasses




export const Zones = zones */