// ./components/home.js
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>현재 홈 페이지에 위치</h1>
      <Link to="/menu">메뉴 페이지로 이동</Link>
      <br />
      <Link to="/login">
        <button>로그인 페이지로 이동</button>
      </Link>
    </>
  );
};

export default Home;