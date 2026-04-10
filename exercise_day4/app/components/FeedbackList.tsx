import { Feedback } from "../actions/feedback";

export default function FeedbackList({ feedbacks }: { feedbacks: Feedback[] }) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        All Feedback
      </h2>

      {feedbacks.length === 0 ? (
        <p className="text-gray-500">No feedback yet</p>
      ) : (
        <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-2">
          {feedbacks.map((fb, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-700">
                {fb.name}
              </h3>
              <p className="text-gray-600">{fb.message}</p>
              <span className="text-sm text-black font-semibold">
                ⭐ {fb.rating}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}