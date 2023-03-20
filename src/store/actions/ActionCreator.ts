import * as actionTypes from "./ActionTypes";

export const getTrending = (path) => {
  return {
    type: actionTypes.GET_TRENDING,
    value: path
  };
};

export const getTopRated = (queryParam, config) => {
  return {
    type: actionTypes.GET_TOPRATED,
    value: {
      queryParam: queryParam,
      config: config
    }
  };
};

export const getPopular = (path) => {
  return {
    type: actionTypes.GET_POPULAR,
    value: path
  };
};
