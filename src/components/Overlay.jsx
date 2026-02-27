import "../styles/components/overlay.css";

function Overlay({ children }) {
  return (
    <div className="overlay">
      <div className="overlay-content">{children}</div>
    </div>
  );
}

export default Overlay;
