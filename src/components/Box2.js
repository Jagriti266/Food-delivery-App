import "./Box2.css";

const Box2 = () => {
  return (
    <div className="box2">
      <div className="content">
        <div className="text-content-wrapper">
          <div className="text-content1">
            <div className="h3">
              <b className="create-an-account">Create an account</b>
            </div>
            <div className="h2">
              <b className="createlogin-to-an-container">
                <p className="createlogin-to-an">Create/login to an existing</p>
                <p className="account-to-get">account to get started</p>
              </b>
            </div>
            <div className="h41">
              <div className="an-account-is-container">
                <p className="createlogin-to-an">
                  An account is created with your email
                </p>
                <p className="account-to-get">and a desired password</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="image1-icon" alt="" src="../image1@2x.png" />
    </div>
  );
};

export default Box2;
