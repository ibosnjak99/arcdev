import React, { useState } from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./ui/Theme";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Routes>
          <Route exact path="/" />
          <Route exact path="/services" />
          <Route exact path="/about" />
          <Route exact path="/contact" />
        </Routes>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}></Footer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
