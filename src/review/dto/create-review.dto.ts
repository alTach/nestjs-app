import { IsNumber, IsString, Max, Min } from "class-validator";

export class CreateReviewDto {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  title: string;
  @IsString()
  descriptions: string;

  @Max(5)
  @Min(1, {message: 'Рейтинг не может быть менее 1-го'})
  @IsNumber()
  rating: number;

  @IsNumber()
  productId: number;
}
