import "../../styles/components/search/title-section.css";

function TitleSection({ title }) {
  return (
    <div className="title-section">
      <h1 className="capitalize sen-regular">{title}</h1>
    </div>
  );
}

export default TitleSection;
