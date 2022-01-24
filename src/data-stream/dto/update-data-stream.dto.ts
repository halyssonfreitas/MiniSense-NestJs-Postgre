import { PartialType } from '@nestjs/mapped-types';
import { CreateDataStreamDto } from './create-data-stream.dto';

export class UpdateDataStreamDto extends PartialType(CreateDataStreamDto) {}
