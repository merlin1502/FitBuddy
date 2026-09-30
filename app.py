from flask import Flask, render_template, request, jsonify
from google import genai
import os

app = Flask(__name__)

client = genai.Client(
    api_key=os.environ.get("GEMINI_API_KEY")
)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/generate", methods=["POST"])
def generate():
    data = request.json

    age = data["age"]
    goal = data["goal"]
    level = data["level"]
    days = data["days"]

    prompt = f"""
Create a simple weekly fitness plan.

Age: {age}
Goal: {goal}
Fitness Level: {level}
Workout Days: {days}

Include:
- Weekly workout schedule
- Exercises
- Sets and repetitions
- Rest days
- General nutrition tips

Keep it beginner-friendly and safe.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
