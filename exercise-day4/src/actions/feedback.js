let feedbacks = [];

export async function submitFeedback(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      feedbacks.push(data);
      resolve({ success: true });
    }, 500);
  });
}

export function getFeedbacks() {
  return feedbacks;
}