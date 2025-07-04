import type { Route } from "./+types/home";
import { ThemedHeader } from "../components/ThemedComponents";
import { getCurrentTheme } from "../loadTheme";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Simple Multi-Theme Demo" },
    { name: "description", content: "Simplified multi-theme app" },
  ];
}

export default function Home() {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : 'server';
  const currentTheme = typeof window !== 'undefined' ? getCurrentTheme() : 'default';
  
  return (
    <div>
      <ThemedHeader />
      
      <main className="container">
        <div className="card">
          <div className="card-header">Multi-Theme Demo</div>
          <div className="card-body">
            <p><strong>Domain:</strong> {hostname}</p>
            <p><strong>Theme:</strong> {currentTheme}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Test Components</div>
          <div className="card-body">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <input type="email" className="form-input" placeholder="test@example.com" />
            <div className="alert alert-success">Theme {currentTheme} working!</div>
          </div>
        </div>

      </main>
    </div>
  );
}
