import "./index.css";

const TechnologyCard = (props) => {
  let { cards } = props;
  let { title, description, imgUrl, className, key } = cards;
  return (
    <ul className="card-bg">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="img">
        <img src={imgUrl} />
      </div>
    </ul>
  );
};
export default TechnologyCard;
