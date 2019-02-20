class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  state = {
    list : [],
    word : ""
  }

  changeHandler(e){
    this.setState({word: e.target.value});
    console.log("change", e.target.value);
  }

  clickHandler(e) {
    this.state.list.push(this.state.word);
    this.setState({word: ""});
  }

  render() {
      // render the list with a map() here

      let displayList = this.state.list.map( x => {
        return <li>{x}</li>
      })

      console.log("rendering");
      return (
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={this.clickHandler}>add item</button><br />
          {displayList}
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

