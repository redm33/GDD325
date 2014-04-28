// JavaScript Document

var actions = {"heat": ["Please wait while your solution is heating."], "centrifuge": ["Please wait while your solution is centrifuged"], "cool": ["Please wait while you solution is cooled"]};

var objects = {"MixingRodVert": ["Mixing Rod"], "BeakerEmpty": ["Empty Beaker"], "CasseroleCup": ["Casserole"],"CasseroleCupLiqClear": ["Casserole with Solution"], "CasseroleCupHot": ["Hot Casserole"],  "EyedropperFinal":["Empty Eyedropper"], "Nails": ["Nails"], "BeakerLiqClear": ["Beaker with Water"], "BeakerTT01": ["Beaker with Test Tube"], "BeakerTT02":["Beaker with 2 Test Tubes"],"BeakerHotStill": ["Beaker with Hot Water"], "BeakerHotTT01Still": ["Beaker with Hot Water & Solution"], "TestTubeEmpty": ["Empty Test Tube"]};

var precipTubes = {"TTPrecBlack": ["Black Precipitate"], "TTPrecBlackLiqClear":["Black Precipitate with Solution"], "TTPrecBlue": ["Blue Precipitate"], "TTPrecBlueLiqClear": ["Blue Precipitate with Solution"], "TTPrecGracy": ["Gray Precipitate"], "TTPrecGrayLiqClear":["Gray Precipitate with Solution"], "TTPrecOrange": ["Orange Precipitate"], "TTPrecOrangeLiqClear": ["Orange Precipitate with Solution"],"TTPrecPink": ["Pink Precipitate"], "TTPrecPinkLiqClear":["Pink Precipitate with Solution"], "TTPrecRedBrwn": ["Red/Brown Precipitate"], "TTPrecRedBrwnLiqClear": ["Red/Brown Precipitate with Solution"],"TTPrecWhite": ["White Precipitate"], "TTPrecWhiteLiqClear":["White Precipitate with Solution"],"TTPrecWhiteLiqCloudy":["White Precipitate with Solution"],"TTPrecWhiteLiqPurple":["White Precipitate with Purple Solution"], "TTPrecYellow": ["Yellow Precipitate"], "TTPrecYellowLiqClear": ["Yellow Precipitate with Solution"]}

var liqTubes = {"TTLiqBlue": ["Blue Solution"], "TTLiqClear": ["Clear Solution"], "TTLiqCloudy": ["Cloudy Solution"], "TTLiqRedBrwn": ["Red/Brown Solution"], "TTLiqYellow":["Yellow Solution"], "TTLiqCloudyNails": ["Solution with Nails"]}

var theDroppers = {"EyedropperBlueLiq": ["Eyedropper with Blue Solution"], "EyedropperCloudy": ["Eyedropper with Cloudy Solution"], "EyedropperWater": ["Eyedropper with Clear Solution"], "EyedropperYellow": ["Eyedropper with Yellow Solution"]};

var theChemicals = {"1MHCL": ["1M HCL"], "6MHCL": ["6M HCL"],"6MHNO3": ["6M HNO3"], "6MNH3": ["6M NH3"],"12MHCL": ["12M HCL"], "15MNH3": ["15M NH3"],"18MH2SO4": ["18M H2SO4"], "AgNO3": [".2M AgNO3"],"C2H2O4": ["1M C2H2O4"], "C2H4O2": ["6M C2H4O2"],"C2H5NS": ["1M C2H5NS"], "FeK4C6N6": ["FeK4C6N6"],"H2O": ["H2O"], "H2O2": ["H2O2"],"HC2H3O2": ["6M HC2H3O2"], "HgCl2": [".1M HgCl2"],"K2CrO4": ["2M K2CrO4"], "KOH1MKNO3": ["KOH-1 KNO3"],"MgNO32": ["Mg(NO2)2"], "Na2S2O4": ["Na2S2O4"],"NaOH": ["6M NaOH"], "NH3": ["6M NH3"],"NH4C2H3O2": ["NH4C2H3O2"], "NH4CL": ["2M NH4CL"],"NH4NO3": ["NH4NO3"], "SnCl2": [".2M SnCl2"], "bottleUnlabeled":["Unknown Solution"]};


