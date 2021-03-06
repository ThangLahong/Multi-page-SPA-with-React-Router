import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Harry', text: 'Learn React is fun!'},
    {id: 'q2', author: 'Peter', text: 'Learn React is great!'}
];

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    console.log(match);

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote found!</p>
    }
    return (
        <>
            <HighlightedQuote
                text={quote.text}
                author={quote.author}
            />
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className="btn--flat" to={`${match.url}/comments`}>Load comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </>
    );
};

export default QuoteDetail;