"use server";

export type Feedback = {
  name: string;
  message: string;
  rating: number;
};

let feedbackStore: Feedback[] = [];

export async function submitFeedback(formData: FormData) {
  const data: Feedback = {
    name: formData.get("name") as string,
    message: formData.get("message") as string,
    rating: Number(formData.get("rating")),
  };

  await new Promise((res) => setTimeout(res, 1000));

  feedbackStore.push(data);
}

// ⚠️ MUST be async because whole file is server
export async function getFeedbacks() {
  return feedbackStore;
}