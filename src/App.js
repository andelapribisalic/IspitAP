import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Inputi from "./Components/Inputi";
import ApiPoziv from "./Components/ApiPoziv";
import Ispis from "./Components/Ispis";

function App() {
  const [korisnickoIme, setKorisnickoIme] = useState("");

  const handleFetchData = (korisnickoIme) => {
    setKorisnickoIme(korisnickoIme);
  };

  return (
    <div className="App">
      <Container className="d-flex align-items-center justify-content-center flex-column">
        <Inputi onFetchData={handleFetchData} />
        <ApiPoziv korisnickoIme={korisnickoIme} />
        <Ispis />
      </Container>
    </div>
  );
}

export default App;
