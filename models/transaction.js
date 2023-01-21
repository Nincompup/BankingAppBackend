import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    senderacc: {
      type: String,
      required: true,
    },
    recieveracc: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    doneat: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Transactions", TransactionSchema);
