import "./style.css"
import { useHistory } from "react-router-dom"

const Location=() => {
    const{push} = useHistory()
    const handleButton = () => {
        push(`/search-page`)
      }

    return(
        <>
        <div class="Location" >
                        
                                <h1>Sewa Mobil di Batam Sekarang</h1>
                                 <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                               
                                    <div class="butlocation">
                                    <button type="button" class="btn btn-success btn-sm" onClick={()=> handleButton()}>
                                    Mulai Sewa Mobil
                                        </button>
                                     </div>
                                                  
                 </div>
                 </>
    

    )
}

export default Location;