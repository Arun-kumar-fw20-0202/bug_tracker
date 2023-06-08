import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Loginreducer } from "./Login/Login.reducer";
import { CriticalReducer } from "./Item/critical.reducer";
import { MediumReducer } from "./Item/medium.reducer";
import { LowReducer } from "./Item/low.reducer";
import { MajorReducer } from "./Item/major.reducer";

const rootReducer = combineReducers({
  Loginreducer,
  CriticalReducer,
  MajorReducer,
  LowReducer,
  MediumReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
