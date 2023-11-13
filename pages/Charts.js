import { View, Text, Dimensions, ScrollView, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

import { data, contributionData, pieChartData, progressChartData } from './chartDataMocked'

function BezierLineChart() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>

                    <Text style={styles.labelStyle}>Line Chart</Text>
                    <LineChart
                        data={data}
                        width={Dimensions.get("window").width - 20} // from react-native
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={chartConfig}
                        bezier
                        style={graphStyle} />

                    <Text style={styles.labelStyle}>Contribution Graph</Text>
                    <ContributionGraph
                        values={contributionData}
                        width={Dimensions.get("window").width - 20}
                        height={220}
                        endDate={new Date('2016-05-01')}
                        numDays={105}
                        chartConfig={chartConfig}
                        style={graphStyle} />

                    <Text style={styles.labelStyle}>Bar Chart</Text>
                    <BarChart
                        width={Dimensions.get("window").width - 20}
                        height={220}
                        data={data}
                        chartConfig={chartConfig}
                        style={graphStyle} />

                    <Text style={styles.labelStyle}>Progress Chart</Text>
                    <ProgressChart
                        data={progressChartData}
                        width={Dimensions.get("window").width - 20}
                        height={220}
                        chartConfig={chartConfig}
                        style={graphStyle} />

                    <Text style={styles.labelStyle}>Stacked Bar Chart</Text>
                    <StackedBarChart
                        width={Dimensions.get("window").width - 20}
                        height={220}
                        data={data1}
                        chartConfig={chartConfig}
                        style={graphStyle} />

                    <Text style={styles.labelStyle}>Pie Chart</Text>
                    <PieChart
                        data={pieChartData}
                        height={220}
                        width={Dimensions.get("window").width - 20}
                        chartConfig={chartConfig}
                        accessor="population"
                        style={graphStyle} />

                    <Text style={styles.labelStyle}>Bezier Line Chart (Customized)</Text>
                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width - 20} // from react-native
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={graphStyle} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const graphStyle = {
    marginVertical: 8,
    borderRadius: 16,
    marginHorizontal: 10
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
    },
    scrollView: {
        backgroundColor: '#b3b9bf',
        marginHorizontal: 0,
    },
    text: {
        fontSize: 42,
    },
    labelStyle: {
        color: chartConfig.color(),
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 16
    }
});

const data1 = {
    "barColors": ["#dfe4ea", "#ced6e0"],
    "data": [[99378, 8032], [40704, 3895]],
    "labels": ["01/10/2020", "10/10/2020"],
    "legend": ["AMOUNT", "TAX"]
}


export default BezierLineChart