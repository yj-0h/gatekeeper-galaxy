import Navigation from "./Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-background">
      <Navigation />
      <main className="flex-1 ml-[20%] p-8 animate-fade-in">
        {children}
      </main>
    </div>
  );
};

export default Layout;