const form = document.getElementById("roadmapForm");
const resultBox = document.getElementById("roadmapResult");

// ✅ YOUR Render.com backend URL here
const backendUrl = "https://learnmate-backend.onrender.com";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const goal = document.getElementById("goal").value;
  const skills = document.getElementById("skills").value;
  const hours = document.getElementById("hours").value;

  resultBox.innerText = "⏳ Generating your personalized roadmap...";

  try {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ goal, skills, hours })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // 💡 Adjust this line based on what your backend returns
    resultBox.innerText = data.generated_text || JSON.stringify(data, null, 2);
  } catch (error) {
    resultBox.innerText = "❌ Error fetching roadmap: " + error.message;
  }
});
