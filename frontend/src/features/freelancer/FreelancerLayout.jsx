import { HiCollection, HiHome, HiInboxIn } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import { CustomNavLink } from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";

function FreelancerLayout() {
    return (
        <AppLayout>
          <Sidebar>
            <CustomNavLink to="dashboard">
              <HiHome />
              <span>داشبورد</span>
            </CustomNavLink>
            <CustomNavLink to="projects">
              <HiCollection />
              <span>پروژه ها</span>
            </CustomNavLink>
            <CustomNavLink to="proposals">
              <HiInboxIn />
              <span>درخواست ها</span>
            </CustomNavLink>
          </Sidebar>
        </AppLayout>
      );
}

export default FreelancerLayout