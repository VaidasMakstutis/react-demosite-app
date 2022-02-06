import "../css/index.scss";
import "../css/welcome.scss";
import picture from "../Assets/alexandra-gorn-unsplash.jpg";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-content">
        <h1>welcome</h1>
        <div className="welcome-content-box">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ducimus harum sint voluptas dicta, sed unde aspernatur porro, tenetur
            dolorum nesciunt tempore ab consequatur. Corporis saepe inventore veritatis consequuntur adipisci?
          </p>
          <div className="button-pos">
            <button>Learn more</button>
          </div>
        </div>
      </div>

      <div className="ux-ui-design">
        <img src={picture} alt="ux-ui design" />
        <div className="ux-ui-design-content">
          <h2>ux/ui design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ducimus harum sint voluptas dicta, sed unde aspernatur porro, tenetur
            dolorum nesciunt tempore ab consequatur. Corporis saepe inventore veritatis consequuntur adipisci?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ducimus harum sint voluptas dicta, sed unde aspernatur porro, tenetur
            dolorum nesciunt tempore ab consequatur. Corporis saepe inventore veritatis consequuntur adipisci?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
