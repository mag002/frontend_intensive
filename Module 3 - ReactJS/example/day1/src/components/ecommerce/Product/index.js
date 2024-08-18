import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardHeader, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom'
// Opt/ALt + shift + O
export default function Product({ product }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={<Link to={`/product/${product.id}`}>{product.title}</Link>}
            />
            <CardMedia
                component="img"
                height="194"
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
                <IconButton aria-label="add to cart">
                    <AddShoppingCartIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>

        </Card>
    );
}
