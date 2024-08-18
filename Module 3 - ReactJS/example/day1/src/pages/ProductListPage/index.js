import { Card, CircularProgress, Container, Grid } from "@mui/material"
import Product from "../../components/ecommerce/Product"
import { useEffect, useState } from "react"

function ProductListPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchProducts = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        setProducts(data.products);
        setIsLoading(false)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    if (isLoading) {
        return <CircularProgress />
    }
    return <Container>
        <Grid container spacing={2}>
            {products.map(product => {
                return <Grid key={product.id} item xs={3}>
                    <Card>
                        <Product product={product} />
                    </Card>
                </Grid>
            })}
        </Grid>
    </Container>
}

export default ProductListPage