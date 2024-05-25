import Marquee from "react-fast-marquee";
import logo from "../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center mt-4">
      <img src={logo} alt="" className="mx-auto" />
      <h1>Journalism without fear and favour</h1>
      <h2>{moment().format("dddd, MMMM Do YYYY")}</h2>
      <div className="flex justify-center w-[70%] mx-auto">
        <button className="btn">Braking news</button>

        <Marquee>
          <h3>
            {" "}
            I can be a React component, multiple React components, or just some
            text.
          </h3>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
