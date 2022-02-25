import React from "react";
import Header from "./ui/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" component={() => <div>Home</div>}/>
          <Route exact path="/services" component={() => <div>services</div>}/>
          <Route exact path="/custom" component={() => <div>custom</div>}/>
          <Route exact path="/mobile" component={() => <div>mobile</div>}/>
          <Route exact path="/websites" component={() => <div>websites</div>}/>
          <Route exact path="/revolution" component={() => <div>revolution</div>}/>
          <Route exact path="/about" component={() => <div>about</div>}/>
          <Route exact path="/contact" component={() => <div>contact</div>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
