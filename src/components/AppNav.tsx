import { Link, useLocation } from "react-router-dom";
import { BarChart3, FlaskConical, Home } from "lucide-react";

const navItems = [
  { to: "/", label: "Overview", icon: Home },
  { to: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { to: "/products", label: "Products", icon: FlaskConical },
];

const AppNav = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="font-display text-lg font-bold tracking-tight">
          <span className="text-gradient">Pharma</span>
          <span className="text-foreground">Insights</span>
        </h1>
        <div className="flex items-center gap-1">
          {navItems.map(({ to, label, icon: Icon }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default AppNav;
