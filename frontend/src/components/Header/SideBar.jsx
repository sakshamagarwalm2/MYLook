import React from 'react';
import { ChevronFirst, ChevronLast, Github, Linkedin, Twitter, Mail } from "lucide-react";
import logo from "../assets/logo.png";
import { createContext, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    // Check if we're on mobile and update visibility
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsVisible(window.innerWidth > 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleSidebar = () => {
        if (isMobile) {
            setIsVisible(prev => !prev);
        } else {
            setExpanded(prev => !prev);
        }
    };

    return (
        <>
            {/* Mobile Toggle Button - Only visible on mobile */}
            <button 
                onClick={toggleSidebar}
                className={`fixed top-4 p-1.5 rounded-lg bg-stone-300 text-black hover:bg-gray-100 md:hidden transition-all duration-300 ease-in-out 
                    ${isVisible ? "hidden" : "left-2"}`}
            >
                {isVisible ? <ChevronFirst /> : <ChevronLast/>}
            </button> 

            {/* Sidebar */}
            <aside className={`fixed md:relative h-screen transition-all duration-300 ease-in-out Z-100 ${
                isVisible ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0`}>
                <nav className="h-full flex flex-col bg-zinc-800/30 backdrop-blur-sm border-r shadow-sm">
                    <div className="p-2 md:p-4 pb-1 md:pb-2 flex justify-between items-center">
                        <img 
                            src={logo} 
                            className={`overflow-hidden transition-all hidden md:block ${
                                expanded ? "w-12" : "w-0"
                            }`} 
                            alt="" 
                        />
                        {/* Desktop Toggle Button - Only visible on desktop */}
                        <button 
                            onClick={toggleSidebar}
                            className="p-1.5 rounded-lg bg-stone-300 text-black hover:bg-gray-100 hidden md:block"
                        >
                            {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex-1 px-1 md:px-3">
                            {children.map((child, index) => (
                                <Link to={child.props.to} key={index} onClick={() => setIsVisible(false)}>
                                    {child}
                                </Link>
                            ))}
                            
                        <div className={`p-3 w-full flex justify-evenly  items-center gap-3 ${
                                expanded ? "flex-row" : "flex-col"
                            }`}>
                        <a href="https://github.com/sakshamagarwalm2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/sakshamagarwalm2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://x.com/sakshamHKRM2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400">
                            <Twitter size={20} />
                        </a>
                        <a href="mailto:sakshamagarwalm2@gmail.com" className="text-white hover:text-red-400">
                            <Mail size={20} />
                        </a>
                    </div>
                        </ul>
                    </SidebarContext.Provider>
                    

                    <div className="border-t flex p-1 md:p-3">
                        <img src={logo} className="w-8 h-8 rounded-md" alt=""/>
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${
                            expanded ? "w-52 ml-3" : "w-0"
                        }`}>
                            <div className="leading-4">
                                <h4 className="text-lg text-white">SAKSHAM</h4>
                                <span className="text-xs text-white">sakshamagarwal@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>

        </>
    );
}

export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext);
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
            active 
                ? "bg-gradient-to-tr from-white to-stone-300 text-indigo-800" 
                : "hover:bg-stone-300 hover:text-indigo-800 text-white"
        }`}>
            {icon}
            <span className={`overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
            }`}>
                {text}
            </span>

            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-white/10 text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    );
}