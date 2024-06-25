\*\*\*\*# 💻 Project & Portfolio II

# Project Name: WDP2 Portfolio Project

### Shane Jeremich

🆔 &nbsp; 0005221438

📪 &nbsp; scjeremich@student.fullsail.edu

![Degree Program](https://img.shields.io/badge/Degree-Web%20Development-orange?logo=gnometerminal)
<br>
![Class Name](https://img.shields.io/badge/Class-Project%20and%20Portfolio%20II-orange?logo=react)

<br>

## ⚙️ Configuration

This project uses `concurrently`, an npm package that allows you to run multiple npm scripts simultaneously. This is particularly useful in a development environment where you might want to run a server and a client at the same time. However, using `concurrently` is not mandatory. You can also navigate (`cd`) into the `client` and `server` directories and run the script `npm run dev` for each one to start the front end and backend, respectively. This approach requires running multiple terminal windows. `Concurrently` simply makes it easier to manage both processes simultaneously.

The project also includes a sample environment file (`.env.sample`). This file contains environment variables that are necessary for the application to run correctly.

To set up the project, follow these steps:

1. **Install `concurrently` and other dependencies**: If you do not have `concurrently` installed globally, make sure you're in the root directory of the project and run the following command:

   ```bash
   npm install concurrently
   ```

   This command will install `concurrently` in the root directory, provided that you ran `npm install concurrently` from the root directory. If you already have `concurrently` installed globally, or you wish to not install `concurrently` then you can skip this step.
   <br>

2. **Install dependencies in the client and server directories**: Run the following command in the root directory of the project:

   ```bash
   npm run setup
   ```

This command will set up the project, including installing all the necessary dependencies in both the client and server directories.

3. **Set up the environment file**: During the installation process, the `.env.sample` file will be automatically renamed to `.env`, allowing the application to access these variables.

After all dependencies are installed and the `.env` files in both the server and client directories is set up, you can start both the backend and frontend servers simultaneously by running the following command:

```bash
npm run dev
```

This setup allows for a streamlined development process, as both servers can be managed from a single terminal instance.

## 📢 &nbsp; Milestone Check-Ins

Each week I will summarize my milestone activity and progress by writing a stand-up. A stand-up is meant to be a succinct update on how things are going.

⚙️ Overview - What I worked on this past week
🌵 Challenges - What problems did I have & how I'm addressing them
🏆 Accomplishments - What is something I "leveled up" on this week
🔮 Next Steps - What I plan to prioritize and do next

<br>

### Milestone 1

For this milestone I've created a wireframe prototype in Figma.

- [Figma](https://www.figma.com/design/e9k60esuwNFIxpMFG6kvUE/MLSHub?node-id=0-1&t=tZdTgxfhh9UCJWOn-0)

<br>

### Milestone 2

⚙️ Overview - This past week, I've made significant strides in my project. I started with the initial setup of the projects, folders, and files for both the frontend and backend of the application. I then set up routes using the react-router-dom library and completed the Navbar and Header components. Regarding HTML updates, I modified the project title to match the project name and added a MLS favicon. A significant portion of my time was spent on styling, where I finished stylizing the login component and then created and styled the Profile component. Throughout the week, I also made several updates to the README file to document my progress. I plan to continue building out the application's functionality and addressing any challenges.

<br>

🌵 Challenges - Time management has been a challenge for me this week in real-life situations. But apart from that, I've also faced the challenge of implementing my APIs or database to cache the information so I can build out the rest of my components.

<br>

🏆 Accomplishments - For accomplishments, it's just getting my folder structure in place, my routes implemented, and the project to compile and run on localhost so I can see it in action.

<br>

🔮 Next Steps - The following steps are to work with my APIs for the data, build my database with Mongo DB to cache it, and then map it into my react Project to finish building my missing components.

<br>

Please discuss the following:

#### Page #1

- Newsfeed
- This page will display all the current trending news with MLS. Right now their is placeholders as it will be replaced with the information coming from the APIs.

#### Page #2

- Login
- This page is to authenticate a User to access their profile page. This page will store their information such as name, email, password, and their favorite team. Their favorite team can be used in future versions to customize the information specific to their favorite team.

#### Page #3

- Profile
- Once the user is logged in they can access their User Profile. This will have their information and they'll be able to update it. The user should be stored into the database.

#### Page #4

- Sign up
- If the user does not have an account registered with MLS Hub, they can use this page to sign up, which will then be saved to the database and can access their profile page.

<br>

### Milestone 3

⚙️ Overview - Write overview here.
Over the past week, significant progress has been made on the project. The Swiper library was installed to enhance the scoreboard on the home page component, creating a more interactive and visually appealing user experience. Axios and dotenv were added to the backend server to streamline API requests and manage environment variables securely. The frontend application set up a context for Articles, Standings, and Fixtures to handle state management more efficiently. Data successfully caches with the MongoDB database. Images were added to the assets directory, and API requests for the front end were configured. The standings component was implemented and styled, clearly displaying rankings. Similarly, the newsfeed component was completed, along with modular newsfeed cards, contributing to the overall functionality and design of the home page component.

🌵 Challenges - Write challenges here.
This week, I faced several challenges. Learning and using the Swiper library to improve the scoreboard on the home page was challenging and took a lot of time. I also had trouble getting the APIs to store data correctly in the MongoDB database, which required careful setup and debugging. Managing my time was complicated since this project was complex, and balancing all the tasks was demanding. Despite these challenges, I learned a lot and improved my handling of complex projects.

🏆 Accomplishments - Write Accomplishments here.
This week, I made significant progress on my project. I installed and integrated the Swiper library to enhance the scoreboard on the home page. I set up the backend, including the server, database connections, models, controllers, and routes. I implemented and styled various frontend components, such as the standings, newsfeed, scoreboard, and footer. I optimized the SCSS files and fixed various styling issues. I also updated React Router for navigation and added context providers for state management. Lastly, I updated the README and git ignore files and prepared the project for easy setup with .env files.

🔮 Next Steps - Write your next steps here.

- Implement a burger menu for mobile navigation.
- Ensure responsive design across all viewports.
- Develop a tickets component for event management.
- Enhance the standings component with additional data and styling.
- Integrate Teams context for state management.
- Create a component to display team details by ID.
- Create a component to display fixture details by ID.
- Set up `node-cron` for automated data updates.
- Link all fixtures and teams to their respective ID pages.
- Enhance the scoreboard on the home page with a sticky date header.
- Implement user authentication functionality.
- Add loading states to the application and display visual loading indicators in components.

Please discuss the following:

#### API

- Link to the API that is used in your code
  - https://api-football-v1.p.rapidapi.com/v3/standings
  - https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/news
- Reason you chose the API
  - I opted for the first API due to its comprehensive data coverage of Teams, Fixtures, Schedules, and Standings for major soccer competitions. This aligns perfectly with the objectives of MLSHub, my application dedicated to the MLS league.
- Where in your code did you use it?
  - i have a file called `dataService.js` located in `server/app/services` which fetches the data from the API's to work with my application

#### Axios

- [Axios npm](https://www.npmjs.com/package/axios)
- [Axios Tutorial](https://fullsailedu-my.sharepoint.com/:v:/g/personal/scjeremich_student_fullsail_edu/EdwQEMPZy_9GgOJeLuDpffsBN_g5eGvtm4mQ2EHbHkIgXQ?e=wqacEw&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)
- Reason you chose this library.
  - I chose Axios for my project due to its wide support for browser and node.js environments, easy-to-use API for making HTTP requests, and built-in features like automatic JSON data transformation and request/response interception.
- Where in your code is it used?
  - Axios is employed on both the client-side and server-side to manage HTTP communications. On the front end, Axios is utilized to interact with the server's endpoints, facilitating the submission of requests and retrieval of responses. On the back end, Axios serves the purpose of fetching data from external APIs, enabling seamless data integration and manipulation within the server's logic.

#### Swiper

- [Swiper](https://www.npmjs.com/package/swiper)
- Reason you chose this library.
  - Swiper was selected due to its widespread popularity, extensive documentation, and user-friendly implementation capabilities, significantly streamlining the development process for complex interactive elements.
- Where in your code is it used?
  - This is deployed within the front-end's home component, serving as the initial interface encountered upon the application's execution.

#### Persistent Data

- Discuss if you have used MongoDB or Local Storage.
  - MongoDB for the caching of my data.
- How was it used in your code?
  - The decision was made to utilize MongoDB as the primary data storage solution. Information is systematically fetched and subsequently cached within the database. This facilitates the utilization of dedicated endpoints for robust interaction with the stored data.
- Where in your code is it used?
  - The mongoose library was integrated into the backend infrastructure to establish and manage connections with the MongoDB database. This library plays a crucial role in persisting data obtained from external APIs by facilitating its storage within the database.

<br>

### Milestone 4

⚙️ Overview - Write overview here.
<br>
🌵 Challenges - Write challenges here.
<br>
🏆 Accomplishments - Write Accomplishments here.
<br>
🔮 Next Steps - Write your next steps here.

<br>

Please discuss the following:

#### Changes

- Discuss any changes or updates that you have made to your site since Milestone #3.

#### Styling

- Discuss the process you used to style your page.

#### Link To Overview Video

- Once it is created, put the link to your overview video of your site here.

<br>
<br>
<hr/>

# Project Overview

### Your project will use the MERN Tech Stack and must include the following:

- A Git Repo, with a master, dev, and milestone branches
- Readme File that explains your project and tracks your milestones
- A React Front End
- React Routing with _at least_ 4 different views/pages
  - Dashboard/Main
  - User/Settings
  - Search
  - Detail Page
- Node/Express Backend
- A Mongo DB Element OR Local Storage for persistent data
- Connect to at least 1 free API
- The project must use at least 2 different libraries, not including React itself
  - One of these libraries you will create a tutorial for in Exercise 01
- It should look visually appealing and must be easy for the end-user to use and understand. You may use Tailwind or any other front-end library/framework.

**Milestone #1 (Due: Monday of Week 2)**

- Decide on your topic and theme for your project.
  - Check out the Free API sites for some ideas of an API that you can utilize
    - [Apipheny](https://apipheny.io/free-api/)
    - [Mixed Analytics](https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/)
    - [I Am Sajan](https://iamsajan.com/free-api-without-an-api-key/)
- Functional Spec that explains the scope of the work and the deadlines that must be met.
- Create a Wireframe Prototype in Figma that will help non-tech people understand your idea.
  - Keep in mind that a lot of your bosses will need only high-level concepts and will not be concerned with the actual code. The code is your job.

**Milestone #2 **(Due: Monday of Week 3)\*\*\*\*

- Create your Git Repo using the provided link, which will clone over a blank repo.
- Start to code your project.
  - I will not give you a step-by-step guide for this.
  - At this point, you must use your skills and build it out yourself.
- Along the way, if you get stuck, you may reach out to the lab assistants, but remember this is YOUR portfolio project, and troubleshooting your own code is a part of this process.
- By Milestone #2, I am going to be checking that you have a React app that can compile without error and that you have your navigation up and running.

**Milestone #3 **(Due: Monday of Week 4)\*\*\*\*

- By this point, you should have a functional prototype of your project. It might not look pretty yet, but that is what the final week is for.
- Your Git Repo should have a number of significant commits pushed to it.

**Milestone #4 **(Due: Sunday of Week 4)\*\*\*\*

- Your completed project will be due.
- You must create a (3 to 10) minute long video that goes through your project, what you did this month, and the technologies that you used to get it working.
  - Remember it is your job to sell your work and really show it off.
