import "twin.macro";
import { useNavigate } from "react-router-dom";
// import HomeHeader from "@/components/organisms/homeHeader";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <HomeHeader label="Home Page" /> */}
      <main> main </main>
      <footer>Footer</footer>
      <div onClick={() => navigate("/test")}>테스트 페이지로</div>
    </>
  );
};

export default Home;
