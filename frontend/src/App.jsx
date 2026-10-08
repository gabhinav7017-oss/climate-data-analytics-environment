import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Globe, Activity, Wind, TrendingUp, Thermometer, Droplets } from 'lucide-react';

function App() {
  const [kpis, setKpis] = useState(null);
  const [emissions, setEmissions] = useState([]);
  const [temperatures, setTemperatures] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [kpiRes, emRes, tempRes] = await Promise.all([
          fetch('http://localhost:8001/api/kpis'),
          fetch('http://localhost:8001/api/emissions'),
          fetch('http://localhost:8001/api/temperature')
        ]);
        
        setKpis(await kpiRes.json());
        const emData = await emRes.json();
        setEmissions(emData.emissions);
        const tempData = await tempRes.json();
        setTemperatures(tempData.temperatures);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Fallback mock data if backend isn't running
        setKpis({
          global_temp_anomaly: "+1.18°C",
          total_co2_emissions: "37.2 Gt",
          deforestation_rate: "-6.4M ha",
          models_active: 15
        });
        setEmissions([
          { month: 'Jan', transport: 45, industry: 60, energy: 90 },
          { month: 'Feb', transport: 42, industry: 65, energy: 85 },
          { month: 'Mar', transport: 48, industry: 58, energy: 95 },
          { month: 'Apr', transport: 50, industry: 70, energy: 88 },
          { month: 'May', transport: 55, industry: 75, energy: 92 },
          { month: 'Jun', transport: 58, industry: 80, energy: 100 },
        ]);
        setTemperatures([
          { year: '1980', global_avg: 14.1, arctic_avg: 9.5 },
          { year: '1990', global_avg: 14.2, arctic_avg: 9.8 },
          { year: '2000', global_avg: 14.4, arctic_avg: 10.3 },
          { year: '2010', global_avg: 14.6, arctic_avg: 11.0 },
          { year: '2020', global_avg: 14.9, arctic_avg: 11.8 },
        ]);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white'}}>Loading Environment...</div>;
  }

  return (
    <div className="app-container">
      <header className="animate-fade-in">
        <div className="logo">
          <Globe className="logo-icon" size={32} />
          Climate Data Analytics Environment
        </div>
        <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
           <div style={{color: 'var(--text-secondary)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px'}}>
             <Activity size={16} color="var(--accent-teal)" /> Live Data Feed
           </div>
        </div>
      </header>

      <div className="dashboard-grid">
        {/* KPIs Row */}
        <div className="kpi-row animate-fade-in delay-1">
          <div className="glass-panel kpi-card">
            <div className="kpi-title">Global Avg Temp Anomaly</div>
            <div className="kpi-value">
              {kpis?.global_temp_anomaly} <span className="kpi-trend" style={{color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)'}}><TrendingUp size={14}/></span>
            </div>
          </div>
          <div className="glass-panel kpi-card">
            <div className="kpi-title">Total CO2 Emissions</div>
            <div className="kpi-value">
              {kpis?.total_co2_emissions} <span className="kpi-trend" style={{color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)'}}><TrendingUp size={14}/></span>
            </div>
          </div>
          <div className="glass-panel kpi-card">
            <div className="kpi-title">Deforestation Rate</div>
            <div className="kpi-value">
              {kpis?.deforestation_rate} <span className="kpi-trend"><TrendingUp size={14}/></span>
            </div>
          </div>
          <div className="glass-panel kpi-card">
            <div className="kpi-title">Predictive Models Active</div>
            <div className="kpi-value" style={{color: 'var(--accent-teal)'}}>
              {kpis?.models_active}
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="glass-panel chart-card animate-fade-in delay-2">
          <div className="card-header">
            <div className="card-title" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Thermometer size={20} color="var(--accent-purple)"/> 
              Temperature Trends (1980 - 2020)
            </div>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={temperatures} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorGlobal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-purple)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--accent-purple)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorArctic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-red)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--accent-red)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" domain={['dataMin - 1', 'dataMax + 1']} />
                <Tooltip contentStyle={{backgroundColor: 'var(--panel-bg)', borderColor: 'var(--panel-border)', borderRadius: '8px'}} />
                <Legend />
                <Area type="monotone" dataKey="global_avg" name="Global Avg (°C)" stroke="var(--accent-purple)" fillOpacity={1} fill="url(#colorGlobal)" />
                <Area type="monotone" dataKey="arctic_avg" name="Arctic Avg (°C)" stroke="var(--accent-red)" fillOpacity={1} fill="url(#colorArctic)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel chart-card animate-fade-in delay-3">
          <div className="card-header">
            <div className="card-title" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Wind size={20} color="var(--accent-teal)"/> 
              Carbon Emissions by Sector (Monthly)
            </div>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={emissions} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" />
                <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{backgroundColor: 'var(--panel-bg)', borderColor: 'var(--panel-border)', borderRadius: '8px'}} />
                <Legend />
                <Bar dataKey="transport" name="Transport" stackId="a" fill="var(--accent-blue)" radius={[0, 0, 4, 4]} />
                <Bar dataKey="industry" name="Industry" stackId="a" fill="var(--accent-purple)" />
                <Bar dataKey="energy" name="Energy" stackId="a" fill="var(--accent-teal)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
