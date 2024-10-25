import signup from "../model/signup";
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    const { name, email, password, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = new signup({ name, email, password: hash, role });
    try {
        await user.save();
        res.status(200).json({ msg: "signup successfully" });
    } catch (err) {
        res.status(400).json(err);
    }
}