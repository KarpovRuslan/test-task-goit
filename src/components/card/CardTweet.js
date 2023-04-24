import { useEffect, useState } from "react";
import css from "./CardTweet.module.css";
import logo from "../../image/goit_logo.png";
import avatarDefault from "../../image/avatar.png";

export const CardTweet = ({ user }) => {
  const { id, tweets, followers, avatar = avatarDefault } = user;
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(`${id}-isFollowing`)) ?? false
  );
  const [followersNum, setFollowersNum] = useState(
    JSON.parse(localStorage.getItem(`${id}-followersNum`)) ?? followers
  );

  useEffect(() => {
    localStorage.setItem(`${id}-isFollowing`, JSON.stringify(isFollowing));
    localStorage.setItem(`${id}-followersNum`, JSON.stringify(followersNum));
  }, [id, isFollowing, followersNum]);

  const onFollowClick = () => {
    setIsFollowing(true);
    setFollowersNum(followersNum + 1);
  };
  const onFollowingClick = () => {
    setIsFollowing(false);
    setFollowersNum(followersNum - 1);
  };

  return (
    <div className={css.card}>
      <img alt="logo" className={css.logo} src={logo}></img>
      <div className={css.wrapper}>
        <div className={css.picture}></div>
        <div className={css.avatar}>
          <img alt="avatar" src={avatar} className={css.avatarInner}></img>
        </div>
      </div>
      <p className={css.tweetsText}> {tweets} tweets</p>
      <p className={css.followersText}>
        {followersNum.toLocaleString("en-US")} Followers
      </p>
      <div className={css.buttonBox}>
        {isFollowing ? (
          <button
            type="button"
            className={`${css.button} ${css.buttonFollowing}`}
            onClick={onFollowingClick}
          >
            Following
          </button>
        ) : (
          <button type="button" className={css.button} onClick={onFollowClick}>
            Follow
          </button>
        )}
      </div>
    </div>
  );
};
