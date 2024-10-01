import { Affordable } from "./components/Affordable"
import { Hero } from "./components/Hero"
import RootLayout from "./components/layout/RootLayout"
import TeamSection from "./components/TeamSection"
import Newsletter from "./components/NewsLetter"


function App() {
  return (
    <RootLayout>
      <Hero />
      <Affordable />
      <TeamSection />
      <Newsletter />
    </RootLayout>
  )
}

export default App
