import React, { Component } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { AsyncPaginate } from "react-select-async-paginate";

import get from "lodash/get";
import isEqual from "lodash/isEqual";
import { api, queryBuilder } from "services";

// const load = async(search, prevOptions, { page }, url, filterParams, params, loadOptionsKey) => {
// 	const { data } = await api.request.get(
// 		queryBuilder(url, { page, filter: filterParams(search), ...params })
// 	);

// 	return {
// 		options: loadOptionsKey
// 			? typeof loadOptionsKey === "function"
// 				? loadOptionsKey(data)
// 				: get(data, loadOptionsKey, [])
// 			: data,
// 		hasMore: get(data, "_meta.currentPage", 1) < get(data, "_meta.pageCount", 1),
// 		additional: { page: get(data, "_meta.currentPage", 1) + 1 }
// 	};
// };

class AsyncSelectD extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false
		};
	}

	static propTypes = {
		title: PropTypes.string.isRequired,
		className: PropTypes.string,
		optionValue: PropTypes.string,
		optionLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
		isSearchable: PropTypes.bool,
		isClearable: PropTypes.bool,
		menuPlacement: PropTypes.string,
		filterParams: PropTypes.object,
		extraOptions: PropTypes.array,
		onChange: PropTypes.func,
		loadOptionsKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
		loadOptionsParams: PropTypes.func,
		optionRenderer: PropTypes.func
	};

	static defaultProps = {
		title: "",
		className: null,
		optionValue: "id",
		optionLabel: "title",
		isSearchable: false,
		isClearable: false,
		menuPlacement: "bottom",
		disableOptions: [],
		loadOptionsKey: "data",
		extraOptions: [],
		filterParams: {},
		loadOptionsParams: () => {},
		optionRenderer: () => {},
		onChange: () => {}
	};

	load = async (search, prevOptions, { page }, url, filterParams, loadOptionsParams, loadOptionsKey, extraOptions) => {
		const { data } = await api.request.get(queryBuilder(url, { page, filter: filterParams, ...loadOptionsParams(search) }));

		return {
			options: loadOptionsKey
				? typeof loadOptionsKey === "function"
					? [...extraOptions, ...loadOptionsKey(data)]
					: [...extraOptions, ...get(data, loadOptionsKey, [])]
				: data,
			hasMore: get(data, "_meta.currentPage", 1) < get(data, "_meta.pageCount", 1),
			additional: { page: get(data, "_meta.currentPage", 1) + 1 }
		};
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.loadOptionsUrl && prevProps.loadOptionsUrl !== this.props.loadOptionsUrl) {
			this.setState({ isLoading: true }, () => this.setState({ isLoading: false }));
		}
		if (!isEqual(prevProps.filterParams, this.props.filterParams)) {
			this.setState({ isLoading: true }, () => this.setState({ isLoading: false }));
		}
		if (prevProps.canUpdate !== this.props.canUpdate) {
			this.setState({ isLoading: true }, () => this.setState({ isLoading: false }));
		}
	}

	render() {
		const {
			isDisabled,
			disableOptions,
			className,
			label,
			initialValue,
			defaultValue,
			isMulti,
			loadOptionsKey,
			placeholder,
			options,
			optionLabel,
			optionValue,
			isSearchable,
			isClearable,
			menuPlacement,
			loadOptionsUrl,
			extraOptions,
			filterParams,
			onChange,
			loadOptionsParams
		} = this.props;

		const classNames = cx("field-container async-field", className);

		const customStyles = {
			menu: props => ({
				...props,
				zIndex: 10
			}),
			control: props => ({
				...props,
				height: "50px"
			}),
			placeholder: props => ({
				...props,
				whiteSpace: "nowrap"
			})
		};

		const { isLoading } = this.state;

		return (
			<div className={classNames}>
				<div>
					{label && <div>{label}</div>}
					{!isLoading && (
						<AsyncPaginate
							styles={customStyles}
							debounceTimeout={300}
							onChange={option => {
								onChange(option);
							}}
							getValue={option => option[optionValue]}
							getOptionLabel={option => (typeof optionLabel === "function" ? optionLabel(option) : option[optionLabel])}
							getOptionValue={option => (typeof optionValue === "function" ? optionValue(option) : option[optionValue])}
							value={initialValue}
							defaultValue={defaultValue}
							additional={{ page: 1 }}
							isClearable={isClearable}
							isDisabled={isDisabled}
							loadOptions={(search, prevOptions, { page }) =>
								this.load(search, prevOptions, { page }, loadOptionsUrl, filterParams, loadOptionsParams, loadOptionsKey, extraOptions)
							}
							isOptionDisabled={option => disableOptions.reduce((prev, curr) => [...prev, curr.id], []).includes(option.id)}
							{...{ isMulti, options, placeholder, isSearchable, menuPlacement }}
						/>
					)}
				</div>
			</div>
		);
	}
}

export default AsyncSelectD;
