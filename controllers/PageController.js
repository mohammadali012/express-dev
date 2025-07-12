
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const loadStaffPage =( req, res) => {
    res.render("staff");
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const loadMenuPage = (req, res) => {
    res.render("menu");
}


export const loadHomePage = (req, res) => {
    res.render("home");
}