export default function Forecast() {
  return (
    <div className="page forecast">
      <h2>Tide & Surf Forecast</h2>
      <p>7-Day forecast coming soon...</p>
      <div className="forecast-grid">
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <div key={day} className="forecast-card">
            <h4>Day {day}</h4>
            <p>Loading forecast data...</p>
          </div>
        ))}
      </div>
    </div>
  )
}
