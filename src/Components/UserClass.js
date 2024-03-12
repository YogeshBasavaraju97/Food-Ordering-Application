import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    (this.name = 'Yogesh'), (this.location = 'United Kingdom');

    this.state = {
      userInfo: {
        name: 'Dummy',
        avatar_url: 'src',
        bio: 'default',
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(
      ' https://api.github.com/users/YogeshBasavaraju97'
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, avatar_url, bio } = this.state.userInfo;
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          counter
        </button>
        <div>
          <img src={this.state.userInfo.avatar_url} />
        </div>

        <h1>{this.state.userInfo.name}</h1>
        <h3>{this.state.userInfo.bio}</h3>
      </div>
    );
  }
}

export default UserClass;
