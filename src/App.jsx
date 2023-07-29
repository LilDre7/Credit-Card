import "./App.css";
import Card from "./components/Card";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <section className="min-h-screen w-full">
        <Card />
      </section>
    </ChakraProvider>
  );
}

export default App;
