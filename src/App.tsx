import "./App.css";
import Header from "./widgets/Header/Header.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import Footer from "./widgets/Footer/Footer.tsx";

function App() {
  return (
    <div className="app">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
