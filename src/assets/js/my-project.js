const blogs = [];

function addBlog(e) {
    e.preventDefault()

    // bagian duration
    const calculateDuration = () => {
      const startDate = new Date (document.getElementById("startDate").value)
      const endDate = new Date (document.getElementById("endDate").value)

    startDate.setHours(0,0,0,0)
    endDate.setHours(0,0,0,0)
    const oneDay = 24 * 60 * 60 * 1000;
    const difference = Math.abs(endDate-startDate);
    const results =Math.round(difference/oneDay);

    return results;
    }
    const duration = calculateDuration();

    const name = document.getElementById("name").value
    const content = document.getElementById("content").value
    const nodejs = document.getElementById("nodejs").checked
    const reactjs = document.getElementById("reactjs").checked
    const angular = document.getElementById("angular").checked
    const vuejs = document.getElementById("vuejs").checked

    const blog = {
        name,
        content,
        duration,
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
        let renderTechIcons = ''

        if(blogs[index].nodejs) {   
            renderTechIcons += `<i class="fa-brands fa-node-js"></i>` 
        }

        if(blogs[index].reactjs) {   
            renderTechIcons += `<i class="fa-brands fa-react"></i>`
        }

        if(blogs[index].angular) {   
            renderTechIcons += `<i class="fa-brands fa-angular"></i>`
        }

        if(blogs[index].vuejs) {   
            renderTechIcons += `<i class="fa-brands fa-vuejs"></i>`
        }

        html += `
        <div class="card">
            <img src="./assets/img/tiger.jpg" class="card-image" />
            <a href="project-detail" target="_blank">${blogs[index].name} </a>
        <div class="duration">
        Duration: ${blogs[index].duration} day
        </div>
        <p class="content">
            ${blogs[index].content}
        </p>
            <p class="icon-card">
              ${renderTechIcons}
            </p>
        <div class="btn-card">
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>`
    }

    document.getElementById("contents-isi").innerHTML = html
}

