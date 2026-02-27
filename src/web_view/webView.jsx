const CLASS = "Implementation - webView";

import ProgressBar from "../components/ProgressBar";

function chapterProgress(completed, total) {
  const percentage = total > 0 ? Math.ceil((completed / total) * 100) : 0;
  return <ProgressBar progressType="chapter" percentage={percentage} />;
}

function pageProgress(completed, total) {
  const percentage = total > 0 ? Math.ceil((completed / total) * 100) : 0;
  return <ProgressBar progressType="page" percentage={percentage} />;
}

export { chapterProgress, pageProgress };
