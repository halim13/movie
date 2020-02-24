const initialState = {
  items: [],
  isLoading: true,
  isLoadMore: false,
  isError: false,
};

const animes = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_ANIMES_PENDING':
    case 'CLEAR_ANIMES_PENDING':
      return {
        ...state,
        isLoading: true,
      };

    case 'FETCH_LOAD_MORE_DATA_ANIMES_PENDING':
      return {
        ...state,
        isLoadMore: true,
      };
    case 'FETCH_DATA_ANIMES_FULFILLED':
      return {
        ...state,
        items: action.payload.data.anime,
        isLoading: false,
        isError: false,
      };
    case 'FETCH_LOAD_MORE_DATA_ANIMES_FULFILLED':
      return {
        ...state,
        items: [...state.items, ...action.payload],
        isLoading: false,
        isError: false,
      };
    case 'CLEAR_ANIMES':
    case 'CLEAR_ANIMES_FULFILLED':
      return {
        ...state,
        items: [],
        isLoading: false,
        isError: false,
      };
    case 'FETCH_DATA_ANIMES_REJECTED':
    case 'CLEAR_ANIMES_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'FETCH_LOAD_MORE_DATA_ANIMES_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLoadMore: false,
      };
    default:
      return state;
  }
};
export default animes;
