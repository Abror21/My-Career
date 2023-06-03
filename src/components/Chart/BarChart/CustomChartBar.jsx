import React from "react";
import "./style.scss";

// const chartData = [
//   { categories: 1, series: 60 },
//   { categories: 2, series: 120 },
//   { categories: 3, series: 160 },
//   { categories: 4, series: 80 },
//   { categories: 5, series: 55 },
//   { categories: 6, series: 41 },
//   { categories: 7, series: 89 },
//   { categories: 8, series: 98 },
//   { categories: 9, series: 55 },
//   { categories: 10, series: 88 },
//   { categories: 11, series: 32 },
//   { categories: 12, series: 100 },
//   { categories: 13, series: 60 },
//   { categories: 14, series: 120 },
//   { categories: 15, series: 120 },
//   { categories: 16, series: 80 },
//   { categories: 17, series: 55 },
//   { categories: 18, series: 41 },
//   { categories: 19, series: 89 },
//   { categories: 20, series: 98 },
//   { categories: 21, series: 55 },
//   { categories: 22, series: 88 },
//   { categories: 23, series: 100 },
//   { categories: 24, series: 120 },
//   { categories: 25, series: 120 },
//   { categories: 26, series: 100 },
//   { categories: 27, series: 120 },
//   { categories: 29, series: 100 },
//   { categories: 30, series: 90 },
// ];

const CustomChartBar = ({ chartData, width, height, columnBorderRadius, paddingWrapper, columnColor, verticalInterval, isY,rotate }) => {
	const maxValue = chartData && Math.max(...chartData.map(item => item.series));
	const generatorY = maxValue => {
		let valueY = [];
		const element = [];
		let i = 1;
		for (let index = 0; index <= maxValue; index = index + verticalInterval) {
			if (index === i * verticalInterval) {
				element[i - 1] = i * verticalInterval;
				i++;
			}
		}
		valueY = element;
		valueY.unshift(0);
		return element;
	};
	return (
		<div>
			<div className="chart-container" style={{ width: width }}>
				{isY && (
					<div className="series" style={{ height: height }}>
						{generatorY(maxValue)
							.reverse()
							.map((data, i) => {
								return (
									<div key={i} style={{ textAlign: "right" }}>
										{data}
									</div>
								);
							})}
					</div>
				)}

				<div className="chart-container__box" style={{ width: width, borderLeft: `${!isY && "none"}` }}>
					<div className="chart-container__box__row" style={{ width: width, height: height }}>
						{chartData &&
							chartData.map((data, i) => {
								return (
									<div key={i} style={{ width: width / chartData.length, height: height }} className="wrapper-col">
										<div
											style={{
												padding: `0 ${paddingWrapper}px`,
												height: `${(data.series / maxValue) * 100}%`,
												borderRadius: columnBorderRadius,
												background: columnColor
											}}
											className="chart-container__box__row__col"
											key={i}>
											<div className="circle" style={{ width: "100%", height: `${paddingWrapper * 2}px` }}>
												<span className="inner-circle" style={{ width: `${paddingWrapper}px`, height: `${paddingWrapper}px` }}></span>
											</div>
										</div>
										<span
											className="tooltip"
											style={{
												bottom: maxValue - 80 < data.series ? data.series : data.series + 60
											}}>
											{data.series}
										</span>
									</div>
								);
							})}
					</div>
				</div>

				<div className="categories" style={{ width: "100%",position:"relative" }}>
					{chartData &&
						chartData.map((data, i) => (
							<div style={{ width: width / chartData.length, textAlign: "center"}} key={i}>
								{data.categories}
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default CustomChartBar;
