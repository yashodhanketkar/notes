import React, { useEffect, useState } from "react";

function App(): React.ReactElement {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  console.log(data);
  return (
    <>
      <h1 className="text-red-500">Home</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}

export default App;
