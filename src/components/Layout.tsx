import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;