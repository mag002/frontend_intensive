import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { CART_ACTIONS, useCart } from '../../../hooks/cartContext';
// Opt/ALt + shift + O
// [17:25]
export default function Product({ product }) {
    const { dispatch } = useCart();
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                // <a href="/product/1" onClick={prevent.default()+ trigger <Routes component to re-render/>}>
                title={<Link to={`/product/${product.id}`}>{product.title}</Link>}
            />
            <CardMedia
                component="img"
                height="194"
                loading="lazy"
                image={product.thumbnail}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body1" color="text.primary">
                    Price: {product.price}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to cart" onClick={() => dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: { item: { id: product.id, price: product.price, title: product.title, quantity: 1, thumbnail: product.thumbnail } } })}>
                    <AddShoppingCartIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>

        </Card>
    );
}
