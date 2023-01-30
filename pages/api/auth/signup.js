import nc from "next-connect";
import bcrypt from "bcrypt";
import { validateEmail } from "../../../utils/validations";
import db from "../../../utils/db";
import User from "../../../models/User";
import { createActivationToken } from "../../../utils/tokens";
import { activateEmailTemplate } from "../../../emails/activateEmailTemplate";
import { sendEmail } from "../../../utils/sendEmails";

// brcypt is just a (one of many) algorithms to one-way hash a password. So it's generally used in a login mechanism; you hash the login password with bcrypt and then compare it to the already hashed password in your database.

// JWT comes into play after a login is succesful. It's a mechanism where the client, after a succesful login, receives a JWT token that contains information who he is (authentication) and what he is allowed to do (authorization). This token is signed, so the client can pass this token in to other services that can verify the signature to make sure the client didn't fake it.

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
    const cryptedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: cryptedPassword });

    const addedUser = await newUser.save();
    const activation_token = createActivationToken({
      id: addedUser._id.toString(),
    });
    const url = `${process.env.BASE_URL}/activate/${activation_token}`;
    sendEmail(email, url, "", "Activate your account.", activateEmailTemplate);
    await db.disconnectDb();
    res.json({
      message: "Register success! Please activate your email to start.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
