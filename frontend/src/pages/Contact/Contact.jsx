import "./contact.scss";
import Send from "@assets/send.svg";

export default function Contact() {
  return (
    <div className="ContactPage">
      <form className="formContact">
        <label>
          Nom
          <input type="texte" placeholder="Nom" />
        </label>
        <label>
          E-mail
          <input type="texte" placeholder="E-mail" />
        </label>
        <label>
          Sujet
          <input type="texte" placeholder="Sujet" />
        </label>
        <label>
          Message
          <input type="texte" className="message" />
        </label>
        <button type="submit" className="submit">
          Envoyer
          <img src={Send} alt="send" className="send" />
        </button>
      </form>
    </div>
  );
}
