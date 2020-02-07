document.addEventListener("DOMContentLoaded", function() {
  selectCamera();
});
// Constants
const SPECIALTIES = [
  "Multi",
  "Arthro 1",
  "Arthro 2",
  "Arthro 4_16",
  "Lap 1",
  "Lap 2",
  "Lap STORZ",
  "Cysto",
  "Hysteroscopy",
  "Flexiscope",
  "ENT",
  "Laser",
  "Microscope",
  "Standard",
  "Vein Harvest",
  "Olympus GI"
];
const SIXTEENSPECIALTIES = [
  "Lap 1",
  "Lap 2",
  "Lap Storz",
  "Arthro 1",
  "Arthro 2",
  "ENT 1",
  "ENT 2",
  "ENT 3",
  "Flexiscope",
  "Cysto",
  "Laser",
  "Hysto",
  "Microscope",
  "Olympus GI",
  "Vien Harvest"
];

let ccuSettings;
let ccuSettingsUpCase;
// CCU Params
const CCUPARAMETERS = [
  "Enhancement",
  "Contrast",
  "R-Gain",
  "R-Hue",
  "B-Gain",
  "B-Hue",
  "Shutter",
  "Brt Control",
  "Size",
  "Brightness Peak",
  "Target Area",
  "Brt Lvl"
];

const SIXTEENPARAMETERS = [
  "Shutter Mode",
  "Shutter Level",
  "Area",
  "Speed",
  "Photometry Mode",
  "Photometry Peak/Avg",
  "S Gamma",
  "BG Gamma",
  "MPED",
  "BG Point",
  "R Knee Slope",
  "R knee Point",
  "Enhance",
  "Chroma",
  "B Gain",
  "B Hue",
  "R Gain",
  "R Hue",
  "ENV Gain Mode",
  "ENV Manual Gain",
  "ENV Level",
  "ENV BG Offset",
  "ENV Gamma",
  "ENV Max Gain"
];

// Sixteen CCU Settings
const SIXTEENSETTINGS = {
  LAP1FOURK1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-10",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
  LAP2FOURK1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-10",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
  LAPSTORZFOURK1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "12",
    "0",
    "0",
    "-10",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
  ENT1FOURK1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-5",
    "-3",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
  ENT2FOURK1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-7",
    "1",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
  ENT3FOURK1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "5",
    "0",
    "0",
    "-5",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
  FLEXSCOPEFOURK1688: [
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings"
  ],
  CYSTOFOURK1688: [
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings"
  ],
  ARTHRO1FOURK1688: [
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings"
  ],
  ARTHRO2FOURK1688: [
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD"
  ],
  FLEXISCOPEFOURK1688: [
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings"
  ],
  LASERFOURK1688: [
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings"
  ],
  HYSTOFOURK1688: [
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings"
  ],
  MICROSCOPEFOURK1688: [
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings"
  ],
  OLYMPUSGIFOURK1688: [
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings"
  ],
  VIENHARVESTFOURK1688: [
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings",
    "Default Settings"
  ],
  LAP1VISIONPRO1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-10",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
  LAP2VISIONPRO1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-10",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
  LAPSTORZVISIONPRO1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "12",
    "0",
    "0",
    "-10",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
  ENT1ISIONPRO1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-15",
    "-3",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
  ENT1VISIONPRO1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-15",
    "-3",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
  ENT2VISIONPRO1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-7",
    "1",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
  ENT3VISIONPRO1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "5",
    "0",
    "0",
    "-5",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0"
  ]
};
// CCU Settings
const CAMERASETTINGS = {
  MULTIVISIONPRO1588: [
    "26",
    "Normal",
    "-12",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "17"
  ],
  ARTHRO1VISIONPRO1588: [
    "26",
    "Normal",
    "0",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "5",
    "1",
    "17"
  ],
  ARTHRO2VISIONPRO1588: [
    "26",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "5",
    "1",
    "19"
  ],
  ARTHRO4_16VISIONPRO1588: [
    "27",
    "No Data",
    "7",
    "-4",
    "3",
    "-2",
    "Light 6 Bars",
    "Auto",
    "1",
    "5",
    "1",
    "26"
  ],
  LAP1VISIONPRO1588: [
    "30",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP2VISIONPRO1588: [
    "42",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "0",
    "1",
    "26"
  ],
  LAPSTORZVISIONPRO1588: [
    "26",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19"
  ],
  CYSTOVISIONPRO1588: [
    "26",
    "Normal",
    "-12",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19"
  ],
  HYSTEROSCOPYVISIONPRO1588: [
    "32",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  FLEXISCOPEVISIONPRO1588: [
    "27",
    "Normal",
    "7",
    "-4",
    "3",
    "-2",
    "On",
    "Auto",
    "1",
    "6",
    "1",
    "10"
  ],
  ENTVISIONPRO1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26"
  ],
  LASERVISIONPRO1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26"
  ],
  MICROSCOPEVISIONPRO1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26"
  ],
  STANDARDVISIONPRO1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26"
  ],
  VEINHARVESTVISIONPRO1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  OLYMPUSGIVISIONPRO1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  MULTIVISIONELECT1588: [
    "26",
    "Normal",
    "-12",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "17"
  ],
  ARTHRO1VISIONELECT1588: [
    "26",
    "Normal",
    "0",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "5",
    "1",
    "17"
  ],
  ARTHRO2VISIONELECT1588: [
    "26",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19"
  ],
  ARTHRO4_16VISIONELECT1588: [
    "27",
    "No Data",
    "7",
    "-4",
    "3",
    "-2",
    "Light 6 Bars",
    "Auto",
    "1",
    "5",
    "1",
    "26"
  ],
  LAP1VISIONELECT1588: [
    "30",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP2VISIONELECT1588: [
    "42",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "0",
    "1",
    "26"
  ],
  LAPSTORZVISIONELECT1588: [
    "26",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19"
  ],
  CYSTOVISIONELECT1588: [
    "26",
    "Normal",
    "-12",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19"
  ],
  HYSTEROSCOPYVISIONELECT1588: [
    "32",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  FLEXISCOPEVISIONELECT1588: [
    "27",
    "Normal",
    "7",
    "-4",
    "3",
    "-2",
    "On",
    "Auto",
    "1",
    "6",
    "1",
    "10"
  ],
  ENTVISIONELECT1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26"
  ],
  LASERVISIONELECT1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26"
  ],
  MICROSCOPEVISIONELECT1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26"
  ],
  STANDARDVISIONELECT1588: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  VEINHARVESTVISIONELECT1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  OLYMPUSGIVISIONELECT1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],

  MULTIHDTVWISE1588: [
    "26",
    "Normal",
    "-12",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "17"
  ],
  ARTHRO1HDTVWISE1588: [
    "26",
    "Normal",
    "0",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "5",
    "1",
    "17"
  ],
  ARTHRO2HDTVWISE1588: [
    "26",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19"
  ],
  ARTHRO4_16HDTVWISE1588: [
    "27",
    "No Data",
    "7",
    "-4",
    "3",
    "-2",
    "Light 6 bars",
    "L10 20% Auto",
    "1",
    "5",
    "1",
    "26"
  ],
  LAP1HDTVWISE1588: [
    "30",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP2HDTVWISE1588: [
    "42",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "0",
    "1",
    "26"
  ],
  LAPSTORZHDTVWISE1588: [
    "26",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19"
  ],
  CYSTOHDTVWISE1588: [
    "26",
    "Normal",
    "-12",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19"
  ],
  HYSTEROSCOPYHDTVWISE1588: [
    "30",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  FLEXISCOPEHDTVWISE1588: [
    "27",
    "Normal",
    "7",
    "-4",
    "3",
    "-2",
    "On",
    "Auto",
    "1",
    "6",
    "1",
    "10"
  ],
  ENTHDTVWISE1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26"
  ],
  LASERHDTVWISE1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26"
  ],
  MICROSCOPEHDTVWISE1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26"
  ],
  STANDARDHDTVWISE1588: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  VEINHARVESTHDTVWISE1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  MULTIVISIONPROPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  ARTHRO1VISIONPROPRECISIONAC: [
    "26",
    "Normal",
    "0",
    "-12",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "19"
  ],
  ARTHRO2VISIONPROPRECISIONAC: [
    "26",
    "Normal",
    "0",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "5",
    "1",
    "17"
  ],
  ARTHRO4_16VISIONPROPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  LAP1VISIONPROPRECISIONAC: [
    "26",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "19"
  ],
  LAP2VISIONPROPRECISIONAC: [
    "26",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "0",
    "4",
    "1",
    "19"
  ],
  LAPSTORZVISIONPROPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  CYSTOVISIONPROPRECISIONAC: [
    "26",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "19"
  ],
  HYSTEROSCOPYVISIONPROPRECISIONAC: [
    "26",
    "Normal",
    "-12",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19"
  ],
  FLEXISCOPEVISIONPROPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19"
  ],
  ENTVISIONPROPRECISIONAC: [
    "32",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "2",
    "19"
  ],
  LASERVISIONPROPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19"
  ],
  MICROSCOPEVISIONPROPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19"
  ],
  STANDARDVISIONPROPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19"
  ],
  VEINHARVESTVISIONPROPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19"
  ],
  OLYMPUSGIVISIONPROPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19"
  ],
  MULTIHDTVWISEPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  ARTHRO1HDTVWISEPRECISIONAC: [
    "26",
    "Normal",
    "0",
    "-12",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19"
  ],
  ARTHRO2HDTVWISEPRECISIONAC: [
    "26",
    "Normal",
    "0",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "5",
    "1",
    "17"
  ],
  ARTHRO4_16HDTVWISEPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  LAP1HDTVWISEPRECISIONAC: [
    "26",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "19"
  ],
  LAP2HDTVWISEPRECISIONAC: [
    "26",
    "Normal",
    "No Data",
    "No data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "1",
    "4",
    "1",
    "19"
  ],
  LAPSTORZHDTVWISEPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  CYSTOHDTVWISEPRECISIONAC: [
    "26",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "19"
  ],
  HYSTEROSCOPYHDTVWISEPRECISIONAC: [
    "26",
    "Normal",
    "-12",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19"
  ],
  FLEXISCOPEHDTVWISEPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19"
  ],
  ENTHDTVWISEPRECISIONAC: [
    "32",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "2",
    "19"
  ],
  LASERHDTVWISEPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19"
  ],
  MICROSCOPEHDTVWISEPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19"
  ],
  STANDARDHDTVWISEPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19"
  ],
  VEINHARVESTHDTVWISEPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19"
  ],
  OLYMPUSGIHDTVWISEPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  MULTIVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO1VISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO2VISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO4_16VISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP1VISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP2VISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAPSTORZVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  CYSTOVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  HYSTEROSCOPYVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  FLEXISCOPEVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ENTVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LASERVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  MICROSCOPEVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  STANDARDVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  VEINHARVESTVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  OLYMPUSGIVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  MULTIHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO1HDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO2HDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO4_16HDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP1HDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP2HDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAPSTORZHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  CYSTOHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  HYSTEROSCOPYHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  FLEXISCOPEHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ENTHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LASERHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  MICROSCOPEHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  STANDARDHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  VEINHARVESTHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  OLYMPUSGIHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  MULTIHDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO1HDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO2HDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO4_16HDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP1HDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP2HDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAPSTORZHDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  CYSTOHDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  HYSTEROSCOPYHDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  FLEXISCOPEHDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ENTHDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LASERHDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  MICROSCOPEHDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  STANDARDHDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  VEINHARVESTHDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  OLYMPUSGIHDTVWISE1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  MULTIVISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO1VISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO2VISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO4_16VISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP1VISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP2VISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAPSTORZVISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  CYSTOVISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  HYSTEROSCOPYVISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  FLEXISCOPEVISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ENTVISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LASERVISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  MICROSCOPEVISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  STANDARDVISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  VEINHARVESTVISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  OLYMPUSGIVISIONPRO1288: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  MULTIVISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO1VISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO2VISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO4_16VISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP1VISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP2VISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAPSTORZVISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  CYSTOVISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  HYSTEROSCOPYVISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  FLEXISCOPEVISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ENTVISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LASERVISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  MICROSCOPEVISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  STANDARDVISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  VEINHARVESTVISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  OLYMPUSGIVISIONPRO1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  MULTIHDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO1HDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO2HDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ARTHRO4_16HDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP1HDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAP2HDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LAPSTORZHDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  CYSTOHDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  HYSTEROSCOPYHDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  FLEXISCOPEHDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  ENTHDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  LASERHDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  MICROSCOPEHDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  STANDARDHDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  VEINHARVESTHDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  OLYMPUSGIHDTVWISE1188: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  MULTIFOURK1588: [
    "26",
    "Normal",
    "-12",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "17"
  ],
  ARTHRO1FOURK1588: [
    "26",
    "Normal",
    "0",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "5",
    "1",
    "17"
  ],
  ARTHRO2FOURK1588: [
    "26",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19"
  ],
  ARTHRO4_16FOURK1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  LAP1FOURK1588: [
    "30",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "Auto",
    "Auto",
    "1",
    "3",
    "3",
    "23"
  ],
  LAP2FOURK1588: [
    "42",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "Auto",
    "Auto",
    "1",
    "0",
    "1",
    "26"
  ],
  LAPSTORZFOURK1588: [
    "26",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19"
  ],
  CYSTOFOURK1588: [
    "26",
    "Normal",
    "-12",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19"
  ],
  HYSTEROSCOPYFOURK1588: [
    "32",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  FLEXISCOPEFOURK1588: [
    "27",
    "Normal",
    "7",
    "-4",
    "3",
    "-2",
    "On",
    "Auto",
    "1",
    "6",
    "1",
    "10"
  ],

  ENTFOURK1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26"
  ],
  LASERFOURK1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26"
  ],
  MICROSCOPEFOURK1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26"
  ],
  STANDARDFOURK1588: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23"
  ],
  VEINHARVESTFOURK1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  OLYMPUSGIFOURK1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ]
};

// put them in monitorParams

const MONITORPARAMS = [
  "Red",
  "Green",
  "Blue",
  "Gamma",
  "Brightness",
  "Contrast",
  "Sharpness"
];

const FOURKPARAMS = [
  "Red",
  "Green",
  "Blue",
  "Gamma",
  "Enhancement",
  "Brightness",
  "Contrast",
  "Sharpness"
];
// Monitor Settings
const MONITORSETTINGS = {
  VISIONPROMULTI1588: ["-20", "-20", "10", "S2", "45", "60", "No Data"],
  VISIONPROARTHRO11588: ["-10", "-10", "5", "S2", "45", "60", "No Data"],
  VISIONPROARTHRO21588: ["-35", "5", "5", "S2", "45", "50", "No Data"],
  VISIONPROARTHRO4_161588: ["-35", "-10", "5", "S1.5", "47", "58", "No Data"],
  VISIONPROLAP11588: ["-25", "-5", "5", "1.9", "45", "45", "No Data"],
  VISIONPROLAP21588: ["-35", "5", "5", "1.5", "45", "45", "No Data"],
  VISIONPROLAPSTORZ1588: ["-35", "5", "5", "S2", "45", "60", "No Data"],
  VISIONPROCYSTO1588: ["-40", "10", "5", "S2", "45", "60", "No Data"],
  VISIONPROHYSTEROSCOPY1588: ["-25", "-25", "2", "S2", "45", "50", "No Data"],
  VISIONPROFLEXISCOPE1588: ["-50", "-30", "5", "S0", "47", "58", "No Data"],
  VISIONPROENT1588: ["-30", "10", "5", "S2", "45", "60", "No Data"],
  VISIONPROLASER1588: ["-30", "10", "5", "S3", "45", "60", "No Data"],
  VISIONPROMICROSCOPE1588: ["-7", "5", "-10", "S0", "45", "55", "No Data"],
  VISIONPROSTANDARD1588: ["-50", "30", "10", "1.5", "47", "58", "No Data"],
  VISIONPROVEINHARVEST1588: ["70", "46", "28", "S0", "37", "41", "No Data"],
  VISIONPROOLYMPUSGI1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  // VISIONELECTMULTI1588: ["-25", "-25", "2", "S2", "45", "58", "No Data"],
  // VISIONELECTARTHRO11588: ["-27", "-2", "14", "S1", "50", "55", "No Data"],
  // VISIONELECTARTHRO21588: ["-35", "-3", "25", "S2", "55", "55", "No Data"],
  // VISIONELECTARTHRO4_161588: [
  //   "No Data",
  //   "No Data",
  //   "No Data",
  //   "No Data",
  //   "No Data",
  //   "No Data"
  // ],
  VISIONPROLAP11688: ["-35", "8", "7", "1.5", "45", "50", "5"],
  VISIONPROLAP21688: ["-15", "5", "5", "1.9", "45", "50", "5"],
  VISIONPROLAPSTORZ1688: ["-15", "5", "5", "1.9", "45", "50", "5"],
  VISIONPROENT11688: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"],
  VISIONPROENT21688: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"],
  VISIONPROENT31688: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"],
  // VISIONELECTLAP11588: ["-25", "5", "5", "2.2", "55", "55", "No Data"],
  // VISIONELECTLAP21588: ["-35", "-3", "25", "1.7", "55", "55", "No Data"],
  // VISIONELECTLAPSTORZ1588: ["-35", "-3", "25", "S2", "45", "58", "No Data"],
  // VISIONELECTCYSTO1588: ["8", "-25", "2", "S0", "45", "55", "No Data"],
  // VISIONELECTHYSTEROSCOPY1588: ["-25", "-25", "2", "S2", "45", "50", "No Data"],
  // VISIONELECTFLEXISCOPE1588: ["-50", "-30", "5", "S0", "47", "58", "No Data"],
  // VISIONELECTENT1588: ["-35", "-3", "25", "S1", "45", "55", "No Data"],
  // VISIONELECTLASER1588: ["-30", "-3", "25", "S1", "45", "55", "No Data"],
  // VISIONELECTMICROSCOPE1588: ["-30", "-15", "10", "S2", "45", "58", "No Data"],
  // VISIONELECTSTANDARD1588: ["-50", "30", "10", "1.5", "47", "58", "No Data"],
  // VISIONELECTVEINHARVEST1588: ["-36", "38", "0", "S2", "50", "46", "No Data"],

  HDTVWISEMULTI1588: ["-25", "-25", "2", "S2", "45", "58", "No Data"],
  HDTVWISEARTHRO11588: ["-27", "-2", "14", "S1", "50", "55", "No Data"],
  HDTVWISEARTHRO21588: ["-35", "-3", "25", "S2", "55", "55", "No Data"],
  HDTVWISEARTHRO4_161588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  HDTVWISELAP11588: ["-25", "5", "5", "2.2", "55", "55", "No Data"],
  HDTVWISELAP21588: ["-35", "-3", "25", "1.7", "55", "55", "No Data"],
  HDTVWISELAPSTORZ1588: ["-35", "-3", "25", "S2", "45", "58", "No Data"],
  HDTVWISECYSTO1588: ["8", "-25", "2", "S0", "45", "55", "No Data"],
  HDTVWISEHYSTEROSCOPY1588: ["-25", "-25", "2", "S2", "45", "50", "No Data"],
  HDTVWISEFLEXISCOPE1588: ["-50", "-30", "5", "S0", "47", "58", "No Data"],
  HDTVWISEENT1588: ["-35", "-3", "25", "S1", "45", "55", "No Data"],
  HDTVWISELASER1588: ["-35", "-3", "25", "S1", "55", "35", "No Data"],
  HDTVWISEMICROSCOPE1588: ["-30", "-15", "10", "S2", "45", "58", "No Data"],
  HDTVWISESTANDARD1588: ["-50", "30", "10", "1.5", "47", "58", "No Data"],
  HDTVWISEVEINHARVEST1588: ["-36", "-38", "0", "S2", "50", "46", "No Data"],
  HDTVWISEOLYMPUSGI1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  VISIONPROMULTIPRECISIONAC: ["-30", "-30", "5", "S2", "45", "60", "No Data"],
  VISIONPROARTHRO1PRECISIONAC: [
    "-20",
    "-20",
    "10",
    "S2",
    "45",
    "60",
    "No Data"
  ],
  VISIONPROARTHRO2PRECISIONAC: ["-10", "-10", "5", "S2", "45", "60", "No Data"],
  VISIONPROARTHRO4_16PRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  VISIONPROLAP1PRECISIONAC: ["-35", "5", "5", "S2", "45", "60", "No Data"],
  VISIONPROLAP2PRECISIONAC: ["-6", "-9", "3", "1.9", "50", "58", "No Data"],
  VISIONPROLAPSTORZPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  VISIONPROCYSTOSPRECISIONAC: ["-35", "5", "5", "S2", "45", "60", "No Data"],
  VISIONPROHYSTEROSCOPYPRECISIONAC: [
    "-40",
    "10",
    "5",
    "S2",
    "45",
    "60",
    "No Data"
  ],
  VISIONPROFLEXISCOPEPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  VISIONPROENTPRECISIONAC: ["-50", "30", "10", "1.5", "47", "58", "No Data"],
  VISIONPROLASERPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  VISIONPROMICROSCOPEPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  VISIONPROSTANDARDPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  VISIONPROVEINHARVESTPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  VISIONPROOLYMPUSGIPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  HDTVWISEMULTIPRECISIONAC: ["-30", "-15", "10", "S2", "45", "58", "No Data"],
  HDTVWISEARTHRO1PRECISIONAC: ["-25", "-25", "2", "S2", "50", "50", "No Data"],
  HDTVWISEARTHRO2PRECISIONAC: ["-27", "-2", "14", "S1", "50", "55", "No Data"],
  HDTVWISEARTHRO4_16PRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  HDTVWISELAP1PRECISIONAC: ["-35", "-3", "25", "S2", "45", "58", "No Data"],
  HDTVWISELAP2PRECISIONAC: ["8", "0", "2", "S0", "50", "55", "No Data"],
  HDTVWISELAPSTORZPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  HDTVWISECYSTOPRECISIONAC: ["-35", "-3", "25", "S2", "45", "58", "No Data"],
  HDTVWISEHYSTEROSCOPYPRECISIONAC: [
    "8",
    "-25",
    "2",
    "S0",
    "45",
    "55",
    "No Data"
  ],
  HDTVWISEFLEXISCOPEPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  HDTVWISEENTPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  HDTVWISELASERPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  HDTVWISEMICROSCOPEPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  HDTVWISESTANDARDPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  HDTVWISEVEINHARVESTPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  HDTVWISEOLYMPUSGIPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  HDTVWISEMULTI1488: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEARTHRO11488: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEARTHRO21488: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEARTHRO4_161488: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISELAP11488: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISELAP21488: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISECYSTO1488: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEHYSTEROSCOPY1488: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEFLEXISCOPE1488: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEENT1488: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISELASER1488: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEMICROSCOPE1488: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISESTANDARD1488: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEVEINHARVEST1488: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEOLYMPUSGI1488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROMULTI1488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROARTHRO11488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROARTHRO21488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROARTHRO4_161488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROLAP11488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROLAP21488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROLAPSTORZ1488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROCYSTO1488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROHYSTEROSCOPY1488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROFLEXISCOPE1488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROENT1488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROLASER1488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROMICROSCOPE1488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROSTANDARD1488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROVEINHARVEST1488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROOLYMPUSGI1488: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROMULTI1288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROARTHRO11288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROARTHRO21288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROARTHRO4_161288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROLAP11288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROLAP21288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROLAPSTORZ1288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROCYSTO1288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROHYSTEROSCOPY1288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROFLEXISCOPE1288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROENT1288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROLASER1288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROMICROSCOPE1288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROSTANDARD1288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROVEINHARVEST1288: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROOLYMPUSGI1288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEMULTI1288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEARTHRO11288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEARTHRO21288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEARTHRO4_161288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISELAP11288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISELAP21288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISELAPSTORZ1288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISECYSTO1288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEHYSTEROSCOPY1288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEFLEXISCOPE1288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEENT1288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISELASER1288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEMICROSCOPE1288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISESTANDARD1288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEVEINHARVEST1288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEOLYMPUSGI1288: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEMULTI1188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEARTHRO11188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEARTHRO21188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEARTHRO4_161188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISELAP11188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISELAP21188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISELAPSTORZ1188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISECYSTO1188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEHYSTEROSCOPY1188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEFLEXISCOPE1188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEENT1188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISELASER1188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEMICROSCOPE1188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISESTANDARD1188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEVEINHARVEST1188: ["-20", "-20", "10", "S2", "45", "60"],
  HDTVWISEOLYMPUSGI1188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROMULTI1188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROARTHRO11188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROARTHRO21188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROARTHRO4_161188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROLAP11188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROLAP21188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROLAPSTORZ1188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROCYSTO1188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROHYSTEROSCOPY1188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROFLEXISCOPE1188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROENT1188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROLASER1188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROMICROSCOPE1188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROSTANDARD1188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROVEINHARVEST1188: ["-20", "-20", "10", "S2", "45", "60"],
  VISIONPROOLYMPUSGI1188: ["-20", "-20", "10", "S2", "45", "60"]
};

const FOURKSETTINGS = {
  FOURKLAP11688: ["-45", "-5", "10", "S7", "Low", "45", "50", "No Data"],
  FOURKLAP21688: ["-45", "-15", "-10", "S5", "Low", "45", "50", "No Data"],
  FOURKLAPSTORZ1688: ["-45", "-15", "-10", "S5", "Low", "45", "50", "No Data"],
  FOURKENT11688: ["-30", "-6", "7", "S0", "Mid", "39", "52", "No Data"],
  FOURKENT21688: ["-50", "-13", "-15", "S0", "Low", "39", "52", "No Data"],
  FOURKENT31688: ["-10", "-6", "7", "S2", "Off", "39", "52", "No Data"],
  FOURKMULTI1688: ["-25", "-15", "5", "S2", "Low", "39", "52", "No Data"],
  // 1588/4K
  FOURKMULTI1588: ["-25", "-15", "5", "S2", "Low", "39", "52", "5"],
  FOURKARTHRO11588: ["-25", "-15", "5", "S2", "Low", "43", "65", "5"],
  FOURKARTHRO21588: ["-25", "-15", "5", "S2", "Low", "43", "65", "5"],
  FOURKARTHRO4_161588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  FOURKLAP11588: ["-30", "-5", "30", "1.5", "Off", "45", "60", "5"],
  FOURKLAP21588: ["-10", "25", "22", "1.5", "Off", "42", "53", "1"],
  FOURKLAPSTORZ1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  FOURKCYSTO1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  FOURKHYSTEROSCOPY1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  FOURKFLEXISCOPE1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  FOURKENT1588: ["-20", "0", "0", "1.9", "Off", "50", "55", "1"],
  FOURKLASER1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  FOURKMICROSCOPE1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  FOURKSTANDARD1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  FOURKVEINHARVEST1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  FOURKOLYMPUSGI1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data"
  ],
  FOURKFLEXISCOPE1688: ["-35", "0", "10", "S0", "Mid", "45", "No Data"],
  FOURKCYSTO1688: ["-35", "0", "10", "S0", "Mid", "45", "70", "No Data"],
  FOURKARTHRO11688: ["-10", "10", "5", "S4", "Low", "37", "54", "No Data"],
  FOURKARTHRO21688: ["-15", "-5", "8", "S7", "Low", "37", "52", "No Data"],
  FOURKLASER1688: ["-35", "0", "10", "S0", "Mid", "45", "70", "No Data"],
  FOURKHYSTO1688: ["-45", "-15", "0", "S5", "Low", "40", "50", "No Data"],
  FOURKMICROSCOPE1688: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"],
  FOURKOLYMPUSGI1688: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"],
  FOURKVIENHARVEST1688: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"]
};

function selectCamera() {
  let cameraButton = document.getElementsByClassName("example_a");
  let cameraDiv = document.getElementById("top-camera-div");

  for (let item of cameraButton) {
    item.addEventListener("click", function(item) {
      let cameraTopDiv = document.getElementById("top-camera-div");
      cameraTopDiv.classList.add("cameraSelectDiv");
      let camera = this.dataset.camera;
      showDisplays(camera);
    });
  }
}

function showDisplays(camera) {
  let displayTopDiv = document.getElementById("displayTopDiv");
  let hDiv = document.createElement("div");
  hDiv.setAttribute("class", "title-div");
  let hElement = document.createElement("h1");
  hElement.append("Select Display");
  displayTopDiv.setAttribute("style", "margin-top: 5em;");
  if (camera === "1688") {
    // Visionpro
    let vpDisplayDiv = document.createElement("div");
    let vpLink = document.createElement("a");
    vpDisplayDiv.setAttribute("class", "display-button-div");
    vpDisplayDiv.setAttribute("align", "center");
    vpLink.setAttribute("class", "example_a");
    vpLink.setAttribute("data-display", "VisionPro");
    vpLink.setAttribute("href", "#");
    vpLink.setAttribute("rel", "nofollow noopener");
    vpLink.appendChild(document.createTextNode("Visionpro"));
    hDiv.appendChild(hElement);
    displayTopDiv.appendChild(hDiv);
    vpDisplayDiv.appendChild(vpLink);
    displayTopDiv.appendChild(vpDisplayDiv);
    // 4K
    let fourKDisplayDiv = document.createElement("div");
    let fourKLink = document.createElement("a");
    fourKDisplayDiv.setAttribute("class", "display-button-div");
    fourKDisplayDiv.setAttribute("align", "center");
    fourKLink.setAttribute("class", "example_a");
    fourKLink.setAttribute("data-display", "FourK");
    fourKLink.setAttribute("href", "#");
    fourKLink.setAttribute("rel", "nofollow noopener");
    fourKLink.appendChild(document.createTextNode("4K"));
    fourKDisplayDiv.appendChild(fourKLink);
    displayTopDiv.appendChild(fourKDisplayDiv);
    selectDisplay(camera);
  } else if (camera === "1588") {
    // HDTV Wise
    let wiseDisplayDiv = document.createElement("div");
    let wiseLink = document.createElement("a");
    wiseDisplayDiv.setAttribute("class", "display-button-div");
    wiseDisplayDiv.setAttribute("align", "center");
    wiseLink.setAttribute("class", "example_a");
    wiseLink.setAttribute("data-display", "HDTV Wise");
    wiseLink.setAttribute("href", "#");
    wiseLink.setAttribute("rel", "nofollow noopener");
    wiseLink.appendChild(document.createTextNode("HDTV Wise"));
    hDiv.appendChild(hElement);
    displayTopDiv.appendChild(hDiv);
    wiseDisplayDiv.appendChild(wiseLink);
    displayTopDiv.appendChild(wiseDisplayDiv);

    // Visionpro
    let vpDisplayDiv = document.createElement("div");
    let vpLink = document.createElement("a");
    vpDisplayDiv.setAttribute("class", "display-button-div");
    vpDisplayDiv.setAttribute("align", "center");
    vpLink.setAttribute("class", "example_a");
    vpLink.setAttribute("data-display", "VisionPro");
    vpLink.setAttribute("href", "#");
    vpLink.setAttribute("rel", "nofollow noopener");
    vpLink.appendChild(document.createTextNode("Visionpro"));
    vpDisplayDiv.appendChild(vpLink);
    displayTopDiv.appendChild(vpDisplayDiv);

    // 4K
    let fourKDisplayDiv = document.createElement("div");
    let fourKLink = document.createElement("a");
    fourKDisplayDiv.setAttribute("class", "display-button-div");
    fourKDisplayDiv.setAttribute("align", "center");
    fourKLink.setAttribute("class", "example_a");
    fourKLink.setAttribute("data-display", "FourK");
    fourKLink.setAttribute("href", "#");
    fourKLink.setAttribute("rel", "nofollow noopener");
    fourKLink.appendChild(document.createTextNode("4K"));
    fourKDisplayDiv.appendChild(fourKLink);
    displayTopDiv.appendChild(fourKDisplayDiv);
    selectDisplay(camera);
  } else {
    // HDTV Wise
    let wiseDisplayDiv = document.createElement("div");
    let wiseLink = document.createElement("a");
    wiseDisplayDiv.setAttribute("class", "display-button-div");
    wiseDisplayDiv.setAttribute("align", "center");
    wiseLink.setAttribute("class", "example_a");
    wiseLink.setAttribute("data-display", "HDTV Wise");
    wiseLink.setAttribute("href", "#");
    wiseLink.setAttribute("rel", "nofollow noopener");
    wiseLink.appendChild(document.createTextNode("HDTV Wise"));
    hDiv.appendChild(hElement);
    displayTopDiv.appendChild(hDiv);
    wiseDisplayDiv.appendChild(wiseLink);
    displayTopDiv.appendChild(wiseDisplayDiv);

    // Visionpro
    let vpDisplayDiv = document.createElement("div");
    let vpLink = document.createElement("a");
    vpDisplayDiv.setAttribute("class", "display-button-div");
    vpDisplayDiv.setAttribute("align", "center");
    vpLink.setAttribute("class", "example_a");
    vpLink.setAttribute("data-display", "VisionPro");
    vpLink.setAttribute("href", "#");
    vpLink.setAttribute("rel", "nofollow noopener");
    vpLink.appendChild(document.createTextNode("Visionpro"));
    vpDisplayDiv.appendChild(vpLink);
    displayTopDiv.appendChild(vpDisplayDiv);
    selectDisplay(camera);
  }
  // Button selection
}

function selectDisplay(camera) {
  let displayButton = document.getElementsByClassName("example_a");

  // Loop over buttons
  for (let button of displayButton) {
    button.addEventListener("click", function() {
      let displayTopDiv = document.getElementById("displayTopDiv");
      displayTopDiv.classList.add("displaySelectDiv");
      let display = this.dataset.display;
      showSpecialties(camera, display);
    });
  }
}

function showSpecialties(camera, display) {
  let cameraDisplay = new CameraDisplayObject(camera, display);
  cameraDisplay.displaySpecialties();
}

// Specialites Object Model
function CameraDisplayObject(camera, display) {
  this.camera = camera;
  this.display = display;
}
// Object prototype
CameraDisplayObject.prototype.displaySpecialties = function() {
  let specialityTopDiv = document.getElementById("specialtyTopDiv");
  let hDiv = document.createElement("div");
  hDiv.setAttribute("class", "title-div");
  let hElement = document.createElement("h1");
  hElement.append("Select Specialty");
  hDiv.appendChild(hElement);
  specialtyTopDiv.appendChild(hDiv);
  // specialty div

  if (this.camera !== "1688") {
    SPECIALTIES.forEach(function(specialty) {
      specialtyDiv(specialty);
    });
  } else {
    SIXTEENSPECIALTIES.forEach(function(specialty) {
      specialtyDiv(specialty);
    });
  }
  let cameraDisplay = this;
  selectSpecialty(cameraDisplay);
};

function specialtyDiv(specialty) {
  let specialtiesDiv = document.createElement("div");
  let specialtiesLink = document.createElement("a");
  specialtiesDiv.setAttribute("class", "specialty-button-div");
  specialtiesDiv.setAttribute("align", "center");
  specialtiesLink.setAttribute("class", "example_a");
  specialtiesLink.setAttribute("data-specialty", specialty);
  specialtiesLink.setAttribute("href", "#");
  specialtiesLink.setAttribute("rel", "nofollow noopener");
  specialtiesLink.appendChild(document.createTextNode(specialty));
  specialtiesDiv.appendChild(specialtiesLink);
  specialtyTopDiv.appendChild(specialtiesDiv);
}
// User can select a specialty
function selectSpecialty(cameraDisplay) {
  let specialtyButton = document.getElementsByClassName("example_a");
  let specialtyTopDiv = document.getElementById("specialtyTopDiv");
  for (let button of specialtyButton) {
    button.addEventListener("click", function() {
      let displayTopDiv = document.getElementById("displayTopDiv");
      specialtyTopDiv.classList.add("specialtySelectDiv");
      let cameraDisplaySpecialty = {
        camera: cameraDisplay.camera,
        display: cameraDisplay.display,
        specialty: this.dataset.specialty
      }; // camera
      displaySettings(cameraDisplaySpecialty);
    });
  }
}

function displaySettings(cameraDisplaySpecialty) {
  console.log(cameraDisplaySpecialty);
  let headerDiv = document.createElement("div");
  headerDiv.setAttribute("class", "settings-header");
  // Camera Parameter Header Div
  let cameraParametersHeaderDiv = document.createElement("div");
  let cameraParameterTitle = document.createElement("h3");
  cameraParametersHeaderDiv.setAttribute("class", "camera-parameters-header");
  cameraParameterTitle.appendChild(
    document.createTextNode(`${cameraDisplaySpecialty.camera}`)
  );
  cameraParametersHeaderDiv.appendChild(cameraParameterTitle);
  headerDiv.appendChild(cameraParametersHeaderDiv);

  // params/settings parent Div
  let parentDiv = document.createElement("div");
  parentDiv.setAttribute("class", "parent-div");
  // Camera parameters Div
  let cameraParameterDiv = document.createElement("div");

  cameraParameterDiv.setAttribute("class", "camera-parameter");

  // settings divs
  // Camera Settings Header Div
  let cameraSettingsHeaderDiv = document.createElement("div");
  let cameraSettingsTitle = document.createElement("h3");
  cameraSettingsHeaderDiv.setAttribute("class", "camera-settings-header");
  cameraSettingsTitle.appendChild(
    document.createTextNode(`${cameraDisplaySpecialty.specialty} Settings`)
  );
  cameraSettingsHeaderDiv.appendChild(cameraSettingsTitle);
  headerDiv.appendChild(cameraSettingsHeaderDiv);
  let cameraSettingsDiv = document.createElement("div");
  cameraSettingsDiv.setAttribute("class", "camera-settings");

  // CCU/Specialty Settings
  ccuSettings =
    cameraDisplaySpecialty.specialty.replace(/\s/g, "").toUpperCase() +
    cameraDisplaySpecialty.display.replace(/\s/g, "").toUpperCase() +
    cameraDisplaySpecialty.camera.replace(/\s/g, "").toUpperCase();
  ccuSettingsUpCase = ccuSettings.toUpperCase();
  console.log(ccuSettingsUpCase);
  if (cameraDisplaySpecialty.camera !== "1688") {
    // CCU Parameters
    CCUPARAMETERS.forEach(function(parameter) {
      let cameraParameter = document.createElement("p");
      cameraParameter.appendChild(document.createTextNode(parameter));
      cameraParameterDiv.appendChild(cameraParameter);
      parentDiv.appendChild(cameraParameterDiv);
    });

    for (let setting in CAMERASETTINGS) {
      if (ccuSettingsUpCase === setting) {
        CAMERASETTINGS[setting].forEach(function(setting) {
          let cameraSettings = document.createElement("p");
          cameraSettings.appendChild(document.createTextNode(setting));
          cameraSettingsDiv.appendChild(cameraSettings);
          parentDiv.appendChild(cameraSettingsDiv);
        });
      }
    }
  } else {
    SIXTEENPARAMETERS.forEach(function(parameter) {
      let cameraParameter = document.createElement("p");
      cameraParameter.appendChild(document.createTextNode(parameter));
      cameraParameterDiv.appendChild(cameraParameter);
      parentDiv.appendChild(cameraParameterDiv);
    });
    for (let setting in SIXTEENSETTINGS) {
      if (ccuSettingsUpCase === setting) {
        SIXTEENSETTINGS[setting].forEach(function(setting) {
          let cameraSettings = document.createElement("p");
          cameraSettings.appendChild(document.createTextNode(setting));
          cameraSettingsDiv.appendChild(cameraSettings);
          parentDiv.appendChild(cameraSettingsDiv);
        });
      }
    }
  }

  // Applying Headers to DOM
  ccuSettingsTopDiv.appendChild(headerDiv); // Parameter Header
  ccuSettingsTopDiv.appendChild(headerDiv); // Settings Header

  // Display Settings Div
  let displayHeaderDiv = document.createElement("div");
  let displaySettingsDiv1 = document.createElement("div");
  let displaySettingsDiv2 = document.createElement("div");
  displayHeaderDiv.setAttribute("class", "container-display");

  // Apply params settings to DOM
  ccuSettingsTopDiv.appendChild(parentDiv);

  // Monitor settings
  // Main div
  let monitorSettingsTopDiv = document.getElementById("monitorSettingsTopDiv");
  // created Main Monitor Div
  let monitorMainDiv = document.createElement("div");
  monitorMainDiv.setAttribute("class", "monitor-main-div");
  monitorSettingsTopDiv.appendChild(monitorMainDiv);

  // Header Div
  let monitorHeaderDiv = document.createElement("div");
  let paramsHeaderDiv = document.createElement("div");
  let settingsHeaderDiv = document.createElement("div");
  let paramsTitle = document.createElement("h3");
  let settingsTitle = document.createElement("h3");

  // Give h3 tags Text
  paramsTitle.appendChild(
    document.createTextNode(`${cameraDisplaySpecialty.display}`)
  );
  settingsTitle.appendChild(
    document.createTextNode(`${cameraDisplaySpecialty.specialty} Settings`)
  );

  // Set attributes
  monitorHeaderDiv.setAttribute("class", "monitor-header-div");
  paramsHeaderDiv.setAttribute("class", "params-header-div");
  settingsHeaderDiv.setAttribute("class", "settings-header-div");

  // Append DOM
  paramsHeaderDiv.appendChild(paramsTitle);
  settingsHeaderDiv.appendChild(settingsTitle);

  monitorHeaderDiv.appendChild(paramsHeaderDiv);
  monitorHeaderDiv.appendChild(settingsHeaderDiv);
  monitorMainDiv.appendChild(monitorHeaderDiv);

  // Monitor parameters
  let secondDiv = document.createElement("div");
  secondDiv.setAttribute("class", "settings-second-div");
  let monitorParams = document.createElement("div");
  monitorParams.setAttribute("class", "monitor-params");
  let monitorSettings = document.createElement("div");
  monitorSettings.setAttribute("class", "monitor-settings");

  // Loop through array
  let monitorSpecialtySettings =
    cameraDisplaySpecialty.display.replace(/\s/g, "").toUpperCase() +
    cameraDisplaySpecialty.specialty.replace(/\s/g, "").toUpperCase() +
    cameraDisplaySpecialty.camera.replace(/\s/g, "").toUpperCase();

  if (cameraDisplaySpecialty.display !== "FourK") {
    MONITORPARAMS.forEach(function(parameter) {
      let pTag = document.createElement("p");
      pTag.appendChild(document.createTextNode(parameter));
      monitorParams.appendChild(pTag);
    });
  } else {
    FOURKPARAMS.forEach(function(parameter) {
      let pTag = document.createElement("p");
      pTag.appendChild(document.createTextNode(parameter));
      monitorParams.appendChild(pTag);
    });
    for (let displaySpecialty in FOURKSETTINGS) {
      if (monitorSpecialtySettings === displaySpecialty) {
        FOURKSETTINGS[displaySpecialty].forEach(function(setting) {
          let sTag = document.createElement("p");
          sTag.appendChild(document.createTextNode(setting));
          monitorSettings.appendChild(sTag);
        });
      }
    }
  }

  for (let displaySpecialty in MONITORSETTINGS) {
    if (monitorSpecialtySettings === displaySpecialty) {
      MONITORSETTINGS[displaySpecialty].forEach(function(setting) {
        let sTag = document.createElement("p");
        sTag.appendChild(document.createTextNode(setting));
        monitorSettings.appendChild(sTag);
      });
    }
  }

  secondDiv.appendChild(monitorParams);
  secondDiv.appendChild(monitorSettings);
  monitorMainDiv.appendChild(secondDiv);
}

document.addEventListener("DOMContentLoaded", function() {
  navToggle();
});

// Navbar functionality
function navToggle() {
  let mainNav = document.getElementById("js-menu");
  let navBarToggle = document.getElementById("js-navbar-toggle");
  navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
    this.classList.toggle("change");
  });
}
