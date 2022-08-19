import { CHON_ITEM } from "../types/DressingRoomTypes"

export const chooseItem = (item) => {
    return{
        type:CHON_ITEM,
        item: item
    }
}