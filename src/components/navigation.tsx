"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Navigation() {
    const pathname = usePathname()

    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold"></Link>
                    <div className="flex gap-6">
                        <Link href="/">
                            <Button
                                variant={pathname === "/" ? "default" : "ghost"}
                                size="sm"
                            >
                                Home
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button
                                variant={pathname === "/about" ? "default" : "ghost"}
                                size="sm"
                            >
                                About
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                variant={pathname === "/contact" ? "default" : "ghost"}
                                size="sm"
                            >
                                Contact
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}