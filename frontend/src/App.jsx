import Layout from './component/layout/layout';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <>
      <ChakraProvider>
        <Layout />
      </ChakraProvider>
    </>
  );
}

export default App;
