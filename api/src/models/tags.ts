import {Model, STRING} from 'sequelize';
import {db} from "../data/database";

export interface TagAddModel {
  name: string;
}

export interface TagModel extends Model<TagModel, TagAddModel> {
  name: string;
  createdAt: string;
  updatedAt: string;
}

export const Tag = db.define<TagModel, TagAddModel>('tag', {
  name: {
    type: STRING,
    allowNull: false
  }
});
