import userData from "../../db/userData.json";
import { CardTweet } from "../card/CardTweet";
import css from "./CardList.module.css";

export const CardList = () => {
  const users = userData.users;

  return (
    <div className={css.list}>
      {users.map((user) => (
        <CardTweet key={user.id} user={user} />
      ))}
    </div>
  );
};
