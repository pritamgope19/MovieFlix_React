import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import * as creators from "../../store/actions/ActionCreator";
import "./style.css";

export default function () {
  const [media_type, setMedia_type] = useState("all");
  const [time_window, setTime_window] = useState("day");
  const popularMovies = useSelector((state: any) => {
    return state.apiData.popular;
  });
  const dispatch = useDispatch();
  console.log("media_type", media_type, time_window);

  dispatch(creators.getPopular({}, `popular`));
  console.log("popularMovies", popularMovies);
  let movie2DArr: any = [];
  let tempMovieArr: any = [];
  popularMovies?.forEach((item: any, index: number) => {
    if ((index + 1) % 5 != 0) {
      tempMovieArr.push(item);
    } else {
      movie2DArr.push(tempMovieArr);
      tempMovieArr = [];
    }
  });

  return (
    <div className="popular">
      <div className="whatsPopular p-2">
        <div>
          <h3>What's Popular</h3>
        </div>
        <div className="selectList">
          <a className="selected">Streaming</a>
          <a>On TV</a>
          <a>For Rent</a>
          <a>In Theaters</a>
        </div>
      </div>
      <div id="cardHolder" className="1-1">
        {movie2DArr.map((movieAr: any[], index: number) => {
          return (
            <div className="cardContainer d-flex w-100 row m-1">
              {movieAr.map((item: any) => {
                return (
                  <Card className="movieCard p-1 col-3">
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    />
                    <Card.Body>
                      <Card.Title>{item.original_title}</Card.Title>
                      <Card.Text>{item.release_date}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
