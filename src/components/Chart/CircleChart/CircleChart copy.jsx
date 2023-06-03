import React from "react";
import { Doughnut } from "react-chartjs-2";
import { get } from "lodash";

const options1 = {
	responsive: true,
	legend: {
		display: false,
		position: "bottom",
		labels: {
			fontSize: 42,
			fontColor: "#323232",
			fontFamily: "Proxima Nova"
		}
	}
};

export default function CircleChart({ height, color, percent, total, finished, width, textColor
}) {
	const plugins = [
		{
			beforeDraw: function (chart) {
				var width = chart.width,
					height = chart.height,
					ctx = chart.ctx;
				ctx.restore();
				var fontSize = (height / 100).toFixed(2);
				ctx.font = fontSize + "em sans-serif";
				ctx.textBaseline = "top";
				var color = textColor;
				ctx.fillStyle = color || "#000";
				var text = `${percent}%`,
					textX = Math.round((width - ctx.measureText(text).width) / 2),
					textY = height / 3;
				ctx.fillText(text, textX, textY);
				ctx.save();
			}
		}
	];

	return (
		<div>
			<Doughnut
				data={{
					datasets: [
						{
							data: [finished, total - finished],
							backgroundColor: [get(color, "color1"), get(color, "color2")]
						}
					]
				}}
			 
			/>
		</div>
	);
}
