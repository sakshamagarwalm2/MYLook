import { LayoutDashboard, Home, Layers } from "lucide-react";
import Sidebar, { SidebarItem } from "./SideBar"

function NavBar() {

  return (
    <>
      <div className="flex overflow-hidden z-50 fixed orbitron font-extrabold tracking-wide">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" to="/"
                      />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="About" to="/about"
                      />
          <SidebarItem icon={<Layers size={20} />} text="Project" to="/project"
                    />
          <hr className="my-3" />
        </Sidebar>
      </div>
    </>
  )
}

export default NavBar