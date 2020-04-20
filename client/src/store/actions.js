import { GET_MMSI } from './actionTypes';
export const mmsi = (mmsi) => {
    return {
        type: "get_mmsi", //type可以使用事件名称存储器中的也可以不使用直接匹配reducer中的type
        mmsi
    }
}