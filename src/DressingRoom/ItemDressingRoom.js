import React from 'react'
import { useDispatch } from 'react-redux';
import { chooseItem } from '../Redux/Action/DressingRoomAction';
export default function ItemDressingRoom(props) {
    let dispatch = useDispatch();


    return (
        <div>
           
                <img style={{width: '100%'}} src={props.item.imgSrc_jpg} alt='topcloth1_show' />
                <h4><b>{props.item.name}</b></h4>
                <button onClick={() => {
                    
                    dispatch(chooseItem(props.item));
                }}>Thử đồ</button>
          
        </div>
    )
}
