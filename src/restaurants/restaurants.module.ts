import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsSchema } from './schemas/restaurants.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Restaurants',
        schema: RestaurantsSchema,
      },
    ]),
  ],
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
})
export class RestaurantsModule {}
