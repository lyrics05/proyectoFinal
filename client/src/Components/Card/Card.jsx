
import React, { useEffect, useState } from "react";
import styles from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite, addToPublications, getUsersDetails } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert";

export default function Card({
  img,
  brand,
  model,
  year,
  price,
  carId,
  kilometers,
}) {


  const dispatch = useDispatch();
  function handleDeleteFavorite(e, carId) {
    e.preventDefault();
    dispatch(removeFavorite(carId));
  }


  return (
    <div className={styles.cardComponent_cardConteiner}>
        <Link to={`/cars/${carId}`}>
          {" "}
          <img className="p-15 rounded-t-lg" src={img} alt="img" />
        </Link>
        <h5 className="text-xl font-semibold tracking-tight text-white-900 dark:text-white text-left ml-2">
          {" "}
          Brand: <span className={styles.cardComponent_subtitulo}>{brand}</span>
        </h5>

        <h3 className="text-xl font-semibold tracking-tight text-white-900 dark:text-white text-left ml-2">
          {" "}
          Model: <span className={styles.cardComponent_subtitulo}>{model}</span>
        </h3>

        <p className="text-xl font-semibold tracking-tight text-white-900 dark:text-white text-left ml-2">
          {" "}
          Year: <span className={styles.cardComponent_subtitulo}>{year}</span>
        </p>

        <p className="text-xl font-semibold tracking-tight text-white-900 dark:text-white text-left ml-2">
          {" "}
          KM: <span className={styles.cardComponent_subtitulo}>{kilometers}</span>
        </p>

        <span className={styles.cardComponent_titulo}>
          $ <span className={styles.cardComponent_subtitulo}>{price}</span>
        </span>
    </div>
  );
}
