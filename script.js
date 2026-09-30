const form = document.getElementById("fitnessForm");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const age = document.getElementById("age").value;
  const goal = document.getElementById("goal").value;
  const activity = document.getElementById("activity").value;
  const days = document.getElementById("days").value;
  const preference = document.getElementById("preference").value;

  loading.style.display = "block";
  result.textContent = "";

  try {
    const response = await fetch("/generate-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        age,
        goal,
        activity,
        days,
        preference
      })
    });

    const data = await response.json();

    if (data.success) {
      result.textContent = data.plan;
    } else {
      result.textContent = data.message;
    }

  } catch (error) {
    result.textContent =
      "Something went wrong. Please check the server.";
  }

  loading.style.display = "none";
});
