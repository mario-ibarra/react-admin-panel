import './home.css';
import React from 'react';

import Chart from '../../components/chart/Chart';
import FeacturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { userData } from '../../dummyData';

const Home = () =>{
    return (
        <div className="home">
               <FeacturedInfo />
               <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
               <div className="homeWidgets">
                   <WidgetSm />
                   <WidgetLg />
                   
               </div>
        </div>
    )
}

export default Home;
