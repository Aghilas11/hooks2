import React, { useEffect, useState } from "react";

const Effect2 = () => {
  const [stop, setStop] = useState("");
  const [whos, setWhos] = useState("");
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    yesNo();
  }, [stop, whos]);

  const chef = (e) => {
    setWhos(e.target.value);
  };

  const yesNo = () => {
    if (whos === "aghilas") {
      setResponses(["C'est le chef qui parle"]);
    } else if (whos === "lisa") {
      setResponses(["c'est la patronne qui parle"]);
    } else {
      setResponses(["c'est les autres qui parlent"]);
    }
  };

  const clicked = () => {
    setStop(""); // Réinitialiser stop
  };

  return (
    <div>
      <h1>Autres exemples</h1>
      <label>
        Qui a le micro
        <input type="text" onChange={chef} />
      </label>
      <button onClick={clicked}>voir la réponse</button>
      {responses.map((response, index) => (
        <p key={index}>{response}</p>
      ))}
      <p>{stop}</p>
    </div>
  );
};

export default Effect2;
