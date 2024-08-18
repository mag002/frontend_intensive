import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
function ProductDetailPage() {
    const params = useParams();
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchProducts = async () => {
        const res = await fetch('https://dummyjson.com/products/' + params.productId);
        const data = await res.json();
        setProduct(data);
        setIsLoading(false)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    if (isLoading) {
        return <CircularProgress />
    }
    console.log(params)
    return <h1>{product.title}</h1>
}

export default ProductDetailPage