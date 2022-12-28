import "./App.css";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FormButton from "./components/formButton";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Home />
      <FormButton />
      <Footer />
    </>
  );
}

export default App;
