import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { Context } from "../../context";

const Header = ({ user }) => {
  const [ratingUser, setRatingUser] = useContext(Context);

  const Logout = async () => {
    await signOut(auth);
    setRatingUser(null);
  };
  
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
                <Link to="/myratings" >
                  <span className="log-in-out">My Ratings</span>
                </Link>
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
