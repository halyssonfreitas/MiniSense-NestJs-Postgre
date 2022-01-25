import { CreateSensorDataDto } from "src/sensor-data/dto/create-sensor-data.dto"

export function returnSensorDataDto_forCreate(createSensorDataDto: CreateSensorDataDto) {
    return {
        id: createSensorDataDto.id,
        timestamp: createSensorDataDto.timestamp,
        value: createSensorDataDto.value,
        unitId: createSensorDataDto.unitId.id
    }

}