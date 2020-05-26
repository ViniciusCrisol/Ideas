import Item from '../models/Item';

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

    const ideaExists = Item.findById({ id });

    if (!ideaExists) {
      return res.json({ error: 'Idea does not exists' });
    }

    await Item.findOneAndRemove(id);

    return res.json({ ok: true });
  }
}

export default new ItemController();
