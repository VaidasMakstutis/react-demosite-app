import "../css/footer.scss";
import HeaderNav from "./HeaderNav";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem omnis beatae voluptatibus, commodi possimus qui mollitia architecto eligendi
          suscipit illo blanditiis quas nemo placeat ex totam ut enim autem corrupti.
        </p>
      </div>
      <div className="footer-right">
          <div className="footer-menu">
            <HeaderNav />
          </div>
          <div className="copyright">
          © <b>DEMO</b>SITE  All rights reserved
          </div>
      </div>
    </footer>
  );
};

export default Footer;