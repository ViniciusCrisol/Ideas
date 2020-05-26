import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    await bcrypt.compare(password, user.password_hash);

    const id = user._id;

    return res.json({
      email,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
