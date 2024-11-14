import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar } from "lucide-react";
import Sidebar, { SidebarItem } from "./SideBar"

function NavBar() {

  return (
    <>
      <div className="flex overflow-hidden z-50 fixed">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" alert />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
          <SidebarItem icon={<StickyNote size={20} />} text="Projects" alert />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          <hr className="my-3" />
        </Sidebar>
      </div>
    </>
  )
}

export default NavBar