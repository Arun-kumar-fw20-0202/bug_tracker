import {
  GET_BUG_LOW,
  ERROR,
  REMOVE_BUG,
  REQUEST,
  ADD_LOW,
  REMOVE_LOW_BUG,
} from "./Item.actionType";

const initialState = {
  low: [],
  isLoading: false,
  isError: false,
};

export const LowReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return { ...state, isLoading: (state.isLoading = true) };
    case ADD_LOW:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        low: (state.low = [...state.low, payload]),
      };
    case ERROR:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = true),
      };

    case REQUEST:
      return { ...state, isLoading: (state.isLoading = true) };
    case GET_BUG_LOW:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        low: (state.low = payload),
      };
    case ERROR:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = true),
      };

    case REMOVE_LOW_BUG: {
      const filterPost = state.low.filter((ele) => ele.id != payload);
      return { ...state, low: filterPost };
    }

    default:
      return state;
  }
};
