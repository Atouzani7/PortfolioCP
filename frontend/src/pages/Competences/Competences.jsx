import "./competences.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5010/technos").then(({ data }) => {
      setDataInfo(data);
    });
  }, []);
  return (
    <div className="Portfoliopage">
      {dataInfo.map((elt) => {
        return (
          <div className="cardsSkills">
            <img src={elt.image} alt={elt.name} className="imgSite" />
            <h1 className="nameSite">{elt.spe}</h1>
          </div>
        );
      })}
    </div>
  );
}
