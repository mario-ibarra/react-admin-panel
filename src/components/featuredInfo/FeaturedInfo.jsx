import React from "react";
import './featuredInfo.css';

import { ArrowDownward, ArrowUpward } from "@mui/icons-material";


const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">€ 2.415</span>
                    <span className="featuredMoneyRate">- 13.4 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">€ 40.000</span>
                    <span className="featuredMoneyRate">+ 233 <ArrowUpward className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">€ 4.424</span>
                    <span className="featuredMoneyRate">+ 8.4 <ArrowUpward className="featuredIcon "/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

        </div>
    )
}
export default FeaturedInfo;