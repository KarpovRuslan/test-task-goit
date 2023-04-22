import css from "./SharedLayout.module.css";
import bigLogo from "../../image/goit_big.png";

export const SharedLayout = () => {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <img src={bigLogo} alt="logo" width={100}></img>
        <div className={css.logoText}>Tech Test</div>
      </div>
    </div>
  );
};
