import React, { Component } from 'react';
import cart from './cart.png';
//import styled from 'styled-components';//import styled-components for using styled-components
import styles from './Nav.module.css';

//styles with the help of styled-components
// const NavStyle = styled.div`padding: 5px;
// display : flex;
// justify-content: space-between;
// align-items: center;
// background-image: linear-gradient(45deg, lightpink, purple);`;
// const NavCardCount = styled.div`
// margin-right: 10px;
// position: relative;
// `;

// const CartIcon = styled.img`
// height : 50px;
// width: auto;
// `;
// const CartCount = styled.span`
//   position: absolute;
//   right : 10px;
//   color : ${(props)=>(props.color)?props.color:'darkblue'};
//   font-weight:500;
//   font-size: large;
//   visibility : ${(props)=>(props.show)?'visible':'hidden'}
// `;


//Navbar component where Styled-components styles are used
// class Navbar extends Component{
//     render(){
//         return(
//             <>
//                 <NavStyle>
//                     <div className='nav-title' >
//                         <h4>MovieFlix</h4>
//                     </div>
//                     <NavCardCount>
//                         <CartIcon id = "cartIcon" alt = "Cart Icon" src={cart} />
//                         <CartCount className='cart-count' color = "brown" show = {true}>0</CartCount>
//                     </NavCardCount>
//                 </NavStyle>
//             </>
//         );
//     }
// }


//Navbar component where css module are used
class Navbar extends Component{
    render(){
        return(
            <>
                <div className = {styles.nav}>
                    <div>
                        <h4>
                            MovieFlix
                        </h4>
                    </div>
                    <div className={styles.navCartCount}>
                        <img className={styles.cartIcon} alt = "Cart Icon" src = {cart} />
                        <span className={styles.cartCount}>{this.props.cartCount}</span>
                    </div>
                </div>
            </>
        )
    }
}

export default  Navbar;
//inline style syntax which is simmler to js object
// const style = {
//     nav:{padding : 5 , display : "flex" , justifyContent : "space-between" , alignItems : "center" , backgroundColor : "thistle"},
//     count : {marginRight : 10 , position : "relative"},
//     cart : {height : 50 , width : "auto"},
//     cartCount : {position : "absolute" , right : 10 , color : "darkblue" , fontWeight : 500 , fontSize : "large"}
// }

//.nav
// padding: 5px;
//   display : flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: thistle;

//.nav-cart-count
// margin-right: 10px;
//   position: relative;

//cart-icon
// height : 50px;
//   width: auto;

//cart-count
// position: absolute;
//   right : 10px;
//   color : darkblue;
//   font-weight:500;
//   font-size: large;