import React, { useEffect, useState } from "react";
import "../Style/Deshboard.css";
import Popop, { Pop } from "../Components/Pop";
import { ChakraProvider } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  handleAddBug,
  handleGetBugs,
  handleGetCritical,
  handleGetLow,
  handleGetMedium,
} from "../Redux/Item/Item.action";
import { useLocation } from "react-router-dom";
import { Critical } from "../Components/Critical";
import { Major } from "../Components/Major";
import { Medium } from "../Components/Medium";
import { Low } from "../Components/Low";

export const Deshboard = () => {
  const dispatch = useDispatch();
  let [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const [bug, setBug] = useState("");
  let location = useLocation();
  const { critical, low, medium, major } = useSelector((store) => {
    return {
      critical: store.CriticalReducer.critical,
      low: store.LowReducer.low,
      major: store.MajorReducer.major,
      medium: store.MediumReducer.medium,
    };
  });

  const handleCreateBug1 = () => {
    setShow(true);
    setType("critical");
  };
  const handleCreateBug2 = () => {
    setShow(true);
    setType("major");
  };
  const handleCreateBug3 = () => {
    setShow(true);
    setType("medium");
  };
  const handleCreateBug4 = () => {
    setShow(true);
    setType("low");
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    setBug(e.target.value);
  };

  const handleSubmit = () => {
    let obj = {
      bug,
      type,
    };
    dispatch(handleAddBug(obj));
    setBug("");
    setShow(false);
  };

  const handleDelete = (id) => {
    alert(id);
  };

  useEffect(() => {
    dispatch(handleGetBugs);
    dispatch(handleGetCritical);
    dispatch(handleGetLow);
    dispatch(handleGetMedium);
  }, [location.search]);

  return (
    <>
      {show ? (
        <Pop
          handleChange={(e) => handleChange(e)}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          type={type}
          bug={bug}
        />
      ) : (
        ""
      )}
      {/*  */}
      <div className="main">
        <h1>BUG TRACKER</h1>
        <div className="box">
          <div className="section">
            <div className="head">
              <button onClick={handleCreateBug1}>Report Bug</button>
              <br />
              <span>Critical Severity</span>
            </div>
            <div className="list">
              {critical.length > 0 &&
                critical.map((ele) => (
                  <>
                    <Critical
                      handleDelete={handleDelete}
                      key={Math.random}
                      {...ele}
                    />
                  </>
                ))}
            </div>
          </div>
          <div className="section">
            <div className="head">
              <button onClick={handleCreateBug2}>Report Bug</button>
              <br />
              <span>Major Severity</span>
            </div>
            <div className="list">
              {major.length > 0 &&
                major.map((ele) => (
                  <>
                    <Major
                      handleDelete={handleDelete}
                      key={Math.random}
                      {...ele}
                    />
                  </>
                ))}
            </div>
          </div>
          <div className="section">
            <div className="head">
              <button onClick={handleCreateBug3}>Report Bug</button>
              <br />
              <span>Medium Severity</span>
            </div>
            <div className="list">
              {medium.length > 0 &&
                medium.map((ele) => (
                  <>
                    <Medium
                      handleDelete={handleDelete}
                      key={Math.random}
                      {...ele}
                    />
                  </>
                ))}
            </div>
          </div>
          <div className="section">
            <div className="head">
              <button onClick={handleCreateBug4}>Report Bug</button>
              <br />
              <span>Low Severity</span>
            </div>
            <div className="list">
              {low.length > 0 &&
                low.map((ele) => (
                  <>
                    <Low ke={Math.random} {...ele} />
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
