import { useState, useMemo } from "react";
import { companies } from "@/data/financialData";
import { inMarketProducts, pipelineProducts } from "@/data/productsData";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const phaseColor: Record<string, string> = {
  "Phase I": "bg-info/20 text-info",
  "Phase I-II": "bg-info/20 text-info",
  "Phase I-III": "bg-info/20 text-info",
  "Phase II": "bg-warning/20 text-warning",
  "Phase III": "bg-success/20 text-success",
  "Regulatory Review": "bg-primary/20 text-primary",
};

const Products = () => {
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

  const filteredInMarket = useMemo(
    () => inMarketProducts.filter((p) => selectedCompanies.includes(p.company)),
    [selectedCompanies]
  );

  const filteredPipeline = useMemo(
    () => pipelineProducts.filter((p) => selectedCompanies.includes(p.company)),
    [selectedCompanies]
  );

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-hero py-10">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Product Portfolio Explorer
          </h1>
          <p className="mt-2 text-muted-foreground">
            In-market and pipeline products across therapeutic areas
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

        {/* Main */}
        <div className="flex-1">
          <Tabs defaultValue="inmarket" className="w-full">
            <TabsList className="mb-6 bg-secondary">
              <TabsTrigger value="inmarket" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                In-Market ({filteredInMarket.length})
              </TabsTrigger>
              <TabsTrigger value="pipeline" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Pipeline ({filteredPipeline.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="inmarket">
              <div className="overflow-hidden rounded-xl border border-border shadow-card">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[hsl(var(--highlight-subtle))]">
                      <th className="px-5 py-3.5 text-left font-display font-bold text-foreground">Company</th>
                      <th className="px-5 py-3.5 text-left font-display font-bold text-foreground">Product</th>
                      <th className="px-5 py-3.5 text-left font-display font-bold text-foreground">Therapeutic Area</th>
                      <th className="px-5 py-3.5 text-left font-display font-bold text-foreground">Type</th>
                      <th className="px-5 py-3.5 text-right font-display font-bold text-foreground">Approved</th>
                      <th className="px-5 py-3.5 text-right font-display font-bold text-foreground">Years</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInMarket.map((p, idx) => (
                      <tr
                        key={`${p.company}-${p.productName}`}
                        className={`border-t border-border transition-colors hover:bg-secondary/50 ${
                          idx % 2 === 0 ? "bg-card" : "bg-background"
                        }`}
                      >
                        <td className="px-5 py-3 font-medium text-foreground">{p.company}</td>
                        <td className="px-5 py-3 text-foreground">{p.productName}</td>
                        <td className="px-5 py-3 text-muted-foreground">{p.therapeuticArea}</td>
                        <td className="px-5 py-3">
                          <Badge variant="secondary" className="text-xs">{p.type}</Badge>
                        </td>
                        <td className="px-5 py-3 text-right tabular-nums text-foreground">{p.approvalYear}</td>
                        <td className="px-5 py-3 text-right tabular-nums text-muted-foreground">{p.yearsOnMarket}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="pipeline">
              <div className="overflow-hidden rounded-xl border border-border shadow-card">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[hsl(var(--highlight-subtle))]">
                      <th className="px-5 py-3.5 text-left font-display font-bold text-foreground">Company</th>
                      <th className="px-5 py-3.5 text-left font-display font-bold text-foreground">Product</th>
                      <th className="px-5 py-3.5 text-left font-display font-bold text-foreground">Therapeutic Area</th>
                      <th className="px-5 py-3.5 text-left font-display font-bold text-foreground">Phase</th>
                      <th className="px-5 py-3.5 text-right font-display font-bold text-foreground">Expected</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPipeline.map((p, idx) => (
                      <tr
                        key={`${p.company}-${p.productName}`}
                        className={`border-t border-border transition-colors hover:bg-secondary/50 ${
                          idx % 2 === 0 ? "bg-card" : "bg-background"
                        }`}
                      >
                        <td className="px-5 py-3 font-medium text-foreground">{p.company}</td>
                        <td className="px-5 py-3 text-foreground">{p.productName}</td>
                        <td className="px-5 py-3 text-muted-foreground">{p.therapeuticArea}</td>
                        <td className="px-5 py-3">
                          <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${phaseColor[p.developmentPhase] || "bg-secondary text-secondary-foreground"}`}>
                            {p.developmentPhase}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-right tabular-nums text-foreground">{p.expectedApproval}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Products;
