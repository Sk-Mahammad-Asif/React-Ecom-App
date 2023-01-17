import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";


const App = () => {

const theme = {

  colors: {
    bg: "#F6F8FA",
    footer_bg: "0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px"
  },

  media: {
    mobile: "768px",
    tab: "998px"
  }
}

const [progress, setProgress] = useState(100);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
          {/*link for toploadbar  https://www.npmjs.com/package/react-top-loading-bar */ }
          <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
             <Route exact path="/" element={<Home />}></Route>
             <Route exact path="/about" element={<About />} />
             <Route exact path="/products" element={<Products />}/>
             <Route exact path="/contact" element={<Contact />}/>
             <Route exact path="/singleproduct/:id" element={<SingleProduct />}/>
             <Route exact path="/cart" element={<Cart />}/>
             <Route exact path="*" element={<ErrorPage />}/>
          </Routes>
      </Router>
      <Footer/>
      </ThemeProvider>
    )
};

export default App;
