import React from "react";
import Button from "../Button/Button";
// import "./";

/**
 *
 * @param  person String - Describes the user, either Guest or Registered user
 * @param   title [] - list of titles for buttons
 */

const CreateEventBtn = (props) => {
  return <Button {...props} />;
};
const ManageEventBtn = (props) => {
  return <Button {...props} />;
};
function WelcomeComponent({
  person = "Guest",
  createBtnProps = {},
  manageBtnProps = {},
}) {
  return (
    <div className="event-box">
      <h3 className="event-box__title">{`Welcome ${person}`} </h3>
      <CreateEventBtn {...createBtnProps} />
      <ManageEventBtn {...manageBtnProps} />
    </div>
  );
}

export default WelcomeComponent;
