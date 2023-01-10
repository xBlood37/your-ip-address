const userData = document.querySelector(".user-data");
const btn = document.querySelector("#btn");
const ip = document.querySelector("#ip");

class User {
  constructor(userData, btn) {
    this.userData = userData;
    this.btn = btn;
  }

  getBrowserData() {
    this.btn.addEventListener("click", () => {
      const browserData = `<p>${navigator.userAgent}</p>`;
      this.userData.innerHTML = browserData;
    });
  }

  getUserDataIp() {
    this.btn.addEventListener("click", () => {
      const values = fetch("https://ipapi.co/json/")
        .then((d) => d.json())
        .then((d) => {
          const hmtl = `
              <p>Your ip: ${d.ip}</p>
              <p>TLD: ${d.country_tld}</p>
              <p>Your city: ${d.city}</p>
              <p>Your region: ${d.region}</p>
              <p>Your hostname: ${d.org}</p>
              <p>Your country: ${d.country}</p>
              <p>Country name full: ${d.country_name}</p>`;
          ip.innerHTML = hmtl;
        });
    });
  }
}

const user = new User(userData, btn, ip);
user.getBrowserData();
user.getUserDataIp();
