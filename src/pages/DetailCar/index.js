import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import HeaderNav from "../../components/HeaderNav";
import Background from "../../components/Background";
import "./style.css";
import FormInput from "../../components/Forminput";

const apiDetailCar = `https://bootcamp-rent-cars.herokuapp.com/customer/car`;

const DetailCar = () => {
  const { carId } = useParams();
  const [dataDetailCar, setDataDetailCar] = useState({});

  console.log({ dataDetailCar });

  useEffect(() => {
    fetch(`${apiDetailCar}/${carId}`) //https://bootcamp-rent-cars.herokuapp.com/customer/car/2410
      .then((res) => res.json())
      .then((response) => {
        setDataDetailCar(response);
      });
  }, [carId]);

  return (
    <>
      <HeaderNav></HeaderNav>
      {/* <div className="bar">
        <FormInput></FormInput>
      </div> */}
      <Background></Background>

      <div>
        <div class="details">
          <div class="detailpackage">
            <p className="about heading">Tentang Paket</p>
            <p className="include heading">Include</p>
            <ul>
              <li>Apa saja termasuk dalam paket misal durasi max 12jam</li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <p className="exclude heading">Exclude</p>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya
                Rp20.00/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>

            <p className="refund heading">Refund, Recshedule, Overtime</p>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya
                Rp20.00/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya
                Rp20.00/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya
                Rp20.00/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>

          <div class="card">
            <img
              class="card-img-top center"
              src={dataDetailCar.image}
              alt=""
              style={{ width: "100%", height: "180px" }}
            />
            <div class="card-body">
              <h4 class="card-title">{dataDetailCar.name}</h4>
              <p class="card-text">{dataDetailCar.category}</p>
            </div>

            <div
              style={{
                margin: "1em",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <b>Total</b>
              </div>
              <div>
                <b>Rp.{dataDetailCar.price}</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default DetailCar;
