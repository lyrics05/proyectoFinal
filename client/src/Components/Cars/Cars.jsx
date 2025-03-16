import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import {
  getCars,
  addFavorite,
  removeFavorite,
  getUsersDetails,
  getFavorites,
} from "../../Redux/actions";
import Search from "../Search/Search";
import swal from "sweetalert";
import style from "../Cars/Cars.module.css";
import { setPage } from "../../Redux/actions";
import Filters from "../Filters/Filters";
import Loading from "../Loading/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import img from "../Img/fondo-de-autos.webp";

export default function Cars() {
  const dispatch = useDispatch();
  const allcars = useSelector((state) => state.cars);
  const currentPage = useSelector((state) => state.currentPage);
  const [carsPerPage, setCountriesPerPage] = useState(8);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = allcars.slice(indexOfFirstCar, indexOfLastCar);
  // const [order, setOrder] = useState("");
  // const cars = useSelector((state) => state.allcars);
  // const loading = useSelector((state) => state.loading);
  // const [input, setInput] = useState("");
  const maximo = allcars.length / carsPerPage;
  const [selectedOptionAlf, setSelectedOptionAlf] = useState("");
  const [selectedOptionPrice, setSelectedOptionPrice] = useState("");
  const [selectedOptionBrand, setSelectedOptionBrand] = useState("");
  const [selectedOptionYear, setSelectedOptionYear] = useState("");
  const [selectedOptionKm, setSelectedOptionKm] = useState("");
  const loading = useSelector((state) => state.loading);
  const [favoritesState, setFavoritesState] = useState([]);
  const { user, isAuthenticated } = useAuth0();
  const userDetails = useSelector((state) => state.usersDetails);
  const userId = userDetails.length ? userDetails[0].userId : null;
  const favorites = userDetails.length ? userDetails[0].favorites : null;

  function updateSelectedOptionsIfNeeded() {
    if (currentCars.length === 0) {
      if (selectedOptionAlf !== "") {
        setSelectedOptionAlf("");
      }
      if (selectedOptionPrice !== "") {
        setSelectedOptionPrice("");
      }
      if (selectedOptionBrand !== "") {
        setSelectedOptionBrand("");
      }
      if (selectedOptionYear !== "") {
        setSelectedOptionYear("");
      }
      if (selectedOptionKm !== "") {
        setSelectedOptionKm("");
      }
    }
  }

  useEffect(() => {
    updateSelectedOptionsIfNeeded();
  }, [
    currentCars.length,
    selectedOptionAlf,
    selectedOptionPrice,
    selectedOptionBrand,
    selectedOptionYear,
    selectedOptionKm,
  ]);

  useEffect(() => {
    dispatch(getCars());
    if (user) {
      dispatch(getUsersDetails(user.email));
    }
  }, []);

  const page = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  useEffect(() => {
    getFavorites(userId);
  }, []);

  useEffect(() => {
    setFavoritesState(favorites);
  }, [favorites]);

  const setFavorites = (e) => {
    if (favoritesState === null) {
      dispatch(addFavorite(userId, e.target.value));

      setFavoritesState([e.target.value]);
      return;
    }
    if (!favoritesState.includes(e.target.value)) {
      dispatch(addFavorite(userId, e.target.value));

      setFavoritesState([...favoritesState, e.target.value]);
      return;
    }
    if (favoritesState.includes(e.target.value)) {
      dispatch(removeFavorite(userId, e.target.value));

      setFavoritesState(favoritesState.filter((car) => car !== e.target.value));
      return;
    }
  };

  function handleAlert() {
    dispatch(getCars());
    swal("Oops", "Car not found!", "error").then(() => {
      setSelectedOptionAlf("");
      setSelectedOptionPrice("");
      setSelectedOptionBrand("");
      setSelectedOptionYear("");
      setSelectedOptionKm("");
    });
  }
  const notRegistered = () => {
    swal({
      title: "Only registered users have this option.",
      icon: "error",
      button: "Ok",
    });
  };

  return (
    <>
      <Navbar />
      {/* <Filters
            setCurrentPage={setCurrentPage}
            selectedOptionAlf = {selectedOptionAlf}
            setSelectedOptionAlf ={ setSelectedOptionAlf}
            selectedOptionPrice={selectedOptionPrice}
            setSelectedOptionPrice={setSelectedOptionPrice}
            selectedOptionBrand ={selectedOptionBrand}
            setSelectedOptionBrand={setSelectedOptionBrand}
            selectedOptionYear ={selectedOptionYear}
            setSelectedOptionYear ={setSelectedOptionYear}
            selectedOptionKm ={selectedOptionKm}
            setSelectedOptionKm ={setSelectedOptionKm}
            /> */}
      <div>
        <Search />
      </div>
      <div className="relative grid grid-cols-5 gap-4">
        <div className="z-10 col-start-1 col-end-2 bg-slate-200 rounded">
          <Filters
            setCurrentPage={(page) => dispatch(setPage(page))}
            selectedOptionAlf={selectedOptionAlf}
            setSelectedOptionAlf={setSelectedOptionAlf}
            selectedOptionPrice={selectedOptionPrice}
            setSelectedOptionPrice={setSelectedOptionPrice}
            selectedOptionBrand={selectedOptionBrand}
            setSelectedOptionBrand={setSelectedOptionBrand}
            selectedOptionYear={selectedOptionYear}
            setSelectedOptionYear={setSelectedOptionYear}
            selectedOptionKm={selectedOptionKm}
            setSelectedOptionKm={setSelectedOptionKm}
          />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="col-start-2 col-span-5 z-10">
            <div className="flex flex-wrap justify-center">
              {currentCars?.length ? (
                currentCars.map((e) => {
                  return (
                    <div className={style.containerCard} key={e.carId}>
                      {isAuthenticated ? (
                        <div className={style.divEnlaceCard}>
                          <label className={style.container}>
                            <input
                              onChange={setFavorites}
                              checked={favoritesState?.includes(
                                e.carId.toString()
                              )}
                              type="checkbox"
                              value={e.carId}
                            />
                            <div className={style.checkmark}>
                              <svg viewBox="0 0 256 256">
                                <rect
                                  fill="none"
                                  height="256"
                                  width="256"
                                ></rect>
                                <path
                                  d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                                  strokeWidth="20px"
                                  stroke="#000"
                                  fill="white"
                                ></path>
                              </svg>
                            </div>
                          </label>
                        </div>
                      ) : (
                        <div className={style.divEnlaceCard}>
                          <label className={style.container}>
                            <input
                              onClick={notRegistered}
                              type="checkbox"
                              value={e.carId}
                            />
                            <div className={style.checkmarkNotRegistered}>
                              <svg viewBox="0 0 256 256">
                                <rect
                                  fill="none"
                                  height="256"
                                  width="256"
                                ></rect>
                                <path
                                  d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                                  strokeWidth="20px"
                                  stroke="#000"
                                  fill="white"
                                ></path>
                              </svg>
                            </div>
                          </label>
                        </div>
                      )}
                      <Card
                        carId={e.carId || e.id}
                        brand={e.brand}
                        img={e.img.secure_url || e.img}
                        model={e.model}
                        year={e.year}
                        kilometers={e.kilometers}
                        price={e.price}
                      />
                    </div>
                  );
                })
              ) : (
                <div className={style.cardModal}>{handleAlert()}</div>
              )}
            </div>
          </div>
        )}

        <div className="col-start-1 col-span-6">
          <Pagination
            // currentPage={currentPage}
            // setCurrentPage={setCurrentPage}
            maximo={maximo}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
