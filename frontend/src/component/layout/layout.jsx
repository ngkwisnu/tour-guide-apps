import Header from '../header'
import Router from '../router/Router';
import ChatBot from '../ChatBot';
import Footer from '../footer'
import HeaderCopy from '../headerCopy';

const Layout = () => {
  return (
    <>
      <HeaderCopy />
      <ChatBot/>
      <Router />
      <Footer />
    </>
  );
};

export default Layout;
