import auto from '../assets/img/auto.png'
import gamepad from '../assets/img/gamepad.png'
export default function Cart() {
    return (
        <div style={{ width: '1170px', height: '786px', display: 'flex', flexDirection: 'column', gap: '80px', margin: '50px auto' }}>
            <div style={{ widows: '1170px', height: '382px', }}>
                <ul style={{ display: 'flex', gap: '300px', listStyle: 'none' }}>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quanityty</li>
                    <li>Subtotal</li>
                </ul>
                <ul style={{ width: '1170px', height: '102px', display: 'flex', gap: '205px', listStyle: 'none', paddingTop: '160px' }}>
                    <li> <img width={54} height={54} src={gamepad} alt="" /> Hi Gamepad</li>
                    <li style={{paddingRight: '70px'}}>550$</li>
                    <li style={{ marginLeft: '40px' }}><img width={72} height={44} src={auto} alt="" /></li>
                    <li style={{ marginLeft: '100px' }}>$1110</li>
                </ul>
                <ul style={{display: 'flex', gap: '700px', marginTop: '100px'}}>
                    <button style={{width: '218px', height: '56px', backgroundColor: 'white', border: '1px solid gray'}}>Return To Shop</button>
                    <button style={{width: '218px', height: '56px', backgroundColor: 'white', border: '1px solid gray'}}>Update Cart</button>
                </ul>   
                <ul style={{width: '1170px', display: 'flex', gap: '170px', marginTop: '70px'}}>
                   <div style={{width: '527px', height: '56px', display: 'flex', gap: '16px'}}>
                      <button style={{width: '300px', height: '56px', borderRadius: '4px', backgroundColor: 'white', color: 'gray',}}>Coupon Code</button>
                      <button style={{width: '211px', height: '56px', borderRadius: '4px', backgroundColor: '#db4444', color: '#FAFAFA', border: 'none'}}>Apply Coupon</button>
                   </div>

                   <div> 

                   </div>
                </ul>
            </div>


            <div></div>
        </div>
    )
}

