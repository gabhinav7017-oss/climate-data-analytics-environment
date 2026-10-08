# Climate Data Analytics Environment

This repository contains a full-stack **Climate Data Analytics Environment** comprising a Python backend data pipeline and a modern, high-tech React dashboard for data visualization.

## Architecture

*   **Backend:** Python + FastAPI. Serves simulated climate data (temperature trends, carbon emissions, KPIs).
*   **Frontend:** React + Vite + Recharts + Lucide-react. A beautiful, premium dark-mode interface with glassmorphism to visualize the data.

## Getting Started

### 1. Run the Backend

You will need Python installed.

```bash
cd backend
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
