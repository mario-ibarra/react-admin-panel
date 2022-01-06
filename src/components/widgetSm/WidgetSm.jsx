import {  Visibility } from '@mui/icons-material';
import React from 'react';
import faker from 'faker';
import './widgetSm.css';

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <div >
                    <img src="https://media.istockphoto.com/photos/young-beautiful-woman-picture-id1294339577?b=1&k=20&m=1294339577&s=170667a&w=0&h=_5-SM0Dmhb1fhRdz64lOUJMy8oic51GB_2_IPlhCCnU=" alt="" className="widgetSmImg"/>
                    </div>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">
                           {faker.name.findName()}
                        </span>
                        <span className="widgetSmUserTitle">
                        {faker.name.jobTitle()}
                        </span>
                        <span className="widgetSmEmail">
                         {faker.internet.email()}
                        </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Visibility
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <div >
                    <img src="https://media.istockphoto.com/photos/young-beautiful-woman-picture-id1294339577?b=1&k=20&m=1294339577&s=170667a&w=0&h=_5-SM0Dmhb1fhRdz64lOUJMy8oic51GB_2_IPlhCCnU=" alt="" className="widgetSmImg"/>
                    </div>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">
                           {faker.name.findName()}
                        </span>
                        <span className="widgetSmUserTitle">
                        {faker.name.jobTitle()}
                        </span>
                        <span className="widgetSmEmail">
                         {faker.internet.email()}
                        </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Visibility
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <div >
                    <img src="https://media.istockphoto.com/photos/young-beautiful-woman-picture-id1294339577?b=1&k=20&m=1294339577&s=170667a&w=0&h=_5-SM0Dmhb1fhRdz64lOUJMy8oic51GB_2_IPlhCCnU=" alt="" className="widgetSmImg"/>
                    </div>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">
                           {faker.name.findName()}
                        </span>
                        <span className="widgetSmUserTitle">
                        {faker.name.jobTitle()}
                        </span>
                        <span className="widgetSmEmail">
                         {faker.internet.email()}
                        </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Visibility
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <div >
                    <img src="https://media.istockphoto.com/photos/young-beautiful-woman-picture-id1294339577?b=1&k=20&m=1294339577&s=170667a&w=0&h=_5-SM0Dmhb1fhRdz64lOUJMy8oic51GB_2_IPlhCCnU=" alt="" className="widgetSmImg"/>
                    </div>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">
                           {faker.name.findName()}
                        </span>
                        <span className="widgetSmUserTitle">
                        {faker.name.jobTitle()}
                        </span>
                        <span className="widgetSmEmail">
                         {faker.internet.email()}
                        </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Visibility
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <div >
                    <img src="https://media.istockphoto.com/photos/young-beautiful-woman-picture-id1294339577?b=1&k=20&m=1294339577&s=170667a&w=0&h=_5-SM0Dmhb1fhRdz64lOUJMy8oic51GB_2_IPlhCCnU=" alt="" className="widgetSmImg"/>
                    </div>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">
                           {faker.name.findName()}
                        </span>
                        <span className="widgetSmUserTitle">
                        {faker.name.jobTitle()}
                        </span>
                        <span className="widgetSmEmail">
                         {faker.internet.email()}
                        </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Visibility
                    </button>
                </li>
                
            </ul>
        </div>
    )
}

export default WidgetSm;