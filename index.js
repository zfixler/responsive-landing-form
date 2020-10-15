const emailForm = document.querySelector('.email-form')
emailForm.addEventListener("submit", event => {
    event.preventDefault()

    let formData = new FormData(event.target)
    let userName = formData.get("userName")
    let email = formData.get("email")

    let newHtml = `Congratulations, ${userName}! You have successfully subscribed to our newsletter using the following email address: ${email}.`

    document.querySelector('.info-p').innerHTML = newHtml
    document.querySelector('.info-title').textContent = "Tight Lines!"
    document.querySelector('.email-form').style.display = "none"
})