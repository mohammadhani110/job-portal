import type { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* <Header /> */}
      <Header>
        <MobileSidebar />
      </Header>
      <div className="flex flex-1">
        {/* Sidebar only on lg+ */}
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>

        {/* Main content always flexes */}
        <main className="flex-1 p-6 lg:pl-0 xl:pl-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
