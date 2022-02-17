// import Image from "./image.jpg"
import Crm from "./crm.jpg"
import Todo from "./todo.jpg"
import Chat from "./chat.jpg"
import Portfolio from "./image2.jpg"
import Test from "./bibek.jpg"
import Test1 from "./ram.png"
export const projects = [
    {
      title: "Python Django",
      subtitle: "Customer Resource Management",
      description:
        "A crm app which is made in django .It has basic features required for an customer for its resources management",
      image: Crm,
      link: "https://cycosan-crm1.herokuapp.com/",
    },
    {
      title: "React",
      subtitle: "React Portfolio App",
      description:
        "Portfolio app containing all my information like basic information, skills ,my projects ,my experience and many more.",
      image: Portfolio,
      link: "/",
    },
    {
      title: "Django , Channels and Redis",
      subtitle: "Chat App",
      description:
        "This app is basically for chatting using simple UI and redis so that user can chat in real time send message and recive message",
      image: Chat,
      link: "/",
    },
    {
      title: "React Python",
      subtitle: "Todo App",
      description:
        "Todo App to add delete update todolist so that user can stay focused on what tasked are left and can plan thier day accordinly",
      image: Todo,
      link: "/",
    },
  ];

  export const skills = [
   "Python ","React","Heroku","ASV.Net","Java","Html/CSS"
  ];


  
  export const testimonials = [
    {
      "quote":"Very Hard Working and Intelligence student.Beside Education he was also very fond of sports and music.He actively participated in all events",
      "image":Test1,
      "name":"Bishal Tamang",
      "company":"Kantipur Engineering College"
    },
    {
      "quote":"Versatile Personality and very Displined employee.He always helped junior and perfom hard task in time also was very intersting and funny ",
      "image":Test,
      "name":"Ram Yadav",
      "company":"F1 Soft Company"
    }
   ];

   export const qualifications = [
    {
      "from_date":2020,
      "to_date":"present",
      "title":"Python & Scrapping Engineer/ Research Engineer",
      "university_name":"Dhuni Software",
      "grade":"5+ projects",
      "location":"Matidevi",
      "is_education":false
  
    },
    {
      "from_date":2016,
      "to_date":2020,
      "title":"Bachelor in Computer Engineering",
      "university_name":"Kantipur Engineering College",
      "grade":"90%",
      "location":"Dhapakhel,lalitpur",
      "is_education":true

    },
    {
      "from_date":2019,
      "to_date":2020,
      "title":"Computer Teacher",
      "university_name":"Balkumari Secondary School",
      "grade":"Volunteer Teaching",
      "location":"Sunakothi,lalitpur",
      "is_education":false

    },
    {
      "from_date":2014,
      "to_date":2016,
      "title":"High School(Plus 2)",
      "university_name":"Gems Institute Higher Education",
      "grade":"69%",
      "location":"Dhapakhel,lalitpur",
      "is_education":true

    }
   ];