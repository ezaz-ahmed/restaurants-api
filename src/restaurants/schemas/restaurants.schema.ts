import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  FAST_FOOD = 'Fast Food',
  CAFE = 'Cafe',
  FINE_DINING = 'Fine Dining',
}

@Schema()
export class Restaurants {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  email: string;

  @Prop()
  phoneNo: string;

  @Prop()
  address: string;

  @Prop()
  category: Category;

  @Prop()
  images?: object[];
}

export const RestaurantsSchema = SchemaFactory.createForClass(Restaurants);
