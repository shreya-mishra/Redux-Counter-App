// 1. At first component creates action to action file
// 2. After that Action dispatches that action to Store
// 3. After that store passes that action and prev state to Reducer
// 4. Where reducer do calculation and make new state and pass that new state to store
// 5. After that Store dispatch that to component

const redux = require("redux");
const createStore = redux.createStore;

// Lets make a counter app with redux

// {
//     type: "INCREMENT",
//     info : "hello"
// }

// -- action is a function that return an object that contains type and optional payload

function increment() {
  return {
    type: "INCREMENT",
  };
}

function decrement() {
  return {
    type: "DECREMENT",
  };
}

// reducer - is a function that takes 'state/initial state' and 'action' and return what its need to performed

initialState = {
  count: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
// console.log(store.getState());
store.subscribe(() => console.log("Updated state", store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
