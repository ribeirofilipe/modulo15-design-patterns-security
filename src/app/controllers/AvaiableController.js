import AvailableService from '../services/AvailableService';

class AvaiableController {
  async index(req, res) {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: 'Invalid date.' });
    }

    const searchDate = Number(date);

    const available = await AvailableService.run({
      provider_id: req.params.id,
      searchDate
    })

    return res.json(available);
  }
}

export default new AvaiableController();