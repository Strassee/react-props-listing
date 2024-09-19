import './Listing.css';
import Card from '../card/Card';

export interface Item {
    listing_id: number,
    state: string,
    url: string,
    MainImage: {
        url_570xN: string
    },
    title: string,
    currency_code: string,
    price: string,
    quantity: number
}

interface Items {
    data: Item[];
}

export default function Listing({data = []}: Items) {
    let index = 0;
    let result: JSX.Element[] = data.map((item) => {
        // console.log('map ' + item.listing_id);
        return <Card {...item} key={index++} />
    })
    return (
        <div className="item-list">
            {result}
        </div>
    )
}