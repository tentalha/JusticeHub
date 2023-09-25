import { firStatuses } from "../constants";
import { model, Schema } from "mongoose";

const firSchema = new Schema(
  {
    details: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: firStatuses,
      default: "pending",
    },
    applicationType: {
      type: String,
      required: true,
    },
    complainantName: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    complainantCNIC: {
      required: true,
      type: String,
    },
    complainantId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    investigatorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    operatorId: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    suspects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Criminal",
      },
    ],
    relevantDocs: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const FIR = model("FIRs", firSchema);
