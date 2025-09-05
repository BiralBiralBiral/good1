import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

function App() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/70">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight">My Portfolio</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-white/80">About</a>
            <a href="#projects" className="hover:text-white/80">Projects</a>
            <a href="#contact" className="hover:text-white/80">Contact</a>
          </nav>
          <button
            className="rounded-md border border-white/10 px-3 py-1.5 text-sm hover:bg-white/5"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        <section className="py-24" id="hero">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I’m <span className="text-indigo-400">Your Name</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            I build modern web apps with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-400">
              View Projects
            </a>
            <a href="#contact" className="rounded-md border border-white/10 px-5 py-2.5 text-sm hover:bg-white/5">
              Contact Me
            </a>
          </div>
        </section>

        <section id="about" className="py-20 border-t border-white/5">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 max-w-3xl text-neutral-300">
            Short bio goes here. Highlight your experience, strengths, and interests.
          </p>
        </section>

        <section id="projects" className="py-20 border-t border-white/5">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <article key={i} className="rounded-lg border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
                <h3 className="font-medium">Project {i}</h3>
                <p className="mt-2 text-sm text-neutral-300">Brief description of the project and technologies used.</p>
                <div className="mt-4 flex gap-3 text-xs text-neutral-300">
                  <span className="rounded bg-neutral-800 px-2 py-1">React</span>
                  <span className="rounded bg-neutral-800 px-2 py-1">TypeScript</span>
                  <span className="rounded bg-neutral-800 px-2 py-1">Tailwind</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 border-t border-white/5">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 text-neutral-300">Email me at your@email.com</p>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-neutral-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
