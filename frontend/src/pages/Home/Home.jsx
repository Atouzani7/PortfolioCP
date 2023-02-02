import "./home.scss";
import Photo from "@assets/avatar.svg";

export default function Home() {
  return (
    <div className="Homepage">
      <div className="AboutMe">
        {" "}
        <section className="photo">
          <img src={Photo} alt="avatar" className="avatar" />
          <a
            href="https://www.linkedin.com/in/asma-touzani-077268251/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/Atouzani7"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </section>
        <section className="presentation">
          <h1 className="title">Asma Touzani</h1>
          <h2 className="dev">Développeuse Web</h2>
          <p className="resume">
            De nature créative j'ai toujours eu ce besoin de laisser libre court
            à mon imagination et mes pensées. <br />
            <br />
            Fascinée par la création, et les avancées technologiques, c'est tout
            naturellement que je me suis dirigée vers la programmation qui est
            le mélange parfait entre l'inventivité et l'artisanat.
            <br />
            <br /> La monotonie ressentie lors de mes études en BTS MUC m'a
            conforté dans l'idée que le pragmatisme et moi devaient étre liés.
            <br />
            <br />
            D'un tempérament évasif, mon esprit se perdait dans les cours
            théoriques, jusqu'à atteindre les sommets voire toucher les
            nuages...
            <br />
            <br />
            La programmation m'a remis les pieds sur terre, et les doigts au
            clavier, malgré tout de même mes incessantes réflexions me menant
            aux rêves.
          </p>
        </section>
      </div>
    </div>
  );
}
