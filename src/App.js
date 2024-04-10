import React from "react";
import "../src/css/styles.css";
import FifthSection from "./Components/FifthSection/FifthSection";
import FirstSection from "./Components/FirstSection/FirstSection";
import Footer from "./Components/Footer/Footer";
import FourthSection from "./Components/FourthSection/FourthSection";
import Header from "./Components/Header/Header";
import SecondSection from "./Components/SecondSection/SecondSection";
import SixSection from "./Components/SixSection/SixSection";
import ThirdSection from "./Components/TihrdSection/ThirdSection";
function App() {
  return (
    <div>
      <Header />
      <hr />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixSection />
      <Footer />
    </div>
  );
}
export default App;
