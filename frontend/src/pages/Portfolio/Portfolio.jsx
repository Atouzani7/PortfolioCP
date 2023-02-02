import "./portfolio.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Competences() {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5010/projets").then(({ data }) => {
      setDataInfo(data);
    });
  }, []);

  return (
    <div className="Portfoliopage">
      {dataInfo.map((elt) => {
        return (
          <div className="cards">
            <img src={elt.image} alt={elt.name} className="imgSite" />
            <h1 className="nameSite">{elt.name}</h1>
            <p className="DescriptionSite">{elt.description}</p>
            <a href={elt.lien} className="lienSite">
              Le lien Github vers{elt.name}
            </a>
          </div>
        );
      })}
    </div>
  );
}
