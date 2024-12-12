import Ads from "./components/Ads"
import Biosta from "./components/Biosta"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
     <Navbar />
     <Hero />
     <Card />
     <Ads />
     <Biosta />
     <Card />
     <Footer />
    </div>
  )
}
export default App