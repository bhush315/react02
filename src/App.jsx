import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./PlayerList";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
};

export default App;
