import aboutMeImg from "../images/aboutme.jpeg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Img from "../images/손강민.jpg";
import { styled } from "styled-components";
// import resume from "../pages/about/michael-yeates-resume.pdf";
import Card from "../images/Card.pdf";

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = Card;
    link.download = "Card.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    // <p style={{ color: "grey" }}>Stay tuned for updates!</p>
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={Img} alt={name} />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4>인삿말</h4>
            <h5>저는 항상 발전하는 개발자입니다.</h5>

            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>이름: </span>
                  <p>손강민</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>생년월일: </span>
                  <p>1993.06.28</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>주소: </span>
                  <p>{location}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>수료내역: </span>
                  <p>{availability}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>핸드폰번호: </span>
                  <p>010 - 4977 - 5695</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>이메일: </span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="contentDescription">
                <span>보유기술: </span>
                <BrandArea>
                  {brand.map((item) => {
                    return <div key={item}>{item}</div>;
                  })}
                </BrandArea>
              </div>
            </div>
            <div className="buttonContainer">
              <button
                className="btn downloadCV"
                onClick={handleDownload}
                disabled={downloading}
              >
                {downloading ? "Downloading..." : "Download Resume"}
              </button>{" "}
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const BrandArea = styled.div`
  display: flex;
  margin-top: 0.5rem;

  > div {
    margin-right: 0.5rem;
    font-weight: bold;
    padding: 0.2rem;
    border: 2px solid white;
    border-radius: 10px;

    &:hover {
      color: white;
    }
  }
`;

export default AboutMe;
