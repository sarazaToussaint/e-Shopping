import { ActiontTypes } from "../contents/action-type";

const initialState = {

    products: [
        {
          id: "1",
          title: "Dishpo",
          category: "Programmer",
        }
    ],
};

export const productReducer = (state, { type, payload}) => {
  switch (type) {
    case ActiontTypes.SET_PRODUCTS:
    return state
     default:
         return state
  }
};
