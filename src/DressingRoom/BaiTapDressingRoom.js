import React from 'react'
import '../assets/css/style.css'
import BannerDressingRoom from './BannerDressingRoom'
import ChooseItemDressingRoom from './ChooseItemDressingRoom'
import ModelDressingRoom from './ModelDressingRoom'
import { useSpring, animated } from 'react-spring';
import { useSelector } from 'react-redux';


export default function BaiTapDressingRoom() {

    const animatItem = useSelector(state => state.DressingRoomReducer.ChooseItem)

    // {opacity: 0.8, display: 'block',left:"70%"},
    const [propsAnim, start] = useSpring(() => ({
        to:
            async (next) => {
                await next({opacity: 0.8, display: 'block',left:"50%"});
                await next({opacity: 0.1, display: 'block',left:"70%"});
            },
        from: { opacity: 0, display: 'none', left: "0" },
        config: { duration: 300 },
    }))

    start({
        to:
        async (next) => {
            await next({opacity: 0.8, display: 'block',left:"50%"});
            await next({opacity: 0.1, display: 'block',left:"75%"});
            await next({opacity: 0.1, display: 'none',left:"75%"});
        },
        from: { opacity: 0, display: 'none', left: "0" },
    })

    return (
        <div className="container-fluid">
            <div className='row'>
                <div className='col-sm-12'>
                    <BannerDressingRoom />
                </div>
            </div>
            <div className='row'>
                <animated.img src={animatItem.imgSrc_png} alt="" style={{ position: 'absolute', left: propsAnim.left, zIndex: 10, top: propsAnim.top, opacity: propsAnim.opacity, width: '500px', display: propsAnim.display }} />
                <div class="col-md-8">
                    <ChooseItemDressingRoom />
                </div>
                <div class="col-md-4">
                    <ModelDressingRoom />
                </div>
            </div>
        </div>

    )
}
