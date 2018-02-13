ReactDOM.render(
<h1>okk</h1>,document.getElementById("test1"));

var Abcd = React.createClass({
    render: function () {
        return (
          <div>
            <h1> Hello! </h1>
            <h5> jhgdasgd jgsajgj </h5>
          </div>
      );
    }
});

ReactDOM.render( <Abcd></Abcd> , document.getElementById("component"));

var Movie = React.createClass({
  render:function(){
    return(
      <div>
        <h2>{this.props.title}</h2>
        <h5>{this.props.jenre}</h5>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <Movie title="Raees" jenre="Action"/>
    <Movie title="Zero" jenre="Comedy"/>
    <Movie title="Baadshah" jenre="Comedy"/>
  </div>
  ,document.getElementById("properties"));

var Stickynotes = React.createClass({
  edit:function(){
    alert("Edit");
  },
  delete:function(){
    alert("Delete");
  },
  render:function(){
    return(
      <div>
        <div className=""><h2>{this.props.children}</h2></div>
        <button onClick={this.edit} className="btn m-xs btn-warning">Edit</button>
        <button onClick={this.delete} className="btn m-xs btn-danger">Delete</button>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
  <Stickynotes>sjvhjhsbcjhbc</Stickynotes>
  <Stickynotes>cgcjc  cjhsjhc</Stickynotes>
  <Stickynotes>hjgsj jhgs hgfs</Stickynotes>
  </div>
  ,document.getElementById("eventHandling"));
