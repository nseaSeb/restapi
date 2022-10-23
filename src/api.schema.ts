import * as mongoose from 'mongoose';

export const ApiSchema = new mongoose.Schema({
  key: String,
  data: String,
  createDate: String,
  updateDate: String,
});
