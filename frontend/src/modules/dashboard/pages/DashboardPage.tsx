import { Outlet } from 'react-router-dom';
import SideNav from '../components/SideNav';

const DashboardPage = () => {
  return (
    <div className="w-full h-full flex flex-row items-stretch gap-2">
      <nav
        aria-label="Sidebar"
        className=" hidden h-screen lg:block flex-shrink-0 text-white bg-gray-800 overflow-y-auto"
      >
        <div className="relative h-full w-[250px] flex space-y-16 flex-col p-3">
          <SideNav />
        </div>
      </nav>
      <div className="flex items-start justify-start w-4/5">
        <Outlet/>
      </div>
    </div>
  );
};

export default DashboardPage;
