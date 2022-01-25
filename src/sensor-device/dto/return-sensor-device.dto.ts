import { CreateSensorDeviceDto } from "./create-sensor-device.dto";

export function returnSensorDeviceDto_forCreate(createSensorDeviceDto: CreateSensorDeviceDto) {
    return {
        id: createSensorDeviceDto.id,
        key: createSensorDeviceDto.key,
        label: createSensorDeviceDto.label,
        description: createSensorDeviceDto.description
    }
}