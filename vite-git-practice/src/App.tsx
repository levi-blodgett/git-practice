import "./styles.css";
import "./skeleton.boilerplate.min.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";
import useFetch from "./useFetch";

const App = () => {
  const { data, isPending, error } = useFetch("/assets/db.json");

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
};

export default App;
