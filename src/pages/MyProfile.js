import React, { useState } from "react";
import OnboardHeader from "../components/OnboardHeader";

import Man from "../assets/icons/mandefalut.png";
import Girl from "../assets/icons/girldefault.png";
import Other from "../assets/icons/otherDefault.png";
import CustomButton from "../components/custom/CustomButton";
import { Button } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import LogoutModalImg from "../assets/icons/logoutModal.png";

const MyProfile = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [birthdayInput, setBirthdayInput] = useState(false);
  const [firstNameInput, setFirstNameInput] = useState(false);
  const [surNameInput, setSurNameInput] = useState(false);
  const [emailInput, setEmailInput] = useState(false);
  const [selectAvatar , setSelectAvator] = useState("male");
  const [ informationPopup ,setInformationPopup ] = useState(false)
  const [ showdeletePopup , setShowDeletePopup ] = useState(false)
  const [ showLogout , setShowLogout ] = useState(false)

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };
  
  const handleDeleteConfirm = () => {
    setShowDeletePopup(false); // Close delete popup
    setShowLogout(true); // Show logout popup after confirming deletion
  };

  return (
    <>
      <OnboardHeader disabled={true} selectAvatar={selectAvatar}  />

      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <label
          style={{
            display: "block",
            marginBottom: "10px",
            color: "#000000",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Profile Picture:
        </label>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          {[
            {
              id: "male",
              label: "Male",
              image: Man,
            },
            {
              id: "female",
              label: "Female",
              image: Girl,
            },
            {
              id: "transgender",
              label: "Transgender",
              image: Other,
            },
          ].map((profile) => (
            <div key={profile.id} style={{ textAlign: "center" }}>
              <img
                src={profile.image}
                alt={profile.label}
                style={{
                  border:
                    selectedProfile === profile.id
                      ? "3px solid green"
                      : "1px solid #ccc",
                  borderRadius: "8px",
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
              <button
                onClick={() => {handleProfileSelect(profile.id); setSelectAvator(profile.id)}}
                style={{
                  marginTop: "10px",
                  padding: "5px 10px",
                  backgroundColor:
                    selectedProfile === profile.id ? "#2A0181" : "#DB00FF",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {selectedProfile === profile.id ? "Selected" : "Select"}
              </button>
            </div>
          ))}
        </div>

        <label
          style={{
            display: "block",
            marginBottom: "10px",
            color: "#000000",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Personal Information:
        </label>
        <div style={{ marginBottom: "20px" }}>
          <p>
            <span style={{ color: "#000000", fontWeight: "500" }}>
              Personal ID:
            </span>
            <span style={{ display: "inline-block", marginLeft: "50px" }}>
              1980
            </span>
          </p>
          <p>
            <span style={{ color: "#000000", fontWeight: "500" }}>
              NickName:
            </span>
            <span style={{ display: "inline-block", marginLeft: "50px" }}>
              Martin James
            </span>
          </p>
          <p>
            <span style={{ color: "#000000", fontWeight: "500" }}>
              Phone No:
            </span>
            <span style={{ display: "inline-block", marginLeft: "50px" }}>
              +1253272834
            </span>
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              width: "40%",
              color: "#000000",

              fontWeight: "500",
            }}
          >
            Birthday:
          </label>
          {birthdayInput ? (
            <input
              type="text"
              placeholder="Add"
              style={{
                display: "block",
                marginTop: "10px",
                padding: "5px",
                border: "none", // Removes the default border
                borderBottom: "2px solid #000", // Adds only the bottom border
                outline: "none", // Removes the focus outline
              }}
            />
          ) : (
            <button
              onClick={() => setBirthdayInput(true)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#2A0181",
                color: "white",
                borderRadius: 30,
                width: "30%",
                height: 40,
              }}
            >
              Add
            </button>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ width: "40%", color: "#000000", fontWeight: "500" }}>
            First Name:
          </label>
          {firstNameInput ? (
            <input
              type="text"
              placeholder="Add"
              style={{
                display: "block",
                marginTop: "10px",
                padding: "5px",
                border: "none", // Removes the default border
                borderBottom: "2px solid #000", // Adds only the bottom border
                outline: "none", // Removes the focus outline
              }}
            />
          ) : (
            <button
              onClick={() => setFirstNameInput(true)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#2A0181",
                color: "white",
                borderRadius: 30,
                width: "30%",
                height: 40,
              }}
            >
              Add
            </button>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ width: "40%", color: "#000000", fontWeight: "500" }}>
            Surname:
          </label>
          {surNameInput ? (
            <input
              type="text"
              placeholder="Add"
              style={{
                display: "block",
                marginTop: "10px",
                padding: "5px",
                border: "none", // Removes the default border
                borderBottom: "2px solid #000", // Adds only the bottom border
                outline: "none", // Removes the focus outline
              }}
            />
          ) : (
            <button
              onClick={() => setSurNameInput(true)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#2A0181",
                color: "white",
                borderRadius: 30,
                width: "30%",
                height: 40,
              }}
            >
              Add
            </button>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ width: "40%", color: "#000000", fontWeight: "500" }}>
            Email:
          </label>
          {emailInput ? (
            <input
              type="email"
              placeholder="Add"
              style={{
                display: "block",
                marginTop: "10px",
                padding: "5px",
                border: "none", // Removes the default border
                borderBottom: "2px solid #000", // Adds only the bottom border
                outline: "none", // Removes the focus outline
              }}
            />
          ) : (
            <button
              onClick={() => setEmailInput(true)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#2A0181",
                color: "white",
                borderRadius: 30,
                width: "30%",
                height: 40,
              }}
            >
              Add
            </button>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ color: "#000000", fontWeight: "500" }}>Sex:</label>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <label style={{ color: "#000000", fontWeight: "500" }}>
              <input type="radio" name="sex" value="male" /> Male
            </label>
            <label style={{ color: "#000000", fontWeight: "500" }}>
              <input type="radio" name="sex" value="female" /> Female
            </label>
            <label style={{ color: "#000000", fontWeight: "500" }}>
              <input type="radio" name="sex" value="other" /> Other
            </label>
          </div>
        </div>

        <CustomButton text="Save" style={{width:'140px'}} onClick={() => {}} />
        
        <hr/>

        <div style={{position:'relative',display:'flex', justifyContent: 'center', gap:'15px', alignItems:'center', fontWeight:"700"}}> 
           Delete account: <Button style={{backgroundColor: "#4b1ead", border:'rgb(42, 1, 129)',}} onClick={()=> {setShowDeletePopup(!showdeletePopup)}}> Delete </Button>

         <FaInfoCircle size={18} style={{position:'absolute', right:'0', top:'-10px'}} onClick={()=> setInformationPopup(!informationPopup)} />
        </div>
        
        <InformationPopup show={informationPopup} onHide={() => setInformationPopup(false)} />

        <DeletePopup show={showdeletePopup} onHide={() => setShowDeletePopup(false)} onDeleteConfirm={handleDeleteConfirm} 
        />

        <LogoutPopup show={showLogout} onHide={() => setShowLogout(false)} />
      </div>
    </>
  );
};

export default MyProfile;


function InformationPopup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >      
      <Modal.Body style={{backgroundColor:"#2A0181", color:'white', fontSize:'14px', borderRadius:"10px"}}>

      <span style={{backgroundColor:"white", color:"#2A0181",fontSize:'20px', position:'absolute', right:'8px', borderRadius:'100%', top:'10px', width:'30px', textAlign:'center', fontWeight:'bolder', cursor:'pointer'}} onClick={props.onHide}> x </span>

        <h6 style={{textAlign:'center'}}> Information </h6 >
        <p> Deleting your account is a permanent action and cannot be undone. By proceeding, you will lose access to all your data, including:
        </p>
        <ul>
          <li> Coupons, rewards, and saved offers </li>
          <li> Raffle tickets </li>
          <li> Personalized settings and preferences </li>
        </ul>

        <p> Please note: </p>
        <ul> 
          <li> Once deleted, we cannot recover your data.</li>
          <li> Any pending rewards or promotions will be forfeited. </li>
          <li> You will no longer receive updates or notifications from Tagis. </li>
          <li> You're account will be deleted within 1 month. </li>
        </ul>
      </Modal.Body>
      
    </Modal>
  );
}

function DeletePopup(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >      
      <Modal.Body style={{backgroundColor:"#2A0181", color:'white', fontSize:'14px', borderRadius:"10px", display:'flex', flexDirection:'column', gap:'15px', alignItems:'center', textAlign:'center'}}>

      <span style={{backgroundColor:"white", color:"#2A0181",fontSize:'20px', position:'absolute', right:'8px', borderRadius:'100%', top:'10px', width:'30px', textAlign:'center', fontWeight:'bolder', cursor:'pointer'}} onClick={props.onHide}> x </span>

        <h5 style={{fontSize:'16px', paddingTop:'25px'}}> Are you sure you want to delete your account? </h5 >
        <p style={{fontSize:'14px'}}> Deleting your account deletes all your coupons and tickets. </p>
        <Button style={{backgroundColor:'white', color:'#2A0181',fontWeight:'bold', border:'white'}} onClick={props.onDeleteConfirm}> Delete </Button>
      </Modal.Body>
    </Modal>
  );
}

function LogoutPopup(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >      
      <Modal.Body style={{backgroundColor:"#2A0181", color:'white', fontSize:'14px', borderRadius:"10px", display:'flex', flexDirection:'column', gap:'15px', alignItems:'center', textAlign:'center', padding:'30px 0'}}>

      <span style={{backgroundColor:"white", color:"#2A0181",fontSize:'20px', position:'absolute', right:'8px', borderRadius:'100%', top:'10px', width:'30px', textAlign:'center', fontWeight:'bolder', cursor:'pointer'}} onClick={props.onHide}> x </span>

        <img src={LogoutModalImg} alt="logout"/>
        <h5 style={{fontSize:'16px', paddingTop:'25px'}}> Are you sure you want to Logout ?  </h5 >
       <div style={{display:'flex', gap:'20px'}}>
        <Button style={{backgroundColor:'white', color:'#2A0181',fontWeight:'bold', border:'white'}} onClick={props.onHide}> No </Button>
        <Button style={{backgroundColor:'white', color:'#2A0181',fontWeight:'bold', border:'white'}} onClick={props.onHide}> Yes </Button>
        
       </div>
      </Modal.Body>
    </Modal>
  );
}
