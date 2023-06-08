import {
  GET_BUG_CRITICAL,
  ERROR,
  REMOVE_BUG,
  REQUEST,
  ADD_CRITICAL,
  REMOVE_CRITICAL_BUG,
} from "./Item.actionType";

const initialState = {
  critical: [],
  isLoading: false,
  isError: false,
};

export const CriticalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return { ...state, isLoading: (state.isLoading = true) };
    case ADD_CRITICAL:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        critical: (state.critical = [...state.critical, payload]),
      };
    case ERROR:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = true),
      };

    case REQUEST:
      return { ...state, isLoading: (state.isLoading = true) };

    case GET_BUG_CRITICAL:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        critical: (state.critical = payload),
      };

    case ERROR:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = true),
      };

    case REMOVE_CRITICAL_BUG: {
      const filterPost = state.critical.filter((ele) => ele.id != payload);
      return { ...state, critical: filterPost };
    }

    default:
      return state;
  }
};
