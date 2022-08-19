import React from 'react'
import DateClothes from '../Data/Data.json'
import ItemDressingRoom from './ItemDressingRoom'
const arrItems = { ...DateClothes }

export default function ChooseItemDressingRoom() {

  

    const renderChooseItem = (typeItem) => {
        return arrItems.tabPanes.filter((Item) => Item.type === typeItem).map((Item, index) => {
            return <div className="col-md-3" key={index}>
                <div className="card text-center">
                    <ItemDressingRoom item ={Item}/>
                </div>

            </div>

        })

    }
    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active  btn-default" data-toggle="pill" href="#tabTopClothes">Áo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  btn-default" data-toggle="pill" href="#tabBotClothes">Quần</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#tabShoes">Giày dép</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#tabHandBags">Túi xách</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#tabNecklaces">Dây chuyền</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#tabHairStyle">Kiểu tóc</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#tabBackground">Nền</a>
                </li>
            </ul>
            <div className="well">
                <div className="tab-content">
                    <div className="tab-pane container active" id="tabTopClothes">
                        <div className="container">
                      
                            <div className="row">
                            {renderChooseItem("topclothes")}
                               
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabBotClothes">
                        <div className="container">
                            <div className="row">
                                {renderChooseItem("botclothes")}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabShoes">
                    <div className="container">
                            <div className="row">
                                {renderChooseItem("shoes")}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabHandBags">
                    <div className="container">
                            <div className="row">
                                {renderChooseItem("handbags")}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabNecklaces">
                    <div className="container">
                            <div className="row">
                                {renderChooseItem("necklaces")}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabHairStyle">
                    <div className="container">
                            <div className="row">
                                {renderChooseItem("hairstyle")}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabBackground">
                    <div className="container">
                            <div className="row">
                                {renderChooseItem("background")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
