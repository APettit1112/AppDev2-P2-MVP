function FieldLocation() {
  return (
    <section className="dashboard-card field-location">
      <h2>Field location</h2>
      <h3 className="field-location-name">Riverside Softball Field</h3>
      <address className="field-location-address">
        1000 Riverside Drive, New York, NY 10032
      </address>
      <a
        className="field-location-link"
        href="https://www.google.com/maps/search/?api=1&query=Riverside+Softball+Field%2C+1000+Riverside+Drive%2C+New+York%2C+NY+10032"
        target="_blank"
        rel="noreferrer"
      >
        View on Google Maps
      </a>
      <p className="field-location-note">Sample home field information.</p>
    </section>
  )
}

export default FieldLocation
