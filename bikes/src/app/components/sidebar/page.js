"use client";
import { useRouter, usePathname } from "next/navigation";
import "./sidebar.css";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const sidebarItems = [
    { name: "NINJA", className: "ninja", path: "/ninja" },
    { name: "Z", className: "z", path: "/z" },
    { name: "W", className: "w", path: "/w" },
    { name: "ELIMINATOR", className: "eliminator", path: "/eliminator" },
    { name: "VULCAN", className: "vulcan", path: "/vulcan" },
    { name: "VERSYS", className: "versys", path: "/versys" },
    { name: "KLX", className: "klx", path: "/klx" },
    { name: "KX", className: "kx", path: "/kx" },
  ];


  const isHomePage = pathname === "/" || pathname === "/home";

  return (
    <div className="sidebar">
      <div className="sidebar-contents">

        <div
          className={`home-btn sidebar-item ${isHomePage ? "active" : ""}`}
          onClick={() => router.push("/")}
        >
          <span>HOME</span>
        </div>

        <div className="sidebar-divider"></div>

        {sidebarItems.map((item) => (
          <div
            key={item.name}
            className={`${item.className} sidebar-item ${
              pathname === item.path ? "active" : ""
            }`}
            onClick={() => router.push(item.path)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
