import { useEffect, useState } from "react";
import { CardImg } from "reactstrap"
import { getImageURL } from "./FetchApi";

export function Img({imageId}){

    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {

        let resp ;
        resp = getImageURL(imageId);
        if(!resp){
            setImageUrl('/NotFound.jpg')
        }
        else{
        resp.then(
            d => setImageUrl(d.url)
        )
        }
        
    }, [imageId]);
    return (
    <CardImg top width="200px" src={imageUrl} alt="Loading Image" />
    )
}