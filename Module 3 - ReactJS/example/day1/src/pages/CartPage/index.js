import { Container, Box, Button, Modal } from "@mui/material";
import { CART_ACTIONS, useCart } from "../../hooks/cartContext"
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import NumericInput from "../../components/ecommerce/NumericInput";
import { useState } from "react";

function CartPage() {
    const { state: cart, dispatch } = useCart();
    // useReducer 
    // action, reducer, dispatch aciton
    // Update cart
    // Delete cart
    // const onChangeQuantity = (newQuantity) => {
    //     dispatch({ type: 'UPDATE_CART', payload: { id, newQuantity } })
    // }
    const handleChange = (id, newQuantity) => {
        console.log('newQuantity', newQuantity)
        dispatch({ type: CART_ACTIONS.UPDATE_CART, payload: { id, quantity: newQuantity } })
    }
    const handleDelete = id => {
        dispatch({ type: CART_ACTIONS.REMOVE_CART, payload: { id } })
    }
    return <Container>
        {cart.length ? cart.map(({ id, title, thumbnail, price, quantity }) => {
            return <CartItem handleDelete={handleDelete} key={id} handleChange={(newQuantity) => handleChange(id, newQuantity)} id={id} img={thumbnail} title={title} price={price} quantity={quantity} />
        }) : <h1>Your cart is empty</h1>}
    </Container>
}


function CartItem({ title, price, img, id, quantity, handleChange, handleDelete }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
            <Card orientation="horizontal" variant="outlined">
                <CardOverflow>
                    <AspectRatio ratio="1" sx={{ width: 90 }}>
                        <img
                            src={img}
                            srcSet={img}
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography textColor="success.plainColor" sx={{ fontWeight: 'md' }}>
                        {title}
                    </Typography>
                    <Typography level="body-sm">{price}</Typography>
                </CardContent>
                <NumericInput value={quantity} onChange={(newQuantity) => handleChange(newQuantity)} />
                <CardOverflow
                    variant="soft"
                    color="primary"
                    sx={{
                        px: 0.2,
                        writingMode: 'vertical-rl',
                        justifyContent: 'center',
                        fontSize: 'xs',
                        fontWeight: 'xl',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        borderLeft: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <Button onClick={handleOpen}>Remove</Button>
                </CardOverflow>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography >
                        Are you sure to delete the item <b>{title}</b> from the cart?
                    </Typography>
                    <Button color="error" onClick={() => handleDelete(id)} >
                        Yes
                    </Button>
                    <Button color="primary" onClick={handleClose}>
                        No
                    </Button>
                </Box>
            </Modal>
        </>
    );
}

export default CartPage