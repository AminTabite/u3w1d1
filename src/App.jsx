import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Prova testo </h1>
      <div className="center margine">
        <ButtonComponent className="btnsize white"  testo="Clicca qui" />
        <ButtonComponent className="btnsize red" testo="Autodistruzione" />
        <ButtonComponent className="btnsize yellow" testo="Cookies" />
      </div>
      <div className="center margine">
        <ImageComponent img="https://place.dog/300/200" />
        <ImageComponent img="https://placeholder.pics/svg/300x200/6B55FF-34FF53/E7FFAF-2B18FF" />
        <ImageComponent img="https://placeholder.pics/svg/300x200/FF1E06-D4FF77/E7FFAF-4EFFFC" />
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
