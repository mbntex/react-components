// TODO

//var groceryList = ['Organic Kale', 'Grape Soda', 'Apples', 'Ninja Throwing Stars'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['Organic Kale', 'Grape Soda', 'Apples', 'Dice', 'Ninja Throwing Stars'],
      value: 'null'
    };
  }

  onButtonClick() {
    // console.log('STATE FOR CLICK = ', this.state.value);
    // console.log('STATE LIST = ', this.state.list);
    var oldList = [...this.state.list];
    oldList.push(this.state.value);
    this.setState({list: oldList});
    // this.setState({value: ''});
  }

  handleChange(e) { this.setState({value: e.target.value}); /*console.log(this.state.value);*/ }

  render () {
    var back = {background: 'green', width: '500px', padding: '50px'};
    return (
      <div style={back}>
    <GroceryListInput onButtonClick={this.onButtonClick.bind(this)} forChange={this.handleChange.bind(this)}/>
    <GroceryList list={this.state.list}/>
  </div>
    );
  }
}

// var App = (props) => (
//   <div>
//     <GroceryListInput />
//     <GroceryList list={groceryList}/>
//   </div>
// );



var GroceryList = (props) => (
  <div>
    <ul>
      {props.list.map((item, i) =>
        <GroceryListItem item={item} key={i}/>
      )}
    </ul>
  </div>
);


// var GroceryListInput = () => (
//   <div>
//     <input type='text'></input>
//   </div>
//   );


class GroceryListInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //value: 'here' //IS ONCHANGE AFFECTING THIS ONE?
    };
  }

  // onButtonClick() {
  //   //console.log('CLICKED');
  //   console.log(this.state.value);
  //   groceryList.push(this.state.value);
  //   this.setState({value: ''});
  // }

  // handleChange(e) {this.setState({value: e.target.value});}
  

  render () {
    return (
      <div>
        <input type='text' onChange={this.props.forChange}></input>
        <button id='addItemButton' onClick={this.props.onButtonClick}>Add This Item</button>
      </div>
    );
  }
}




// var GroceryListItem = (props) => (
//   <div>
//     <li>{props.item}</li>
//   </div>
// );


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };

  }

  onItemHover () {
    this.setState({clicked: !this.state.clicked});
    //console.log(this.state);
  }

  render() {
    var wasHovered = {fontWeight: this.state.clicked ? 'bold' : 'normal'};
    return (
      <div>
        <li style={wasHovered} onMouseOver={this.onItemHover.bind(this)} >{this.props.item}</li>
      </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

