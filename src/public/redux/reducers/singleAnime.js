const initialState = {
  items: [],
  isLoading: true,
};

const singleAnime = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SINGLE_DATA_ANIME_PENDING':
    case 'FETCH_SINGLE_DATA_ANIME_REJECTED':
    case 'CLEAR_SINGLE_ANIME_PENDING':
    case 'CLEAR_SINGLE_ANIME_REJECTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_SINGLE_DATA_ANIME_FULFILLED':
      return {
        ...state,
        items: action.payload.data,
        isLoading: false,
        isLoadingFirst: false,
      };
    case 'CLEAR_SINGLE_ANIME':
    case 'CLEAR_SINGLE_ANIME_FULFILLED':
      return {
        ...state,
        items: '',
        isLoading: false,
      };
    default:
      return state;
  }
};
export default singleAnime;
