"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100

            // Check for resume section first (since it's nested in about)
            const resumeElement = document.getElementById("resume")
            if (resumeElement) {
                const resumeTop = resumeElement.offsetTop
                const resumeBottom = resumeTop + resumeElement.offsetHeight
                
                if (scrollPosition >= resumeTop && scrollPosition < resumeBottom) {
                    setActiveSection("resume")
                    return
                }
            }

            // Then check other sections
            for (const section of ["home", "projects", "about", "contact"]) {
                const element = document.getElementById(section)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetBottom = offsetTop + element.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            if (sectionId === "resume") {
                // For resume section, scroll to center it on screen
                const elementTop = element.offsetTop
                const elementHeight = element.offsetHeight
                const windowHeight = window.innerHeight
                const offset = elementTop - (windowHeight / 2) + (elementHeight / 2)
                
                window.scrollTo({
                    top: offset,
                    behavior: "smooth"
                })
            } else {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
        }
    }

    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div></div>
                    <div className="flex gap-6">
                        <Button
                            variant={activeSection === "home" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => scrollToSection("home")}
                        >
                            Home
                        </Button>
                        <Button
                            variant={activeSection === "projects" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => scrollToSection("projects")}
                        >
                            Projects
                        </Button>
                        <Button
                            variant={activeSection === "about" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => scrollToSection("about")}
                        >
                            About
                        </Button>
                        <Button
                            variant={activeSection === "resume" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => scrollToSection("resume")}
                        >
                            Resume
                        </Button>
                        <Button
                            variant={activeSection === "contact" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}