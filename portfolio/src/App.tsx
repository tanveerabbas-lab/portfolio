import Background from './components/Background'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutSkills from './components/AboutSkills'
import Projects from './components/Projects'
import Info from './components/Info'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <AboutSkills />
        <Projects />
        <Info />
      </main>
      <Footer />
    </>
  )
}
