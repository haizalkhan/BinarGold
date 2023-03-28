import "./style.css";

//props
const Cardwhyus = ({image ,description, reviewer}) => {
    // const description = props.description
    // const reviewer = props.reviewer

  return (
    <div class="card  styCard">
      <img class="card-img-top" src="holder.js/100px180/" alt="" />
      <div class="card-body">
        <img class="card-image" src={image} />
        <h4 class="card-title">{description}</h4>
        <p class="card-text">{reviewer}</p>
      </div>
    </div>
  );
};

export default Cardwhyus;
