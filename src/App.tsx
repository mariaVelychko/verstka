import "./App.css";
import Header from "./widgets/Header/Header.tsx";
import Main from "./pages/Main/main.tsx";
import Footer from "./widgets/Footer/Footer.tsx";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
