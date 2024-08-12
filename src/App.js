import "./styles.css";
import { createContext } from "react";
import Hellow from "./Components/Hellow";
export const creatContext = createContext();
export default function App() {
  return (
    <div className="App">
      <creatContext.Provider value={true}>
        <h1>Context API</h1>
        <Hellow />
      </creatContext.Provider>
    </div>
  );
}
