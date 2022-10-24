import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { myquotes } from './quoteSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './QuoteApp.css';
import  {FaTwitter,FaFacebookSquare, FaQuoteLeft} from 'react-icons/fa';

const QuoteNow = () =>{

    const randomNumb = useSelector((state)=>state.quoteNow.values);
    const textQuote = useSelector((state)=>state.quoteNow.theQuotes[randomNumb]);
    const author = useSelector((state)=>state.quoteNow.authors[randomNumb]);
    const backgColor = useSelector((state)=>state.quoteNow.backgAndText[randomNumb]);
    const buttons = useSelector((state)=>state.quoteNow.buttonStyles[randomNumb]);
    const dispatch = useDispatch();

    const copyIt=()=>{
        navigator.clipboard.writeText(textQuote);
    }
    
    return(
        <div className = "big-container" style={backgColor}>

            <Col xs={8} sm={8} md ={8} lg={8} xl={8}  className="text">
                <div className="quoteAuthor">
                    <h3 className='theQuoteText'><FaQuoteLeft/> {textQuote}</h3> 
                    <p>{author}</p>
                </div>
            

                <div className="buttonIcon">

                    <div className="twoIcons">
                        <div className='firstButton'>
                            <Button href="www.twitter.com" style={buttons}><FaTwitter/></Button>
                        </div>
                        <div>
                            <Button  style={buttons}><FaFacebookSquare/></Button>
                        </div>
                            
                    </div>
                    <Button style={buttons} onClick={copyIt} className='copyButton'>copy</Button>
                    <div className="getQuoteBut">
                        <Button  style={buttons}
                        onClick={() => dispatch(myquotes())}
                        >{' '}
                        Get Quotes
                        </Button>
                    </div>
                </div>
                <br/>
                
                <p className="copy">&copy;Olowosuyi Temitope Abiodun (O.T.A)</p>         
            </Col>
        </div>
    )
}
export default QuoteNow