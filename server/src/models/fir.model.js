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
    victimId: {
      required: true,
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
  },
  {
    timestamps: true,
  }
);

export const FIR = model("FIRs", firSchema);
