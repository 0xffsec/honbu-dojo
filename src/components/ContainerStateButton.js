import { useState } from "react";

function ContainerStateButton(props) {
  const [state, setState] = useState("");

  function HandleClick(e) {
    e.preventDefault();
    console.log(state);
  }

  return (
    <button className="bg-green-500" onClick={HandleClick}>
      Click me {props.state}
    </button>
  );
}

export default ContainerStateButton;
