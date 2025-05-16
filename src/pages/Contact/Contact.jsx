
function Contact() {
  return (
    <main className="main-contact">
      <h2>Contact</h2>
      <div className="container">
        <img src="/paper-plane.png" alt="Avion en papier" className="paper-plane" />
        <p>Une question ? Un projet ? Lancez-vous.</p>
        <div className="socials">
          <a href="mailto:contact@jennytaranto.com"><img src="/enveloppe.png" alt="Enveloppe" /></a>
          <a href="https://github.com/Jenny-Taranto" target="_blank"><img src="/github.png" alt="Logo Github" /></a>
          <a href="https://linkedin.com/in/jenny-taranto-a81631327" target="_blank"><img src="/linkedin.png" alt="Logo LinkedIn" /></a>
        </div>
        <form name="contact" method="POST" data-netlify="true" className="form-contact">
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="name">Votre nom</label>
          <input type="text" name="name" id="name" className="input-name-mail" required />

          <label htmlFor="email">Votre e-mail</label>
          <input type="email" name="email" id="email" className="input-name-mail" required />

          <label htmlFor="message">Votre message</label>
          <textarea name="message" id="message" rows="5" className="input-message" required></textarea>

          <button type="submit">Envoyer</button>
        </form>
        <p>J'ai hâte qu'on collabore !</p>
      </div>
    </main>
  );
};

export default Contact