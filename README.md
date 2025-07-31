

# 🧠 LearnMate: Your Personalized AI Education Coach

> IBM Agentic AI Project | Internship with Edunet Foundation
> Built Entirely on IBM Cloud + Render + GitHub Pages


## 🚀 Overview

**LearnMate** is an Agentic AI-powered assistant that helps students craft a **personalized 12-week learning roadmap** based on their:

* 🎯 Career Goal (e.g., Frontend Developer, UI/UX Designer, Cybersecurity Engineer)
* 💼 Current Skillset
* ⏳ Weekly Study Availability

It leverages **IBM Watsonx**, **Granite LLMs**, and dynamic LLM prompting to generate a weekly plan with:

✅ Topics to learn
✅ Free online resources
✅ Project ideas
✅ Time estimates

---

## 🧰 Tech Stack

| Component                | Tech Used                               |
| ------------------------ | --------------------------------------- |
| 💡 AI Engine             | IBM Watsonx + Granite LLM               |
| 🧠 Model Type            | Mistral Large                           |
| 🔌 Backend               | Flask API on Render (CORS Proxy)        |
| 🌐 Frontend              | GitHub Pages (HTML, CSS, JS)            |
| 🔐 Auth (Optional)       | IBM App ID *(future enhancement)*       |
| ☁️ Data Store (Optional) | IBM Cloudant *(future enhancement)*     |

---

## 📸 Live Demo

🔗 [Frontend UI](https://your-username.github.io/learnmate-ui)
🔗 [Backend API (POST only)](https://learnmate-backend.onrender.com)

> 🛑 Note: Backend only accepts `POST`. Visiting it directly gives "Method Not Allowed."

---

## 🧪 How It Works

### 1. You Enter:

```plaintext
🎯 Goal: Frontend Developer  
💼 Skills: HTML, CSS  
⏳ Weekly Hours: 8
```

### 2. LearnMate Responds with:

```yaml
📅 Week 1:
- Learn: JavaScript Basics
- Resource: MDN Web Docs
- Project: Build a to-do list app
- Time: 8 hrs

📅 Week 2:
- Learn: DOM Manipulation
...
```

---

## 📦 Folder Structure

```
learnmate-ui/
├── index.html     # User interface
├── style.css      # Custom styles
├── script.js      # Frontend logic (calls backend)
```

---

## ⚙ Backend Setup (Render)

1. Create a Python Web Service
2. Add `app.py`, `requirements.txt`
3. Add Environment Variables:

```env
IBM_API_KEY=your-api-key
IBM_ENDPOINT=https://us-south.ml.cloud.ibm.com/ml/...
```

4. Set **Start Command** to:

```bash
python app.py
```

---

## 🌐 Frontend Deployment (GitHub Pages)

1. Push `index.html`, `style.css`, `script.js` to GitHub repo
2. Go to GitHub Settings → Pages → Select `main` branch → root `/`
3. Done! App is live at `https://<username>.github.io/<repo>/`

---

## 📈 Future Enhancements

* 🧠 Adaptive feedback loop with Cloudant
* 🔐 IBM App ID user login
* 📥 PDF export of learning roadmap
* 🔄 Skill progress tracking

---

## 🤝 Acknowledgements

* 🙏 IBM & Edunet Foundation
* 🧠 [Watsonx.ai](https://www.ibm.com/products/watsonx-ai)
* ⚙️ [Render](https://render.com)
* 💻 GitHub Pages

---

## 👨‍💻 Author

**Mohammed Arfath R**
AI/ML Engineering Student, VIT Vellore
📧 [mohammedarfathr@gmail.com](mailto:mohammedarfath02003@gmail.com)
🔗 [LinkedIn](https://in.linkedin.com/in/mohammed-arfath-r)

---

> Built with ❤️, `console.log()`, and divine coffee-powered determination ☕.

---

Would you like me to generate the actual `README.md` file now for download? Or push to your GitHub repo with a PR draft?
