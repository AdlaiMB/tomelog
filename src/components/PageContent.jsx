function PageContent({ children }) {
  return (
    <div className="page-content">
      <div className="page-content-margin">{children}</div>
    </div>
  );
}

export default PageContent;
