import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    // md:container md:xl:max-w-screen-2xl
    <div className="bg-secondary-0">
      <div className="2xl:container">
        <div className="h-screen grid grid-rows-[auto_1fr] md:grid-cols-[15rem_1fr]">
          <Header />
          {children}
          <div className="bg-secondary-100 p-4 md:p-8 overflow-y-auto">
            <div className="md:container xl:max-w-screen-lg flex flex-col gap-y-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
