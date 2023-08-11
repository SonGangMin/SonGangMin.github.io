import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "손강민",
    location: "대구시 동구",
    email: "thsrkdals22@gmail.com",
    availability: "Nodejs를 활용한 백&프론트 웹개발자 양성과정",
    brand: [
      "Nodejs",
      "express",
      "React",
      "MySQL",
      "HTML&CSS",
      "Javascript",
      "Typescript",
      "LINUX",
      "Github",
      "AWS",
      "Docker",
    ],
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
