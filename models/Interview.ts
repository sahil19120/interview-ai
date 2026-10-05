import mongoose, { Schema, Document } from "mongoose";

interface IInterview extends Document {
  userId: string;
  role: string;
  experience: string;
  techstack: string[];
  questionCount: string;
  createdAt: Date;
  completedAt: Date;
  overallScore: number;
  questionsAnswered: number;
  duration: number;
  results: {
    question: string;
    answer: string;
    feedback: {
      score: number;
      strengths: string[];
      weaknesses: string[];
      improvements: string[];
    };
  }[];
}

const InterviewSchema = new Schema<IInterview>(
  {
    userId: {
  type: String,
  required: true,
},

    role: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    techstack: {
      type: [String],
      required: true,
    },

    questionCount: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      required: true,
    },

    completedAt: {
      type: Date,
      required: true,
    },

    overallScore: {
      type: Number,
      required: true,
    },

    questionsAnswered: {
      type: Number,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    results: [
      {
        question: {
          type: String,
          required: true,
        },

        answer: {
          type: String,
          required: true,
        },

        feedback: {
          score: {
            type: Number,
            required: true,
          },

          strengths: {
            type: [String],
            default: [],
          },

          weaknesses: {
            type: [String],
            default: [],
          },

          improvements: {
            type: [String],
            default: [],
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Interview ||
  mongoose.model<IInterview>("Interview", InterviewSchema);