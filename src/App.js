import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="wrapperDiv">
        <header className="headerDiv">
          <div className="logoDiv">
            HamBurger Icon
            <div className="youLogoDiv"></div>
            <span>YouTube</span>
          </div>
          <div className="searchDiv">{/* search bar and mic icon */}</div>
          <div className="headerIconsDiv">
            {/* record, more, bell, and pic(circle)  */}
          </div>
        </header>
        <main className="mainDiv">
          <section className="videoContentDiv">
            <iframe className="videoFrame">
              {/* embed the video from youtube in here */}
            </iframe>
            <aside className="watchMore">
              <div className="asideIconsDiv">
                {/* put icons All, Git, Website and Related here */}
              </div>
              <div className="videoOptionsDiv">
                {/* watch more video options here */}
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
