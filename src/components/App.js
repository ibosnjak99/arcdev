import React, { useState } from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./ui/Theme";
import LandingPage from "../components/LandingPage";


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/services" />
          <Route exact path="/about" />
          <Route exact path="/contact" />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}></Footer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
