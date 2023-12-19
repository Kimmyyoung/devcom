# DEVCOM

## 🖥 Overview

**_DEVCOM - Developer Community_**

The application caters to developers, offering a platform where they can explore job postings, stay updated on developer events, engage in meaningful conversations with peers, and efficiently manage their schedules. 

### 📍 Problem

When I attended the Demo Day and networking event at BrainStation, I encountered numerous individuals already established in the tech industry or aspiring to enter it. Curious about their discovery of the event, I inquired from several attendees, and their responses varied—some discovered it through EventBridge, while others stumbled upon it on Reddit, and so forth. This prompted me to contemplate the idea of creating a centralized app that consolidates comprehensive information on developer events and job opportunities, providing a one-stop platform for the tech community. 

### 📍 User Profile

The app is tailored for individuals actively employed as Software Engineers or Developers, as well as those with a keen interest in the tech industry. It serves as a dedicated platform to connect, share information about job opportunities, and stay informed about upcoming events within the tech community.

### 📍 Features

<ul>
  <li>Login/Signup - Admin | Developer</li>
  <li>Job Board (OpenAPI)</li>
  <li>Developer Event (OpenAPI)</li>
  <li>Calendar - Manage Schedule</li>
  <li>Chat</li>
</ul>

***

## 🖥 Implementation

### 📍 Tech Stack

#### Frontend Side

`ReactJS | NextJS`
`TailwindCSS`

#### Backend Side

`mySQL`
`NodeJS`
`Express`
`Knex.js`
`websocket`


### 📍 APIs



### 📍 Sitemap


![sitemap](https://i.ibb.co/4Z9fYGp/sitemap.jpg,"sitemap")

[Sitemap](https://miro.com/app/board/uXjVNBSrpvw=/?share_link_id=805996928100)


### 📍 Mockups

![Wireframe](https://i.ibb.co/cXBNpn0/Clean-Shot-2023-12-18-at-17-21-45-2x.png)

![JobBoard](https://i.ibb.co/TbmpHvC/jobboard.jpg)
![JobDetail](https://i.ibb.co/c2Qgn3w/jobdetail.jpg)
![Event](https://i.ibb.co/G3T0MR8/event.jpg)
![EventDetail](https://i.ibb.co/PFz5KTp/eventdetail.jpg)
![EventChat](https://i.ibb.co/N6vGF9b/eventdetail-chat.jpg)
![Community](https://i.ibb.co/vdx9my4/community.jpg)
![Calendar](https://i.ibb.co/tH5gjnF/calendar.jpg)

[Figma-wireframe](https://www.figma.com/file/UqzcD6SbDO6IMNDnJ6MyOY/Devcom?type=design&node-id=77%3A432&mode=design&t=JlqTwTDfc6DToDi9-1)

### 📍 Data

![Data](https://i.ibb.co/Gv8pcGR/Clean-Shot-2023-12-18-at-18-42-03-2x.png)

```
Users : Database for users
Posts : Database for Community Posts
Events : Database for Event Information (I am thinking use openAPI)
Jobs : Database for Job Information (I am thinking use openAPI)
```

### 📍 Endpoints

##### Login
```
http://localhost:PORT/login - GET
http://localhosst:PORT/signup - POST
```

##### Job - or OpenAPI
```
http://localhost:PORT/api/jobs - GET (All jobs)
httP://localhost:PORT/api/job/:id - GET (Job by Id)
```

##### Events - or OpenAPI
```
http://localhost:PORT/api/events - GET (All events)
http://localhost:PORT/api/event/:id - GET (Event by Id)
```
### 📍 Auth

`Json Web Token`

```
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  console.log(user);
  
  if (user && user.password === password) {
    let token = jwt.sign({ username }, SECRET_KEY);
    res.json({ token });
  }else {
    res.sendStatus(401);
  }
});
```
```
app.post("/signup", (req, res) => {
  const { username, name, password } = req.body;
  users[username] = {
    name,
    password, 
    // will update with bcrypt
  };
  res.json({ success: "true" });
});
```
```
function authorize(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY);
    req.decoded = decoded;
    
    next();
  }catch (err) {
    res.sendStatus(401);
  }
}
```


## 🖥 Roadmap

#### Frontend 

- [ ] Setup Project
- [ ] Sidebar component 
- [ ] Page layout 
- [ ] Page Styling 
  - [ ] Landing Page - Home 
  - [ ] Job Board 
  - [ ] Job Detail Page 
  - [ ] Event List Page 
  - [ ] Event Detail Page 
  - [ ] Chat Modal 
  - [ ] Community Page 
  - [ ] Community Post Page 
  - [ ] Calendar Page 
  - [ ] Login Page 
  - [ ] Signup Page 
- [ ] Connect API 
  - [ ] GET - Job Board
  - [ ] GET - Job Detail
  - [ ] GET - Event List
  - [ ] GET - Event Detail 
  - [ ] GET - Community Page 
  - [ ] POST - Community Page
  - [ ] PUT - Community Page
- [ ] Login Feature 
  - [ ] Signup
  - [ ] Login
- [ ] Calendar Features 

#### Backend 
- [ ] Database
- [ ] Setup Backend 
- [ ] Knex - route, controller etc

#### Deployment 
- [ ] Heroku Deployment 

## 🖥 Nice-to-haves

- [ ] My Account Page to show Events or applied job post 
- [ ] Event own database

