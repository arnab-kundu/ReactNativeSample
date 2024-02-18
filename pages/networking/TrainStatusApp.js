import { View, Text, StyleSheet, StatusBar, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import { useEffect } from "react";
import { useState } from "react";

export const TrainStatusApp = () => {

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState({})

    const listOfDownTrains =
        [33512, 33514, 30322, 33516, 33518, 30324, 33520, 33522, 33524, 33526, 33528, 33530, 33282, 33532, 33534, 33536, 33538]
    /*
    33512	HNB	HNB	03.03	19-02	SDAH	05.30	19-02	02.27	 	Y	Y	Y	Y	Y	Y	Y
    33514	HNB	HNB	04.48	19-02	SDAH	06.55	19-02	02.07	 	Y	Y	Y	Y	Y	Y	Y
    30322	HNB	HNB	05.42	19-02	DDJ	    07.27	19-02	01.45	 	Y	Y	Y	Y	Y	Y	Y
    33516	HNB	HNB	06.46	19-02	SDAH	08.55	19-02	02.09	 	Y	Y	Y	Y	Y	Y	Y
    33518	HNB	HNB	07.42	19-02	SDAH	09.52	19-02	02.10	 	Y	Y	Y	Y	Y	Y	Y
    30324	HNB	HNB	08.35	19-02	DDJ	    10.31	19-02	01.56	 	Y	Y	Y	Y	Y	Y	Y
    33520	HNB	HNB	10.47	19-02	SDAH	13.00	19-02	02.13	 	Y	Y	Y	Y	Y	Y	Y
    33522	HNB	HNB	11.32	19-02	SDAH	13.40	19-02	02.08	 	Y	Y	Y	Y	Y	Y	Y
    33524	HNB	HNB	12.05	19-02	SDAH	14.10	19-02	02.05	 	Y	Y	Y	Y	Y	Y	Y
    33526	HNB	HNB	13.15	19-02	SDAH	15.18	19-02	02.03	R	Y	Y	Y	Y	Y	Y	x
    33528	HNB	HNB	13.42	19-02	SDAH	15.55	19-02	02.13	 	Y	Y	Y	Y	Y	Y	Y
    33530	HNB	HNB	14.54	19-02	SDAH	17.12	19-02	02.18	 	Y	Y	Y	Y	Y	Y	Y
    33282	HNB	HNB	16.05	19-02	DDJ	    18.05	19-02	02.00	 	Y	Y	Y	Y	Y	Y	Y
    33532	HNB	HNB	16.53	19-02	SDAH	18.59	19-02	02.06	 	Y	Y	Y	Y	Y	Y	Y
    33534	HB	HNB	17.50	19-02	SDAH	19.57	19-02	02.07	 	Y	Y	Y	Y	Y	Y	Y
    33536	HNB	HNB	18.55	19-02	SDAH	21.10	19-02	02.15	 	Y	Y	Y	Y	Y	Y	Y
    33538   HNB	HNB	21.25	19-02	SDAH	23.35	19-02	02.10	 	Y	Y	Y	Y	Y	Y	Y	
    */
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
        setTimeout(() => controller.abort(), 500);  // Timeout & abort request after 300 milliseconds

        try {
            const response = await fetch(
                `http://164.52.197.129:3000/timetable/tc/ctr?train_date=${getDate()}&train_no=${listOfDownTrains[0]}`,
                { signal: controller.signal }
            )
            const json = await response.json()

            let formattedJson = JSON.stringify(json, null, 4)
            console.log("Response: " + formattedJson);
            setData(json)

        } catch (error) {
            if (error.name === 'AbortError') {
                console.warn('Network Timeout Error');
            } else {
                console.log(error.message);
            }
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getTrainStatusApi();
    }, [])

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>Fetching Train Status</Text>
                </View>
            ) : (
                <SafeAreaView style={styles.container}>
                    <View style={{
                        backgroundColor: '#AEAEAE',
                        padding: 20,
                        marginVertical: 1,
                        marginHorizontal: 1,
                        alignContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                        <Text style={{ fontSize: 15, flex: 2 }}>Station</Text>
                        <Text style={styles.title}>Sschdule time</Text>
                        <Text style={styles.title}>Actual time</Text>
                    </View>
                    
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <Item station={item.stn_name} schdule_arrival_time={item.sch_arr} actual_arrival_time={item.act_arr} />}
                        keyExtractor={item => item.srl_no}
                    />
                </SafeAreaView>
            )}
        </View>
    )
}

const Item = ({ station, schdule_arrival_time, actual_arrival_time }) => (
    <View style={styles.item}>
        <Text style={{ fontSize: 15, flex: 2 }}>{station}</Text>
        <Text style={styles.title}>{schdule_arrival_time}</Text>
        <Text style={styles.title}>{actual_arrival_time}</Text>
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 1,
        marginHorizontal: 1,
        flex: 1,
        alignContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        fontSize: 15,
        flex: 1
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFDE4'
    },
    loadingText: {
        fontSize: 30
    },
});