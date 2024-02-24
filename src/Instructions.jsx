import React from "react";

const Instructions = () => {
  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        backgroundColor: "#eee",
        opacity: "0.9",
        zIndex: "1000",
        position: "sticky",
      }}
    >
      <div
        class="modal modal-sheet  d-block bg-body-secondary p-4 py-md-5"
        tabindex="-1"
        role="dialog"
        id="modalChoice"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-3 shadow">
            <div class="modal-body p-4 text-center">
              <h5 class="mb-0">Instructions!!</h5>
              <p class="mb-0">
                Enter Email-1234@gmail.com
                <br />
                Enter Password-1234
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Instructions;
