import { Outlet } from "react-router";
import Header from "../core-components/header";
import MainContent from "../core-components/main-content";

export default function LayoutMain() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
}
