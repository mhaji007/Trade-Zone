import nc from "next-connect";
import { validateEmail } from "../../../utils/validation";
import db from "../../../utils/db";
const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill in all the required fields." });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email." });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
