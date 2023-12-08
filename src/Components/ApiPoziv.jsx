import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Ispis from "./Ispis";

const ApiPoziv = ({ korisnickoIme }) => {
  const [podaci1, setPodaci1] = useState("");
  const [podaci2, setPodaci2] = useState("");

  const urlApi1 = `https://api.github.com/users/${korisnickoIme}`;
  const urlApi2 = `https://api.github.com/users/${korisnickoIme}/repos`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(urlApi1);
        const response2 = await fetch(urlApi2);

        const apiPodaci1 = await response1.json();
        const apiPodaci2 = await response2.json();

        setPodaci1(apiPodaci1);
        setPodaci2(apiPodaci2);
      } catch (error) {
        console.error("Greška kod dohvaćanja podataka", error);
      }
    };

    if (korisnickoIme) {
      fetchData();
    }
  }, [korisnickoIme, urlApi1, urlApi2]);

  const handleReset = () => {
    setPodaci1("");
    setPodaci2("");
  };

  return <Ispis podaci1={podaci1} podaci2={podaci2} onReset={handleReset} />;
};

ApiPoziv.propTypes = {
  korisnickoIme: PropTypes.string.isRequired,
};

export default ApiPoziv;
