
import { useEffect } from "react";
import './styles/ResidentCard.css'
import useFetch from "../hooks/useFetch";

const ResidentCard = ({ url }) => {

  const [ character , getCharacter] = useFetch(url)

  useEffect(() => {
    getCharacter()
  }, []);

  return (
    <article className="resident">
      <header className="resident_header">
        <img className="resident_image" src={character?.image} alt="" />
        <div className="resident_status">
          <div className={`resident_status-circle ${character?.status}`}></div>
          <span className="resident_status-value">{character?.status}</span>
        </div>
      </header>
      <section className="resident_body">
        <h3 className="resident_name">{character?.name}</h3>
        <hr className="resident_line" />
        <ul className="resident_list">
          <li className="resident_item">
            <span className="resident_label">Specie:</span>
            <span className="resident_item-value">{character?.species}</span>
          </li>
          <li className="resident_item">
            <span className="resident_label">Origin:</span>
            <span className="resident_item-value">{character?.origin.name}</span>
          </li>
          <li className="resident_item">
            <span className="resident_label">Eppisodes where appear:</span>
            <span className="resident_item-value">{character?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
