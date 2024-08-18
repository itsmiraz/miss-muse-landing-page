import Expertise from "./components/home/expertise";
import Hero from "./components/home/hero";
import Header from "./components/ui/header";

function App() {

  return (
    <main className="max-w-[2000px] overflow-hidden transition-all ease-in-out duration-300 mx-auto">
      <Header />

      <Hero />
      <Expertise />
    </main>
  )
}

export default App
