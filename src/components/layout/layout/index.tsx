import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = React.memo(({ children }) => {
  return (
    <main className="flex flex-1 flex-col h-screen space-y-4">
      {children}
    </main>
  );
});
