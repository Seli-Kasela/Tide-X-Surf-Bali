export default function Dashboard() {
  return (
    <div className="page dashboard">
      <h2>Dashboard</h2>
      <p>Welcome to Tide-X Surf Bali Dashboard</p>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Current Tide</h3>
          <p className="data">Loading...</p>
        </div>
        <div className="card">
          <h3>Wave Height</h3>
          <p className="data">Loading...</p>
        </div>
        <div className="card">
          <h3>Wind Speed</h3>
          <p className="data">Loading...</p>
        </div>
        <div className="card">
          <h3>Temperature</h3>
          <p className="data">Loading...</p>
        </div>
      </div>
    </div>
  )
}
