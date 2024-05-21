import Header from '../header'
import Router from '../router/Router';
import ChatBot from '../ChatBot';
import Footer from '../footer'

const Layout = () => {
  return (
    <>
      <Header />
      <ChatBot/>
      <Router />
      <Footer />
    </>
  );
};

export default Layout;
