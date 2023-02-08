import "./styles.css";
import "./skeleton.boilerplate.min.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="content">
      <Header />
      <SubHeader />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
