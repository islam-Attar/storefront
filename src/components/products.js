import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {addCart } from '../store/cart.js';
import {decrementStock} from '../store/products.js';
import Typography from '@mui/material/Typography';

import './products.scss';

const Products = (props) => {
    const{addCart,decrementStock} = props;
    function addCartI(product,id){
     
        if(product?.InStock > 0){
            
            addCart({...product,cartId:id});
            decrementStock(product)
        }else{
            alert('Out of Stock');
        }
    }
    return (
        <div className="products">
            
            {props.products.map((product, i) => {
                if (props.activeCategory.name === product.category) {
                  
                    return (<Card key={i} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.url}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price : {product.price}$
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                InStock : {product.InStock}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton color="primary" aria-label="add to shopping cart">
                                <AddShoppingCartIcon onClick={()=>{addCartI(product,i)}} />
                            </IconButton>
                        </CardActions>
                    </Card>
                    )
                } else {
                    return null;
                }
            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        activeCategory: state.categories.activeCategory,
        cart:state.cart,
    }
};
const mapDispatchToProps = {
    addCart,
    decrementStock,
};
export default connect(mapStateToProps,mapDispatchToProps)(Products);