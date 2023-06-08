import {
  GET_BUG_MEDIUM,
  ERROR,
  REMOVE_BUG,
  REQUEST,
  ADD_MEDIUM,
  REMOVE_MEDIUM_BUG,
} from "./Item.actionType";

const initialState = {
  medium: [],
  isLoading: false,
  isError: false,
};

export const MediumReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return { ...state, isLoading: (state.isLoading = true) };
    case ADD_MEDIUM:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        medium: (state.medium = [...state.medium, payload]),
      };
    case ERROR:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = true),
      };

    case REQUEST:
      return { ...state, isLoading: (state.isLoading = true) };
    case GET_BUG_MEDIUM:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        medium: (state.medium = payload),
      };
    case ERROR:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = true),
      };

    case REMOVE_MEDIUM_BUG: {
      const filterPost = state.medium.filter((ele) => ele.id != payload);
      return { ...state, medium: filterPost };
    }

    default:
      return state;
  }
};
