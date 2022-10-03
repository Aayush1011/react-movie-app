import React from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Logout } from "../../helpers";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = ({ user }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <div className="overall">
          <div className="block">
            {user ? (
              <>
                <span>Hello {user.displayName}!</span>
                <Link to="/" onClick={Logout}>
                  <span className="log-in-out">Log Out</span>
                </Link>
              </>
            ) : (
              <>
                <Link to="/signup">
                  <span>Sign Up</span>
                </Link>
                <Link to="/login">
                  <span className="log-in-out">Log In</span>
                </Link>
              </>
            )}
          </div>
            <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </div>
      </Content>
    </Wrapper>
  );
};

export default Header;
