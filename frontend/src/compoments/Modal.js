import React, { useState } from "react";
import { Modal , Button } from "antd";
import { useSelector } from "react-redux";

export default function Grid(props) {
  const modalReducer = useSelector((state) => state.modalReducer);
  const { modalData } = modalReducer;

  const handleOk = () => {
    props.modalClose();
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
