import './news-card.css';

const NewsCard = (props: { data: { img: string, title: string, text: string, link: string } }) => {
    const data = props.data;
    return (
        <div>
            <div className="card d-flex flex-row">
                <img src={data.img} alt="" />
                <div className="card-body pt-0">
                    <h3>{data.title}</h3>
                    <p>{data.text} </p>
                    <a href="#nosd" className="text-decoration-none text-capitalize">{data.link} &#8594;</a>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
