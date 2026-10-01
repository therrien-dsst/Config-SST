// ══════════════════════════════════════════════════════════════
// CONFIG SST — LISTES PARTAGÉES
// Chantiers actifs et inspecteurs SST
// ══════════════════════════════════════════════════════════════

const CHANTIERS_THERRIEN = [
  "26030 Ecole primaire Nicolet",
  "26025 Tennis 3R",
  "26022 Honda Donnacona",
  "26003 MecXcel",
  "25059 Quartier général",
  "25056 Captel",
  "25052 Moulins ancestral",
  "25046 Némaska TG004",
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
  "Marc Fournier",
  "Marc Ricard",
  "Marc Tardif",
  "Marc-Alexandre Neault",
  "Martin Dargis",
  "Normand Jr. Lamirande",
  "Pamela Loranger",
  "Sedena Ongbwa",
  "William Gélinas Sylvestre",
  "Autre"
];

// Abréviations par chantier — utilisées uniquement par l'app Accueil SST
// pour la numérotation serveur (ex: HONDA-101, ÉMG-102...)
// Les apps Inspection SST et Pause SST ignorent cette variable.
const ABREVIATIONS_CHANTIERS = {
  "26030 Ecole primaire Nicolet":    "ECOLENIC",
  "26025 Tennis 3R":                 "TENNIS",
  "26022 Honda Donnacona":           "HONDA",
  "26003 MecXcel":                   "MecX",
  "25059 Quartier général":          "QG",
  "25056 Captel":                    "CAPTEL",
  "25052 Moulins ancestral":         "MOULINS",
  "25046 Némaska TG004":             "TG004",
  "24059 Résidence Inn":             "INN",
  "24057 Salle JA Thompson":         "JAT",
  "24038 École Notre-Dame":          "END"
};
