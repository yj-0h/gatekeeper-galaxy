import { MessageSquare, HelpCircle, Lightbulb, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: MessageSquare, label: "Chat" },
    { path: "/faq", icon: HelpCircle, label: "FAQ" },
    { path: "/tips", icon: Lightbulb, label: "Tips" },
    { path: "/mentors", icon: Users, label: "Mentors" },
  ];

  return (
    <nav className="w-1/5 min-h-screen bg-background border-r border-border p-4 fixed left-0 top-0">
      <div className="mb-8 px-4">
        <h1 className="text-2xl font-semibold tracking-tight">Gatekeeper</h1>
      </div>
      <div className="space-y-2">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              location.pathname === path
                ? "bg-accent text-accent-foreground"
                : "text-foreground/60"
            )}
          >
            <Icon className="h-5 w-5" />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;