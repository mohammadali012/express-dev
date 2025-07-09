import { students } from "../data/student.js";

/**
 * Get All Student Data
 * @param {*} req
 * @param {*} res
 */

export const getAllStudent = (req, res) => {
  res.status(200).json(students);
};

export const getSingleStudent = (req, res) => {
  const { roll } = req.params;

  const student = students.find((data) => data.roll == roll);

  res.status(200).json(student);
};
