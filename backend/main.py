from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI(title="Climate Data Analytics API")

# Allow CORS for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Climate Data Analytics API"}

@app.get("/api/emissions")
def get_emissions_data():
    # Mock data for carbon emissions over time
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    data = []
    for m in months:
        data.append({
            "month": m,
            "transport": random.randint(30, 60),
            "industry": random.randint(50, 90),
            "energy": random.randint(70, 120),
        })
    return {"emissions": data}

@app.get("/api/temperature")
def get_temperature_trends():
    # Mock data for temperature trends over decades
    years = [str(1980 + i*5) for i in range(10)]
    data = []
    base_temp = 14.0
    for y in years:
        anomaly = (int(y) - 1980) * 0.02 + random.uniform(-0.1, 0.2)
        data.append({
            "year": y,
            "global_avg": round(base_temp + anomaly, 2),
            "arctic_avg": round(base_temp - 5 + anomaly * 2, 2)
        })
    return {"temperatures": data}

@app.get("/api/kpis")
def get_kpis():
    return {
        "global_temp_anomaly": "+1.18°C",
        "total_co2_emissions": "37.2 Gt",
        "deforestation_rate": "-6.4M ha/yr",
        "models_active": 15
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
