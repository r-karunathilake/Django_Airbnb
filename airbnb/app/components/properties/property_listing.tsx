"use client";
import { useEffect, useState } from "react";
import PropertyListItem from "./property"

export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number; 
    image_url: string; 
}

const PropertyListing = () => {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        const url = "http://localhost:8000/api/properties/";
        await fetch(url, {
            method: "GET",
        }).then(response => response.json())
          .then((json) => {
            console.log("JSON", json);
            setProperties(json.data); 
          })
          .catch((error) => {
            console.log("Error", error);
          });
    };

    useEffect(() => {
        getProperties();
    }, []);

    return (
        <>
            {properties.map((property) => {
                return (
                    <PropertyListItem
                        key={property.id}
                        property={property}
                    />
                )
            })}
        </>
    )
}

export default PropertyListing;
