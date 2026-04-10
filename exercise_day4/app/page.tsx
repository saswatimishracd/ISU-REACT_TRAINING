import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import { getFeedbacks } from "./actions/feedback";

export default async function Home() {
  const feedbacks = await getFeedbacks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 flex gap-8 w-[900px] max-w-full">
        <FeedbackForm />
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </div>
  );
}