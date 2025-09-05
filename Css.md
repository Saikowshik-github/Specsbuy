/* Reset and base */
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #fff;
  color: #000;
}
a {
  text-decoration: none;
  color: inherit;
}
img {
  max-width: 100%;
  display: block;
}

/* Top banner */
.top-banner {
  background-color: #ef4b4b;
  color: white;
  text-align: center;
  font-weight: bold;
  padding: 6px 0;
  font-size: 14px;
}
.top-banner a {
  color: white;
  font-weight: 900;
}

/* Header */
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
  background-color: white;
  border-bottom: 1px solid #ddd;
}
.logo {
  font-family: 'Brush Script MT', cursive;
  font-size: 24px;
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
}
.logo img {
  max-height: 50px;
  margin-right: 6px;
}
nav {
  flex-grow: 1;
  margin-left: 24px;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 18px;
  padding: 0;
  margin: 0;
  font-weight: bold;
}
nav ul li {
  cursor: pointer;
}
nav ul li:hover {
  text-decoration: underline;
}

/* Search bar */
.search-bar {
  flex-grow: 2;
  max-width: 360px;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 3px;
  overflow: hidden;
}
.search-bar input[type="text"] {
  border: none;
  padding: 6px 10px;
  flex-grow: 1;
}
.search-bar button {
  background-color: #eee;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
}
.search-bar button:hover {
  background-color: #ddd;
}

/* User icon */
.user-icon {
  margin-left: 16px;
  font-size: 20px;
  cursor: pointer;
}

/* Hero/Carousel area */
.carousel {
  margin: 16px;
  height: 280px;
  background-color: #b9d2d8;
  border-radius: 16px;
  position: relative;
}
.carousel .dots {
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}
.carousel .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #eb4a4a;
  border-radius: 50%;
  margin: 0 8px;
  cursor: pointer;
}
.carousel .dot.inactive {
  background: #eee;
}

/* Section Titles */
h2.section-title {
  margin: 24px 16px 12px;
  font-weight: bold;
  font-size: 24px;
 
}
button.shop-all-btn {
  display:flex;
  float: right;
  background-color: black;
  color: white;
  border-radius: 24px;
  border: none;
  padding: 8px 20px;
  font-weight: bold;
  cursor: pointer;
  margin: -48px 16px 20px 0;
}
button.shop-all-btn:hover {
  background-color: #444;
}

/* New Arrivals cards */
.new-arrivals {
  display: flex;
  gap: 12px;
  margin: 0 16px 32px;
  overflow-x: auto;
}
.new-arrivals .card {
  min-width: 140px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px #ccc;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  color: #202020;
}
.new-arrivals .card img {
  height: 80px;
  object-fit: cover;
}
.new-arrivals .card .title {
  font-weight: 600;
  margin: 8px 8px 4px;
}
.new-arrivals .card .subtitle {
  margin: 0 8px 8px;
  color: #888;
}

/* Shop by Gender boxes */
.shop-by-gender {
  display: flex;
  gap: 14px;
  margin: 0 16px 32px;
}
.gender-box {
  background-color: #3d6c6d;
  flex: 1;
  border-radius: 18px;
  height: 180px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 20px;
  cursor: pointer;
}

/* Shop by Frame Shape */
.shop-by-shape {
  margin: 0 16px 24px;
}
.shape-list {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}
.shape-item {
  background-color: #cae4e5;
  flex: 1;
  height: 90px;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  padding-top: 14px;
  font-size: 14px;
  cursor: pointer;
}

/* Banners */
.banners {
  display: flex;
  gap: 16px;
  margin: 0 12px 28px;
}
.banner {
  flex: 1;
  border-radius: 16px;
  overflow: hidden;
  color: #fff;
  position: relative;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
}
.banner.red {
  background: linear-gradient(to bottom, #144a64 20%, #2e4668 80%);
}
.banner.blue {
  background: linear-gradient(to bottom, #222e41, #31505a);
}
.banner .title {
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 4px;
}
.banner .subtitle {
  font-weight: 500;
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.2;
}
.banner button {
  align-self: flex-start;
  margin-top: 8px;
  background-color: white;
  border: none;
  border-radius: 22px;
  padding: 8px 14px;
  font-weight: bold;
  font-size: 12px;
  color: #222;
  cursor: pointer;
  display: flex;
}
.banner button:hover {
  background-color: #fffefe;
}

/* Best Sellers uses same card style from .new-arrivals with modifier */
.best-sellers {
  margin-bottom: 40px;
}

/* Section subtitle text */
.section-subtitle {
  margin: 0 16px 12px;
  font-size: 14px;
  color: #444;
  font-weight: normal;
}

/* Face Shape List */
.face-shape-list {
  margin: 0 16px 40px;
  display: flex;
  gap: 24px;
  justify-content: start;
  flex-wrap: nowrap;
}
.face-shape-item {
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  width: 72px;
}
.face-shape-item img {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 4px;
}
.face-shape-item span {
  font-weight: bold;
  font-size: 13px;
  color: #666;
}

/* Frames for Your Life */
.frames-life-list {
  margin: 0 16px 40px;
  display: flex;
  gap: 28px;
  justify-content: start;
  flex-wrap: nowrap;
}
.frame-life-item {
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  width: 90px;
}
.frame-life-item img {
  width: 90px;
  height: 90px;
  object-fit: contain;
  margin-bottom: 8px;
}
.frame-life-item span {
  font-weight: bold;
  font-size: 12px;
  color: #666;
  text-transform: uppercase;
}

/* Promotional banners */
.promo-banners {
  margin: 0 16px 40px;
  display: flex;
  gap: 12px;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.promo-banner {
  flex: 1;
  border-radius: 14px;
  color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 130px;
}
.promo-banner.blue-bg {
  background: #2a616b;
}
.promo-banner.white-bg {
  background: #f1f0f7;
  color: #444;
}
.promo-banner h3 {
  margin: 0 0 12px;
  font-weight: 900;
  font-size: 18px;
}
.promo-banner p {
  margin: 0 0 18px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
}
.promo-banner.white-bg button {
  background: #333;
  color: white;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: fit-content;
}
.promo-banner.blue-bg button {
  background: #ffffff;
  color: #2a616b;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: fit-content;
}
.promo-banner button:hover {
  opacity: 0.85;
}

/* Email Signup */
.email-signup {
  text-align: center;
  margin: 0 16px 40px;
  font-weight: bold;
  font-size: 18px;
}
.email-signup p {
  margin-bottom: 6px;
}
.email-signup form {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}
.email-signup input[type="email"] {
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 240px;
  max-width: 100%;
}
.email-signup button {
  background-color: black;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  font-weight: bold;
  cursor: pointer;
  min-width: 90px;
}
.email-signup button:hover {
  background-color: #333;
}

/* Social Section */
.socials {
  text-align: center;
  margin: 0 16px 32px;
  font-weight: bold;
  font-size: 14px;
  color: #444;
}
.social-icons {
  margin-top: 6px;
  display: flex;
  justify-content: center;
  gap: 16px;
}
.social-icons a {
  font-size: 22px;
  display: inline-block;
  color: #444;
  cursor: pointer;
}
.social-icons a:hover {
  color: #000;
}

/* App promo section */
.app-promo {
  text-align: center;
  padding: 24px 16px;
  background: #e4f4f1;
  border-radius: 12px;
  margin: 0 16px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  flex-wrap: wrap;
}
.app-promo p {
  font-weight: bold;
  font-size: 18px;
  margin: 0;
  flex-basis: 100%;
  text-align: center;
}
.app-icons {
  display: flex;
  gap: 16px;
}
.app-icons img {
  height: 40px;
  cursor: pointer;
}
.qrcode p {
  margin: 0 0 8px;
  font-weight: 600;
}
.qrcode img {
  height: 80px;
  width: 80px;
}

/* Footer */
footer {
  text-align: center;
  padding: 28px 16px;
  font-size: 12px;
  color: #888;
}
