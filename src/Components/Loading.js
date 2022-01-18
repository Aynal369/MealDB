import React from "react";

const Loading = () => {
  return (
    <div className="bd-dark d-flex align-items-center justify-content-center">
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
