import "./App.css";
import Header from "./Header/header";
import Footer from "./Footer/footer";

function App() {
  return (
    <>
      <Header />
      <main
        style={{
          paddingTop: "50px",
          paddingBottom: "30px",
          paddingLeft: "150px",
          color: "#FF9142",
          backgroundColor: "#171717",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        body
      </main>
      <Footer />
    </>
  );
}

export default App;
