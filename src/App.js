import "./App.css";
import { CardList } from "./components/cardList/CardList";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App-header">
      <Header />
      <CardList />
    </div>
  );
}

export default App;
