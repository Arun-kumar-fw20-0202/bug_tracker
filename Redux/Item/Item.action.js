import axios from "axios";
import {
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

export const handleDelete = (type, payload) => {
  // axios.delete
  console.log(type, payload);
  return { type: type, payload };
};
//

export const removeBugdata = (data) => async (dispatch) => {
  const { id, type } = data;
  var payLoadType = "";

  if (type == "major") {
    payLoadType = "REMOVE_MAJOR_BUG";
  } else if (type == "critical") {
    payLoadType = "REMOVE_CRITICAL_BUG";
  } else if (type == "medium") {
    payLoadType = "REMOVE_MEDIUM_BUG";
  } else if (type == "low") {
    payLoadType = "REMOVE_LOW_BUG";
  }
  try {
    const res = await fetch(
      `https://bug-tracker-data.onrender.com/${type}/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    dispatch(handleDelete(payLoadType, id));
    // window.location.reload();
  } catch (e) {
    console.log(e);
  }
};

//
export const handleAddBug = (data) => (dispatch) => {
  const { type, bug } = data;
  let payLoadType = "";
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
    .post(`https://bug-tracker-data.onrender.com/${type}`, { bug: bug })
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
    .get("https://bug-tracker-data.onrender.com/major")
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
    .get("https://bug-tracker-data.onrender.com/critical")
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
    .get("https://bug-tracker-data.onrender.com/low")
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
    .get("https://bug-tracker-data.onrender.com/medium")
    .then((res) => {
      dispatch(getMediumBugs(res.data));
    })
    .catch((err) => {
      Error();
    });
};
