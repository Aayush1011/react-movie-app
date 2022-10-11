import React, { useContext, useEffect, useState } from "react";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import PropTypes from "prop-types";
// Components
import Thumb from "../Thumb";
import Rate from "../Rate";
import { db } from "../../firebase-config";
import Alert from "./Alert";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//Image
import NoImage from "../../images/no_image.jpg";
// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";
// Context
import { Context } from "../../context";

const MovieInfo = ({ movie, user }) => {
  const [ratingUser, setRatingUser] = useContext(Context);
  const [show, setShow] = useState(false);

  const setAlert = () => {
    setShow(false);
  };

  const handleRating = async (value) => {
    try {
      if (ratingUser.ratings.length > 0) {
        const new_ratings = ratingUser.ratings.filter(
          (rating) => rating.movieId !== movie.id
        );
        new_ratings.push({
          movieId: movie.id,
          name: movie.title,
          score: Number(value),
          poster: movie.poster_path,
        });
        setRatingUser({ email: ratingUser.email, ratings: new_ratings });
        await updateDoc(doc(db, "movies", ratingUser.email), {
          email: ratingUser.email,
          ratings: new_ratings,
        });
      } else {
        const ratings = [];
        ratings.push({
          movieId: movie.id,
          name: movie.title,
          score: Number(value),
          poster: movie.poster_path,
        });
        setRatingUser({ email: ratingUser.email, ratings });
        await setDoc(doc(db, "movies", ratingUser.email), {
          email: ratingUser.email,
          ratings,
        });
      }
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text showText={"hide"}>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          {user && (
            <div className="rate-movie">
              <h3>RATE MOVIE</h3>
              <Rate callback={handleRating} />
              <>
                {show && (
                  <Alert
                    msg={"Movie Successfully Rated!!!"}
                    removeAlert={setAlert}
                  />
                )}
              </>
            </div>
          )}
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
