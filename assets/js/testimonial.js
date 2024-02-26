class Testimonial {
    #author = ""
    #image = ""
    #content = ""
    
    constructor(author, image, content) {
        this.#author = author
        this.#image = image
        this.#content = content 
    }

    set author(val) {
        this.#author = val
    }
    set image(val) {
        this.#image = val
    }
    set content(val) {
        this.#content = val
    }

    get author() {
        return this.#author
    }
    get image() {
        return this.#image
    }
    get content() {
        return this.#content
    }

    html(){
        return `<div class="testimonial">
            <img src="${this.image} alt="">
            <p class="quote">"${this.content}"</p>
            <p class="author">- ${this.author}</p>
        </div>`
    }
}

const testimonial1 = new Testimonial("Ikhwan Haqim", "https://images.pexels.com/photos/2214590/pexels-photo-2214590.jpeg?auto=compress&cs=tinysrgb&w=800",
"Rasanya sangat lezat saya suka!")
const testimonial2 = new Testimonial("Syifa Hadju", "https://images.pexels.com/photos/6800530/pexels-photo-6800530.jpeg?auto=compress&cs=tinysrgb&w=800",
"One bite wont be enough")
const testimonial3 = new Testimonial("Anonymouse", "https://images.pexels.com/photos/301977/pexels-photo-301977.jpeg?auto=compress&cs=tinysrgb&w=600",
"Who Im?")

const testimonials = [testimonial1, testimonial2, testimonial3]
let testimonialsHTML = ""

for (let index = 0; index < testimonials.length; index++) {
    testimonialsHTML += testimonials[index].html()
}

document.getElementById("testimonials").innerHTML = testimonialsHTML