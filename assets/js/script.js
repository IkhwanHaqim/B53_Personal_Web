function getData()  {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phonenumber = document.getElementById("phonenumber").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    if (name == "") {
        return alert("name must be filled in")
    } else if (email =="") {
        return alert("email must be filled in")
    } else if (phonenumber == "") {
        return alert("phonenumber must be filled in")
    } else if (subject =="") {
        return alert("subject must be filled in")
    } else if (message =="") {
        return alert("message must be filled in")
    }

    const emailDestination = "ikhwanhakim756@gmail.com"
    let a = document.createElement('a')

    a.href = `mailto:${emailDestination}?subject=${subject}&body=${encodeURIComponent(name)} ${encodeURIComponent(message)} 
    ${encodeURIComponent(phonenumber)}`
    a.click()

    const data = {
        name,
        email,
        phonenumber,
        subject,
        message
    }
    console.log(data)
}
