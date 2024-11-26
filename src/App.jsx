import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App d-flex flex-column">
      <div>
        <MyNav />
        <Welcome />
        <AllTheBooks />
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
