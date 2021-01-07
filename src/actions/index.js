import * as actionType from "src/actions/types";
import { api } from "src/api";

export const setData = (data) => ({
  type: actionType.SET_DATA,
  payload: { data },
});
export const setMode = (mode) => ({
  type: actionType.SET_MODE,
  payload: { mode },
});

export const setStatus = (status) => ({
  type: actionType.SET_STATUS,
  payload: { status },
});

export const addToHistory = (text) => ({
  type: actionType.ADD_TO_HISTORY,
  payload: { text },
});
export const resetProcess = () => ({
  type: actionType.RESET_PROCESS,
  payload: {},
});

export const fetchData = () => (dispatch) =>
  api
    .getData()
    .then((data) => {
      dispatch({ type: actionType.FETCH_DATA_SUCCESS });
      dispatch(setData(data));
    })
    .catch(() => dispatch({ type: actionType.FETCH_DATA_FAIL }));
