import React from "react";

const Modal = ({ url, setUrl }) => {
  console.log("url is", url);

  return (
    <>
      <div className="backdrop" onClick={() => setUrl(null)}></div>
      <div className="modal-wrapper">
        <img className="modal-img" src={url} alt="enlarged image" />
      </div>
    </>
  );
};

export default Modal;
