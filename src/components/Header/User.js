import React, { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import { deleteUser } from "../../actions/auth";

import {
  UserContainer,
  StyledFontAwesomeIcon,
  OptionsDrop,
  StyledButton,
} from "./Header.styles";

const User = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrop = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleSignOut = () => {
    dispatch(deleteUser());
  };

  return (
    <UserContainer>
      <div onClick={handleOpenDrop}>
        <StyledFontAwesomeIcon icon={faUser} />
        <span>My account</span>
      </div>

      {isOpen && (
        <OptionsDrop>
          <StyledButton buttonType="secondary--black" onClick={handleSignOut}>
            Sign Out
          </StyledButton>
        </OptionsDrop>
      )}
    </UserContainer>
  );
};

export default User;
