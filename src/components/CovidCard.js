
import "./covid.css";

const CovidCard = (props) => {
  return <div className="col-md-4">
                <div className={`card text-white bg-${props.cardbackground} mb-3 baseBlock`}>
                    <div className="card-body">
                        <h5 className="card-title">
                            <span className='card_title_sm'>{props.cardtitlesm}</span>
                            <span className='card_title_lg'>{props.cardtitlelg}</span></h5>
                            <p className="card_nos">{props.cardnos}</p>
                    </div>
                </div>
           </div>;
};

export default CovidCard;
