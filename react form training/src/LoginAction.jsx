import { useActionState } from "react";

// 1. Define the Action Function
async function loginAction(prevState, formData) {
  // Get form data
  const email = formData.get("email");

  // Simulate server delay
  await new Promise((res) => setTimeout(res, 1000));

  // Validation logic
  if (email === "admin@example.com") {
    return { message: "Welcome back!", success: true };
  } else {
    return { message: "Invalid email address.", success: false };
  }
}

// 2. Create Component
function LoginForm() {
  // Initialize useActionState
  const [state, formAction, isPending] = useActionState(loginAction, {
    message: "",
    success: false,
  });

  return (
    <form action={formAction}>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        required
      />

      <button type="submit" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button>

      {state.message && (
        <p style={{ color: state.success ? "green" : "red" }}>
          {state.message}
        </p>
      )}
    </form>
  );
}

export default LoginForm;