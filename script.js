function generatePlan() {

    // Get values from the form
    const goal = document.getElementById("goal").value;
    const level = document.getElementById("level").value;
    const days = document.getElementById("days").value;

    // Result box
    const result = document.getElementById("result");

    let goalText = "";
    let exercises = "";

    // Goal selection
    if (goal === "weight-loss") {
        goalText = "Weight Loss";
        exercises = `
            <ul>
                <li>Walking / Light Cardio</li>
                <li>Bodyweight Squats</li>
                <li>Jumping Jacks</li>
                <li>Push-ups</li>
                <li>Plank</li>
            </ul>
        `;
    }

    else if (goal === "muscle-gain") {
        goalText = "Muscle Gain";
        exercises = `
            <ul>
                <li>Push-ups</li>
                <li>Squats</li>
                <li>Lunges</li>
                <li>Plank</li>
                <li>Resistance Exercises</li>
            </ul>
        `;
    }

    else if (goal === "strength") {
        goalText = "Strength";
        exercises = `
            <ul>
                <li>Squats</li>
                <li>Push-ups</li>
                <li>Lunges</li>
                <li>Plank</li>
                <li>Strength Exercises</li>
            </ul>
        `;
    }

    else {
        goalText = "General Fitness";
        exercises = `
            <ul>
                <li>Walking</li>
                <li>Stretching</li>
                <li>Squats</li>
                <li>Push-ups</li>
                <li>Light Cardio</li>
            </ul>
        `;
    }

    // Display the generated plan
    result.innerHTML = `
        <h3>🤖 Your AI Fitness Plan</h3>

        <p><strong>Goal:</strong> ${goalText}</p>

        <p><strong>Fitness Level:</strong> ${level}</p>

        <p><strong>Workout Days:</strong> ${days} days per week</p>

        <h4>Recommended Exercises:</h4>

        ${exercises}

        <p>
            <strong>Tip:</strong>
            Start slowly, maintain proper form and give your body
            enough rest between workouts.
        </p>
    `;

    // Scroll to result
    result.scrollIntoView({
        behavior: "smooth"
    });
}
