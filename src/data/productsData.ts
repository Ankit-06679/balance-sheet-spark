export interface InMarketProduct {
  company: string;
  productName: string;
  therapeuticArea: string;
  type: string;
  approvalYear: number;
  yearsOnMarket: number;
}

export interface PipelineProduct {
  company: string;
  productName: string;
  therapeuticArea: string;
  developmentPhase: string;
  expectedApproval: number;
}

export const inMarketProducts: InMarketProduct[] = [
  { company: "Amgen", productName: "Repatha", therapeuticArea: "Cardiovascular", type: "Biologic", approvalYear: 2015, yearsOnMarket: 11 },
  { company: "Amgen", productName: "Otezla", therapeuticArea: "Immunology", type: "Small Molecule", approvalYear: 2014, yearsOnMarket: 12 },
  { company: "Amgen", productName: "Prolia", therapeuticArea: "Bone Health", type: "Biologic", approvalYear: 2010, yearsOnMarket: 16 },
  { company: "Amgen", productName: "Neulasta", therapeuticArea: "Oncology Support", type: "Biologic", approvalYear: 2002, yearsOnMarket: 24 },
  { company: "Amgen", productName: "Enbrel", therapeuticArea: "Immunology", type: "Biologic", approvalYear: 1998, yearsOnMarket: 28 },
  { company: "Cipla", productName: "Generic Advair", therapeuticArea: "Respiratory", type: "Generic", approvalYear: 2019, yearsOnMarket: 7 },
  { company: "Cipla", productName: "Albuterol generic", therapeuticArea: "Respiratory", type: "Generic", approvalYear: 2015, yearsOnMarket: 11 },
  { company: "Cipla", productName: "Tenofovir generic", therapeuticArea: "HIV/AIDS", type: "Generic", approvalYear: 2012, yearsOnMarket: 14 },
  { company: "Cipla", productName: "Efavirenz generic", therapeuticArea: "HIV/AIDS", type: "Generic", approvalYear: 2010, yearsOnMarket: 16 },
  { company: "Dr. Reddy's", productName: "Generic Revlimid", therapeuticArea: "Oncology", type: "Generic", approvalYear: 2022, yearsOnMarket: 4 },
  { company: "Dr. Reddy's", productName: "Generic Nuvaring", therapeuticArea: "Contraception", type: "Generic", approvalYear: 2020, yearsOnMarket: 6 },
  { company: "Dr. Reddy's", productName: "Generic Suboxone", therapeuticArea: "Pain Management", type: "Generic", approvalYear: 2018, yearsOnMarket: 8 },
  { company: "Dr. Reddy's", productName: "Generic Copaxone", therapeuticArea: "Neurology", type: "Generic", approvalYear: 2015, yearsOnMarket: 11 },
  { company: "J&J", productName: "Erleada", therapeuticArea: "Oncology", type: "Small Molecule", approvalYear: 2018, yearsOnMarket: 8 },
  { company: "J&J", productName: "Tremfya", therapeuticArea: "Immunology", type: "Biologic", approvalYear: 2017, yearsOnMarket: 9 },
  { company: "J&J", productName: "Darzalex", therapeuticArea: "Oncology", type: "Biologic", approvalYear: 2015, yearsOnMarket: 11 },
  { company: "J&J", productName: "Imbruvica", therapeuticArea: "Oncology", type: "Small Molecule", approvalYear: 2013, yearsOnMarket: 13 },
  { company: "J&J", productName: "Stelara", therapeuticArea: "Immunology", type: "Biologic", approvalYear: 2009, yearsOnMarket: 17 },
  { company: "Pfizer", productName: "Comirnaty", therapeuticArea: "Vaccines", type: "Vaccine", approvalYear: 2021, yearsOnMarket: 5 },
  { company: "Pfizer", productName: "Paxlovid", therapeuticArea: "Infectious Disease", type: "Small Molecule", approvalYear: 2021, yearsOnMarket: 5 },
  { company: "Pfizer", productName: "Ibrance", therapeuticArea: "Oncology", type: "Small Molecule", approvalYear: 2015, yearsOnMarket: 11 },
  { company: "Pfizer", productName: "Eliquis", therapeuticArea: "Cardiovascular", type: "Small Molecule", approvalYear: 2012, yearsOnMarket: 14 },
  { company: "Pfizer", productName: "Xeljanz", therapeuticArea: "Immunology", type: "Small Molecule", approvalYear: 2012, yearsOnMarket: 14 },
  { company: "Roche", productName: "Ocrevus", therapeuticArea: "Neurology", type: "Biologic", approvalYear: 2017, yearsOnMarket: 9 },
  { company: "Roche", productName: "Tecentriq", therapeuticArea: "Oncology", type: "Biologic", approvalYear: 2016, yearsOnMarket: 10 },
  { company: "Roche", productName: "Avastin", therapeuticArea: "Oncology", type: "Biologic", approvalYear: 2004, yearsOnMarket: 22 },
  { company: "Roche", productName: "Herceptin", therapeuticArea: "Oncology", type: "Biologic", approvalYear: 1998, yearsOnMarket: 28 },
  { company: "Roche", productName: "Rituxan", therapeuticArea: "Oncology/Immunology", type: "Biologic", approvalYear: 1997, yearsOnMarket: 29 },
  { company: "Samsung Biologics", productName: "Biosimilar Development", therapeuticArea: "Various", type: "Development", approvalYear: 2015, yearsOnMarket: 11 },
  { company: "Samsung Biologics", productName: "CDMO Services", therapeuticArea: "Various", type: "Manufacturing", approvalYear: 2011, yearsOnMarket: 15 },
  { company: "Sandoz", productName: "Ziextenzo", therapeuticArea: "Oncology Support", type: "Biosimilar", approvalYear: 2019, yearsOnMarket: 7 },
  { company: "Sandoz", productName: "Generic Advair", therapeuticArea: "Respiratory", type: "Generic", approvalYear: 2019, yearsOnMarket: 7 },
  { company: "Sandoz", productName: "Hyrimoz", therapeuticArea: "Immunology", type: "Biosimilar", approvalYear: 2018, yearsOnMarket: 8 },
  { company: "Sandoz", productName: "Erelzi", therapeuticArea: "Immunology", type: "Biosimilar", approvalYear: 2016, yearsOnMarket: 10 },
  { company: "Sandoz", productName: "Zarxio", therapeuticArea: "Oncology Support", type: "Biosimilar", approvalYear: 2015, yearsOnMarket: 11 },
  { company: "Sanofi", productName: "Dupixent", therapeuticArea: "Immunology", type: "Biologic", approvalYear: 2017, yearsOnMarket: 9 },
  { company: "Sanofi", productName: "Kevzara", therapeuticArea: "Immunology", type: "Biologic", approvalYear: 2017, yearsOnMarket: 9 },
  { company: "Sanofi", productName: "Praluent", therapeuticArea: "Cardiovascular", type: "Biologic", approvalYear: 2015, yearsOnMarket: 11 },
  { company: "Sanofi", productName: "Aubagio", therapeuticArea: "Neurology", type: "Small Molecule", approvalYear: 2012, yearsOnMarket: 14 },
  { company: "Sanofi", productName: "Lantus", therapeuticArea: "Diabetes", type: "Biologic", approvalYear: 2000, yearsOnMarket: 26 },
  { company: "Teva", productName: "Ajovy", therapeuticArea: "Neurology", type: "Biologic", approvalYear: 2018, yearsOnMarket: 8 },
  { company: "Teva", productName: "Generic EpiPen", therapeuticArea: "Emergency Medicine", type: "Generic", approvalYear: 2018, yearsOnMarket: 8 },
  { company: "Teva", productName: "Austedo", therapeuticArea: "Neurology", type: "Small Molecule", approvalYear: 2017, yearsOnMarket: 9 },
  { company: "Teva", productName: "Copaxone", therapeuticArea: "Neurology", type: "Branded Generic", approvalYear: 1996, yearsOnMarket: 30 },
];

export const pipelineProducts: PipelineProduct[] = [
  { company: "Amgen", productName: "Tarlatamab", therapeuticArea: "Oncology", developmentPhase: "Regulatory Review", expectedApproval: 2026 },
  { company: "Amgen", productName: "Rocatinlimab", therapeuticArea: "Immunology", developmentPhase: "Phase III", expectedApproval: 2027 },
  { company: "Amgen", productName: "AMG 890", therapeuticArea: "Oncology", developmentPhase: "Phase II", expectedApproval: 2028 },
  { company: "Cipla", productName: "Biosimilar Bevacizumab", therapeuticArea: "Oncology", developmentPhase: "Phase III", expectedApproval: 2026 },
  { company: "Cipla", productName: "Laninamivir", therapeuticArea: "Respiratory", developmentPhase: "Phase III", expectedApproval: 2027 },
  { company: "Dr. Reddy's", productName: "Biosimilar Stelara", therapeuticArea: "Immunology", developmentPhase: "Phase III", expectedApproval: 2026 },
  { company: "Dr. Reddy's", productName: "Biosimilar Eylea", therapeuticArea: "Ophthalmology", developmentPhase: "Phase III", expectedApproval: 2027 },
  { company: "Dr. Reddy's", productName: "DRL-17711", therapeuticArea: "Oncology", developmentPhase: "Phase I", expectedApproval: 2029 },
  { company: "J&J", productName: "Nipocalimab", therapeuticArea: "Immunology", developmentPhase: "Phase III", expectedApproval: 2026 },
  { company: "J&J", productName: "Lazertinib", therapeuticArea: "Oncology", developmentPhase: "Phase III", expectedApproval: 2026 },
  { company: "J&J", productName: "Talquetamab", therapeuticArea: "Oncology", developmentPhase: "Regulatory Review", expectedApproval: 2026 },
  { company: "Pfizer", productName: "Etrasimod", therapeuticArea: "Immunology", developmentPhase: "Regulatory Review", expectedApproval: 2026 },
  { company: "Pfizer", productName: "Vepdegestrant", therapeuticArea: "Oncology", developmentPhase: "Phase III", expectedApproval: 2027 },
  { company: "Pfizer", productName: "Danuglipron", therapeuticArea: "Diabetes", developmentPhase: "Phase II", expectedApproval: 2028 },
  { company: "Roche", productName: "Gantenerumab", therapeuticArea: "Neurology", developmentPhase: "Phase III", expectedApproval: 2026 },
  { company: "Roche", productName: "Tiragolumab", therapeuticArea: "Oncology", developmentPhase: "Phase III", expectedApproval: 2026 },
  { company: "Roche", productName: "Crovalimab", therapeuticArea: "Hematology", developmentPhase: "Phase III", expectedApproval: 2027 },
  { company: "Samsung Biologics", productName: "Multiple Biosimilars", therapeuticArea: "Various", developmentPhase: "Phase I-III", expectedApproval: 2026 },
  { company: "Samsung Biologics", productName: "Novel Biologics", therapeuticArea: "Oncology/Immunology", developmentPhase: "Phase I-II", expectedApproval: 2027 },
  { company: "Sandoz", productName: "Denosumab biosimilar", therapeuticArea: "Bone Health", developmentPhase: "Phase III", expectedApproval: 2026 },
  { company: "Sandoz", productName: "Aflibercept biosimilar", therapeuticArea: "Ophthalmology", developmentPhase: "Phase III", expectedApproval: 2027 },
  { company: "Sandoz", productName: "Ustekinumab biosimilar", therapeuticArea: "Immunology", developmentPhase: "Phase III", expectedApproval: 2027 },
  { company: "Sanofi", productName: "Tolebrutinib", therapeuticArea: "Neurology", developmentPhase: "Phase III", expectedApproval: 2026 },
  { company: "Sanofi", productName: "Rilzabrutinib", therapeuticArea: "Immunology", developmentPhase: "Phase III", expectedApproval: 2027 },
  { company: "Sanofi", productName: "Frexalimab", therapeuticArea: "Neurology", developmentPhase: "Phase II", expectedApproval: 2028 },
  { company: "Teva", productName: "Olanzapine LAI", therapeuticArea: "Psychiatry", developmentPhase: "Phase III", expectedApproval: 2026 },
  { company: "Teva", productName: "TEV-48574", therapeuticArea: "Neurology", developmentPhase: "Phase II", expectedApproval: 2028 },
];
