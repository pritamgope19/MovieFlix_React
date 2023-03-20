import * as types from "../actions/ActionTypes";
import apiData from "../../apis/apiData";

const data = {};

export const dataReducer = (state = data, action) => {
  switch (action.type) {
    case types.GET_TRENDING:
      apiData.call("get", action.value).then((resp) => {
        state.trending = resp.results;
      });
      return state;
    case types.GET_TOPRATED:
      apiData
        .call(
          "get",
          types.GET_TOPRATED,
          action.value.queryParam,
          action.value.config
        )
        .then((resp) => {
          state.toprated = resp.results;
        });
      return state;
    case types.GET_POPULAR:
      apiData
        .call(
          "get",
          types.GET_POPULAR,
          action.value.queryParam,
          action.value.config
        )
        .then((resp) => {
          state.popular = resp.results;
        });
      return state;
    default:
      return state;
  }
};
