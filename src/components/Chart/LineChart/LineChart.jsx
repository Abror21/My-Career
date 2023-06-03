import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = ({ chartData, height }) => {
	const categories = chartData && chartData.map(item => item.categories);
	const series = chartData && chartData.map(item => item.series);

	const state = {
		series: [
			{
				name: "Desktops",
				data: series
			}
		],
		options: {
			chart: {
				height: 550,
				type: "line",
				zoom: {
					enabled: false
				},
				fontFamily: "Proxima Nova"
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "straight",
			},
			colors: ["green"],

			fill: {
				type: "gradient",
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.7,
					opacityTo: 0.9,
					colorStops: [
						{
							offset: 60,
							color: "#61DBC3",
							opacity: 1
						},
						{
							offset: 100,
							color: "#95DA74",
							opacity: 1
						}
					]
				}
			},
			markers: {
				size: 5
			},
			tooltip: {
				enabled: true,
				enabledOnSeries: true,
				shared: false,
				followCursor: false,
				intersect: false,
				inverseOrder: false,
				custom: function({ series, seriesIndex, dataPointIndex, w }) {
					return `<div class="arrow_box"><span>${series[seriesIndex][dataPointIndex]}ta</span><p>"Ariza"</p></div>`;
				},
				fillSeriesColor: true,
				theme: "dark",

				style: {
					fontSize: "20px",
					fontFamily: "Proxima Nova",
					background: "#000",
					padding: "15px 25px"
				},
				onDatasetHover: {
					highlightDataSeries: true
				},
				x: {
					show: true,
					format: "dd MMM",
					formatter: undefined
				},
				y: {
					show: false,
					formatter: undefined,
					title: {
						formatter: seriesName => seriesName
					}
				},
				marker: {
					show: true
				},
				items: {
					display: "flex"
				},
				fixed: {
					enabled: false,
					position: "topRight",
					offsetX: 0,
					offsetY: 0
				}
			},
			grid: {
				row: {
					colors: ["#DBEFDE", "transparent"],
					opacity: 0.5
				}
			},
			xaxis: {
				categories: categories
			}
		}
	};

	return <ReactApexChart options={state.options} series={state.series} type="line" width={"95%"} height={height} />;
};
export default LineChart;
