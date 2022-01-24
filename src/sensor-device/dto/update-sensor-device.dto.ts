import { PartialType } from '@nestjs/mapped-types';
import { CreateSensorDeviceDto } from './create-sensor-device.dto';

export class UpdateSensorDeviceDto extends PartialType(CreateSensorDeviceDto) {}
