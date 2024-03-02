function getTestimonialData() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.npoint.io/5c7491d3191cf12a507b", true)
xhr.onload = () => {
    console.log("status", xhr.status)
    if(xhr.status === 200){
        const response = JSON.parse(xhr.responseText)
        resolve(response)
    } else {
        reject('Error loading data')
    }
}

xhr.onerror = () => {
    reject("Network Error!")
}

xhr.send()
    })
}

async function allTestimonial() {
    document.getElementById("testimonials").innerHTML = "Waiting..."
    const testimonials = await getTestimonialData()

    let testimonialHTML = ""

    testimonials.forEach((value) => {
        testimonialHTML += `<div class="testimonial">
                    <img src="${value.image}">
                    <p class="quote">"${value.comment}"</p>
                    <p class="author">- ${value.author}</p>
                </div>`
    })
    document.getElementById("testimonials").innerHTML = testimonialHTML
}

async function filterTestimonial(rating) {
    document.getElementById("testimonials").innerHTML = "Waiting..."
    const testimonials = await getTestimonialData()
    const filteredTestimonial = testimonials.filter((value) => value.rating === rating)
    
    let filteredTestimonialHTML = ""

    filteredTestimonial.forEach((value) => {
        filteredTestimonialHTML += `<div class="testimonial">
                    <img src="${value.image}">
                    <p class="quote">"${value.comment}"</p>
                    <p class="author">- ${value.author}</p>
                </div>`
        })
    document.getElementById("testimonials").innerHTML = filteredTestimonialHTML
}

allTestimonial()