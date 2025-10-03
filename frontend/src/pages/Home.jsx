import { Outlet } from "react-router-dom";
import { HiCollection, HiHome, HiMail } from "react-icons/hi";
import { CustomNavLink } from "../ui/CustomNavLink";
import Sidebar from "../ui/Sidebar";
import Navbar from "../ui/Navbar";
import Footer from "../features/home/Footer";

function Home() {
  return (
    <>
      <div className="bg-secondary-100">
        <div className=" w-full min-h-screen ">
          <Navbar />
          {/* Sidebar used as the mobile menu */}
          <div className="md:container">
            <div className="md:hidden">
              <Sidebar>
                <CustomNavLink to="/">
                  <HiHome />
                  <span>خانه</span>
                </CustomNavLink>

                <CustomNavLink to="/projects">
                  <HiCollection />
                  <span>پروژه ها</span>
                </CustomNavLink>

                <CustomNavLink to="/contact-us">
                  <HiMail />
                  <span>ارتباط با ما</span>
                </CustomNavLink>
              </Sidebar>
            </div>
            <main className="overflow-y-auto">
              <Outlet />
            </main>
          </div>
          <div className="2xl:container ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
