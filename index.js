import express from 'express';
const app = express();
const port = 5000;

// get = mengambil data dari server ke client
// request = permintaan client ke server
// response = tanggapan dari server ke client

app.set("view engine", "hbs");
app.set("views", "src/views");

app.use('/assets', express.static('src/assets'));
app.use(express.urlencoded({ extended: false }))

app.get('/', home)
app.get('/my-project', myProject)
app.get('/testimonial', testimonial)
app.get('/contact', contact)
app.get('/project-detail/:id', projectDetail)
app.post('/my-project', handlePostProject)
app.get('/delete-project/:id', handleDeleteProject)

const datas = []

function home(req, res){
    res.render('index')
}

function myProject(req, res){
    res.render('my-project', {data: datas})
}

function testimonial(req, res){
    res.render('testimonial')
}

function contact(req, res){
    res.render('contact')
}

function projectDetail(req, res){
    const { id } = req.params

    const dataDetail = datas[id]
    res.render('project-detail', { datas: dataDetail },)
}

function handlePostProject(req, res){
    const {name, startdate, enddate, description, nodejs, reactjs, angular, vuejs,} = req.body

    const calStartDate = new Date(startdate);
    const calEndDate = new Date(enddate);

    calStartDate.setUTCHours(0, 0, 0, 0);
    calEndDate.setUTCHours(0, 0, 0, 0);

    const oneDay = 24 * 60 * 60 * 1000;
    const selisih = Math.abs(calEndDate - calStartDate);
    const duration = Math.round(selisih / oneDay);
    
    const technologies = [];
    
    if (nodejs === 'on') {
        technologies.push({ icon: 'fab fa-node-js' });
    }
    if (reactjs === 'on') {
        technologies.push({ icon: 'fab fa-react' });
    }
    if (angular === 'on') {
        technologies.push({ icon: 'fab fa-angular' });
    }
    if (vuejs === 'on') {
        technologies.push({ icon: 'fab fa-vuejs' });
    }    

  const data = {
      name,
      startdate,
      enddate,
      duration,
      description,
      technologies
  };

  datas.push(data);
  res.redirect('/my-project');
}

function handleDeleteProject(req, res){
    const { id } = req.params

    datas.splice(id, 1)
    res.redirect('/my-project')
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })