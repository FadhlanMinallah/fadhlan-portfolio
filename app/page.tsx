import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'


export default function Home() {
return (
<main className="max-w-6xl mx-auto px-4">
<Navbar />
<Hero />
<About />
<Skills />
<Experience />
<Projects />
<Contact />
</main>
)
}