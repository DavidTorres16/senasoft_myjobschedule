export default function VerifyUser() {
    let rawUserData = localStorage.getItem("token")
    let userInSession = rawUserData != null ?  true : false
    return userInSession
}
