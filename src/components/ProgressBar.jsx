import "../styles/components/progress-bar.css";

function ProgressBar({ progressType, percentage }) {
  return (
    <div className="book-progress">
      <span>
        {progressType} progress: {percentage}%
      </span>
      <div className="progress-bar-container background-dark-gray">
        <div
          className="progress-bar background-light-blue"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
