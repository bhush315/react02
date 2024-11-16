import { Card } from "react-bootstrap";

// Player component
const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{team}</Card.Subtitle>
        <Card.Text>
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Set default props in case some data is missing
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: "00",
  age: "N/A",
  imageURL: "https://via.placeholder.com/150", // Default image URL
};

export default Player;
