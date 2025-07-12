const students = [
  {
    id: 1,
    name: "Mohammad Ali",
    age: 40,
    skill: "IOS",
  },
  {
    id: 2,
    name: "Mohammad",
    age: 30,
    skill: "WP",
  },
  {
    id: 3,
    name: "Shanto",
    age: 20,
    skill: "MERN",
  },
];


/**
 *  Get all Developers
 * @param {*} req
 * @param {*} res
 */

export const getHomePage = (req, res) => {
 
  res.render("home", {
    title: "Prothom pata",
    desc: "Hello page, How are you dd",
    isUser: false,
  });

};

export const getContactPage = (req, res) => {
  res.render("contact", {
    title:"This is Contact page",
    students,
  });
}

export const getAboutPage = (req, res) => {
  res.render("about", {
    title: "About us tomader   page",
    foods: ["Alo", "Potol", "lao", "kumra"],
  });
}
