// TODO
//WORKING!!!!!!!!!!!!!
var groceryList = ['Organic Kale', 'Grape Soda', 'Apples', 'Ninja Throwing Stars'];





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['Organic Kale', 'Grape Soda', 'Apples', 'Ninja Throwing Stars']
    };
  }

  render () {
    return (
      <div>
    <GroceryListInput />
    <GroceryList list={groceryList}/>
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
      value: 'It is blank silly'
    };
  }

  onButtonClick() {
    //console.log('CLICKED');
    console.log(this.state.value);
    groceryList.push(this.state.value);
    this.setState({value: ''});
  }

  handleChange(e) {this.setState({value: e.target.value});}
  

  render () {
    return (
      <div>
        <input type='text' onChange={this.handleChange.bind(this)} value={this.state.value}></input>
        <button id='addItemButton' onClick={this.onButtonClick.bind(this)}>Add This Item</button>
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

