import React, { useState } from "react";
import userData from "../../db/userData.json";
import { CardTweet } from "../card/CardTweet";
import css from "./CardList.module.css";

export const CardList = () => {
  const users = userData.users;
  const cardsPerRow = 3;
  const [next, setNext] = useState(cardsPerRow);
  const handleMoreCards = () => {
    setNext(next + cardsPerRow);
  };

  return (
    <>
      <div className={css.list}>
        {users.slice(0, next).map((user) => (
          <CardTweet key={user.id} user={user} />
        ))}
      </div>
      <div className={css.buttonBox}>
        {next < users.length && (
          <button onClick={handleMoreCards} className={css.button}>
            Load more
          </button>
        )}
      </div>
    </>
  );
};
