import React, { useEffect } from "react";
import Grid from "./Grid";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getGridData } from "../actions/actions";
export default function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("./data.json");
      dispatch(getGridData(data.members));
    };
    fetchData();
  }, []);
  const dataReducer = useSelector((state) => state.dataReducer);
  const { gridData } = dataReducer;
  return (
    <div
      className="col-md-9"
      style={{ border: "2px solid grey", marginLeft: "15%" }}
    >
      <Grid gridData={gridData} />
    </div>
  );
}
