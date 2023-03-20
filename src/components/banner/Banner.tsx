import React, { Component, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import * as creators from "../../store/actions/ActionCreator";
import "./style.css";

export default function () {
  const [media_type, setMedia_type] = useState("all");
  const [time_window, setTime_window] = useState("day");
  // setMedia_type('all');
  // setTime_window('day');

  const trending = useSelector((state: any) => {
    return state.apiData.trending;
  });
  const dispatch = useDispatch();
  console.log("media_type", media_type, time_window);

  dispatch(creators.getTrending(`trending/${media_type}/${time_window}`));
  console.log("trending", trending);

  const imgBasePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className="banner">
      {trending && (
        <Carousel>
          {trending?.map(function (item: any) {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imgBasePath + item.backdrop_path}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{item.title ? item.title : item.name}</h3>
                  <p>{item.overview}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
