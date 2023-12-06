import Timesheet from '../models/timesheetmodel.js';

const TimesheetController = {
    // Create a new timesheetdir
    
//    .post - adds researcher to the database
//    return - nothing
//        * /
//      router.post('/', async (req, res) => {
//            const post = new Post({
//                Surname: req.body.Surname, initials: req.body.initials, title: req.body.title, institution: req.body.institution,
//                rating: req.body.rating, primary_field: req.body.primary_field,
//                secondary_field: req.body.secondary_field, specialisation: req.body.specialisation
//            });
//            try {
//                const savedPost = await post.save();
//                res.json(savedPost);
//            } catch (err) {
//                res.json({ message: err });
//            }
//        });
    create: async (req, res) => {
        try {
            const timesheet = await Timesheet.create(req.body);
            res.status(201).json(timesheet);

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // Get all timesheets
    getAll: async (req, res) => {
        try {
            const timesheets = await Timesheet.find();
            res.status(200).json(timesheets);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // Get a specific timesheet by ID
    getById: async (req, res) => {
        try {
            const timesheet = await Timesheet.findById(req.params.id);
            if (!timesheet) {
                res.status(404).json({ message: 'Timesheet not found' });
            } else {
                res.status(200).json(timesheet);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // Update a timesheet by ID
    updateById: async (req, res) => {
        try {
            const timesheet = await Timesheet.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!timesheet) {
                res.status(404).json({ message: 'Timesheet not found' });
            } else {
                res.status(200).json(timesheet);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // Delete a timesheet by ID
    deleteById: async (req, res) => {
        try {
            const timesheet = await Timesheet.findByIdAndDelete(req.params.id);
            if (!timesheet) {
                res.status(404).json({ message: 'Timesheet not found' });
            } else {
                res.status(204).end();
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
};

export default TimesheetController;
