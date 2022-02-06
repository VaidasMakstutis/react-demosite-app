import Header from "../../src/Components/Header";
import Footer from "../../src/Components/Footer";
import PageContent from "./PageContent";
import BackButton from "./BackButton";
import "../../src/css/page.scss";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="page-container">
        <div className="page-head">
          <h1>About me</h1>
          <Link to="/">
              <BackButton />
          </Link>
        </div>
        <div className="page-content">
          <PageContent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;