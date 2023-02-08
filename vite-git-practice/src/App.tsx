import "./styles.css";
import "./skeleton.boilerplate.min.css";
import "./accordian.js";
import "./clipboard.js";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Footer />
    </div>
  );
}

export default App;
