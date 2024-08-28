import {
    Box,
    Button,
    CircularProgress, Container,
    FormLabel,
    Grid,
    Input,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CART_ACTIONS, useCart } from '../../hooks/cartContext';
import NumericInput from '../../components/ecommerce/NumericInput';


function ProductDetailPage() {
    const params = useParams();
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { dispatch } = useCart();
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
    return <Container>
        <Grid mt={2} container columnSpacing={2}>
            <Grid item xs={6}>
                <Box sx={{ border: 1, borderRadius: '3' }} >
                    <img style={{ maxWidth: '100%' }} src={product.images[0]} />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <h1>{product.title}</h1>
                <p>{product.price * quantity}</p>
                <Box>
                    <Box>
                        Stock: {product.stock}
                    </Box>
                    <Box>
                        <FormLabel>Quantity: </FormLabel>
                        {/* <Input
                            value={quantity}
                            onChange={(event) => setQuantity(event.target.value)}

                        /> */}
                        <NumericInput value={quantity} min={5} max={product.stock} onChange={setQuantity} />
                    </Box>

                </Box>
                <Box mt={1} display="flex">
                    {/* Dispatch Action:  */}
                    {/* <Button variant="contained" onClick={() => addItem({ id: product.id, title: product.title, quantity, thumbnail: product.thumbnail })}>Add to cart</Button> */}
                    <Button variant="contained" onClick={() => dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: { item: { id: product.id, title: product.title, price: product.price, quantity, thumbnail: product.thumbnail } } })}>Add to cart</Button>
                </Box>
            </Grid>
        </Grid>

    </Container>
}

// Quantity min:1, max = stock

export default ProductDetailPage