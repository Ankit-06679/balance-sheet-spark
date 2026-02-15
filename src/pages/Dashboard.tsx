import { useState, useMemo } from "react";
import { companies, financialData, lineItems, lineItemLabels, years, type LineItem } from "@/data/financialData";
import { Checkbox } from "@/components/ui/checkbox";

const Dashboard = () => {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>(
    companies.map((c) => c.name)
  );

  const toggleCompany = (name: string) => {
    setSelectedCompanies((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const selectAll = () => setSelectedCompanies(companies.map((c) => c.name));
  const clearAll = () => setSelectedCompanies([]);

  // Aggregate values: sum across selected companies for each lineItem & year
  const aggregatedData = useMemo(() => {
    const result: Record<LineItem, Record<number, number>> = {} as any;
    lineItems.forEach((item) => {
      result[item] = {};
      years.forEach((year) => {
        let sum = 0;
        selectedCompanies.forEach((company) => {
          sum += financialData[company]?.[item]?.[year] ?? 0;
        });
        result[item][year] = Math.round(sum * 100) / 100;
      });
    });
    return result;
  }, [selectedCompanies]);

  // In-market & pipeline counts
  const portfolioSummary = useMemo(() => {
    const selected = companies.filter((c) => selectedCompanies.includes(c.name));
    return {
      inMarket: selected.reduce((s, c) => s + c.inMarketProducts, 0),
      pipeline: selected.reduce((s, c) => s + c.pipelineProducts, 0),
    };
  }, [selectedCompanies]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-hero py-10">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Financial Insights of the Companies
          </h1>
          <p className="mt-2 text-muted-foreground">
            All values in USD Billions · {selectedCompanies.length} of {companies.length} companies selected
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-8">
        {/* Slicer */}
        <aside className="w-56 shrink-0">
          <div className="sticky top-24 rounded-xl border border-border bg-card p-4 shadow-card">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-display text-sm font-bold text-foreground">Company</h3>
              <div className="flex gap-2 text-xs">
                <button onClick={selectAll} className="text-primary hover:underline">All</button>
                <button onClick={clearAll} className="text-muted-foreground hover:underline">None</button>
              </div>
            </div>
            <div className="space-y-2">
              {companies.map((c) => (
                <label
                  key={c.name}
                  className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  <Checkbox
                    checked={selectedCompanies.includes(c.name)}
                    onCheckedChange={() => toggleCompany(c.name)}
                    className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  {c.name}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 space-y-6">
          {/* Segment Summary */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-card">
            <table className="w-auto text-sm">
              <thead>
                <tr className="text-muted-foreground">
                  <th className="pr-6 text-left font-medium">Segment</th>
                  {years.map((y) => (
                    <th key={y} className="px-3 text-center font-medium">{y}</th>
                  ))}
                  <th className="px-3 text-center font-bold text-foreground">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pr-6 py-1 text-foreground">In-Market</td>
                  {years.map((y) => (
                    <td key={y} className="px-3 text-center text-foreground">{portfolioSummary.inMarket}</td>
                  ))}
                  <td className="px-3 text-center font-bold text-foreground">{portfolioSummary.inMarket}</td>
                </tr>
                <tr>
                  <td className="pr-6 py-1 text-foreground">Pipeline</td>
                  {years.map((y) => (
                    <td key={y} className="px-3 text-center text-foreground">{portfolioSummary.pipeline}</td>
                  ))}
                  <td className="px-3 text-center font-bold text-foreground">{portfolioSummary.pipeline}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Financial Table */}
          <div className="overflow-hidden rounded-xl border border-border shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[hsl(var(--highlight-subtle))]">
                  <th className="px-6 py-4 text-left font-display text-sm font-bold text-foreground">
                    Line Item
                  </th>
                  {years.map((y) => (
                    <th
                      key={y}
                      className="px-6 py-4 text-right font-display text-sm font-bold text-foreground"
                    >
                      {y}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lineItems.map((item, idx) => (
                  <tr
                    key={item}
                    className={`border-t border-border transition-colors hover:bg-secondary/50 ${
                      idx % 2 === 0 ? "bg-card" : "bg-background"
                    }`}
                  >
                    <td className="px-6 py-3.5 text-foreground font-medium">
                      {lineItemLabels[item]}
                    </td>
                    {years.map((y) => (
                      <td key={y} className="px-6 py-3.5 text-right tabular-nums text-foreground">
                        {aggregatedData[item][y].toFixed(2)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
