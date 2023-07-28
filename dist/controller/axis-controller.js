import * as d3 from "d3";
export const drawHorizontalAxis = (chartStructure) => {
    if (chartStructure.horizontalAxisGroup === undefined) {
        chartStructure.horizontalAxisGroup = chartStructure.chartGroup
            .append('g')
            .attr("transform", "translate(0," + chartStructure.chart.getClientHeight() + ")");
    }
    chartStructure.horizontalAxisGroup.selectAll("*").remove();
};
export const drawAxes = (chartStructure, chart) => {
    const vAxis = chart.verticalAxis;
    const hAxis = chart.horizontalAxis;
    const width = chart.getClientWidth() - vAxis.offset.right - vAxis.offset.left;
    const height = chart.getClientHeight() - vAxis.offset.bottom;
    if (chartStructure.horizontalAxisGroup === undefined) {
        chartStructure.horizontalAxisGroup = chartStructure.chartGroup
            .append('g')
            .attr("transform", "translate(0," + height + ")");
    }
    if (chartStructure.verticalAxisGroup === undefined) {
        chartStructure.verticalAxisGroup = chartStructure.chartGroup
            .append('g')
            .attr("transform", "translate(" + vAxis.offset.left + ", 0)");
    }
    chartStructure.verticalAxisGroup.selectAll("*").remove();
    chartStructure.horizontalAxisGroup.selectAll("*").remove();
    let horizontalAxis = d3.axisBottom(chart.timeScale);
    chartStructure.horizontalAxisGroup.call(horizontalAxis);
    let verticalAxis = d3.axisLeft(chart.verticalScale);
    chartStructure.verticalAxisGroup.call(verticalAxis);
};
