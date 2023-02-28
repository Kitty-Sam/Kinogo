export function* watchClickSaga() {
    console.log('rootSaga');
}

export default function* rootSaga() {
    yield watchClickSaga();
}
