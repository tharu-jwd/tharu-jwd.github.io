import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Code, Palette, Database, Linkedin } from "lucide-react"

const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    tools: ["Git", "VS Code", "Figma", "Docker", "Vercel", "AWS"]
}

export default function About() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Tharupahan Jayawardana</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Creating impactful digital experiences with a focus on usability and design.
                    </p>
                </section>

                {/* Who am I Section */}
                <section className="mb-16">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Who am I</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                I&apos;m a Computer Science and Engineering undergraduate at the University of Moratuwa. My journey in web development began out of curiosity, experimenting with code and design, and evolved into a passion for creating intuitive, user-focused experiences.
                                I&apos;ve worked on a variety of projects, gaining experience in modern web development practices and learning how to turn ideas into functional products.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* What I Do Section */}
                <section className="mb-16">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">What I Do</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                I specialize in modern web technologies like React, Next.js, and TypeScript.
                                Beyond client work, I explore emerging technologies and contribute to open source, continuously sharpening my skills to bring the best solutions to every project.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Skills Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Code className="h-5 w-5" />
                                    Frontend
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.frontend.map((skill) => (
                                        <Badge key={skill} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Database className="h-5 w-5" />
                                    Backend
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.backend.map((skill) => (
                                        <Badge key={skill} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Palette className="h-5 w-5" />
                                    Tools
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.tools.map((skill) => (
                                        <Badge key={skill} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center">
                    <Card>
                        <CardHeader>
                            <CardTitle>More About Me</CardTitle>
                        </CardHeader>
                        <CardContent className="flex gap-4 justify-center">
                            <Button size="lg">
                                <Download className="mr-2 h-4 w-4" />
                                Download Resume
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a href="https://linkedin.com/in/tharupahan-jayawardana" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="mr-2 h-4 w-4" />
                                    LinkedIn
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    )
}