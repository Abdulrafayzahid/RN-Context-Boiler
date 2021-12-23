import * as appAction from './appReducerActions';

export const initialState = {
  likeCount: 0,
  commentCount: 0,
};

export function appReducer(state, action) {
  switch (action.type) {
    case appAction.INCREASE_LIKE: {
      return {...state, likeCount: state.likeCount + 1};
    }
    case appAction.INCREASE_COMMENT: {
      return {...state, commentCount: state.commentCount + 1};
    }
    default:
      return state;
  }
}
