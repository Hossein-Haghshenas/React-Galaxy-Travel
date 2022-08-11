import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import PricingPage from "./pages/PricingPage";
import TrainingPage from "./pages/TrainingPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/training" element={<TrainingPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
