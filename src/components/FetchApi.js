import React from "react";
import { Alert } from "reactstrap";

export const _API_URL = "https://api.thedogapi.com"
export const _API_KEY = "b475663f-7dcc-4ba4-95dc-3670d0beb659"

export const getDogBreadDetails =  query => {
    return fetch(`${_API_URL}/v1/breeds/search?q=${query}`,{
        method:'GET',
        headers : headers()
    }).then((response) => {
        if(response.ok) return response.json()
        else return<Alert>Serice Error. Please try again later.</Alert>
    } );
}

export const getImageURL = imageId => {
    if(!imageId){
        return ''
    }
    else{
    return fetch(`${_API_URL}/v1/images/${imageId}`,{
        method:'GET',
        headers : headers()
    }).then((response) => {
        if(!response.ok) return <Alert>Serice Error. Please try again later.</Alert>
        else return response.json();
    } );
}

}

const headers = () => {
    return {
        'api_key' : _API_KEY
    }
}
