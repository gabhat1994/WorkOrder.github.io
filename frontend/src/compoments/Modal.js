import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useSelector } from "react-redux";
import { DatePicker, Space } from "antd";
import TimeDisplayGrid from "./TimeDisplayGrid"
import moment from "moment";

export default function Overlay(props) {
  const [showData, setShowData] = useState(false);
  const [date, setDate] = useState("");
  const modalReducer = useSelector((state) => state.modalReducer);
  const { modalData } = modalReducer;

  const dateFormatList = ["MMM-DD-YYYY"];

  const handleOk = () => {
    props.modalClose();
  };

  const onDate = (date, dateString) => {
    let finalDate = dateString.split("-");
    let newDateSting = finalDate[0] + " " + finalDate[1] + " " + finalDate[2];
    setDate(newDateSting)
    setShowData(true)


  };
  return (
    <>
      <Modal
        title="Activity Details"
        visible={props.showModal}
        onCancel={handleOk}
        width={1000}
        footer={[
          <Button key="back" onClick={handleOk}>
            Close
          </Button>,
        ]}
      >
        <p>
          Selet the date for which you want the activity details to be displayed
        </p>
        <Space direction="vertical" size={12}>
          <DatePicker
            format={dateFormatList}
            onChange={(date, dateString) => onDate(date, dateString, 1)}
          />
        </Space>
        {showData && <TimeDisplayGrid />}
      </Modal>
    </>
  );
}
