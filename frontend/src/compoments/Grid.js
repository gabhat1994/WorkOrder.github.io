import React, { useState } from "react";
import { Table, Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { getModalData } from "../actions/actions";
import Modal from "./Modal";
export default function Grid(props) {
  const dispatch = useDispatch();
  const [showModal, setShowMOdal] = useState(false);
  const dataReducer = useSelector((state) => state.dataReducer);
  const { gridData } = dataReducer;
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Name",
      dataIndex: "real_name",
      key: "real_name",
    },
    {
      title: "Time Zone",
      dataIndex: "tz",
      key: "tz",
    },
    {
      title: "Action",
      key: "action",

      render: (text, record) => (
        <Space size="middle">
          <Button onClick={onClick} block>
            View Activity
          </Button>
        </Space>
      ),
    },
  ];

  const onClick = (id) => {
    if (id != null) {
      let data = gridData.filter((x) => x.id === id);
     console.log(data , "test")
    }
  };
  return (
    <div>
      <Table columns={columns} dataSource={gridData} pagination={false} />
      {showModal && <Modal />}
    </div>
  );
}
