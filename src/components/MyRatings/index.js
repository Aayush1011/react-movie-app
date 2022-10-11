import React, { useState, useContext, useEffect } from "react";
//Components
import Grid from "../Grid";
import Actor from "../Actor";
//Image
import NoImage from "../../images/no_image.jpg";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Context
import { Context } from "../../context";
//Styles
import { Wrapper } from "./MyRatings.styles";

const MyRatings = () => {
  const [ratingUser, setRatingUser] = useContext(Context);
  return (
    <>
      {ratingUser.ratings.length > 0 ? (
        <Grid header={"My Ratings"}>
          {ratingUser.ratings.map((movie) => (
            <Actor
              key={movie.movieId}
              name={movie.name}
              character={`Rating: ${movie.score}`}
              imageUrl={
                movie.poster
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster}`
                  : NoImage
              }
              clickable
              movieId={movie.movieId}
            />
          ))}
        </Grid>
      ) : (
        <Wrapper>Please Rate Some Movies First!!!</Wrapper>
      )}
    </>
  );
};

export default MyRatings;
