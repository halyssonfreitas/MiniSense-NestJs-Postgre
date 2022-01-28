import { HttpException, HttpStatus } from "@nestjs/common";
import { CreateSensorDeviceDto } from "./create-sensor-device.dto";

export interface CreateSensorDevice {
    id: string;
    key: string;
    label: string;
    description: string;
}

export class ParseSensorDeviceDto {

    static forCreate(createSensorDeviceDto: CreateSensorDeviceDto): CreateSensorDevice {

        if (!createSensorDeviceDto) {
            throw new HttpException("", HttpStatus.BAD_REQUEST)
        }

        return {
            id: createSensorDeviceDto.id,
            key: createSensorDeviceDto.key,
            label: createSensorDeviceDto.label,
            description: createSensorDeviceDto.description
        }
    }

    static forFindAllByUser(sensorDeviceListByUser) {
        let resposta = []
        let dataStream
        let dataStreamList
        let sensorDevice
        for (let i = 0; i < sensorDeviceListByUser.length; i++) {
            console.log(`I: ${i}`)
            dataStreamList = [];
            if (!sensorDeviceListByUser[i]) {
                throw new HttpException("", HttpStatus.BAD_REQUEST)
            }
            for (let j = 0; j < sensorDeviceListByUser[i].dataStream.length; j++) {
                console.log(`J: ${j}`)
                if (!sensorDeviceListByUser[i].dataStream[j]) {
                    throw new HttpException("", HttpStatus.BAD_REQUEST)
                }
                dataStream = {
                    id: sensorDeviceListByUser[i].dataStream[j].id,
                    key: sensorDeviceListByUser[i].dataStream[j].key,
                    label: sensorDeviceListByUser[i].dataStream[j].label,
                    unitId: sensorDeviceListByUser[i].dataStream[j].unit.id,
                    deviceId: sensorDeviceListByUser[i].id,
                    measurementCount: sensorDeviceListByUser[i].dataStream[j].sensorData.length,
                }
                dataStreamList.push(dataStream)

            }

            sensorDevice = {
                id: sensorDeviceListByUser[i].id,
                key: sensorDeviceListByUser[i].key,
                label: sensorDeviceListByUser[i].label,
                description: sensorDeviceListByUser[i].description,
                streams: dataStreamList
            }

            resposta.push(sensorDevice)
        }

        return resposta
    }


    static forFindOneByKeyRoute(sensorDeviceData) {
        let resposta = []
        let dataStream
        let dataStreamList
        let sensorDevice
        let sensorData
        let sensorDataList

        dataStreamList = []
        for (let i = 0; i < sensorDeviceData.dataStream.length; i++) {

            sensorDataList = []

            let steps = -1
            if (sensorDeviceData.dataStream[i].sensorData.length > 5) {
                steps += sensorDeviceData.dataStream[i].sensorData.length - 5
            }

            for (let j = sensorDeviceData.dataStream[i].sensorData.length - 1; j > steps; j--) {
                sensorData = {
                    timestamp: sensorDeviceData.dataStream[i].sensorData[j].timestamp,
                    value: sensorDeviceData.dataStream[i].sensorData[j].value,
                }
                sensorDataList.push(sensorData)
            }

            dataStream = {
                id: sensorDeviceData.dataStream[i].id,
                key: sensorDeviceData.dataStream[i].key,
                label: sensorDeviceData.dataStream[i].label,
                unitId: sensorDeviceData.dataStream[i].unit.id,
                deviceId: sensorDeviceData.id,
                measurementCount: sensorDeviceData.dataStream[i].sensorData.length,
                measurements: sensorDataList
            }
            dataStreamList.push(dataStream)

        }

        sensorDevice = {
            id: sensorDeviceData.id,
            key: sensorDeviceData.key,
            label: sensorDeviceData.label,
            description: sensorDeviceData.description,
            streams: dataStreamList
        }

        resposta.push(sensorDevice)

        return resposta
    }

}