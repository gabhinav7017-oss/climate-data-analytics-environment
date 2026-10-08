# Climate Data Analytics Environment

This repository contains a full-stack **Climate Data Analytics Environment** comprising a Python backend data pipeline and a modern, high-tech React dashboard for data visualization. 

This project aims to provide scalable, multidisciplinary tools to ingest, process, and analyze heterogeneous environmental datasets, helping stakeholders derive actionable insights for climate resilience.

---

## 📚 Documentation & Project Context

### 1. Research Papers & Theoretical Context
The architecture and goals of this project are heavily inspired by recent literature emphasizing **integrated, theory-guided data science paradigms** in climate analytics. 

Key research themes considered:
- **Theory-Guided Data Science (TGDS):** Integrating physical scientific theories (e.g., thermodynamics) with machine learning to prevent spurious correlations in complex climate systems.
- **Big Data Analytics Frameworks for Climate Resilience:** Leveraging scalable pipelines to handle the volume and velocity of environmental data.
- **AI-driven Climate Risk Assessment:** Using predictive analytics to forecast extreme weather events (heatwaves, floods) and their cascading effects.

*References generally considered in this domain include methodologies for linking raw observational data (like NetCDF satellite data) with deep learning pattern recognition.*

### 2. How It Works (Working Architecture)
The environment is split into modular layers:

- **Data Ingestion & Processing Layer (Backend):** 
  Built with **Python & FastAPI**, this layer is designed to act as an ETL (Extract, Transform, Load) pipeline. Currently, it serves simulated KPIs, carbon emissions, and temperature trend data. In production, it is built to hook into APIs from NOAA, NASA (Earthdata), and IPCC datasets using Pandas/Xarray for aggregation.
- **Presentation Layer (Frontend):** 
  A modern single-page application built with **React and Vite**. It utilizes a dark-mode glassmorphism design system to render complex data accessible. Interactive visualizations are powered by **Recharts**, presenting global anomalies, emission sector breakdowns, and more.

### 3. Resources & Technology Stack Used
- **Frontend:** React, Vite, Recharts, Lucide-React, Vanilla CSS (Glassmorphism aesthetic).
- **Backend:** Python, FastAPI, Uvicorn, Pandas, Numpy.
- **Design Inspiration:** Modern premium UI designs prioritizing visual excellence, fluid gradients, and data clarity.

---

## 🚀 Getting Started

### 1. Run the Backend

You will need Python installed (3.8+ recommended).

```bash
cd backend
python -m venv venv
# On Windows use `venv\Scripts\activate`, on Mac/Linux use `source venv/bin/activate`
pip install -r requirements.txt
python main.py
```
*The backend API will run on http://localhost:8001*

### 2. Run the Frontend

You will need Node.js installed.

```bash
cd frontend
npm install
npm run dev
```
*The frontend dashboard will run on http://localhost:5173*

---

## 💡 Expected Insights & Outcomes
- **Regional Temperature Trends:** Identify micro-climates that are warming at accelerated rates.
- **Carbon Emission Tracking:** Correlate industrial/transport activities with localized atmospheric changes.
- **Actionable Policy Data:** Provide evidence-based visualizations to aid in urban planning and sustainability initiatives.
