import React , {useEffect } from "react";
import Grid from "./Grid"
import axios from "axios";
import { useDispatch } from "react-redux";
import {gridData} from "../actions/actions"
export default function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("./data.json");
      dispatch(gridData(data.members));
    };
    fetchData();
  }, []);
  return (
    <div
      className="col-md-9"
      style={{ border: "2px solid grey", marginLeft: "15%" }}
    >
      <Grid />
    </div>
  );
}
