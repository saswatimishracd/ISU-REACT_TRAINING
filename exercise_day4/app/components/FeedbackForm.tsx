"use client";

import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { submitFeedback } from "../actions/feedback";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition disabled:opacity-50"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function FeedbackForm() {
  const router = useRouter();

  return (
    <form
      action={async (formData) => {
        await submitFeedback(formData);
        router.refresh();
      }}
      className="flex flex-col gap-4 w-full"
    >
      <h2 className="text-2xl font-bold text-gray-800">
        Feedback Form
      </h2>

      <input
        name="name"
        placeholder="Your Name"
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
        required
      />

      <textarea
        name="message"
        placeholder="Your Feedback"
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
        required
      />

      <select
        name="rating"
        className="border border-gray-300 p-2 rounded-lg text-black bg-white"
      >
        <option value="1">⭐ 1</option>
        <option value="2">⭐⭐ 2</option>
        <option value="3">⭐⭐⭐ 3</option>
        <option value="4">⭐⭐⭐⭐ 4</option>
        <option value="5">⭐⭐⭐⭐⭐ 5</option>
      </select>

      <SubmitButton />
    </form>
  );
}