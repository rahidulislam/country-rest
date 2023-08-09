import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SearchCountry from "./SearchCountry";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

const Countries = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const fetchCountries = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
            setFilteredCountries(data);
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

    const handleRemoveCountry = (name) => {
        const filter = filteredCountries.filter(
            (country) => country.name.common !== name
        );
        setFilteredCountries(filter);
    };
    const handleSearchCountries = (value) => {
        const searchCountry = countries.filter((country) => {
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(value.toLowerCase());
        });
        setFilteredCountries(searchCountry);
    };
    return (
        <Container>
            <h1>Country App</h1>
            <SearchCountry onSearch={handleSearchCountries} />
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            <Row>
                {filteredCountries.map((country) => {
                    const countryData = { country, id: uuidv4() };
                    return (
                        <Country
                            key={countryData.id}
                            {...countryData}
                            onRemoveCountry={handleRemoveCountry}
                        />
                    );
                })}
            </Row>
        </Container>
    );
};

export default Countries;
