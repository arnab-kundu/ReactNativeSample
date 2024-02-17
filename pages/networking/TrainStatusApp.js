import { Text } from "react-native";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";

import { useEffect } from "react";
import { useState } from "react";

export const TrainStatusApp = () => {

    function getDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        console.debug("Date today: " + today)

        return today
    }

    const getTrainStatusApi = async () => {

        let controller = new AbortController()
        setTimeout(() => controller.abort(), 3000);  // abort after 3 seconds

        try {
            const response = await fetch(
                'http://164.52.197.129:3000/timetable/tc/ctr?train_date=' + getDate() + '&train_no=33520',
                { signal: controller.signal }
            )
            const json = await response.json()
            
            let formattedJson = JSON.stringify(json, null, 4)
            console.log("Response: " + formattedJson);

        } catch (error) {
            if (error.name === 'AbortError') {
                console.warn('Network Error');
            } else {
                console.log(error.message);
            }
        } finally {

        }

    }

    useEffect(() => {
        getTrainStatusApi();
    }, [])

    return (
        <View></View>
    )
}