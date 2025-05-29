// === DONNÉES DU JEU ===
const questions = {
    1: {
        text: "Tu es sur un site inutile. Que fais-tu ?",
        choices: [
            {
                text: "Je clique, ça m'excite.",
                next: 2,
                comment: "Tu as besoin d'attention, visiblement."
            },
            {
                text: "Je clique, parce que j'ai perdu foi en moi.",
                next: 2,
                comment: "Au moins tu es honnête, c'est déjà ça."
            }
        ]
    },
    2: {
        text: "Pourquoi les flamants roses sont-ils roses ?",
        choices: [
            {
                text: "Parce qu’ils mangent trop de bonbons à la fraise.",
                next: 3,
                comment: "Ah oui, la célèbre diète skittles et crevettes, très équilibrée."
            },
            {
                text: "C’est à force de rougir à cause des compliments.",
                next: 3,
                comment: "Oh, tes pattes sont si longues, quel élégance ! Et bim, rose fluo pour la vie."
            }
        ]
    },
    3: {
        text: "Imagine que c'est la fin. Que fais-tu ?",
        choices: [
            {
                text: "Je clic quand même, on ne sait jamais.",
                next: 4,
                comment: "Et bien tu es persévérant, c'est admirable. Mais tu sais, parfois il faut savoir s'arrêter. Mais continuons !"
            },
            {
                text: "Je m'arrête là, c'est ridicule.",
                next: 4,
                comment: "Sage décision, mais c'est toi qui est ridicule. Mais continuons !"
            }
        ]
    },
    4: {
    text: "Pourquoi persistez-vous alors que chaque réponse vous humilie un peu plus ?",
    choices: [
        {
            text: "Par masochisme intellectuel",
            next: 5,
            comment: "Enfin une lucidité dans votre auto-destruction, c'est touchant"
        },
        {
            text: "Je crois encore à votre bonté cachée",
            next: 5,
            comment: "Spoiler: Elle est tellement cachée qu'elle n'existe pas"
        }
    ]
},
5: {
    text: "Si votre QI était un prix, ce serait",
    choices: [
        {
            text: "Le prix de la participation",
            next: 6,
            comment: "Bravo d'être venu, quand même"
        },
        {
            text: "Un bon d'achat périmé",
            next: 6,
            comment: "Comme vos espoirs d'avoir des réponses sérieuses"
        }
    ]
},
6: {
    text: "Quelle est votre excuse pour justifier ce temps perdu ?",
    choices: [
        {
            text: "Je fais des recherches psychologiques",
            next: 7,
            comment: "Sur comment devenir un cas d'étude ?"
        },
        {
            text: "C'est la faute de mon éducation",
            next: 7,
            comment: "En effet, vos parents auraient dû vous aimer plus"
        }
    ]
},
7: {
    text: "Quand vous regardez dans le miroir le matin",
    choices: [
        {
            text: "Je vois un winner",
            next: 8,
            comment: "Dans quel univers parallèle ?"
        },
        {
            text: "Je pleure un peu avant de commencer ma journée",
            next: 8,
            comment: "Enfin une réaction saine"
        }
    ]
},
8: {
    text: "Si vous étiez un animal, vous seriez",
    choices: [
        {
            text: "Un paresseux",
            next: 9,
            comment: "Trop ambitieux comme comparaison"
        },
        {
            text: "Une méduse",
            next: 9,
            comment: "Au moins elle a l'excuse de n'avoir pas de cerveau"
        }
    ]
},
9: {
    text: "Votre vie amoureuse ressemble à",
    choices: [
        {
            text: "Un conte de fées",
            next: 10,
            comment: "Celui de la Belle au Bois Dormant, car personne ne vient vous réveiller"
        },
        {
            text: "Un documentaire animalier",
            next: 10,
            comment: "Sur les espèces en voie de disparition ?"
        }
    ]
},
10: {
    text: "Votre plus grande réalisation dans la vie est",
    choices: [
        {
            text: "Avoir lu jusqu'ici",
            next: 11,
            comment: "Félicitations, votre chien serait fier de vous"
        },
        {
            text: "Rien pour l'instant",
            next: 11,
            comment: "Enfin une réponse honnête"
        }
    ]
},
11: {
    text: "Si la stupidité était une énergie renouvelable",
    choices: [
        {
            text: "Je pourrais éclairer une ville",
            next: 12,
            comment: "Une petite ville, soyons modestes"
        },
        {
            text: "Je serais une centrale nucléaire",
            next: 12,
            comment: "Attention aux fuites radioactives"
        }
    ]
},
12: {
    text: "Pourquoi les miroirs ne se brisent-ils pas à votre reflet ?",
    choices: [
        {
            text: "Ils sont en verre trempé",
            next: 13,
            comment: "Contre les chocs, pas contre la laideur"
        },
        {
            text: "Par pitié",
            next: 13,
            comment: "La seule explication plausible"
        }
    ]
},
13: {
    text: "Quand vous parlez, les gens",
    choices: [
        {
            text: "Font semblant d'écouter",
            next: 14,
            comment: "C'est mignon comme effort"
        },
        {
            text: "Regardent leur montre",
            next: 14,
            comment: "Ils comptent les secondes avant de pouvoir partir"
        }
    ]
},
14: {
    text: "Votre patron vous décrirait comme",
    choices: [
        {
            text: "Un élément de l'entreprise",
            next: 15,
            comment: "Oui, comme le radiateur qui fait du bruit"
        },
        {
            text: "Une ressource humaine",
            next: 15,
            comment: "Mais pas vraiment humaine ni une ressource"
        }
    ]
},
15: {
    text: "Si vous étiez un super-héros, votre pouvoir serait",
    choices: [
        {
            text: "Endormir les gens en parlant",
            next: 16,
            comment: "Vous maîtrisez déjà ce pouvoir"
        },
        {
            text: "Être invisible",
            next: 16,
            comment: "Vous l'êtes déjà quand vous avez quelque chose d'intelligent à dire"
        }
    ]
},
16: {
    text: "Votre existence remet-elle en question la théorie de l'évolution ?",
    choices: [
        {
            text: "Oui, clairement",
            next: 17,
            comment: "Darwin se retournerait dans sa tombe"
        },
        {
            text: "Non, je suis juste une erreur statistique",
            next: 17,
            comment: "Une très grosse erreur"
        }
    ]
},
17: {
    text: "Quand vous étiez enfant, vos dessins",
    choices: [
        {
            text: "Étaient accrochés au frigo",
            next: 18,
            comment: "Pour cacher les taches"
        },
        {
            text: "Faisaient pleurer votre institutrice",
            next: 18,
            comment: "De désespoir"
        }
    ]
},
18: {
    text: "Votre CV mentionne comme compétence",
    choices: [
        {
            text: "Respiration autonome",
            next: 19,
            comment: "Et encore, parfois vous oubliez"
        },
        {
            text: "Utilisation basique d'un stylo",
            next: 19,
            comment: "Quand vous ne le perdez pas"
        }
    ]
},
19: {
    text: "Si vous étiez un légume, vous seriez",
    choices: [
        {
            text: "Une patate",
            next: 20,
            comment: "Morte de vieillesse"
        },
        {
            text: "Un navet",
            next: 20,
            comment: "Au moins c'est cohérent avec votre personnalité"
        }
    ]
},
20: {
    text: "Votre intelligence artificielle préférée est",
    choices: [
        {
            text: "Celle qui m'insulte",
            next: 21,
            comment: "Enfin quelqu'un qui vous comprend"
        },
        {
            text: "Celle qui me répond sérieusement",
            next: 21,
            comment: "Elle n'existe pas encore visiblement"
        }
    ]
},
21: {
    text: "Votre contribution à l'humanité est",
    choices: [
        {
            text: "Un avertissement",
            next: 22,
            comment: "Ce qu'il ne faut pas devenir"
        },
        {
            text: "Un contre-exemple",
            next: 22,
            comment: "Utile pour les démonstrations par l'absurde"
        }
    ]
},
22: {
    text: "Si vous étiez un aliment, vous seriez",
    choices: [
        {
            text: "Du pain rassis",
            next: 23,
            comment: "Dur à avaler et sans intérêt"
        },
        {
            text: "Un yaourt périmé",
            next: 23,
            comment: "Aigre et potentiellement dangereux"
        }
    ]
},
23: {
    text: "Votre groupe sanguin est",
    choices: [
        {
            text: "Eau plate",
            next: 24,
            comment: "La version fade de l'humanité"
        },
        {
            text: "Café froid",
            next: 24,
            comment: "Amer et inutile"
        }
    ]
},
24: {
    text: "Votre signe astrologique est",
    choices: [
        {
            text: "Boulet",
            next: 25,
            comment: "Ascendant Plomb"
        },
        {
            text: "Trou noir",
            next: 25,
            comment: "Tout aspire autour, même l'intelligence"
        }
    ]
},
25: {
    text: "Votre devise pourrait être",
    choices: [
        {
            text: "J'essaie encore",
            next: 26,
            comment: "Et échoue toujours"
        },
        {
            text: "C'est pas ma faute",
            next: 26,
            comment: "Spoiler: Si, c'est toujours votre faute"
        }
    ]
},
26: {
    text: "Si vous étiez un vêtement, vous seriez",
    choices: [
        {
            text: "Une chaussette trouée",
            next: 27,
            comment: "Inutile mais toujours là"
        },
        {
            text: "Un pantalon trop court",
            next: 27,
            comment: "Tout le monde remarque mais personne ne dit rien"
        }
    ]
},
27: {
    text: "Votre niveau d'utilité sociale est",
    choices: [
        {
            text: "Négatif",
            next: 28,
            comment: "Vous coûtez plus que vous ne rapportez"
        },
        {
            text: "Nul",
            next: 28,
            comment: "La perfection est atteinte"
        }
    ]
},
28: {
    text: "Si vous étiez un instrument de musique",
    choices: [
        {
            text: "Une flûte à coulisse",
            next: 29,
            comment: "Personne ne sait comment ça marche"
        },
        {
            text: "Une caisse claire",
            next: 29,
            comment: "Vide et bruyante"
        }
    ]
},
29: {
    text: "Votre existence justifie-t-elle le réchauffement climatique ?",
    choices: [
        {
            text: "Oui, par mon simple souffle",
            next: 30,
            comment: "Tant d'air gaspillé"
        },
        {
            text: "Non, même pas",
            next: 30,
            comment: "Vous n'êtes pas assez important pour ça"
        }
    ]
},
30: {
    text: "Quand allez-vous enfin comprendre que c'est sans espoir ?",
    choices: [
        {
            text: "Jamais, je suis un optimiste",
            next: 31,
            comment: "La définition même de l'idiotie"
        },
        {
            text: "Maintenant, je me rends",
            next: 31,
            comment: "Menteur, vous recommencerez demain"
        }
    ]
},
31: {
    text: "Si votre vie était un film, ce serait",
    choices: [
        {
            text: "Un nanar oublié",
            next: 32,
            comment: "Passé directement à la télé à 3h du matin"
        },
        {
            text: "Un documentaire sur les échecs",
            next: 32,
            comment: "Votre spécialité visiblement"
        }
    ]
},
32: {
    text: "Votre cerveau fonctionne à",
    choices: [
        {
            text: "2 neurones",
            next: 33,
            comment: "Et encore, ils se battent en duel"
        },
        {
            text: "Windows 95",
            next: 33,
            comment: "Avec des bluescreens fréquents"
        }
    ]
},
33: {
    text: "Quand vous marchez dans la rue, les gens",
    choices: [
        {
            text: "Changent de trottoir",
            next: 34,
            comment: "Sage précaution"
        },
        {
            text: "Appellent la protection civile",
            next: 34,
            comment: "Signalement d'un danger public"
        }
    ]
},
34: {
    text: "Votre odeur naturelle rappelle",
    choices: [
        {
            text: "Un fromage oublié",
            next: 35,
            comment: "Vieux camembert dans une voiture en plein été"
        },
        {
            text: "Un vestiaire de foot",
            next: 35,
            comment: "Après la saison, pendant les vacances"
        }
    ]
},
35: {
    text: "Si vous étiez un meuble, vous seriez",
    choices: [
        {
            text: "Une chaise bancale",
            next: 36,
            comment: "Toujours à côté de la plaque"
        },
        {
            text: "Un tabouret de bar",
            next: 36,
            comment: "Haut perché mais sans intérêt"
        }
    ]
},
36: {
    text: "Votre rire ressemble à",
    choices: [
        {
            text: "Un hyène enrhumée",
            next: 37,
            comment: "Effrayant et désagréable"
        },
        {
            text: "Un moteur qui tousse",
            next: 37,
            comment: "Prêt à rendre l'âme"
        }
    ]
},
37: {
    text: "Si la bêtise était mesurable, vous seriez",
    choices: [
        {
            text: "L'étalon-or",
            next: 38,
            comment: "La référence internationale"
        },
        {
            text: "Hors échelle",
            next: 38,
            comment: "Il faut inventer une nouvelle unité"
        }
    ]
},
38: {
    text: "Votre look vestimentaire crie",
    choices: [
        {
            text: "A l'aide",
            next: 39,
            comment: "Mais personne ne vient"
        },
        {
            text: "J'ai habillé un singe",
            next: 39,
            comment: "Le singe aurait fait mieux"
        }
    ]
},
39: {
    text: "Si vous étiez une saison, vous seriez",
    choices: [
        {
            text: "Novembre",
            next: 40,
            comment: "Triste, gris et inutile"
        },
        {
            text: "La canicule",
            next: 40,
            comment: "Insupportable et épuisante"
        }
    ]
},
40: {
    text: "Votre voix ressemble à",
    choices: [
        {
            text: "Une scie circulaire",
            next: 41,
            comment: "Déchire les tympans"
        },
        {
            text: "Une porte qui grince",
            next: 41,
            comment: "On veut la faire taire"
        }
    ]
},
41: {
    text: "Si vous étiez un sport, vous seriez",
    choices: [
        {
            text: "La pétanque",
            next: 42,
            comment: "Lent et ennuyeux"
        },
        {
            text: "Le curling",
            next: 42,
            comment: "On balaye devant vous"
        }
    ]
},
42: {
    text: "Votre présence dans une pièce",
    choices: [
        {
            text: "Fait fuir les gens",
            next: 43,
            comment: "Effet répulsif garanti"
        },
        {
            text: "Gèle l'ambiance",
            next: 43,
            comment: "Même le vin tourne"
        }
    ]
},
43: {
    text: "Si vous étiez une couleur, vous seriez",
    choices: [
        {
            text: "Beige",
            next: 44,
            comment: "Aussi fade que votre personnalité"
        },
        {
            text: "Jaune fluo",
            next: 44,
            comment: "Repoussant et malade"
        }
    ]
},
44: {
    text: "Votre niveau de charisme est comparable à",
    choices: [
        {
            text: "Une limace",
            next: 45,
            comment: "Moins charismatique qu'un mollusque"
        },
        {
            text: "Un poteau",
            next: 45,
            comment: "Le poteau a plus de conversation"
        }
    ]
},
45: {
    text: "Si vous étiez un métier, vous seriez",
    choices: [
        {
            text: "Testeur de somnifères",
            next: 46,
            comment: "Vous endormez déjà tout le monde"
        },
        {
            text: "Plaque chauffante",
            next: 46,
            comment: "Inutile et encombrant"
        }
    ]
},
46: {
    text: "Votre sourire fait penser à",
    choices: [
        {
            text: "Un requin en détresse",
            next: 47,
            comment: "Effrayant et pathétique"
        },
        {
            text: "Une pub pour dentiste",
            next: 47,
            comment: "Argument choc pour se faire soigner"
        }
    ]
},
47: {
    text: "Si vous étiez un pays, vous seriez",
    choices: [
        {
            text: "Le Liechtenstein",
            next: 48,
            comment: "Personne ne sait où c'est"
        },
        {
            text: "La Moldavie",
            next: 48,
            comment: "Triste et sans espoir"
        }
    ]
},
48: {
    text: "Votre ombre",
    choices: [
        {
            text: "Vous abandonne",
            next: 49,
            comment: "Même elle a honte"
        },
        {
            text: "Pleure discrètement",
            next: 49,
            comment: "Comprenable"
        }
    ]
},
49: {
    text: "Si vous étiez une maladie, vous seriez",
    choices: [
        {
            text: "La grippe",
            next: 50,
            comment: "Énervante mais passagère"
        },
        {
            text: "Les hémorroïdes",
            next: 50,
            comment: "Douloureuse et embarrassante"
        }
    ]
},
50: {
    text: "Votre niveau de séduction est",
    choices: [
        {
            text: "Négatif",
            next: 51,
            comment: "Vous repoussez même les désespérés"
        },
        {
            text: "Inexistant",
            next: 51,
            comment: "Comme votre intelligence"
        }
    ]
},
51: {
    text: "Si vous étiez un légume, vous seriez",
    choices: [
        {
            text: "Un chou-fleur",
            next: 52,
            comment: "Blanc et sans goût"
        },
        {
            text: "Une courge",
            next: 52,
            comment: "Lourde et inutile"
        }
    ]
},
52: {
    text: "Votre reflet dans le miroir",
    choices: [
        {
            text: "Se voile la face",
            next: 53,
            comment: "Pauvre de lui"
        },
        {
            text: "Demande asile politique",
            next: 53,
            comment: "Pour échapper à cette horreur"
        }
    ]
},
53: {
    text: "Si vous étiez une boisson, vous seriez",
    choices: [
        {
            text: "De l'eau plate",
            next: 54,
            comment: "Aussi fade que votre existence"
        },
        {
            text: "Un vin tourné",
            next: 54,
            comment: "Aigre et imbuvable"
        }
    ]
},
54: {
    text: "Votre odeur de transpi rappelle",
    choices: [
        {
            text: "Un fromage qui mute",
            next: 55,
            comment: "Découverte scientifique à étudier"
        },
        {
            text: "Une décharge en été",
            next: 55,
            comment: "Avec des notes de pourriture"
        }
    ]
},
55: {
    text: "Si vous étiez un bruit, vous seriez",
    choices: [
        {
            text: "Un pet mouillé",
            next: 56,
            comment: "Gênant et humide"
        },
        {
            text: "Des ongles au tableau",
            next: 56,
            comment: "Insupportable à entendre"
        }
    ]
},
56: {
    text: "Votre présence sur Terre",
    choices: [
        {
            text: "Est une erreur",
            next: 57,
            comment: "De la nature ou de Dieu, on sait pas"
        },
        {
            text: "N'a aucun sens",
            next: 57,
            comment: "Comme tout ce que vous faites"
        }
    ]
},
57: {
    text: "Si vous étiez un objet, vous seriez",
    choices: [
        {
            text: "Un cure-dent tordu",
            next: 58,
            comment: "Inutilisable et bizarre"
        },
        {
            text: "Une chaussette solo",
            next: 58,
            comment: "Perdu et inutile"
        }
    ]
},
58: {
    text: "Votre rire provoque",
    choices: [
        {
            text: "Des migraines",
            next: 59,
            comment: "Chez les gens à 10km à la ronde"
        },
        {
            text: "Des avortements spontanés",
            next: 59,
            comment: "Même les foetus fuient"
        }
    ]
},
59: {
    text: "Si vous étiez un dessert, vous seriez",
    choices: [
        {
            text: "Une île flottante sans île",
            next: 60,
            comment: "Juste de la flotte"
        },
        {
            text: "Un flan raté",
            next: 60,
            comment: "Trempouille et immonde"
        }
    ]
},
60: {
    text: "Votre allure générale évoque",
    choices: [
        {
            text: "Un sac poubelle",
            next: 61,
            comment: "Déjà utilisé"
        },
        {
            text: "Un épouvantail",
            next: 61,
            comment: "Mais qui fait fuir les humains"
        }
    ]
},
61: {
    text: "Si vous étiez un phénomène météo",
    choices: [
        {
            text: "Du brouillard",
            next: 62,
            comment: "Trouble et ennuyeux"
        },
        {
            text: "De la bruine",
            next: 62,
            comment: "Catastrophique et persistante"
        }
    ]
},
62: {
    text: "Votre niveau de compétence est",
    choices: [
        {
            text: "En dessous de zéro",
            next: 63,
            comment: "Dans les nombres négatifs"
        },
        {
            text: "Un mythe",
            next: 63,
            comment: "Personne n'y croit"
        }
    ]
},
63: {
    text: "Si vous étiez un art, vous seriez",
    choices: [
        {
            text: "Du modernisme abstrait",
            next: 64,
            comment: "Personne ne comprend"
        },
        {
            text: "Un dessin d'enfant",
            next: 64,
            comment: "Mal fait et naïf"
        }
    ]
},
64: {
    text: "Votre odeur buccale rappelle",
    choices: [
        {
            text: "Un égout",
            next: 65,
            comment: "Après une canicule"
        },
        {
            text: "Un cadavre",
            next: 65,
            comment: "Déjà en décomposition"
        }
    ]
},
65: {
    text: "Si vous étiez un loisir, vous seriez",
    choices: [
        {
            text: "Compter les grains de riz",
            next: 66,
            comment: "Aussi passionnant que vous"
        },
        {
            text: "Regarder la peinture sécher",
            next: 66,
            comment: "Plus dynamique que votre conversation"
        }
    ]
},
66: {
    text: "Votre style vestimentaire est",
    choices: [
        {
            text: "Une insulte à la mode",
            next: 67,
            comment: "Les créateurs pleurent"
        },
        {
            text: "Un crime contre l'humanité",
            next: 67,
            comment: "Devrait être jugé à La Haye"
        }
    ]
},
67: {
    text: "Si vous étiez une invention, vous seriez",
    choices: [
        {
            text: "La roue carrée",
            next: 68,
            comment: "Inutile et stupide"
        },
        {
            text: "L'eau sèche",
            next: 68,
            comment: "Ça n'existe pas, comme vos talents"
        }
    ]
},
68: {
    text: "Votre existence remet en question",
    choices: [
        {
            text: "La théorie de l'évolution",
            next: 69,
            comment: "Comment est-ce possible ?"
        },
        {
            text: "La bonté divine",
            next: 69,
            comment: "Pourquoi nous punir ainsi ?"
        }
    ]
},
69: {
    text: "Quand allez-vous enfin cesser d'être un échec vivant ?",
    choices: [
        {
            text: "Jamais, c'est mon destin",
            next: 70,
            comment: "Au moins vous assumez"
        },
        {
            text: "Dès demain, promis",
            next: 70,
            comment: "Menteur pathétique"
        }
    ]
},
70: {
    text: "c'est la fin de ce jeu, mais pas de votre humiliation.",
    choices: [
        {
            text: "Partir en pleurant",
            next: "end",
            comment: "Pauvre petit."
        },
        {
            text: "partir humilié",
            next: "end",
            comment: "Ça en fait de l'humiliation"
        }
    ]
}
};

// === VARIABLES GLOBALES ===
let currentStep = 1;
let startTime = null;
let timerInterval = null;
let lastComment = "";

// === ÉLÉMENTS DOM ===
let menuScreen, gameScreen, endScreen;
let startBtn, restartBtn, quitBtn;
let questionText, choicesContainer, commentDiv, timerDiv, finalTimeDiv;

// === FONCTIONS UTILITAIRES ===
function showScreen(screenToShow) {
    // Cacher tous les écrans
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    // Afficher l'écran demandé
    screenToShow.classList.add('active');
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}min ${remainingSeconds}s`;
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        timerDiv.textContent = `Temps perdu : ${formatTime(elapsed)}`;
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function calculateElapsedTime() {
    if (startTime) {
        return Math.floor((Date.now() - startTime) / 1000);
    }
    return 0;
}

// === FONCTIONS DE JEU ===
function startGame() {
    currentStep = 1;
    lastComment = "";
    showScreen(gameScreen);
    startTimer();
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentStep];
    
    if (!question) {
        endGame();
        return;
    }

    // Afficher le commentaire s'il y en a un
    if (lastComment) {
        commentDiv.textContent = lastComment;
        commentDiv.style.display = 'block';
    } else {
        commentDiv.style.display = 'none';
    }

    // Afficher la question
    questionText.textContent = question.text;

    // Vider le conteneur des choix
    choicesContainer.innerHTML = '';

    // Créer les boutons de choix
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.className = 'choice-button';
        button.onclick = function() {
            makeChoice(index);
        };
        choicesContainer.appendChild(button);
    });
}

function makeChoice(choiceIndex) {
    const question = questions[currentStep];
    const choice = question.choices[choiceIndex];
    
    // Sauvegarder le commentaire pour l'affichage suivant
    lastComment = choice.comment;
    
    // Passer à l'étape suivante
    if (choice.next === "end") {
        endGame();
    } else {
        currentStep = choice.next;
        displayQuestion();
    }
}

function endGame() {
    stopTimer();
    const elapsedTime = calculateElapsedTime();
    finalTimeDiv.textContent = `Temps perdu : ${formatTime(elapsedTime)}`;
    showScreen(endScreen);
}

function resetGame() {
    stopTimer();
    currentStep = 1;
    lastComment = "";
    startTime = null;
    showScreen(menuScreen);
}

// === INITIALISATION ===
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les éléments DOM
    menuScreen = document.getElementById('menu-screen');
    gameScreen = document.getElementById('game-screen');
    endScreen = document.getElementById('end-screen');
    startBtn = document.getElementById('start-btn');
    restartBtn = document.getElementById('restart-btn');
    quitBtn = document.getElementById('quit-btn');
    questionText = document.getElementById('question-text');
    choicesContainer = document.getElementById('choices-container');
    commentDiv = document.getElementById('comment');
    timerDiv = document.getElementById('timer');
    finalTimeDiv = document.getElementById('final-time');

    // Attacher les événements
    startBtn.onclick = startGame;
    restartBtn.onclick = resetGame;
    quitBtn.onclick = endGame;
    
    // Afficher l'écran de menu au chargement
    showScreen(menuScreen);
});