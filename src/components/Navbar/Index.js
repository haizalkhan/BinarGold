import "./style.css"

const Navbar= () => {
    return(
        <>
<nav class="navbar navbar-expand-lg bg-nav ">
                    <div class="container-fluid tes">
                     <a class="navbar-brand custom-brand" href="#"></a>
                         <div class="collapse navbar-collapse custom-navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">

                            <a class="nav-link active text-dark" aria-current="page" href="#">Our Services </a>
                            <a class="nav-link active text-dark" aria-current="page" href="#">Why Us</a>
                            <a class="nav-link active text-dark" aria-current="page" href="#">Testimonial</a>
                            <a class="nav-link active text-dark" aria-current="page" href="#">FAQ</a>
                            </div>
                         </div>
    
                    </div>
                 </nav> 
        </>
    )
}

export default Navbar;