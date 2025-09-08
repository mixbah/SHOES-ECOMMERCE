import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl font-bold text-accent">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center h-10 px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-md font-medium transition-smooth"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
