import { CardList } from "../../components/cardList/CardList";
import css from "./Tweets.module.css";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Tweets = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.buttonBox}>
        <Link to="Home" className={css.button}>
          Back <RiArrowGoBackFill className={css.icon} />
        </Link>
      </div>
      <CardList />
    </div>
  );
};
