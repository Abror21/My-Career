import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = ({ categories, series, width }) => {
	series = series.map(value => Number(value));

	//eslint-disable-next-line
	const [state, setState] = useState({
		options: {
			labels: categories,
			theme: {
				monochrome: {
					enabled: false
				},
				legend: {
					show: false
				}
			},
			plotOptions: {
				pie: {
					startAngle: 0,
					endAngle: 360,
					expandOnClick: true,
					offsetX: 0,
					offsetY: 0,
					customScale: 1,
					dataLabels: {
						offset: 0,
						minAngleToShowLabel: 10
					}
				}
			},
			responsive: [
				{
					breakpoint: 760,
					options: {
						chart: {
							width: "100%"
						},
						legend: {
							show: false
						}
					}
				}
			]
			// chart: {
			// 	events: {
			// 		dataPointSelection: (event, chartContext, config) => {
			// 			console.log(config.w.config.labels[config.dataPointIndex]);
			// 		}
			// 	}
			// }
		},
		series: series
	});

	return (
		<div className="pie__chart">
			<ReactApexChart options={state.options} series={state.series} type="pie" width={width} />
		</div>
	);
};

export default PieChart;
