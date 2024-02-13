const blogs = [];

function addBlog(e) {
    e.preventDefault()

    const name = document.getElementById("name").value
    const content = document.getElementById("content").value
    const nodejs = document.getElementById("nodejs").checked
    const reactjs = document.getElementById("reactjs").checked
    const angular = document.getElementById("angular").checked
    const vuejs = document.getElementById("vuejs").checked
    
    const blog = {
        name,
        content,
        nodejs,
        reactjs,
        angular,
        vuejs
    }
    

    blogs.push(blog)
    renderBlog()
    console.log("blogs", blogs)
}

function renderBlog() {
    let html = ''

    for(let index = 0; index < blogs.length; index++) {
        html += `
        <div class="card">
            <img src="./assets/img/prince.jpg" class="card-image" />
            <a href="project-detail.html" target="_blank">${blogs[index].name} </a>
        <div class="duration">
        Duration: 
        </div>
        <p class="content">
            ${blogs[index].content}
        </p>
            <p class="icon-card">
            ${blogs[index].nodejs ? `<i class="fa-brands fa-node-js"></i>` : ''}
            ${blogs[index].reactjs ? `<i class="fa-brands fa-react"></i>` : ''}
            ${blogs[index].angular ? `<i class="fa-brands fa-angular"></i>` : ''}
            ${blogs[index].vuejs ? `<i class="fa-brands fa-vuejs"></i>` : ''}
            </p>
        <div class="btn-card">
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>`
    }

    document.getElementById("contents-isi").innerHTML = html
}

