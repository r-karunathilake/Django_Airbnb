"use client";
import { useEffect, useState } from "react";
import PropertyListItem from "./property"
import apiService from "@/app/services/api_services";

export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number; 
    image_url: string; 
}

const PropertyListing = () => {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        const url = "/api/properties/";
        const tmpProperties = await apiService.get(url); 

        setProperties(tmpProperties.data);
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
