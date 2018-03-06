import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    isPinging: state.testReducer.isPinging
  };
}
export default connect(mapStateToProps)(({ isPinging, dispatch }) => {
  const onClick = e => {
    dispatch({
      type: "PING"
    });
  };
  return (
    <div>
      <h1>isPinging: {isPinging.toString()}</h1>
      <button onClick={onClick}>test</button>
    </div>
  );
});
