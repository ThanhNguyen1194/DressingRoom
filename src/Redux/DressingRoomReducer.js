import { CHON_ITEM } from "./types/DressingRoomTypes";

const stateDefault = {
    Items: {
        hairstyle:
        {
            id: "hirstyle_1",
            type: "hairstyle",
            name: "Hairstyle 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: "./images/hairstyle/hairstyle1_show.jpg",
            imgSrc_png: "./images/hairstyle/hairstyle1.png"
        }
        ,
        necklaces:
        {
            id: "necklace_1",
            type: "necklaces",
            name: "Necklace 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: "./images/necklaces/necklace1_show.jpg",
            imgSrc_png: "./images/necklaces/necklace1.png"
        }
        ,
        topclothes:
        {
            id: "topcloth_1",
            type: "topclothes",
            name: "Top Cloth 1",
            imgSrc_jpg: "./images/clothes/topcloth1_show.jpg",
            imgSrc_png: "./images/clothes/topcloth1.png"
        }
        ,
        botclothes:
        {
            id: "botcloth_1",
            type: "botclothes",
            name: "Bot Cloth 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: "./images/clothes/botcloth1_show.jpg",
            imgSrc_png: "./images/clothes/botcloth1.png"
        }
        ,
        handbags:
        {
            id: "handbag_1",
            type: "handbags",
            name: "Handbag 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: "./images/handbags/handbag1_show.jpg",
            imgSrc_png: "./images/handbags/handbag1.png"
        }
        ,
        shoes:
        {
            id: "shoes_1",
            type: "shoes",
            name: "Shoes 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: "./images/shoes/shoes1_show.jpg",
            imgSrc_png: "./images/shoes/shoes1.png",
        }
        ,
        background:
        {
            id: "background_1",
            type: "background",
            name: "Background 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: "./images/background/background1_show.jpg",
            imgSrc_png: "./images/background/background1.jpg"
        }
        ,
    },
    ChooseItem: {
        
        // imgSrc_png: "./images/clothes/topcloth1.png"
    }

}

const DressingRoomReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case CHON_ITEM: {
            let newItem = { ...state.Items }
            let newChoose = { ...state.ChooseItems }
            newChoose.imgSrc_png = action.item.imgSrc_png
            // eslint-disable-next-line default-case
            switch (action.item.type) {
                case "topclothes": {
                    newItem.topclothes = action.item
                    break;
                }
                case "botclothes": {
                    newItem.botclothes = action.item
                    break;
                }
                case "handbags": {
                    newItem.handbags = action.item
                    break;
                }
                case "hairstyle": {
                    newItem.hairstyle = action.item
                    break;
                }
                case "necklaces": {
                    newItem.necklaces = action.item
                    break;
                }
                case "shoes": {
                    newItem.shoes = action.item
                    break;
                }
                case "background": {
                    newItem.background = action.item
                    break;
                }
            }
            state.ChooseItem = newChoose
            state.Items = newItem
            return { ...state }
        }
        default: return { ...state }
    }
}
export default DressingRoomReducer;