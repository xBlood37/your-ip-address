const userData = document.querySelector(".user-data");
const btn = document.querySelector("#btn");
const ip = document.querySelector("#ip");

class User {
  constructor(userData, btn, ip) {
    this.userData = userData;
    this.btn = btn;
    this.ip = ip;
  }

  userAgentData() {
    this.btn.addEventListener("click", () => {
      const values = navigator.userAgent;
      const html = `
              <p>${values}</p>
            `;

      this.userData.innerHTML = html;
    });
  }

  userAgentIp() {
    this.btn.addEventListener("click", () => {
      const uri = "https://ipapi.co/json/";
      const inner = (ip, d) => {
        const hmtl = `
                <p>Your ip: ${d.ip}</p>
                <p>Your city: ${d.city}</p>
                <p>Your region: ${d.region}</p>
                <p>Your hostname: ${d.org}</p>
            `;

        ip.innerHTML = hmtl;
      };
      const values = fetch(uri)
        .then((d) => d.json())
        .then((d) => inner(ip, d));
    });
  }
}

const user = new User(userData, btn, ip);
user.userAgentData();
user.userAgentIp();
