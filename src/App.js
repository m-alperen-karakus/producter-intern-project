import logo from "./assets/producterLogo.svg";
import "./App.scss";
import Header from "./components/Header/header";
import Form from "./components/Form/form";
import List from "./components/List/list";

function App() {
  return (
    <div className="container">
      <div className="card">
        <Header />
        <Form />
        <List />
      </div>
      <div className="developerSignature">
        <p>
          Developed by <strong> Mustafa Alperen Karakuş </strong>, Designed by
        </p>
        <a href="https://producter.co">
          <img alt="producter team logo" src={logo} />
        </a>
      </div>
    </div>
  );
}

export default App;
