import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
//import { getUsersDetails } from "../../Redux/actions";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "../UserProfile/UserProfile.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function UserProfile() {
  const { user } = useAuth0();
  console.log(user)
  const dispatch = useDispatch();
  const details = useSelector((state) => state.usersDetails);
  console.log("esto es details", details)

 /*  useEffect(()=>{
    dispatch(getUsersDetails(user.email))
  },[]) */

  return (
    <div>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.contornoGeneral}>
          <div className={styles.contornoDeImagen}>
            <img className={styles.avatar} src={details[0].picture} alt="user.img" />
            <div className={styles.tarjetaPresentacion}>
              <h2>My profile</h2>
              <div className={styles.tarjeta}>
  <h3>
    <FontAwesomeIcon icon={faUser} />{" "}
    Full Name : {details[0].name}
  </h3>
  <h5>
    <FontAwesomeIcon icon={faEnvelope} />{" "}
    Email: <span>{details[0].email}</span>
  </h5>
</div>
                <div className={styles.Buttonsss}>
                  <Link to="/mypublications">
                    <button className={styles.btn1}>My Publications</button>
                  </Link>
                  <Link to="/myfavorites">
                    <button className={styles.btn1}>My Favorites</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}
















// <h5>
//   <FontAwesomeIcon icon={solid("user")} />
//   Name: <span>{user.name}</span>
// </h5>;
