/**
 *  Get all Developers
 * @param {*} req
 * @param {*} res
 */

export const getAllDevelopers = (req, res) => {
  res.status(200).json({ message: "All Developers" });
};

/**
 * Create new Devs
 * @param {*} req 
 * @param {*} res 
 */
export const createDev = (req, res) => {
  res.status(201).json({ message: "Dev Data Created" });
};
