import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const Inputi = ({ onFetchData }) => {
  const [korisnickoIme, setKorisnickoIme] = useState("");

  const handleInputChange = (e) => {
    setKorisnickoIme(e.target.value);
  };

  const handleSubmit = () => {
    onFetchData(korisnickoIme);
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>GitHub korisničko ime:</Form.Label>
          <Form.Control
            type="text"
            placeholder="npr. Facebook..."
            value={korisnickoIme}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button
          variant="success"
          onClick={handleSubmit}
          disabled={!korisnickoIme}
        >
          Dohvati!
        </Button>
      </Form>
    </div>
  );
};

Inputi.propTypes = {
  onFetchData: PropTypes.func.isRequired,
};

export default Inputi;
