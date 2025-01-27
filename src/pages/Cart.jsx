import {useSelector} from 'react-redux';


import '../components/product/Product.scss'

export default function Cart() {
    const cartItems = useSelector((state) => state.basket.cartlist);

    return (
        <div style={{
            width: '1170px',
            height: '786px',
            display: 'flex',
            flexDirection: 'column',
            gap: '80px',
            margin: '50px auto'
        }}>
            <div style={{width: '1170px', height: '382px'}}>
                <ul style={{display: 'flex', gap: '300px', listStyle: 'none'}}>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Subtotal</li>
                </ul>

                <div style={{display: 'flex', gap: '20px'}}>
                    {cartItems.map((item) => (
                        <nav key={item.id} style={{display: 'flex'}}>
                                <img width={180} src={item.thumbnail} alt=""/>
                        </nav>
                    ))}
                </div>

                <ul style={{display: 'flex', gap: '700px', marginTop: '100px'}}>
                    <button style={{
                        width: '218px',
                        height: '56px',
                        backgroundColor: 'white',
                        border: '1px solid gray'
                    }}>Return To Shop
                    </button>
                    <button style={{
                        width: '218px',
                        height: '56px',
                        backgroundColor: 'white',
                        border: '1px solid gray'
                    }}>Update Cart
                    </button>
                </ul>
                <ul style={{width: '1170px', display: 'flex', gap: '170px', marginTop: '70px'}}>
                    <div style={{width: '527px', height: '56px', display: 'flex', gap: '16px'}}>
                        <button style={{
                            width: '300px',
                            height: '56px',
                            borderRadius: '4px',
                            backgroundColor: 'white',
                            color: 'gray'
                        }}>Coupon Code
                        </button>
                        <button style={{
                            width: '211px',
                            height: '56px',
                            borderRadius: '4px',
                            backgroundColor: '#db4444',
                            color: '#FAFAFA',
                            border: 'none'
                        }}>Apply Coupon
                        </button>
                    </div>

                    <div></div>
                </ul>
            </div>

            <div></div>
        </div>
    );
}