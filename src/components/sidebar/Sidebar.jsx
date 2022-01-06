import './sidebar.css';
import React from 'react';

import { LineStyle, TrendingUp, People,ProductionQuantityLimits, Email, BarChart, TrendingUpOutlined, AttachMoney, TextFields, Message, BarChartSharp, ReportGmailerrorredSharp, Settings, RateReview, SettingsApplications, SettingsInputComponent } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3>Dashboard</h3>
                    <ul className="sidebarList">
                    <Link to="/" className="link">
                        <li className="sidebarListItem ">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                    </Link>
                        <li className="sidebarListItem">
                            <RateReview className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpOutlined className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3>Quit Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <People className="sidebarIcon"/>
                            Users
                        </li>
                        </Link>
                        <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <ProductionQuantityLimits className="sidebarIcon"/>
                            Products
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                        <AttachMoney className="sidebarIcon"/>
                            Revenue
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon"/>  
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3>Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            
                            <Email className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <TextFields className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <Message className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3>Manage</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <BarChartSharp className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportGmailerrorredSharp  className="sidebarIcon"/>
                            Reports
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Staticts
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3>Settings</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <SettingsApplications className="sidebarIcon"/>
                            settings1
                        </li>
                        <li className="sidebarListItem">
                            <SettingsInputComponent className="sidebarIcon"/>
                            Settings 2
                        </li>
                        <li className="sidebarListItem">
                            <Settings className="sidebarIcon"/>
                            Settings 3 
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;
