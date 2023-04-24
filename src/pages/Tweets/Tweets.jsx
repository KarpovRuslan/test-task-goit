import { useState } from "react";
import { CardList } from "../../components/cardList/CardList";
import css from "./Tweets.module.css";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import userData from "../../db/userData.json";

export const Tweets = () => {
  const users = userData.users;
  const [value, setValue] = useState("all");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.buttonBox}>
        <Link to="Home" className={css.button}>
          Back <RiArrowGoBackFill className={css.icon} />
        </Link>
      </div>
      <div className={css.filterBlock}>
        <label className={css.label}>
          Filter
          <select value={value} onChange={handleChange} className={css.list}>
            <option value="all">all</option>
            <option value="follow">follow</option>
            <option value="followings">followings</option>
          </select>
        </label>
        <p>Showing {value}</p>
      </div>
      <CardList filter={value} users={users} />
    </div>
  );
};
