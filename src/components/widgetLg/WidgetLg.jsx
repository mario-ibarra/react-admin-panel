import React from 'react';
import faker from 'faker';
import './widgetLg.css';

const WidgetLg = () => {

    const Button = ({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    };
 
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>

                </thead>
                <tbody>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1615439244365-b9b37c99f29c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" className="widgetLgImg"/>
                            <span className="widgetLgName">{faker.name.findName()}</span>
                        </td>
                        <td className="widgetLgDate">12-10/2021</td>
                        <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1615439244365-b9b37c99f29c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" className="widgetLgImg"/>
                            <span className="widgetLgName">{faker.name.findName()}</span>
                        </td>
                        <td className="widgetLgDate">12-10/2021</td>
                        <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1615439244365-b9b37c99f29c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" className="widgetLgImg"/>
                            <span className="widgetLgName">{faker.name.findName()}</span>
                        </td>
                        <td className="widgetLgDate">12-10/2021</td>
                        <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1615439244365-b9b37c99f29c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" className="widgetLgImg"/>
                            <span className="widgetLgName">{faker.name.findName()}</span>
                        </td>
                        <td className="widgetLgDate">12-10/2021</td>
                        <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1615439244365-b9b37c99f29c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" className="widgetLgImg"/>
                            <span className="widgetLgName">{faker.name.findName()}</span>
                        </td>
                        <td className="widgetLgDate">12-10/2021</td>
                        <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1615439244365-b9b37c99f29c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" className="widgetLgImg"/>
                            <span className="widgetLgName">{faker.name.findName()}</span>
                        </td>
                        <td className="widgetLgDate">12-10/2021</td>
                        <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1615439244365-b9b37c99f29c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" className="widgetLgImg"/>
                            <span className="widgetLgName">{faker.name.findName()}</span>
                        </td>
                        <td className="widgetLgDate">12-10/2021</td>
                        <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1615439244365-b9b37c99f29c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" className="widgetLgImg"/>
                            <span className="widgetLgName">{faker.name.findName()}</span>
                        </td>
                        <td className="widgetLgDate">12-10/2021</td>
                        <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1615439244365-b9b37c99f29c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" className="widgetLgImg"/>
                            <span className="widgetLgName">{faker.name.findName()}</span>
                        </td>
                        <td className="widgetLgDate">12-10/2021</td>
                        <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1615439244365-b9b37c99f29c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" className="widgetLgImg"/>
                            <span className="widgetLgName">{faker.name.findName()}</span>
                        </td>
                        <td className="widgetLgDate">12-10/2021</td>
                        <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                    
                </tbody>
                
            </table>

        </div>
    )
}

export default WidgetLg;

