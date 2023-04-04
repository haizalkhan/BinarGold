import TextField from "../TextField";
import { useState } from "react";
import Select from "../select";
import { catOptions, hargaOptions, statusOptions } from "../constants";
import { Button, Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import "./style.css";

const apiCarURL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car"; //api search mobil dari BE data server

const FormInput = () => {
  const [valueCategory, setCategory] = useState("");
  const [valueHarga, setHarga] = useState("");
  const [valueStatus, setStatus] = useState("");
  const [valueNamaMobil, setNamaMobil] = useState("");
  const [listCars, setListCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const { push } = useHistory();

  console.log({ listCars });

  const handleOnClick = () => {
    setLoading(true);
    fetch(
      apiCarURL +
        "?" +
        new URLSearchParams({
          name: valueNamaMobil,
          category: valueCategory,
          isRented: valueStatus,
          minPrice: valueHarga,
          page: 1,
          pageSize: 10,
        })
    )
      .then((res) => res.json())
      .then((resp) => {
        const dataCar = resp.cars;
        setListCars(dataCar);
        setLoading(false);
      });
  };

  const handlePilihMobil = (param) => {
    console.log("tap");
    push(`/search-page/${param}`);
  };

  return (
    <div class="search">
      <div className="search-bar" style={{ margin: "32px" }}>
        <TextField
          labelValue={"Nama Mobil"}
          value={valueNamaMobil}
          onChange={setNamaMobil}
        />
        <Select
          labelValue={"Kategori"}
          items={catOptions}
          onChange={setCategory}
          value={valueCategory}
        />
        <Select
          labelValue={"Harga"}
          items={hargaOptions}
          onChange={setHarga}
          value={valueHarga}
        />
        <Select
          labelValue={"Status"}
          items={statusOptions}
          onChange={setStatus}
          value={valueStatus}
        />

        <Button
          color="Success"
          onClick={handleOnClick}
          type="button"
          name=""
          id=""
          className="btn btn-success btn-lg "
          >
          {loading ? (
            <>
              <Spinner size="sm">Loading...</Spinner>
              <span> Loading</span>
            </>
          ) : (
            <p>Cari Mobil</p>
            )}
        </Button>

            </div>
        {/* <br />
        <hr /> */}

        <div></div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {listCars.map(({ image, name, price, id }) => {
            return (
              <div class="card cardsearch">
                <div style={{ width: "333px", height: "478px" }}>
                  <img
                    class="card-img-top"
                    width="303px"
                    height="222px"
                    src={image}
                    alt=""
                  />
                  <div class="card-detail">
                    <h4 class="card-title">{name}</h4>
                    <p class="card-text">Rp.{price}/hari</p>
                    <p class="card-text1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <Button
                      onClick={() => handlePilihMobil(id)}
                      className="choose-btn btn-success"
                      style={{
                        width: "100px",
                        backgroundColor: "#5CB85F",
                        border: "none",
                        borderRadius: "2px",
                      }}
                    >
                      Pilih Mobil
                    </Button>
                    {/* <Button onClick={() => handlePilihMobil(id)}>hahaha</Button> */}
                    {/* <Button
                    active
                      onClick={() => handlePilihMobil(id)}
                      style={{
                        margin: "1em",
                        backgroundColor: "#5CB85F",
                        border: "none",
                        borderRadius: "2px",
                      }}
                    >
                      Pilih Mobil
                    </Button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default FormInput;

// const FormInput = () => {
//     const [valueCategory, setCategory] = useState("");
//     const [valueHarga, setHarga] = useState("");
//     const [valueStatus, setStatus] = useState("");
//     const [valueNamaMobil, setNamaMobil] = useState("");
//     const [displayResult, setDisplayResult] = useState(false);

//     const handleOnClick = () => {
//       setDisplayResult(true);
//     };

//     return (
//       <div class="searchbar" style={{ margin: "32px" }}>
//         <TextField
//           labelValue={"Nama Mobil"}
//           value={valueNamaMobil}
//           onChange={setNamaMobil}
//         />
//         <Select
//           labelValue={"Kategori"}
//           items={catOptions}
//           onChange={setCategory}
//           value={valueCategory}
//         />
//         <Select
//           labelValue={"Harga"}
//           items={hargaOptions}
//           onChange={setHarga}
//           value={valueHarga}
//         />
//         <Select
//           labelValue={"Status"}
//           items={statusOptions}
//           onChange={setStatus}
//           value={valueStatus}
//         />

//         <button onClick={handleOnClick} type="button" className="btn btn-success btn-lg btn-block"> Cari Mobil
//         </button>

//       </div>
//     );
//   };

//   export default FormInput;
