export default function(
  state = {
    isPinging: false
  },
  action
) {
  switch (action.type) {
    case "PING":
      return { ...state, isPinging: true };
      break;
    case "PONG":
      return { ...state, isPinging: false };
      break;
  }
  return state;
}
