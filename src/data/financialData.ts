export interface CompanyInfo {
  name: string;
  fullName: string;
  country: string;
  founded: number;
  employees: string;
  revenue2025: number;
  inMarketProducts: number;
  pipelineProducts: number;
  totalPortfolio: number;
  stockSymbol: string;
}

export const companies: CompanyInfo[] = [
  { name: "Amgen", fullName: "Amgen Inc.", country: "USA", founded: 1980, employees: "24,000", revenue2025: 28, inMarketProducts: 5, pipelineProducts: 3, totalPortfolio: 8, stockSymbol: "AMGN" },
  { name: "Cipla", fullName: "Cipla Limited", country: "India", founded: 1935, employees: "22,000", revenue2025: 0.26, inMarketProducts: 4, pipelineProducts: 2, totalPortfolio: 6, stockSymbol: "CIPLA.NS" },
  { name: "Dr. Reddy's", fullName: "Dr. Reddy's Laboratories Limited", country: "India", founded: 1984, employees: "24,000", revenue2025: 0.3, inMarketProducts: 4, pipelineProducts: 3, totalPortfolio: 7, stockSymbol: "DRREDDY.NS" },
  { name: "J&J", fullName: "Johnson & Johnson", country: "USA", founded: 1886, employees: "134,500", revenue2025: 85, inMarketProducts: 5, pipelineProducts: 3, totalPortfolio: 8, stockSymbol: "JNJ" },
  { name: "Pfizer", fullName: "Pfizer Inc.", country: "USA", founded: 1849, employees: "83,000", revenue2025: 58.5, inMarketProducts: 5, pipelineProducts: 3, totalPortfolio: 8, stockSymbol: "PFE" },
  { name: "Roche", fullName: "Roche Holding AG", country: "Switzerland", founded: 1896, employees: "105,000", revenue2025: 82.09, inMarketProducts: 5, pipelineProducts: 3, totalPortfolio: 8, stockSymbol: "ROG.SW" },
  { name: "Samsung Biologics", fullName: "Samsung Biologics Co., Ltd.", country: "South Korea", founded: 2011, employees: "3,500", revenue2025: 1.88, inMarketProducts: 2, pipelineProducts: 2, totalPortfolio: 4, stockSymbol: "207940.KS" },
  { name: "Sandoz", fullName: "Sandoz Group AG", country: "Switzerland", founded: 1886, employees: "23,848", revenue2025: 12.45, inMarketProducts: 5, pipelineProducts: 3, totalPortfolio: 8, stockSymbol: "SDZ.SW" },
  { name: "Sanofi", fullName: "Sanofi S.A.", country: "France", founded: 1973, employees: "91,000", revenue2025: 50.89, inMarketProducts: 5, pipelineProducts: 3, totalPortfolio: 8, stockSymbol: "SNY" },
  { name: "Teva", fullName: "Teva Pharmaceutical Industries Ltd.", country: "Israel", founded: 1901, employees: "37,000", revenue2025: 15.8, inMarketProducts: 4, pipelineProducts: 2, totalPortfolio: 6, stockSymbol: "TEVA" },
];

export type LineItem = "Revenue" | "COGS" | "Gross Profit" | "EBITDA" | "Net Income" | "Total Assets" | "Cash & Cash Equivalents" | "Total Liabilities" | "Short-term Debt" | "Long-term Debt";

export const lineItemLabels: Record<LineItem, string> = {
  "Revenue": "Revenue",
  "COGS": "Cost of Goods Sold",
  "Gross Profit": "Gross Profit",
  "EBITDA": "EBITDA",
  "Net Income": "Net Income",
  "Total Assets": "Total Assets",
  "Cash & Cash Equivalents": "Cash & Cash Equivalents",
  "Total Liabilities": "Total Liabilities",
  "Short-term Debt": "Short-term Debt",
  "Long-term Debt": "Long-term Debt",
};

// Data: [company][lineItem][year] = value (USD Billions)
type FinData = Record<string, Record<LineItem, Record<number, number>>>;

export const financialData: FinData = {
  "Amgen": {
    "Revenue": { 2022: 22.23, 2023: 24.01, 2024: 25.93, 2025: 28 },
    "COGS": { 2022: 11.56, 2023: 12.48, 2024: 13.48, 2025: 14.56 },
    "Gross Profit": { 2022: 10.67, 2023: 11.53, 2024: 12.45, 2025: 13.44 },
    "EBITDA": { 2022: 3.56, 2023: 3.84, 2024: 4.15, 2025: 4.48 },
    "Net Income": { 2022: 2.14, 2023: 2.30, 2024: 2.49, 2025: 2.69 },
    "Total Assets": { 2022: 28.9, 2023: 31.21, 2024: 33.7, 2025: 36.4 },
    "Cash & Cash Equivalents": { 2022: 4.32, 2023: 4.67, 2024: 5.04, 2025: 5.45 },
    "Total Liabilities": { 2022: 15.31, 2023: 16.54, 2024: 17.86, 2025: 19.29 },
    "Short-term Debt": { 2022: 1.85, 2023: 2.00, 2024: 2.16, 2025: 2.33 },
    "Long-term Debt": { 2022: 5.2, 2023: 5.62, 2024: 6.07, 2025: 6.55 },
  },
  "Cipla": {
    "Revenue": { 2022: 0.21, 2023: 0.23, 2024: 0.24, 2025: 0.26 },
    "COGS": { 2022: 0.11, 2023: 0.12, 2024: 0.13, 2025: 0.14 },
    "Gross Profit": { 2022: 0.10, 2023: 0.11, 2024: 0.11, 2025: 0.12 },
    "EBITDA": { 2022: 0.03, 2023: 0.04, 2024: 0.04, 2025: 0.04 },
    "Net Income": { 2022: 0.02, 2023: 0.02, 2024: 0.02, 2025: 0.03 },
    "Total Assets": { 2022: 0.27, 2023: 0.29, 2024: 0.32, 2025: 0.34 },
    "Cash & Cash Equivalents": { 2022: 0.04, 2023: 0.04, 2024: 0.05, 2025: 0.05 },
    "Total Liabilities": { 2022: 0.14, 2023: 0.16, 2024: 0.17, 2025: 0.18 },
    "Short-term Debt": { 2022: 0.02, 2023: 0.02, 2024: 0.02, 2025: 0.02 },
    "Long-term Debt": { 2022: 0.05, 2023: 0.05, 2024: 0.06, 2025: 0.06 },
  },
  "Dr. Reddy's": {
    "Revenue": { 2022: 0.23, 2023: 0.25, 2024: 0.27, 2025: 0.3 },
    "COGS": { 2022: 0.12, 2023: 0.13, 2024: 0.14, 2025: 0.15 },
    "Gross Profit": { 2022: 0.11, 2023: 0.12, 2024: 0.13, 2025: 0.15 },
    "EBITDA": { 2022: 0.04, 2023: 0.04, 2024: 0.04, 2025: 0.05 },
    "Net Income": { 2022: 0.02, 2023: 0.03, 2024: 0.03, 2025: 0.03 },
    "Total Assets": { 2022: 0.31, 2023: 0.33, 2024: 0.36, 2025: 0.38 },
    "Cash & Cash Equivalents": { 2022: 0.05, 2023: 0.05, 2024: 0.05, 2025: 0.06 },
    "Total Liabilities": { 2022: 0.16, 2023: 0.17, 2024: 0.19, 2025: 0.2 },
    "Short-term Debt": { 2022: 0.02, 2023: 0.02, 2024: 0.03, 2025: 0.03 },
    "Long-term Debt": { 2022: 0.05, 2023: 0.06, 2024: 0.06, 2025: 0.07 },
  },
  "J&J": {
    "Revenue": { 2022: 67.48, 2023: 72.87, 2024: 78.7, 2025: 85 },
    "COGS": { 2022: 35.09, 2023: 37.89, 2024: 40.93, 2025: 44.2 },
    "Gross Profit": { 2022: 32.39, 2023: 34.98, 2024: 37.77, 2025: 40.80 },
    "EBITDA": { 2022: 10.8, 2023: 11.66, 2024: 12.59, 2025: 13.6 },
    "Net Income": { 2022: 6.48, 2023: 7.00, 2024: 7.55, 2025: 8.16 },
    "Total Assets": { 2022: 87.72, 2023: 94.74, 2024: 102.31, 2025: 110.5 },
    "Cash & Cash Equivalents": { 2022: 13.16, 2023: 14.21, 2024: 15.35, 2025: 16.58 },
    "Total Liabilities": { 2022: 46.49, 2023: 50.21, 2024: 54.23, 2025: 58.57 },
    "Short-term Debt": { 2022: 5.58, 2023: 6.03, 2024: 6.51, 2025: 7.03 },
    "Long-term Debt": { 2022: 15.79, 2023: 17.05, 2024: 18.42, 2025: 19.89 },
  },
  "Pfizer": {
    "Revenue": { 2022: 46.44, 2023: 50.15, 2024: 54.17, 2025: 58.5 },
    "COGS": { 2022: 24.15, 2023: 26.08, 2024: 28.17, 2025: 30.42 },
    "Gross Profit": { 2022: 22.29, 2023: 24.07, 2024: 26.00, 2025: 28.08 },
    "EBITDA": { 2022: 7.43, 2023: 8.02, 2024: 8.67, 2025: 9.36 },
    "Net Income": { 2022: 4.46, 2023: 4.81, 2024: 5.20, 2025: 5.62 },
    "Total Assets": { 2022: 60.37, 2023: 65.2, 2024: 70.42, 2025: 76.05 },
    "Cash & Cash Equivalents": { 2022: 9.06, 2023: 9.78, 2024: 10.56, 2025: 11.41 },
    "Total Liabilities": { 2022: 32, 2023: 34.56, 2024: 37.32, 2025: 40.31 },
    "Short-term Debt": { 2022: 3.84, 2023: 4.15, 2024: 4.48, 2025: 4.84 },
    "Long-term Debt": { 2022: 10.87, 2023: 11.74, 2024: 12.67, 2025: 13.69 },
  },
  "Roche": {
    "Revenue": { 2022: 65.16, 2023: 70.38, 2024: 76.01, 2025: 82.09 },
    "COGS": { 2022: 33.89, 2023: 36.6, 2024: 39.52, 2025: 42.69 },
    "Gross Profit": { 2022: 31.27, 2023: 33.78, 2024: 36.49, 2025: 39.40 },
    "EBITDA": { 2022: 10.43, 2023: 11.26, 2024: 12.16, 2025: 13.13 },
    "Net Income": { 2022: 6.26, 2023: 6.76, 2024: 7.30, 2025: 7.88 },
    "Total Assets": { 2022: 84.71, 2023: 91.49, 2024: 98.81, 2025: 106.71 },
    "Cash & Cash Equivalents": { 2022: 12.71, 2023: 13.72, 2024: 14.82, 2025: 16.01 },
    "Total Liabilities": { 2022: 44.9, 2023: 48.49, 2024: 52.37, 2025: 56.56 },
    "Short-term Debt": { 2022: 5.39, 2023: 5.82, 2024: 6.28, 2025: 6.79 },
    "Long-term Debt": { 2022: 15.25, 2023: 16.47, 2024: 17.79, 2025: 19.21 },
  },
  "Samsung Biologics": {
    "Revenue": { 2022: 1.49, 2023: 1.61, 2024: 1.74, 2025: 1.88 },
    "COGS": { 2022: 0.77, 2023: 0.84, 2024: 0.9, 2025: 0.98 },
    "Gross Profit": { 2022: 0.72, 2023: 0.77, 2024: 0.84, 2025: 0.90 },
    "EBITDA": { 2022: 0.24, 2023: 0.26, 2024: 0.28, 2025: 0.30 },
    "Net Income": { 2022: 0.14, 2023: 0.16, 2024: 0.17, 2025: 0.18 },
    "Total Assets": { 2022: 1.93, 2023: 2.09, 2024: 2.26, 2025: 2.44 },
    "Cash & Cash Equivalents": { 2022: 0.29, 2023: 0.31, 2024: 0.34, 2025: 0.37 },
    "Total Liabilities": { 2022: 1.03, 2023: 1.11, 2024: 1.2, 2025: 1.29 },
    "Short-term Debt": { 2022: 0.12, 2023: 0.13, 2024: 0.14, 2025: 0.15 },
    "Long-term Debt": { 2022: 0.35, 2023: 0.38, 2024: 0.41, 2025: 0.44 },
  },
  "Sandoz": {
    "Revenue": { 2022: 9.88, 2023: 10.67, 2024: 11.53, 2025: 12.45 },
    "COGS": { 2022: 5.14, 2023: 5.55, 2024: 5.99, 2025: 6.47 },
    "Gross Profit": { 2022: 4.74, 2023: 5.12, 2024: 5.54, 2025: 5.98 },
    "EBITDA": { 2022: 1.58, 2023: 1.71, 2024: 1.84, 2025: 1.99 },
    "Net Income": { 2022: 0.95, 2023: 1.03, 2024: 1.10, 2025: 1.19 },
    "Total Assets": { 2022: 12.85, 2023: 13.88, 2024: 14.99, 2025: 16.18 },
    "Cash & Cash Equivalents": { 2022: 1.93, 2023: 2.08, 2024: 2.25, 2025: 2.43 },
    "Total Liabilities": { 2022: 6.81, 2023: 7.35, 2024: 7.94, 2025: 8.58 },
    "Short-term Debt": { 2022: 0.82, 2023: 0.88, 2024: 0.95, 2025: 1.03 },
    "Long-term Debt": { 2022: 2.31, 2023: 2.5, 2024: 2.7, 2025: 2.91 },
  },
  "Sanofi": {
    "Revenue": { 2022: 40.4, 2023: 43.63, 2024: 47.12, 2025: 50.89 },
    "COGS": { 2022: 21.01, 2023: 22.69, 2024: 24.5, 2025: 26.46 },
    "Gross Profit": { 2022: 19.39, 2023: 20.94, 2024: 22.62, 2025: 24.43 },
    "EBITDA": { 2022: 6.46, 2023: 6.98, 2024: 7.54, 2025: 8.14 },
    "Net Income": { 2022: 3.88, 2023: 4.19, 2024: 4.52, 2025: 4.88 },
    "Total Assets": { 2022: 52.51, 2023: 56.71, 2024: 61.25, 2025: 66.15 },
    "Cash & Cash Equivalents": { 2022: 7.88, 2023: 8.51, 2024: 9.19, 2025: 9.92 },
    "Total Liabilities": { 2022: 27.83, 2023: 30.06, 2024: 32.46, 2025: 35.06 },
    "Short-term Debt": { 2022: 3.34, 2023: 3.61, 2024: 3.90, 2025: 4.21 },
    "Long-term Debt": { 2022: 9.45, 2023: 10.21, 2024: 11.03, 2025: 11.91 },
  },
  "Teva": {
    "Revenue": { 2022: 12.54, 2023: 13.55, 2024: 14.63, 2025: 15.8 },
    "COGS": { 2022: 6.52, 2023: 7.04, 2024: 7.61, 2025: 8.22 },
    "Gross Profit": { 2022: 6.02, 2023: 6.51, 2024: 7.02, 2025: 7.58 },
    "EBITDA": { 2022: 2.01, 2023: 2.17, 2024: 2.34, 2025: 2.53 },
    "Net Income": { 2022: 1.21, 2023: 1.30, 2024: 1.40, 2025: 1.52 },
    "Total Assets": { 2022: 16.31, 2023: 17.61, 2024: 19.02, 2025: 20.54 },
    "Cash & Cash Equivalents": { 2022: 2.45, 2023: 2.64, 2024: 2.85, 2025: 3.08 },
    "Total Liabilities": { 2022: 8.64, 2023: 9.33, 2024: 10.08, 2025: 10.89 },
    "Short-term Debt": { 2022: 1.04, 2023: 1.12, 2024: 1.21, 2025: 1.31 },
    "Long-term Debt": { 2022: 2.93, 2023: 3.17, 2024: 3.42, 2025: 3.7 },
  },
};

export const years = [2022, 2023, 2024, 2025];
export const lineItems: LineItem[] = ["Revenue", "COGS", "Gross Profit", "EBITDA", "Net Income", "Cash & Cash Equivalents", "Total Assets", "Total Liabilities", "Short-term Debt", "Long-term Debt"];
