"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Send } from "lucide-react"

export default function Contact() {
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
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind? Let’s see how we can bring it to life!
                    </p>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <section>
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
                    </section>

                    {/* Contact Info */}
                    <section className="space-y-6">
                        {/* Quick Contact */}
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

                    </section>
                </div>
            </div>
        </main>
    )
}