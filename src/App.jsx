import About from "./components/home/about";
import Expertise from "./components/home/expertise";
import Hero from "./components/home/hero";
import Receive from "./components/home/recieve";
import StartNow from "./components/home/startNow";
import Training from "./components/home/training";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";

function App() {

  return (
    <main className="max-w-[2000px] overflow-hidden transition-all ease-in-out duration-300 mx-auto">
      <Header />

      <Hero />
      <Expertise />
      <Training />
      <Receive />
      <StartNow />
      <About />
      <Footer />
    </main>
  )
}

export default App
