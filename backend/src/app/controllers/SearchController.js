import Item from '../models/Item';

class SearchController {
  async show(req, res) {
    const { search } = req.params;

    const ideas = await Item.find({ category: search });

    if (!ideas) {
      return res.status(400).json({ error: 'Tag not found' });
    }

    return res.json(ideas);
  }
}

export default new SearchController();
