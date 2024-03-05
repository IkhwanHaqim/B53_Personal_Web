const testimonials = [
    
    {
        author: "Ikhwan Haqim",
        content : "Rasanya sangat lezat saya suka!",
        image : "https://images.pexels.com/photos/2214590/pexels-photo-2214590.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating : 1,
    },
    {
        author: "Syifa Hadju",
        content : "Oiya? Thank you!",
        image : "https://images.pexels.com/photos/6800530/pexels-photo-6800530.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating : 1,
    },  
    {
        author: "Anonymouse",
        content : "Who am i?",
        image : "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating : 4,
    },
    {
        author: "Anonymouse",
        content : "Who am i?",
        image : "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating : 2,
    },
    {
        author: "Anonymouse",
        content : "Who am i?",
        image : "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating : 3,
    },
    {
        author: "Anonymouse",
        content : "Who am i?",
        image : "https://images.pexels.com/photos/1427288/pexels-photo-1427288.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating : 5,
    },
    {
        author: "Anonymouse",
        content : "Who am i?",
        image : "https://images.pexels.com/photos/859265/pexels-photo-859265.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating : 5,
    },
    {
        author: "Anonymouse",
        content : "Who am i?",
        image : "https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating : 5,
    },
    {
        author: "Anonymouse",
        content : "Who am i?",
        image : "https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating : 2
    },
    {
        author: "Anonymouse",
        content : "Who am i?",
        image : "https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating : 2
    },
    {
        author: "Anonymouse",
        content : "Who am i?",
        image : "https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating : 2
    },
]

function allTestimonial(){
    let testimonialHTML = " "

    testimonials.forEach((value) => {
        testimonialHTML += `<div class="testimonial">
                    <img src="${value.image} alt="">
                    <p class="quote">"${value.content}"</p>
                    <p class="author">- ${value.author}</p>
                </div>`
    })
    document.getElementById("testimonials").innerHTML = testimonialHTML
}

function filterTestimonial(rating) {
    let testimonialHTML = " "
    
    const filteredTestimonial = testimonials.filter((value) => value.rating === rating)
    filteredTestimonial.forEach((value) => {
        testimonialHTML += `<div class="testimonial">
                    <img src="${value.image} alt="">
                    <p class="quote">"${value.content}"</p>
                    <p class="author">- ${value.author}</p>
                </div>`
    })
    document.getElementById("testimonials").innerHTML = testimonialHTML
}

allTestimonial()