import bcrypt from 'bcryptjs';
import * as Yup from 'yup';

import User from '../models/User';
import Item from '../models/Item';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const password_hash = await bcrypt.hash(password, 8);

    const response = await User.create({ name, email, password_hash });

    return res.json(response);
  }

  async show(req, res) {
    const { userId } = req.params;

    const idea = await Item.find(userId);

    if (!idea) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    return res.json(idea);
  }
}

export default new UserController();
