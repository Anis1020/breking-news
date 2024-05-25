import LeftSideBar from "../components/home/LeftSideBar";
import MainContent from "../components/home/MainContent";
import RightSideBar from "../components/home/RightSideBar";

const HomePage = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-12 justify-between px-6 border">
        <LeftSideBar></LeftSideBar>
        <MainContent></MainContent>
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default HomePage;
