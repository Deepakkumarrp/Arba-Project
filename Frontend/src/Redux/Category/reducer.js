// Redux/Category/reducer.js
import * as types from './actionType';

const initialState = {
  categoryData: [],
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORY_REQUEST:
    case types.FETCH_PRODUCTS_REQUEST:
    case types.DELETE_CATEGORY_REQUEST:
    case types.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryData: action.payload,
        loading: false,
      };

    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsData: action.payload,
        loading: false,
      };

    case types.DELETE_CATEGORY_SUCCESS:
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.FETCH_CATEGORY_FAILURE:
    case types.FETCH_PRODUCTS_FAILURE:
    case types.DELETE_CATEGORY_FAILURE:
    case types.DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
