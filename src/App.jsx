import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <Flex m="15px" gap="2" direction="column">
      <Navbar />
      <MainContent />
    </Flex>
  );
}

export default App;
