import './user.css';
import React from 'react';
import faker from 'faker';
import { Cake, Email, PermIdentity, Phone, Public, Publish } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={faker.image.avatar()} alt="avatar" className="userShowImg" />
                    
                    <div className="userShowBottom">
                        <span className="userShowUsername">{faker.name.findName()}</span>
                        <span className="userShowTitle">{faker.name.title()}</span>
                    </div>
                </div>

                <div className="userShowBottom">
                        <span className="userShowAccountTitle">Accounts Details</span>
                    <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">{faker.name.title()}
                        </span>
                    </div>
                    <div className="userShowInfo">
                            <Cake className="userShowIcon"/>
                        <span className="userShowInfoTitle">1.10.2000
                        </span>
                    </div>
                    <span className="userShowContactDetails">Contact Details</span>
                    <div className="userShowInfo">
                            <Phone className="userShowIcon"/>
                        <span className="userShowInfoTitle">{faker.phone.phoneNumber()}
                        </span>
                    </div>
                    <div className="userShowInfo">
                            <Email className="userShowIcon"/>
                        <span className="userShowInfoTitle">{faker.internet.email()}
                        </span>
                    </div>
                    <div className="userShowInfo">
                        <Public className="userShowIcon"/>
                        <span className="userShowInfoTitle">{`${faker.address.city()} || ${faker.address.country()}`}
                        </span>
                    </div>
                </div>
                </div>
                <div className="userUpdate">
                    <div className="userUpdateTitle">Edit</div>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input type="text"
                                placeholder={faker.name.findName()}
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input type="text"
                                placeholder={faker.name.findName()}
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone Number</label>
                                <input type="text"
                                placeholder={faker.phone.phoneNumber()}
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type="text"
                                placeholder={faker.internet.email()}
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Date Of Birth</label>
                                <input type="text"
                                placeholder="13.10-2000"
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input type="text"
                                placeholder={`${faker.address.city()} || ${faker.address.country()}`}
                                className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src={faker.image.people()} alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className="userUploadIcon"/></label>
                                <input type="file" id="file" style={{ display:'none'}} />
                            </div>
                            <button className="userUpdateButton">Update </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default User;

