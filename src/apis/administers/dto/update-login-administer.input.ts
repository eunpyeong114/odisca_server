import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateLoginAdministerInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  phone: string;
}
