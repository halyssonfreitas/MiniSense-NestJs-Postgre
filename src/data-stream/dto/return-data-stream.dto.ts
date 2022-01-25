import { CreateDataStreamDto } from "./create-data-stream.dto";

export function returnDataStreamDto_forCreate(createDataStreamDto: CreateDataStreamDto) {
    return {
        id: createDataStreamDto.id,
        key: createDataStreamDto.key,
        label: createDataStreamDto.label,
        unitId: createDataStreamDto.unit,
        deviceId: createDataStreamDto.sensorDevice,
        measurementCount: 0
    }
}