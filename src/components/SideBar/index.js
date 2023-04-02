

const SideBar = () => {
    return (
      <>
        <ul className="nav side-bar">
          <div className="top-side-bar">
            <span>bcr</span>
          </div>
          <li className="nav-item">
            <a className="nav-link color" href="#our-service">
              Our Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link color" href="#why-us">
              Why Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link color" href="#testimonial">
              Testimonial
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link color" href="#faq">
              FAQ
            </a>
          </li>
        </ul>
      </>
    );
  };
  
  export default SideBar;