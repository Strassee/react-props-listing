import './Card.css';
import { Item } from '../listing/Listing';

export default function Card (item: Item) {
    let level: string = 'high';
    let price: string = item.price;
    if (item.quantity <= 20 && item.quantity > 10) {
        level = 'medium';
    } else if (item.quantity <= 10) {
        level = 'low';
    }
    
    switch(item.currency_code) {
        case 'USD':
            price = '$' + price;
            break;
        case 'EUR':
            price = '€' + price;
            break;
        default:
            price += ' ' + item.currency_code;
    }

    return (
        <div className="item">
            <div className="item-image">
            <a href={item.url} >
                <img src={item.MainImage.url_570xN} alt="" />
            </a>
            </div>
            <div className="item-details">
            <p className="item-title">{item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}</p>
            <p className="item-price">{price}</p>
            <p className={'item-quantity level-' + level}>{item.quantity} left</p>
            </div>
        </div>
    )
}