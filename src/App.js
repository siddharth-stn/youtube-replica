import "./app.css";
import profile from "./static/images/Siddarth Pande.jpeg";

function App() {
  return (
    <div className="App">
      <div className="wrapperDiv">
        <header className="headerDiv">
          <div className="logoDiv">
            <div className="hamburgerDiv">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="youLogoDiv"></div>
            <span className="logoPart">YouTube</span>
            <span className="suffix">IN</span>
          </div>
          {/* search bar and mic icon */}
          <div className="searchBarDiv">
            <input className="searchInputBar" placeholder="Search" />
            <div className="magDiv">
              <div className="wrapGlassDiv">
                <div className="glass"></div>
                <div className="handle"></div>
              </div>
            </div>
            <div className="micWrapDiv">
              <div className="micTop"></div>
              <div className="micBase"></div>
            </div>
          </div>
          <div className="headerIconsDiv">
            {/* record, more, bell, and pic(circle)  */}
            <div className="recordDiv">
              <div className="recordBox"></div>
              <div className="recordTriangleDiv"></div>
            </div>
            <div className="moreDiv">
              <div className="whiteBoxDiv"></div>
            </div>
            <div className="bellDivWrap">
              <div className="bellTop"></div>
              <div className="bellMid"></div>
              <div className="bellBob"></div>
            </div>
            <div className="profilePicDiv">
              <img src={profile} alt="My Photo" />
            </div>
          </div>
        </header>

        <div className="wrapper">
          <main className="mainDiv">
            <iframe
              src="https://www.youtube.com/embed/FnlombgWBMs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <footer>
              <div className="mainVidDetails">
                <h2>Satna to Khajuraho on a KTM Duke 390</h2>
                <p>
                  63,030 views<span className="dot"></span> Feb 28, 2014
                </p>
              </div>
              <div className="vidReaction">
                <div className="space"></div>
                <div className="reactWrap">
                  <div className="thumbsUp">
                    <div className="finger"></div>
                    <div className="numberUp">2022</div>
                  </div>
                  <div className="thumbsDown">
                    <div className="finger"></div>
                    <div className="numberDown">0</div>
                  </div>
                  <div className="share">
                  </div>
                  <div className="menuAdd">
                    <div className="barOne"></div>
                    <div className="barTwo"></div>
                    <div className="barThree"></div>
                    <div className="vertical"></div>
                    <div className="horizontal"></div>
                  </div>
                  <div className="save">SAVE</div>
                  <div className="more">
                    <span className="dot dotThree"></span>
                    <span className="dot dotThree"></span>
                    <span className="dot dotThree"></span>
                  </div>
                </div>
              </div>
            </footer>
          </main>
          <aside className="watchMore">
            <div className="asideIconsDiv">
              {/* put icons All, Git, Website and Related here */}
              <div className="allBtn" tabIndex="1">
                All
              </div>
              <div className="gitBtn" tabIndex="2">
                Git
              </div>
              <div className="relatedBtn" tabIndex="3">
                Related
              </div>
            </div>
            <div className="videoOptionsDiv">
              {/* watch more video options here */}
              <div className="optOne">
                <iframe
                  src="https://www.youtube.com/embed/V74l_zS1x8E"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div className="vidDetails">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
              <div className="optTwo">
                <iframe
                  src="https://www.youtube.com/embed/V74l_zS1x8E"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div className="vidDetails">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
              <div className="optThree">
                <iframe
                  src="https://www.youtube.com/embed/V74l_zS1x8E"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div className="vidDetails">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
              <div className="optFour">
                <iframe
                  src="https://www.youtube.com/embed/V74l_zS1x8E"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <div className="vidDetails">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
