const book = {
  books: []
};

const bookReducer = (state=book, action) => {
  console.log('book', action);
  switch (action.type) {
    case 'SET_BOOKS':
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default bookReducer;