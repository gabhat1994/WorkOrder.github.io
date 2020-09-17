import React from "react";
import { Table, Button, Space } from "antd";
export default function Grid(props) {
  const handleOnClick = (event) => {
    event.stopPropogation();
  };
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
          <Button key={record.id} onClick={handleOnClick} block>
            View Activity
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={props.gridData} pagination={false} />
    </div>
  );
}
