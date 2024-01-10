import dbConnect from '../../../utils/dbConnect';
import Newsletter from '../../../models/newsletter';
import moment from 'moment-timezone'; // Import moment-timezone library

export default async function handler(req, res) {
    await dbConnect();

    switch (req.method) {
        case 'GET':
            try {
                const newsletters = await Newsletter.find({});
                res.status(200).json({ newsletters });
            } catch (error) {
                res.status(500).json({ message: 'Error fetching emails', error: error.message });
            }
            break;
        case 'POST':
            try {
                const { email } = req.body;

                // Validate email format using Mongoose schema
                // const nepalTime = moment().tz('Asia/Kathmandu');
                const newEmail = new Newsletter({ email });

                // Set subscribedAt to the current time in Nepal time zone
                // newEmail.subscribedAt = nepalTime;

                // await newEmail.validate(); // Trigger validation explicitly
                await newEmail.save();

                res.status(201).json({ message: 'Email saved successfully' });
            } catch (error) {
                res.status(500).json({ message: 'Error saving email', error: error.message });
            }
            break;
        default:
            res.status(405).json({ message: 'Method Not Allowed' });
            break;
    }
}
