import mongoose from 'mongoose';

const FormSubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.models.FormSubmission || mongoose.model('FormSubmission', FormSubmissionSchema);