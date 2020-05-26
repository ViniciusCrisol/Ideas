import bcrypt from 'bcryptjs';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const password_hash = await bcrypt.hash(password, 8);

    const response = await User.create({ name, email, password_hash });

    return res.json(response);
  }
}

export default new UserController();
