import { useEffect, useState } from "react";
import {
	HOST, Menu, PATH, PathKeyType, Orders, ResponseType, RestaurantsType, StatusCodeType, StatusCode,
} from "../../../common";

const methods = {
	GET: "GET",
	POST: "POST",
} as const;

export class APIError extends Error {
	status: StatusCodeType;

	data: null;

	constructor(message: string, status: StatusCodeType) {
		super(message);

		this.status = status;
		this.data = null;
	}
}

const useCustomFetch = <T = null>(
	path: PathKeyType,
	method: typeof methods[keyof typeof methods] = methods.GET,
	effectCb?: (fetchData: (payload?: {}) => Promise<APIError | ResponseType<T>>) => void,
) => {
	const [data, setData] = useState<T>();
	const [error, setError] = useState<APIError>();

	let config = {
		headers: { "Content-Type": "application/json" },
		method,
	};

	const _fetch = async (payload?: {}) => {
		try {
			if (payload) config = Object.assign(config, { body: JSON.stringify(payload) });
			const res = await fetch(`${HOST}/${path}`, config);
			const resToJSON = await res.json();

			const response = resToJSON as ResponseType<T>;

			if (response.status === StatusCode.BAD_REQUEST) {
				throw new APIError(response.message, response.status);
			}

			setData(response.data);

			return response;
		} catch (error: unknown) {
			const _error = error instanceof APIError ? new APIError(error.message, error.status) : new APIError("다시 시도해주세요", StatusCode.BAD_REQUEST);

			setError(_error);

			return _error;
		}
	};

	useEffect(() => {
		let ignore = false;
		if (!ignore && effectCb) effectCb(_fetch);

		return () => {
			ignore = true;
		};
	}, []);

	return { data, error, fetchData: _fetch };
};

export const useFetchOrders = () => {
	const { fetchData } = useCustomFetch<Orders>(PATH.orders, methods.POST);

	return async (payload: Orders) => {
		const res = await fetchData(payload);

		return res;
	};
};

export const useFetchRestaurants = () => {
	const config = useCustomFetch<RestaurantsType>(
		PATH.restaurants,
		methods.GET,
		async (fetchData) => {
			await fetchData();
		},
	);

	return config;
};

export default useCustomFetch;
