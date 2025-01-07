import { useState } from "react";
import { useEffect } from "react";

const DisplayData = ({ name, flag }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          border: "1px solid black",
          borderRadius: "10px",
          margin: "10px",
          padding: "10px",
          width: "200px",
          height: "200px",
        }}
      >
        <img
          src={flag}
          alt={name}
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <h3>{name}</h3>
      </div>
    </>
  );
};

function Display() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://xcountries-backend.azurewebsites.net/all`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent:"center"
      }}
    >
      {data.map((i) => (
        <DisplayData key={i.abbr} name={i.name} flag={i.flag} />
      ))}
    </div>
  );
}

export default Display;
