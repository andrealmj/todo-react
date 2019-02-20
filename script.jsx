class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  state = {
    list: [],
    word: "",
    error: ""
  }

  changeHandler(e){
    this.setState({word: e.target.value});
    console.log("change", e.target.value);
  }

  clickHandler(e) {

    if (this.state.word.length > 1 && this.state.word.length < 20) {
      this.state.list.push(this.state.word);
      this.setState({word: ""});
    } else if (this.state.word.length <= 1) {
      this.setState({error: "Please input more than 1 character"});
    } else {
      this.setState({error: "Please input less than 20 characters"});
    }
    
  }

  render() {
      // render the list with a map() here

      let displayList = this.state.list.map( x => {
        return <li>{x}</li>
      })

      console.log("rendering");
      return (
        <div>

          <div className="list">
            <input onChange={this.changeHandler} value={this.state.word} />
            <p className="error">{this.state.error}</p>
            <button onClick={this.clickHandler}>add item</button><br />
            {displayList}
          </div>

        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

