import React, { useState } from "react";
import { Modal, Button, Table } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import { DatePicker, Space } from "antd";

export default function Overlay(props) {
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({});
  const modalReducer = useSelector((state) => state.modalReducer);
  const { modalData } = modalReducer;
  const columns = [
    {
      title: "Start Time",
      dataIndex: "start_time",
      key: "start_time",
    },
    {
      title: "End Time",
      dataIndex: "end_time",
      key: "end_time",
    },
  ];
  const dateFormatList = ["MMM-DD-YYYY"];

  const handleOk = () => {
    props.modalClose();
  };

  const handleReset = () => {
    setShowData(false);
    setData({});
  };
  const onDate = (date, dateString) => {
    let finalDate = dateString.replaceAll("-", " ");
    let data = [];
    modalData[0].activity_periods.forEach((element) => {
      if (element.start_time.toString().substring(0, 11).trim() == finalDate) {
        let da = element;
        data.push(da);
        Promise.resolve(setData(data)).then(function () {
          setShowData(true);
        });
      }
    });
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
          <Button key="back" onClick={handleReset}>
            Reset
          </Button>
          ,
        </Space>
        <div style={{ marginTop: "30px" }}>
          {showData == true ? (
            <Table columns={columns} dataSource={data} pagination={false} />
          ) : (
            <div style={{ color: "red" }}>
              No Data Available for the selected date
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
