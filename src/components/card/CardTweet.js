import React, { useEffect, useState } from "react";
import css from "./CardTweet.module.css";
import logo from "../../image/goit_logo.png";

export const CardTweet = ({ user }) => {
  const { id } = user;
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(`${id}-isFollowing`)) ?? false
  );

  useEffect(() => {
    localStorage.setItem(`${id}-isFollowing`, JSON.stringify(isFollowing));
  }, [isFollowing]);

  const onFollowClick = () => {
    setIsFollowing(true);
  };
  const onFollowingClick = () => {
    setIsFollowing(false);
  };
  return (
    <div className={css.card}>
      <img alt="logo" className={css.logo} src={logo}></img>
      <div className={css.wrapper}>
        <div className={css.picture}></div>
        <div className={css.avatar}>
          <div className={css.avatarInner}></div>
        </div>
      </div>
      <p className={css.tweetsText}> 777 tweets</p>
      <p className={css.followersText}>100,500 Followers</p>
      <div className={css.buttonBox}>
        {isFollowing ? (
          <button
            type="button"
            className={css.button}
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
