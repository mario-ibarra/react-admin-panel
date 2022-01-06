import './newUser.css'
import React from 'react';

const NewUser = () => {
    return (
        <div className="newUser">

            <h1 className="newUserTitle">Add New User</h1>

            <form  className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="Johnyboy" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="1 +51255555" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Job Title</label>
                    <input type="text" placeholder="John Doe" />
                </div>
                <div className="newUserItem">
                    <label>DOB</label>
                    <input type="text" placeholder="20.10-2000" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Lenox Street 20" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>

                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>

                        <input type="radio" name="gender" id="other" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                   
                </div>
                <div className="userItemAvatar">
                    <label>Avatar</label>
                    <input type="file" />
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active"       className="newUserSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    </select>
                    
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    );
}
export default NewUser;