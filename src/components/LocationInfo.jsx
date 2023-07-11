import './styles/LocationInfo.css';

const LocationInfo = ({ location }) => {
  return (
    <article className="info">
      <h1 className="info_title">{location?.name}</h1>
      <ul className="info_list">
        <li className="info_item">
          <span className="info_item-label">Type:</span>
          <span className="info_item-value">{location?.type}</span>
        </li>
        <li className="info_item">
          <span className="info_item-label">Dimension:</span>
          <span className="info_item-value">{location?.dimension}</span>
        </li>
        <li className="info_item">
          <span className="info_item-label">Population:</span>
          <span className="info_item-value">{location?.residents.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
