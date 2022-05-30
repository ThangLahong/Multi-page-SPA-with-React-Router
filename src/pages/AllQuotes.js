import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Harry', text: 'Learn React is fun!'},
    {id: 'q2', author: 'Peter', text: 'Learn React is great!'}
];

const AllQuotes = () => {
    return (
        <QuoteList
            quotes={DUMMY_QUOTES}
        />
    );
};

export default AllQuotes;