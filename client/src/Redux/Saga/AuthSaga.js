import { takeEvery, call, put } from "redux-saga/effects";
import AxiosServices from "../../network/AxiosServices";
import { getAuthSuccess } from "../Slice/AuthSlice";

function* getAuthServices() {
  try {
    const data = yield call(() => AxiosServices({url:"https://dummyjson.com/products/1"}));
    const jsonData =yield call(res => res.json(),data)
    yield put(getAuthSuccess(jsonData));
  } catch (error) {
    console.log("🚀 ~ file: AuthSaga.js:13 ~ function*getAuthServices ~ error", error)
  }
}

function* getAuthValue() {
  yield takeEvery("auth/getAuthValue", getAuthServices);
}
export default getAuthValue;
