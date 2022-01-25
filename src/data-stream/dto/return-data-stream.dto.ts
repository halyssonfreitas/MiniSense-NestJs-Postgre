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

export function returnDataStreamDto_forFindOneByKeyRoute(dataStreamData) {

    let sensorDataList = []
    let sensorData

    for (let i=dataStreamData.sensorData.length -1; i > -1; i--) {
        sensorData = {
            timestamp : dataStreamData.sensorData[i].timestamp,
            value : dataStreamData.sensorData[i].value
        }
        sensorDataList.push(sensorData)
    }

    const dataStream = {
        id: dataStreamData.id,
        key: dataStreamData.key,
        label: dataStreamData.label,
        unitId: dataStreamData.unit.id,
        deviceId: dataStreamData.sensorDevice.id,
        measurementCount: dataStreamData.sensorData.length,
        measurements: sensorDataList
    }

    return dataStream
}