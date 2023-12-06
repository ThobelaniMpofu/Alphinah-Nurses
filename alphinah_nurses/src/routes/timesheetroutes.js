import express from 'express';
import TimesheetController from '../controllers/timesheetcontroller.js';

const router = express.Router();

// Create a new timesheet
router.post('/', TimesheetController.create);

// Get all timesheets
router.get('/', TimesheetController.getAll);

// Get a specific timesheet by ID
router.get('/timesheets/:id', TimesheetController.getById);

// Update a timesheet by ID
router.put('/timesheets/:id', TimesheetController.updateById);

// Delete a timesheet by ID
router.delete('/timesheets/:id', TimesheetController.deleteById);

export default router;
