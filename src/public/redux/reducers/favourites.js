const initialState = {
  items: [],
  pages: [],
  isLoading: false,
  isLoadMore: false,
  isError: false,
};

const favourites = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_FAVOUTIRES_PENDING':
    case 'CLEAR_FAVOUTIRES_PENDING':
      return {
        ...state,
        isLoading: true,
      };

    case 'FETCH_LOAD_MORE_DATA_FAVOUTIRES_PENDING':
      return {
        ...state,
        isLoadMore: true,
      };
    case 'FETCH_DATA_FAVOUTIRES_FULFILLED':
      return {
        ...state,
        items: action.payload.data.data[0].data,
        pages: action.payload.data.data[0].dataPage,
        isLoading: false,
        isError: false,
      };
    case 'FETCH_LOAD_MORE_DATA_FAVOUTIRES_FULFILLED':
      return {
        ...state,
        items: [...state.items, ...action.payload.data.data[0].data],
        pages: action.payload.data.data[0].dataPage,
        isLoading: false,
        isError: false,
      };
    case 'CLEAR_FAVOUTIRES':
    case 'CLEAR_FAVOUTIRES_FULFILLED':
      return {
        ...state,
        items: [],
        pages: [],
        isLoading: false,
        isError: false,
      };
    case 'FETCH_DATA_FAVOUTIRES_REJECTED':
    case 'CLEAR_FAVOUTIRES_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'FETCH_LOAD_MORE_DATA_FAVOUTIRES_REJECTED':
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
export default favourites;
