import "../styles/components/page-content.css";

function PageContent({ children }) {
  return (
    <div className="page-content background-white">
      <div className="page-content-margin">{children}</div>
    </div>
  );
}

export default PageContent;
