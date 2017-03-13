const React = require('react');
const Tweet = require('./Tweet');

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    })
  }

  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps) {
    return nextProps.newTweets.count > 0;
  }

  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps) {
    let updatedTweets = this.state.tweets;
    nextProps.newTweets.forEach((tweet) => updatedTweets.unshift(tweet));

    this.setState({
      tweets: updatedTweets
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} />
    });
    return (
      <div>{tweets}</div>
    );
  }
}

module.exports = TweetWall;
