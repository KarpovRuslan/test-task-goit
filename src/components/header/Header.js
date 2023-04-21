import bigLogo from "../../image/goit_big.png";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <div className={css.logo}>
      <img src={bigLogo} alt="logo" width={100}></img>
      <div className={css.logoText}>Tech Test</div>
    </div>
  );
};
