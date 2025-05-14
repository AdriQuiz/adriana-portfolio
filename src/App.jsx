import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Abilities from "./components/Abilities"
import Layout from "./Layouts/Layout"
import WhoIAm from "./components/WhoIAm"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <>
      <Layout className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-color-6 min-h-screen">
        <Navbar />
        <WhoIAm />
        <About />
        <Abilities />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Layout>
    </>
  )
}

export default App
