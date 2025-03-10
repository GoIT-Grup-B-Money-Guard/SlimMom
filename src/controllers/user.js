import { calculateDailyCalory } from '../utils/calculateCalory';

export const getDailyRateController = (req, res, next) => {
  const currentWeight = Number(req.body.currentWeight);
  const height = Number(req.body.height);
  const age = Number(req.body.age);
  const desiredWeight = Number(req.body.desiredWeight);

  const dailyRate = calculateDailyCalory({
    currentWeight,
    height,
    age,
    desiredWeight,
  });

  res.status(200).json({
    status: 'success',
    data: { dailyRate },
  });
};
