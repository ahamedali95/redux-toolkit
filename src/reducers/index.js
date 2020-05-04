//import { combineReducers } from 'redux';
import bookReducer from './book';
import reviewReducer from './review';

// const rootReducer = combineReducers({
//   book: bookReducer,
//   review: reviewReducer
// });
//

const rootReducer = (state={}, action) => {
  return {
    review: reviewReducer(state.review, action),
    book: bookReducer(state.book, {...action, ...state.review})
  };
};

export default rootReducer;