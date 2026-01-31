"use client";

import { useRouter } from "next/navigation";
import "./navbar.css";

export default function Navbar(){
    const router = useRouter();

    return(
        <nav className="nav">
            <div className="logo-container">
                <h2 className="brand-name" onClick={() => router.push("/")}>
                    Kawasaki
                </h2>
                <h3 className="slogan">Let the Good Times Roll</h3>
            </div>
            <div className="logo"><img src="/h2r.png" alt="Kawasaki Logo" /></div>
        </nav>
    )
}