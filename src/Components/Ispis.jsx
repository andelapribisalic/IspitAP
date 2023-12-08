// Ispis.jsx
import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

const Ispis = ({ podaci1, podaci2, onReset }) => {
  return (
    <div>
      <Card>
        {podaci1 && (
          <div>
            <h2>Detalji:</h2>
            <img
              src={podaci1.avatar_url}
              alt="Profilna slika"
              height={100}
              width={100}
            />
            <p>
              <strong>Ime:</strong> {podaci1.name}
            </p>
            <p>
              <strong>Gdje se nalazite:</strong> {podaci1.location}
            </p>
            <p>
              <strong>Info:</strong> {podaci1.bio}
            </p>
          </div>
        )}
      </Card>

      {podaci2 && podaci2.length > 0 && (
        <div>
          <h2>Repoi:</h2>
          <ListGroup>
            {podaci2.map((repo) => (
              <ListGroupItem key={repo.id}>{repo.name}</ListGroupItem>
            ))}
          </ListGroup>
        </div>
      )}
      {podaci1 && podaci2 && (
        <Button variant="danger" onClick={onReset}>
          Resetiraj
        </Button>
      )}
    </div>
  );
};

export default Ispis;
