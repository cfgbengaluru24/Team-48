import FeedbackStats from "./FeedbackStats/FeedbackStats";
import Feedbackgpt from "./Feedbackgpt/Feedbackgpt";

export default function FeedbackSummary() {
  return (
    <div>
      <div className="feedback-stats">
        {" "}
        <FeedbackStats />{" "}
      </div>
      <div className="feedback-summary">
        <Feedbackgpt />
      </div>
    </div>
  );
}
