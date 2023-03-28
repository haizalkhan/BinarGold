import "./style.css"


const Cardfaq= ({description})=> {
    return(
    <>
                
                 <div class="col-faq-kanan">
                        <div class="card-body1">
                            <p class="card-text"> {description}</p>
                            <img class="items" src="./assets/fi-chevron-down.png"/>
                        </div>
                        
                </div>

    </>
    )
}

export default Cardfaq ;