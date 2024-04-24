// controllers/subscribersController.js

const Subscriber = require('../models/Subscriber');

exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find({});
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving subscribers', error });
  }
};

// controllers/subscribersController.js

exports.getSubscriptionPage = (req, res) => {
    res.render('contact');
  };

  // controllers/subscribersController.js

exports.saveSubscriber = async (req, res) => {
    const { email } = req.body;
  
    try {
      const newSubscriber = new Subscriber({ email });
      await newSubscriber.save();
      res.render('thanks');
    } catch (error) {
      res.status(500).json({ message: 'Error saving subscriber', error });
    }
  };
  