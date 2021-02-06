import axios from "axios";
import { takeEvery, put, all } from "redux-saga/effects";
import { FETCH_HOME_MULTIDATA } from "./home/constants";
import { changeBannersAction, changeRecommendsAction } from "./home/actionCreators";

function* fetchHomeMultidata(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  console.log(res);
  // yield put(changeBannersAction(res.data.data.banner.list));
  // yield put(changeRecommendsAction(res.data.data.recommend.list));
  yield all([
    yield put(changeBannersAction(res.data.data.banner.list)),
    yield put(changeRecommendsAction(res.data.data.recommend.list))
  ]);
}

function* mySaga() {
  // takeEvery 和 takeLatest 的区别：
  // takeEvery会执行所有操作；
  // takeLatest只会执行最后一个操作；
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata);

  //监听多个action：
  // yield all([
  //   yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata),
  //   yield takeEvery(FETCH_HOME_MULTIDATA_2, fetchHomeMultidata)
  // ])
}

export default mySaga;
