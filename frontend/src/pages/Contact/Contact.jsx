import "./contact.scss";
import Send from "@assets/send.svg";

export default function Contact() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="ContactPage">
      <form className="formContact" onChange={handleSubmit}>
        <label>
          Nom
          <input type="texte" placeholder="Nom" onChange={handleSubmit} />
        </label>
        <label>
          E-mail
          <input onChange={handleSubmit} type="texte" placeholder="E-mail" />
        </label>
        <label>
          Sujet
          <input onChange={handleSubmit} type="texte" placeholder="Sujet" />
        </label>
        <label className="message">
          Message
          <textarea />
        </label>
        <button onChange={handleSubmit} type="submit" className="submit">
          Envoyer
          <img src={Send} alt="send" className="send" />
        </button>
      </form>
    </div>
  );
}
