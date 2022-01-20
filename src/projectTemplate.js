const projects = [
  {
    id: 1,
    title: "MonsterWorkout",
    build:
      "HTML, CSS, JavaScript, Node.js, Passport.js(User Auth), MongoDB, Atlas, ejs AWS(elasticbeanstalk, codepipeline)",

    description:
      "MonsterWorkout is the ultimate fitness application. MonsterWorkout has a multitude of features. Guests can search through over 3,000 workouts that we provide, and create a random workout based on their target muscle area or equipment they have at hand. Users who are signed up can not only utilize the features given to guests, but can also create their own workouts, log their personal achievements and goals, add workouts to their list of favorite workouts, receive custom workout regimens, and more.",
    URL: "http://workoutapp-env.eba-5vn3jgdm.us-east-2.elasticbeanstalk.com/",
    img: "../images/MonsterWorkout.png",
  },
  {
    id: 2,
    title: "jMessage",
    build: "React, HTML, CSS, JavaScript, Node.js, RestAPIs, AWS, EJS,",

    description:
      "jMessage is a web application that allows you to message yourfriends and stay connected with people that you meet. Each user has a unique username and password that allows them to log in and chat with their peers. Users can send messages, gifs, pictures. Message threads can have unique styles as well. Users can change a thread's avatar and chat names, edit the font and style of their text, and more.",
    URL: "http://jmessager-env.eba-pimydv3b.us-east-2.elasticbeanstalk.com/",
    img: "../images/jmessage.png",
  },
  {
    id: 3,
    title: "Santa's List",
    build: "React.js, HTML, CSS, JavaScript, APIs, AWS",

    description:
      "This react app allows parents to receive Christmas lists, with associated Amazon links to each gift, directly from their children via email. The user adds to their list to Santa by inputting the name of the gift under “title” and its description(optional) where stated. After the user is finished with their list, they will put in the desired email address to whom they want to send the list to. The email will contain the title, description, and amazon link to each gift. This app brings a whole new meaning to convenience for parents/guardians who want to get a head start on shopping for the Holiday Season. Happy Holidays and Enjoy!",
    URL: "https://main.d39ra7xx8jfbvf.amplifyapp.com/",
    img: "../images/santa.png",
  },
  {
    id: 4,
    title: "GameHub",
    build: "HTML, CSS, JavaScript, Node.js, APIs, AWS",

    description:
      "This web app host 4 games including, a simon game, a drum kit, tic tac toe, and dice roller. along with the games, this web application has a home page that has view previews to every game, links to my github, linked in and other media platforms, and a quick description of who I am. GameHub is also connected to my MailChimp subscription through an API that allows the user to be added to my subscriber list. The subscribers will be notified via email of new games that are uploaded to GameHub.",
    URL: "http://node-env.eba-canptspm.us-east-2.elasticbeanstalk.com/",
    img: "../images/game.png",
  },
  {
    id: 5,
    title: "cWeather",
    build: "HTML, CSS, JavaScript, Node.js, APIs, AWS, EJS",

    description:
      "Current Weather App This simple web application gets the city and state that the user inputs into the page and sends a request to the openweathermap API. The API then returns a JSON package which holds information about the requested location's weather. The information recieved is then parsed and displayed to the user. A contact page is also put in place so that the user can ask me any questions via email.",
    URL: "http://cweather-env.eba-m3g3smfu.us-east-2.elasticbeanstalk.com/",
    img: "../images/weather.png",
  },
  {
    id: 6,
    title: "Time Calculator",
    build: "HTML, CSS, JavaScript AWS",

    description:
      "Physical, Occupational, and Speech therapist are all required to report the time they spent treating their patients. This time calculator has a simplistics design so that therapist can use to calculate their treatment time with each patient with ease and minimum hassle.",
    URL: "https://johnkelly59.github.io/",
    img: "../images/time.png",
  },
  {
    id: 7,
    title: "JobLogger",
    build:
      "HTML, CSS, JavaScript, Node.js, Passport.js, MySQL, AWS(deployment)",

    description:
      "Searching for jobs is hard. Keeping up with all of the jobs you have applied for can be even harder. The jobLogger app helps you track all of the jobs that you have applied for; along with important details about the job. The app takes the client's input about their job (company name, title, salary, level of interest, etc), saves all of it in a MySQL database, and displays it on the home page. The user is able to add comments, add job entries to an archive list, delete entries, and more. This app also has user authentication so all of your information is safe and secured.",
    URL: "http://jobs-env.eba-yydrnnmi.us-east-2.elasticbeanstalk.com/",
    img: "../images/job.png",
  },
];

export default projects;
