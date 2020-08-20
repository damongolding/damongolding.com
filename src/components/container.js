import React from "react"

export default ({ children }) => (
  <div id="content">
    {children}
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-11 content has-text-left has-text-white is-offset-1">
            <p>This is a footer!</p>
          </div>
        </div>	
      </div>
    </footer>
  </div>
)
