import Project from '../../components/Project';
import PageHeader from '../../components/PageHeader';

const projectData = [
  {
    title: 'CarCarO(카카로)',
    image: './projectImages/CarCarO.png',
    description:
      '2023.04.19 ~ 2023.05.11 약 3주의 기간동안 본인(팀장)을 포함 총 4명이 진행한 1차 프로젝트로, Nodejs,Express,HTML,CSS,JavaScript,MySQL 을 사용하여 만든 중고차 거래 사이트입니다. <br />저는 내차 찾기,커뮤니티,아이디/비밀번호 찾기, 관리자 회원관리, 관리자 게시판관리,마이페이지 기능을 담당하였습니다',
    technologies: 'Nodejs | Express | HTML | CSS | JavaScript | MySQL',
    github: 'https://github.com/SonGangMin/CarCarO',
    deployed: 'http://docs.yi.or.kr:3004/',
    bgcolor: '#f37737',
    id: '1',
  },
  {
    title: '모두의 무비',
    image: './projectImages/Modoo.png',
    technologies:
      'Nodejs | Express | React | MySQL | JavaScript | Redux | Saga',
    description:
      '2023.06.23 ~ 2023.08.03 약 6주의 기간동안 저 포함 총 5명이 진행한 2차프로젝트로, Nodejs,Express, React, MySQL, JavaScript, Redux, Saga를 사용하여 만든 롯데사이트의 기능에 추가적으로 모임,채팅기능을 추가한 클론코딩 사이트입니다.<br /> 저는 회원가입/로그인, 모임, 마이페이지, 관리자모임&문의페이지, 관리자페이지 속 차트 기능을 담당하였습니다. ',
    github: 'https://github.com/SonGangMin/ModooMovie',
    deployed: 'http://docs.yi.or.kr:3000/',
    bgcolor: '#29cbe0',
    id: '2',
  },
  {
    title: '모이다(Mo2Da)',
    image: './projectImages/Mo2Da.png',
    technologies: 'Nodejs | Express | React | TypeScript ',
    description:
      '백엔드/프론트엔드 전부 타입스크립트를 사용하여 4명의 팀원과 만든 토이프로젝트입니다. 저는 메인페이지, 관리자페이지를 담당하였습니다.',
    github: 'https://github.com/SonGangMin/Mo2da',
    deployed: 'http://docs.yi.or.kr:3011/',
    bgcolor: 'lightyellow',
    id: '3',
  },
  {
    title: '주변 약국지도(공공API/네이버지도 활용)',
    image: './projectImages/Pharmacy.png',
    technologies: 'Nodejs | Express | React | NaverAPI ',
    description:
      '현재 접속한 IP의 주소를 가져와, 해당하는 주소의 구에 있는 약국의 정보를 공공API로 가져와 네이버지도API를 사용하여 보여주는 사이트입니다. 약국의 주소와, 영업일을 함께 보여줍니다.',
    github: 'https://github.com/SonGangMin/pharmacy.git',
    deployed: 'https://SonGangMin.github.io/pharmacy',
    bgcolor: 'lightgreen',
    id: '4',
  },
];

const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
      />
    ));

  return (
    <section className="portfolio">
      <PageHeader title="Project" description="View my work" />
      <div className="row">
        <ProjectList />
      </div>
    </section>
  );
};

export default Portfolio;
