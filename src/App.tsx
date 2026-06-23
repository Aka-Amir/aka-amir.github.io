import { ThemeProvider } from "@/hooks/use-theme"
import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
