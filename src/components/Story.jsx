export default function Story() {
  return (
    <section className="story-section">
      <div className="story-container">
        <h2 className="story-title">Our Story</h2>
        
        <div className="story-intro">
          <p className="story-quote">
            "Inka Kavali is not just a snack brand. It is a feeling every child has felt at home." 
          </p>
        </div>

        <div className="story-grid">
          <div className="story-memory-box">
            <span className="memory-icon">🏠</span>
            <div className="memory-text">
              <h3>The Memory</h3>
              <p>
                Evening time. A steel dabba opens. The smell of freshly made snacks fills the house. 
                One bite is never enough. You always say — <strong>Inka Kavali</strong>. 
              </p>
            </div>
          </div>

          <div className="story-details">
            <p>
              The idea for Inka Kavali was born far away from home. While studying in Gujarat, 
              our founder missed the simple taste of homemade snacks — the kind made by mothers, 
              with patience and love.
            </p>
            <p>
              That longing became a thought. And that thought became Inka Kavali. 
            </p>
          </div>
        </div>

        <div className="story-highlight">
          <p>
            Today, our snacks are prepared in a small town by experienced mothers using traditional 
            recipes passed through generations. No factory taste. No shortcuts.
          </p>
        </div>
      </div>
    </section>
  );
}