import "./Item.css";

const Item = ({card}) => {
    const {name, img, options} = card;

  return (
    <div className="card">
        <img className="card-logo" src={img} alt="lang-logo" />
        <h1 className="card-title"> {name}</h1>
    </div>
  )
}

export default Item