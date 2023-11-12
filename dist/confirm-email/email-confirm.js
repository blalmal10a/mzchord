const isDev =
  window.location.hostname.includes("127.0.0") ||
  window.location.hostname.includes("localhost");
console.log("is dev: ", isDev);
async function onConfirmEmail() {
  try {
    const search = new URLSearchParams(window.location.search);
    const token = search.get("token");
    const data = {
      //
    };

    if (!token) {
      alert("no token");
      window.location = "/";
      return;
    }

    const options = {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        code: "mzchord-by-franky",
      },
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
    };
    const baseUrl = isDev ? "http://localhost:8000" : `/admin`;

    console.log("base url is: ", baseUrl);
    const res = await fetch(
      `${baseUrl}/api/v1/auth/confirm-email?token=${token}`,
      options
    );
    console.log(res.data);
    // setTimeout(() => {
    //   window.location = "/";
    // }, 1500);
  } catch (error) {
    alert(
      "ERROR: THERE WAS AN ERROR CONFIRMING YOUR EMAIL. PLASE CONTACT ZO CHORD"
    );
    window.location = "/";
    console.error(error.message);
  }
}

window.addEventListener("load", onConfirmEmail);
