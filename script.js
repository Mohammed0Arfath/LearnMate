const form = document.getElementById("roadmapForm");
const resultBox = document.getElementById("roadmapResult");

// Replace these with your actual IBM Watsonx values
const endpoint = "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/529e49a1-5497-457f-9094-0a5647777210/ai_service?version=2021-05-01";
const apiKey = "cpd-apikey-IBMid-6970010K8X-2025-07-31T10:26:15Z";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const goal = document.getElementById("goal").value;
  const skills = document.getElementById("skills").value;
  const hours = document.getElementById("hours").value;

  resultBox.innerText = "⏳ Generating your personalized roadmap...";

  const prompt = `
You are LearnMate, an AI education coach. A student wants to become a ${goal} and currently knows ${skills}. They can study ${hours} hours per week.

Generate a 12-week personalized learning roadmap using free online resources. For each week, include:
- Topics to learn
- Specific online resources
- A hands-on project idea
- Estimated study time
`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input: prompt })
    });

    const data = await response.json();
    resultBox.innerText = data.generated_text || JSON.stringify(data, null, 2);
  } catch (error) {
    resultBox.innerText = "❌ Error fetching roadmap: " + error.message;
  }
});
