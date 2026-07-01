// ══════════════════════════════════════════════════════════════
// CONFIG SST — LISTES PARTAGÉES
// Chantiers actifs et inspecteurs SST
// ══════════════════════════════════════════════════════════════

const CHANTIERS_THERRIEN = [
  "26022 Honda Donnacona",
  "26015 École Maria Goretti — phase 3-4",
  "26008 Diverses écoles — remplacement climatisation",
  "26003 MecXcel",
  "25059 Quartier général",
  "25056 Captel",
  "25053 Tim Horton St-Grégoire",
  "25052 Moulins ancestral",
  "25046 Némaska TG004",
  "25045 Moeve",
  "24059 Résidence Inn",
  "24057 Salle JA Thompson",
  "24038 École Notre-Dame"
];

const INSPECTEURS_THERRIEN = [
  "Alex Courchesne",
  "Alexandre Bonin",
  "Carl Courchesne",
  "Charles Fontaine",
  "Charles Girard",
  "Daniel Courchesne",
  "Daniel Lévesque",
  "Daniel Neault",
  "Dany Biron",
  "David Paradis",
  "Erick Lysight",
  "François Gauthier",
  "Jimmy Dumont",
  "Julie Landry",
  "Manon Perreault",
  "Marc Ricard",
  "Marc Tardif",
  "Marc-Alexandre Neault",
  "Martin Dargis",
  "Normand Jr. Lamirande",
  "Sedena Ongbwa",
  "William Gélinas Sylvestre",
  "Yves Mailhot",
  "Autre"
];

// Abréviations par chantier — utilisées uniquement par l'app Accueil SST
// pour la numérotation serveur (ex: HONDA-101, ÉMG-102...)
// Les apps Inspection SST et Pause SST ignorent cette variable.
const ABREVIATIONS_CHANTIERS = {
  "26022 Honda Donnacona":                          "HONDA",
  "26015 École Maria Goretti — phase 3-4":          "ÉMG",
  "26008 Diverses écoles — remplacement climatisation": "DECLIM",
  "26003 MecXcel":                                  "MecX",
  "25059 Quartier général":                         "QG",
  "25056 Captel":                                   "CAPTEL",
  "25053 Tim Horton St-Grégoire":                   "TH",
  "25052 Moulins ancestral":                        "MOULINS",
  "25046 Némaska TG004":                            "TG004",
  "25045 Moeve":                                    "MOEVE",
  "24059 Résidence Inn":                            "INN",
  "24057 Salle JA Thompson":                        "JAT",
  "24038 École Notre-Dame":                         "END"
};
