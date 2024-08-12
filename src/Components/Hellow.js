import { useContext } from "react";
import { creatContext } from "../App";

const Hellow = () => {
  const context = useContext(creatContext);
  console.log(context);
  return <div>Hellow</div>;
};
export default Hellow;
