import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <Welcome />
        <Products />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
