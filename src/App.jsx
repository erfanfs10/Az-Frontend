import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Flex gap="2" direction="column">
        <Navbar scrollToSection={scrollToSection} />
        <MainContent />
        <Footer scrollToSection={scrollToSection}/>
      </Flex>
    </>
  );
}

export default App;
