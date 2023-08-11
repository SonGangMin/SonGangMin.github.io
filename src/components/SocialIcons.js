import { SiKakaotalk } from "react-icons/si";

const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        className="icon"
        style={styles.icon}
        href="https://github.com/SonGangMin"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="손강민의 Github"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/%EA%B0%95%EB%AF%BC-%EC%86%90-1b404b288/"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="손강민의 LinkedIn"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://open.kakao.com/o/sPL5cFAf"
      >
        <SiKakaotalk />
      </a>
    </div>
  );
};

export default SocialIcons;
