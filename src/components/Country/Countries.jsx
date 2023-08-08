import React, { useEffect, useState } from "react";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCountries = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
            setError(null);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchCountries("https://restcountries.com/v3.1/all");
    }, []);
    return <div>
        <h1>Country App</h1>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>{error.message}</h3>}
    </div>;
};

export default Countries;
