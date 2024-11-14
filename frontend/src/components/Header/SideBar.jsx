import React from 'react';
import { ChevronFirst, ChevronLast} from "lucide-react"
import logo from "../assets/logo.png"
import profile from "../assets/profile.png"
import { createContext, useContext, useState } from "react"

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            <aside className="h-screen">
                <nav className="h-full flex flex-col bg-white/20 backdrop-blur-sm border-r shadow-sm">
                    <div className="p-2 md:p-4 pb-1 md:pb-2 flex justify-between items-center">
                        <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} alt="" />
                        <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-white hover:bg-gray-100">
                            {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>

                        <ul className="flex-1 px-1 md:px-3">{children}</ul>
                    </SidebarContext.Provider>

                    <div className="border-t flex p-1 md:p-3">
                        <img src={profile} className="w-8 h-8 rounded-md" alt=""/>
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
                            <div className="leading-4">
                                <h4 className="text-lg text-white orbitron-100 ">SAKSHAM</h4>
                                <span className="text-xs text-white">constgenius@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext)
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 hover:text-indigo-800 text-white"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}>

                </div>
            )}

            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    )
}