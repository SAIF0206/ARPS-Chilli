const defaultState = {

}
const reducer = (state = defaultState, actions = {}) => {
    switch (actions.type) {
        case 'get_mmsi':
            return {
                ...state,
                mmsi: actions.mmsi
            }

        default:
            return state;
    }
}
export default reducer;