import { useHistory } from "react-router-dom";
import "./style.css"

const Herosection= ()=>{


    const{push} = useHistory()
    const handleButton = () => {
        push(`/search-page`)
      }


    return(
        <>
      

        <div class="row-hero">
                    <div class="col-hero-kiri">
                        
                                <h1>Sewa & Rental Mobil Terbaik di kawasan Batam</h1>
                                 <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                               
                                    <div class="but">
                                    <button type="button" class="btn btn-success btn-sm" onClick={()=> handleButton()}> 
                                        Mulai Sewa Mobil
                                    </button>
                                     </div>
                                                  
                 </div>
                
                 <div class="col-hero-kanan">
        
                    <img className="mobil-hero"src="assets/car.png"/>
                </div>

                </div>
   
        </>
    )
}

export default Herosection;