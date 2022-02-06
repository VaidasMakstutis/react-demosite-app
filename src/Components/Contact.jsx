import "../css/index.scss";
import "../css/contact.scss";
import "../css/button.scss";

const Contact = () => {
  return (
    <section className="contact">
      <h1>contact</h1>
      <div className="contact-content">
        <div className="contact-content-left">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia repellendus ullam excepturi expedita ipsum, quas officiis asperiores
            voluptatem assumenda alias eveniet in rerum! Cum officiis repellat nihil, voluptatem expedita repudiandae.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia repellendus ullam excepturi expedita ipsum, quas officiis asperiores
            voluptatem assumenda alias eveniet in rerum! Cum officiis repellat nihil, voluptatem expedita repudiandae.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia repellendus ullam excepturi expedita ipsum, quas officiis asperiores
            voluptatem assumenda alias eveniet in rerum! Cum officiis repellat nihil, voluptatem expedita repudiandae.
          </p>
        </div>
        <div className="contact-content-form">
          <label htmlFor="name">name</label>
          <input type="text" id="name" />
          <label htmlFor="email">email</label>
          <input type="email" id="email" placeholder="test@test.com" />
          <label htmlFor="message">message</label>
          <textarea name="message" id="message"></textarea>
          <div>
            <button type="submit">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;