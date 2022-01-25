import { CreateSensorDeviceDto } from "./create-sensor-device.dto";

export function returnSensorDeviceDto_forCreate(createSensorDeviceDto: CreateSensorDeviceDto) {
    return {
        id: createSensorDeviceDto.id,
        key: createSensorDeviceDto.key,
        label: createSensorDeviceDto.label,
        description: createSensorDeviceDto.description
    }
}

export function returnSensorDeviceDto_forFindAllByUser(sensorDeviceListByUser) {
    let resposta = []
    let dataStream
    let dataStreamList
    let sensorDevice
    for (let i = 0; i < sensorDeviceListByUser.length; i++) {
        console.log(`I: ${i}`)
        dataStreamList = []
        for (let j = 0; j < sensorDeviceListByUser[i].dataStream.length; j++) {
            console.log(`J: ${j}`)
            dataStream = {
                id : sensorDeviceListByUser[i].dataStream[j].id,
                key : sensorDeviceListByUser[i].dataStream[j].key,
                label : sensorDeviceListByUser[i].dataStream[j].label,
                unitId : sensorDeviceListByUser[i].dataStream[j].unit.id,
                deviceId : sensorDeviceListByUser[i].id,
                measurementCount : sensorDeviceListByUser[i].dataStream[j].sensoData.length,
            }
            dataStreamList.push(dataStream)
            
        }

        sensorDevice = {
            id : sensorDeviceListByUser[i].id,
            key : sensorDeviceListByUser[i].key,
            label : sensorDeviceListByUser[i].label,
            description : sensorDeviceListByUser[i].description,
            streams : dataStreamList
        }

        resposta.push(sensorDevice)
    }

    console.log(resposta)

    return resposta
}