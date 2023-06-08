import {
  GET_BUG_MAJOR,
  ERROR,
  REQUEST,
  ADD_MAJOR,
  REMOVE_MAJOR_BUG,
} from "./Item.actionType";

const initialState = {
  major: [],
  isLoading: false,
  isError: false,
};

export const MajorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return { ...state, isLoading: (state.isLoading = true) };
    case ADD_MAJOR:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        major: (state.major = [...state.major, payload]),
      };
    case ERROR:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = true),
      };

    case REQUEST:
      return { ...state, isLoading: (state.isLoading = true) };

    case GET_BUG_MAJOR:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        major: (state.major = payload),
      };

    case ERROR:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = true),
      };

    case REMOVE_MAJOR_BUG: {
      const filterPost = state.major.filter((ele) => ele.id != payload);
      return { ...state, major: filterPost };
    }

    default:
      return state;
  }
};
