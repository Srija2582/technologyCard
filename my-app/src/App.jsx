import TechnologyCard from "./components/TechnologyCard/index.jsx";

import "./App.css";

const cardsList = [
  {
    id: 1,
    title: "Data Scientist",
    description:
      "Data scientists gather and analyze large sets of structured and unstructured data",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/data-scientist-img.png",
    className: "card-1",
  },
  {
    id: 2,
    title: "IOT Developer",
    description:
      "IoT Developers are professionals who can develop, manage, and monitor IoT devices.",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/iot-developer-img.png",
    className: "card-2",
  },
  {
    id: 3,
    title: "VR Developer",
    description:
      "A VR developer creates completely new digital environments that people can see.",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/vr-developer-img.png",
    className: "card-3",
  },
  {
    id: 4,
    title: "ML Engineer",
    description:
      "Machine learning engineers feed data into models defined by data scientists.",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png",
    className: "card-4",
  },
];
function App() {
  return (
    <>
      <div className="app-container">
        <h1>Learn 4.0 Technology</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          cupiditate quod ut sunt sed incidunt dolor totam dignissimos corporis,
          reiciendis dolorem sit molestiae quos amet illo consequuntur in atque
          voluptatum!
        </p>
        <ul> 
          {cardsList.map((e) => (
            <TechnologyCard cards={e} key={e.id}  />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
