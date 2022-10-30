import Cookies from "universal-cookie"

const cookies = new Cookies();


const Logout = ()=> {
    cookies.remove("TOKEN", {path:"/"});    
    window.location.href = "/";
}