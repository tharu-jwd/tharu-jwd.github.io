"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, ExternalLink, Code, Palette, Database, Download, Linkedin, Mail, Send } from "lucide-react"

const projects = [
  {
    title: "RSI Monitor",
    description: "RSI Monitor helps investors to quickly identify overbought and oversold stocks on the Colombo Stock Exchange with automated daily RSI value updates.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    github: "https://github.com/tharu-jwd/tharu-jwd.github.io",
    demo: "https://tharu-jwd.github.io/sri-lanka-rsi-monitor/"
  },
  {
    title: "Elderly",
    description: "A web-based platform that connects elderly individuals with caregivers for home based caregiving sessions. Developed collaboratively with my team.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my projects and skills.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Framer Motion"],
    github: "#",
    demo: "#"
  }
]

const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    tools: ["Git", "VS Code", "Figma", "Docker", "Vercel"]
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      
      if (response.ok) {
        alert("Thanks for your message! I'll get back to you soon.")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("Something went wrong. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 max-w-4xl mx-auto text-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to {" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Portfolio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A showcase of web applications I&apos;ve built.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/tharu-jwd" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://linkedin.com/in/tharupahan-jayawardana" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" asChild>
              <a href="/Tharupahan Jayawardana - CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {project.description}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tharupahan Jayawardana</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creating impactful digital experiences with a focus on usability and design.
          </p>
        </div>

        {/* Who I am Section */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Who I am</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a Computer Science and Engineering undergraduate at the University of Moratuwa. My journey in web development began out of curiosity, experimenting with code and design, and evolved into a passion for creating intuitive, user-focused experiences.
                I&apos;ve worked on a variety of projects, gaining experience in modern web development practices and learning how to turn ideas into functional products.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What I Do Section */}
        <div className="mb-16">
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
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h3>
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
        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s see how we can bring it to life!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="access_key" value="29284f9f-d917-4a36-9707-d04f1eb85969" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Let&apos;s connect</CardTitle>
                <CardDescription>
                  You can also reach out to me through these.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:tharupahanjayawardana@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                      tharupahanjayawardana@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </main>
  )
}