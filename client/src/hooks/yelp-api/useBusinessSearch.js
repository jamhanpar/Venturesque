import { useState, useEffect } from 'react';
import * as api from './api';

// creating a custom hook
export function useBusinessSearch(term, location) {
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    // every time term and location changes, business search will run again
    const [searchParams, setSearchParams] = useState({ term, location });

    // making API call
    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/businesses/search', searchParams);
                const res = await rawData.json();
                // const res = await (await api.get('/businesses/search', searchParams)).json();
                setBusinesses(res.businesses);
                setAmountResults(res.total);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, [searchParams]);

    return [businesses, amountResults, searchParams, setSearchParams];
}