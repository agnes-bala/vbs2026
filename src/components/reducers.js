"use client";

import { ActionTypes } from "./actionTypes";


const initialState = {
  quiz: {
    questions: [],
    config: {},
  },
  pager: {
    index: 0,
    size: 1,
    count: 0,
  },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.QuizLoad:
      return {
        ...state,
        quiz: action.payload,
      };

    case ActionTypes.PagerUpdate:
      return {
        ...state,
        pager: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer; // ✅ IMPORTANT