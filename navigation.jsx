import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, BarChart } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    {
      to: "/",
      label: "Home",
      icon: Home,
    },
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: BarChart,
    },
  ];

  return (
    <nav className="fixed bottom-4 left-0 right-0 mx-auto w-fit px-6 py-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg z-50 border border-lavender-light/50">
      <ul className="flex items-center space-x-8">
        {links.map((link) => {
          const isActive = location.pathname === link.to;
          const Icon = link.icon;
          
          return (
            <li key={link.to}>
              <Link 
                to={link.to}
                className={cn(
                  "flex items-center justify-center flex-col text-sm font-medium transition-colors duration-200",
                  isActive 
                    ? "text-lavender"
                    : "text-muted-foreground hover:text-lavender-dark"
                )}
              >
                <Icon size={20} className={cn(isActive && "animate-pulse-soft")} />
                <span className="mt-1">{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;