import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import * as creators from "../../store/actions/ActionCreator";
import styled from "styled-components";

const Populardiv = styled.div`
  background-color: #083c515e;
  padding-top: 20px;
`;
const Selectlist = styled.div`
  padding: 5px;
  margin-left: 10px;
  border: 1px solid black;
  border-radius: 25px;
`;
const WhatsPopular = styled.div`
  display: flex;
  padding: 2;
`;
const Anchor = styled.a`
  padding: 5px;
  &.selected {
    background-color: blue;
    border-radius: 25px;
    color: white;
    text-decoration: none;
  }
`;
const Moviecard = styled(Card)`
  padding: 0.25rem;
`;
const Cardcontainer = styled(Card)`
  height: 250px;
`;
export default function () {
  const dispatch = useDispatch();

  dispatch(creators.getPopular({}, `popular`));

  const popularMovies = useSelector((state: any) => {
    return state.apiData.popular;
  });
  useEffect(() => {
    console.log("popularMovies", popularMovies);
  }, [popularMovies]);

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
    <Populardiv>
      <WhatsPopular>
        <div>
          <h3>What's Popular</h3>
        </div>
        <Selectlist>
          <Anchor className="selected">Streaming</Anchor>
          <Anchor>On TV</Anchor>
          <Anchor>For Rent</Anchor>
          <Anchor>In Theaters</Anchor>
        </Selectlist>
      </WhatsPopular>
      <div id="cardHolder" className="m-1">
        {movie2DArr.map((movieAr: any[], index: number) => {
          return (
            <div className="cardContainer w-100 row m-1">
              {movieAr.map((item: any) => {
                return (
                  <Moviecard className="col-sm-3 col-md-3">
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    />
                    <Card.Body>
                      <Card.Title>{item.original_title}</Card.Title>
                      <Card.Text>{item.release_date}</Card.Text>
                    </Card.Body>
                  </Moviecard>
                );
              })}
            </div>
          );
        })}
      </div>
    </Populardiv>
  );
}
