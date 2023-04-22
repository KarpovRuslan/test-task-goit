import { Link, Outlet } from "react-router-dom";
import css from "./Home.module.css";
import bigLogo from "../../image/goit_big.png";
import testPhoto from "../../image/testImg.jpg";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <img src={bigLogo} alt="logo" width={100}></img>
        <div className={css.logoText}>Tech Test</div>
      </div>

      <h1>Тестове завдання</h1>
      <h3>
        Мета: створити картки твітів та додати інтерактивності при клікові на
        кнопку
      </h3>
      <img src={testPhoto} alt="testImg" className={css.testImg}></img>
      <p
        style={{ marginBottom: "20px", fontStyle: "italic", fontSize: "18px" }}
      >
        Загальний вигляд картки у двох станах - Follow та Following
      </p>
      <div className={css.buttonBox}>
        <Link to="tweets" className={css.button}>
          Go to Tweets <BsArrowRightCircleFill className={css.icon} />
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
