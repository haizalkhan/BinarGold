import Navbar from "../../components/Navbar/Index";
import Herosection from "../../components/Herosection";
import Ourservices from "../../components/Ourservices";
import Whyus from "../../components/Whyus";
import Cardwhyus from "../../components/Cardwhyus";
import Testimonial from "../../components/Testimonial";
import Location from "../../components/Location";
import "./style.css";
import Faq from "../../components/Faq";
import Cardfaq from "../../components/Cardfaq";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <Herosection></Herosection>
    <Ourservices></Ourservices>
    <Whyus></Whyus>
        <div className="row-whyus">
          <Cardwhyus
            image="assets/Ellipse1.png"
            description="Mobil Lengkap"
            reviewer="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
          />
          <Cardwhyus
            image="assets/Ellipse7.png"
            description="Harga Murah"
            reviewer="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
          />
          <Cardwhyus
            image="assets/Ellipse8.png"
            description="Layanan 24 Jam"
            reviewer="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
          />
          <Cardwhyus
            image="assets/Ellipse9.png"
            description="Sopir Profesional"
            reviewer="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
          />
        </div>
        {/* <Testimonial></Testimonial> */}
        <Location></Location>
        <div class="row-faq">
          <div class="row-faq-kiri">
            <Faq></Faq>
          </div>

          <div class="row-faq-kanan">
            <Cardfaq description="Apa saja syarat yang dibutuhkan?" />
            <Cardfaq description="Berapa hari minimal sewa mobil lepas kunci?" />
            <Cardfaq description="Berapa hari sebelumnya sabaiknya booking sewa mobil?" />
            <Cardfaq description="Apakah Ada biaya antar-jemput?" />
            <Cardfaq description="Bagaimana jika terjadi kecelakaan" />
          </div>
        </div>
        <Footer></Footer>
      
    </>    
  );
};
export default LandingPage;
