import HeroMobile from "./components/HeroMobile";
import Emotion from "./components/Emotion";
import Snacks from "./components/Snacks";
import Why from "./components/Why";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
function App() {
  return (
    <main>
      <Navbar/>
      <HeroMobile />
      <Emotion />
      <Snacks />
      <Why />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
