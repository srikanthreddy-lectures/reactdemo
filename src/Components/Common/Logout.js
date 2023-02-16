import Cookies from "universal-cookie";
const cookies = new Cookies();

function Logout() {
    // destroy the cookie
  cookies.remove("TOKEN", { path: "/" });
  // redirect user to the landing page
  window.location.href = "/";
    return (
      <>
      </>

    )
}

export default Logout;