import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Blog from './sections/Blog'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="bg-primary min-h-screen text-[#F5F7FA] font-sans">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}
export default App
