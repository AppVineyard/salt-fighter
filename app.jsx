import './salt.jsx';
function App(props) {
    return (
        <div>
            <MatchesTopRow></MatchesTopRow>
            <MatchesArea matches={props.matches}></MatchesArea>
        </div>
    );
}
ReactDOM.render(<App matches={LOCAL_MATCHES}/>, document.getElementById('container'));
