import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img class="banner-img" src="/banner.png"
            loading="lazy"
            alt="Background of a sky"/>
        <div class="banner">
            <img class="logo-header" src="/logo2.png"
            loading="lazy"
            alt="Aviation Connect logo"/>
        </div>
      </header>

        <nav>
          <ul class="right">
            <li id="menu-icon-li" class="menu-icon">
                <a id="menu-button">
                    <img class="nav-img" src="/menu-bar.png"
                        alt="Menu"
                        loading="lazy" />
                </a>
            </li>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html">Aircraft</a></li>
            <li><a href="index.html">Media</a></li>
            <li><a href="about.html">About</a></li>
            
          </ul>

        <ul id="menu-id" class="menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html">Aircraft</a></li>
            <li><a href="index.html">Media</a></li>
            <li><a href="about.html">About</a></li>
        </ul>

        <div class="left">
            <p><a href="login.html">Login</a></p>
        </div>
      </nav>
    </div>
  );
}

export default App;
