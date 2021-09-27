
import React, { useState } from 'react'
import "../style/profile.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    const [{ profile }, dispatch] = useGlobalState()
  
    const [image, setImage] = useState(null)
    const [firstname, setFirstname] = useState()
    const [lasename, setLasename] = useState()
    const [email, setemail] = useState()
    const uploadimage = async () => {
      

    }
    return (
<>
  

        <form class="form-style-9" method="POST" enctype="multipart/form-data">
            <legend class="border-bottom mb-4">Profile Info</legend>

            <img class="rounded-circle account-img" src="" />

            


            <div class="row">
                <div class="col">
                    <input  type="text" class="form-control" />
                </div>
                <div class="col">
                    <button className="button">Upload</button> <br/>
                </div>
            </div><br/>

            <ul>
                <li>
                    <label>First Name</label>
                    <input type="text" class="form-control"  value="" /><br/>

                </li>
                <li>
                    <label>Last Name</label>
                    <input type="text" class="form-control" value="" /><br/>
                </li>
                <li>
                    <label>Email</label>
                    <input type="email" class="form-control"  value="" /><br/>
                </li>

                <li>
                    <button class="button"> Update</button>
                </li>
            </ul>

        </form>
        <div class="media-body">
        <h2 class="account-heading"></h2>
        <small class="form-text text-muted">Username name is Fiexd</small>
        <p class="text-secondary"></p>
     
    </div>
      

        </>

    )
}

export default Profile
