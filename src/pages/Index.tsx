import { companies } from "@/data/financialData";
import { inMarketProducts, pipelineProducts } from "@/data/productsData";
import { ArrowRight, Building2, FlaskConical, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const statCards = [
  { label: "Companies Tracked", value: companies.length.toString(), icon: Building2 },
  { label: "In-Market Products", value: inMarketProducts.length.toString(), icon: FlaskConical },
  { label: "Pipeline Candidates", value: pipelineProducts.length.toString(), icon: TrendingUp },
  { label: "Countries", value: [...new Set(companies.map(c => c.country))].length.toString(), icon: Globe },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(262,80%,60%,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary opacity-80">
            Financial Intelligence Platform
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-foreground md:text-6xl">
            Financial Insights of the
            <br />
            <span className="text-gradient">Pharmaceutical Industry</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Comprehensive analysis of 10 leading pharmaceutical companies — covering revenue, balance sheet KPIs, in-market products, and pipeline developments from 2022 to 2025.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 shadow-glow"
            >
              View Dashboard <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:bg-surface-hover"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto -mt-12 max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {statCards.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-card p-6 shadow-card animate-fade-in"
            >
              <Icon className="mb-3 h-5 w-5 text-primary" />
              <p className="font-display text-3xl font-bold text-foreground">{value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-8 font-display text-2xl font-bold text-foreground">Companies at a Glance</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {companies.map((c, i) => (
            <div
              key={c.name}
              className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-glow"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <h3 className="font-display text-sm font-bold text-foreground">{c.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.country} · Est. {c.founded}</p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-xl font-bold text-primary">${c.revenue2025}B</span>
                <span className="text-xs text-muted-foreground">rev.</span>
              </div>
              <div className="mt-2 flex gap-3 text-xs text-muted-foreground">
                <span>{c.inMarketProducts} in-market</span>
                <span>{c.pipelineProducts} pipeline</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
