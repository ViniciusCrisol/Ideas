import Item from '../models/Item';
import User from '../models/User';

import { format } from 'date-fns';

class ItemController {
  async store(req, res) {
    const { id: userId } = req.params;
    const { title, description, shortDescription, category } = req.body;

    const ideaExists = await Item.findOne({ title });

    if (ideaExists) {
      return res.json({ error: 'Idea alredy exists' });
    }

    const response = await Item.create({
      title,
      description,
      shortDescription,
      category: category.split(',').map((c) => c.trim()),
      userId,
    });

    return res.json(response);
  }

  async index(req, res) {
    const response = await Item.find().limit(20).sort({ _id: -1 });
    return res.json(response);
  }

  async update(req, res) {
    const { id } = req.params;
    const { title, description, shortDescription } = req.body;

    const ideaExists = Item.findById({ id });

    if (!ideaExists) {
      return res.json({ error: 'Idea does not exists' });
    }

    await Item.findByIdAndUpdate(id, { title, description, shortDescription });

    const response = await Item.findById({ id });

    return res.json(response);
  }

  async delete(req, res) {
    const { id } = req.params;

    const ideaExists = await Item.findById(id);

    if (!ideaExists) {
      return res.json({ error: 'Idea does not exists' });
    }

    await Item.findOneAndRemove(id);

    return res.json({ ok: true });
  }

  async show(req, res) {
    const { id } = req.params;

    const idea = await Item.findById(id);

    if (!idea) {
      return res.json({ error: 'Idea does not exists' });
    }

    const user = await User.findById(idea.userId);

    const response = {
      userId: user._id,
      userName: user.name,
      userEmail: user.email,

      ideaCategory: idea.category,
      ideaTitle: idea.title,
      ideaShortDescription: idea.shortDescription,
      ideaDescription: idea.description,
      ideaCreateDate: format(idea.createdAt, 'yyyy/MM/dd'),
    };

    return res.json(response);
  }
}

export default new ItemController();
