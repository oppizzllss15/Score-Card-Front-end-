/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
const ModalMessage = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#modalAbandonedCart"
      >
        Launch modal
      </button>

      <div
        className="modal fade right"
        id="modalAbandonedCart"
        // tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
        data-backdrop="false"
      >
        <div
          className="modal-dialog modal-side modal-bottom-right modal-notify modal-info"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <p className="heading">Alert</p>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="white-text">
                  &times;
                </span>
              </button>
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="col-3">
                  <p></p>
                  <p className="text-center">
                    <i className="fas fa-shopping-cart fa-4x"></i>
                  </p>
                </div>

                <div className="col-9">
                  <p>Do you need more time to make a purchase decision?</p>
                  <p>
                    No pressure, your product will be waiting for you in the
                    cart.
                  </p>
                </div>
              </div>
            </div>

            <div className="modal-footer justify-content-center">
              <a
                type="button"
                className="btn btn-outline-info waves-effect"
                data-dismiss="modal"
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalMessage;
