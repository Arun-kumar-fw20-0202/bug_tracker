import axios from "axios";
import {
  ADD_BUG,
  ERROR,
  GET_BUG_CRITICAL,
  GET_BUG_LOW,
  GET_BUG_MAJOR,
  GET_BUG_MEDIUM,
  REQUEST,
} from "./Item.actionType";

export const Request = () => {
  return { type: REQUEST };
};

export const addPostSuccess = (type, payload) => {
  return { type: type, payload };
};

export const getMajorBugs = (payload) => {
  return { type: GET_BUG_MAJOR, payload };
};
export const getCriticalBugs = (payload) => {
  return { type: GET_BUG_CRITICAL, payload };
};
export const getLowBugs = (payload) => {
  return { type: GET_BUG_LOW, payload };
};
export const getMediumBugs = (payload) => {
  return { type: GET_BUG_MEDIUM, payload };
};

export const Error = () => {
  return { type: ERROR };
};

//
export const handleAddBug = (data) => (dispatch) => {
  let payLoadType = "";
  const { type, bug } = data;
  if (type == "major") {
    payLoadType = "ADD_MAJOR";
  } else if (type == "critical") {
    payLoadType = "ADD_CRITICAL";
  } else if (type == "medium") {
    payLoadType = "ADD_MEDIUM";
  } else if (type == "low") {
    payLoadType = "ADD_LOW";
  }

  dispatch(Request());
  axios
    .post(`http://localhost:8080/${type}`, { bug: bug })
    .then((res) => {
      dispatch(addPostSuccess(payLoadType, res.data));
    })
    .catch((err) => {
      dispatch(Error());
    });
};

export const handleGetBugs = (dispatch) => {
  dispatch(Request);
  axios
    .get("http://localhost:8080/major")
    .then((res) => {
      dispatch(getMajorBugs(res.data));
    })
    .catch((err) => {
      Error();
    });
};

export const handleGetCritical = (dispatch) => {
  dispatch(Request);
  axios
    .get("http://localhost:8080/critical")
    .then((res) => {
      dispatch(getCriticalBugs(res.data));
    })
    .catch((err) => {
      Error();
    });
};

export const handleGetLow = (dispatch) => {
  dispatch(Request);
  axios
    .get("http://localhost:8080/low")
    .then((res) => {
      dispatch(getLowBugs(res.data));
    })
    .catch((err) => {
      Error();
    });
};

export const handleGetMedium = (dispatch) => {
  dispatch(Request);
  axios
    .get("http://localhost:8080/medium")
    .then((res) => {
      dispatch(getMediumBugs(res.data));
    })
    .catch((err) => {
      Error();
    });
};
