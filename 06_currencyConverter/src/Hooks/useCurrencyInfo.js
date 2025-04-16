import { useEffect, useState } from 'react';

function useCurrencyInfo() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/eur.json`)
            .then((response) => response.json())
            .then((response) => {
                if (response && response.eur) {
                    setData(response.eur); // Extract the rates from the 'eur' key
                } else {
                    console.error("Invalid API response:", response);
                    setData({});
                }
            })
            .catch((error) => {
                console.error("Failed to fetch currency data:", error);
                setData({});
            });
    }, []);

    return data;
}

export default useCurrencyInfo;