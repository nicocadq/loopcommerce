import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import { Button } from "../Form";

import Types from "../../actions/types";

import styles from "./Header.module.scss";

const User = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrop = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleSignOut = () => {
    dispatch({ type: Types.DELETE_USER });
  };

  return (
    <div className={styles["user-container"]}>
      <div onClick={handleOpenDrop}>
        <FontAwesomeIcon className={styles.icon} icon={faUser} />
        <span>My account</span>
      </div>

      {isOpen && (
        <div className={styles["options-drop"]}>
          <Button buttonType="secondary--black" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default User;
