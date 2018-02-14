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
  getInitialState:function(){
    return{editing:false};
  },
  edit:function(){
    this.setState({editing:true});
  },
  delete:function(){
    console.log("Delete");
  },
  save:function(){
    var newCom = this.refs.newText.value;
    alert("New Comment :" + newCom);
    this.setState({editing:false});
  },
  renderNormal:function(){
    return(
      <div>
        <div className=""><h2>{this.props.children}</h2></div>
        <button onClick={this.edit} className="btn m-xs btn-warning">Edit</button>
        <button onClick={this.delete} className="btn m-xs btn-danger">Delete</button>
      </div>
    );
  },
  renderForm:function(){
    return(
      <div>
        <div><textarea ref="newText" defaultValue={this.props.children}></textarea></div>
        <button onClick={this.save} className="btn m-xs btn-success">Save</button>
      </div>
    );
  },
  render:function(){
    if(this.state.editing){
      return this.renderForm();
    }else{
      return this.renderNormal();
    }
  }
});

var

ReactDOM.render(
  <div>
    <Stickynotes>sjvhjhsbcjhbc</Stickynotes>
    <Stickynotes>cgcjc  cjhsjhc</Stickynotes>
    <Stickynotes>hjgsj jhgs hgfs</Stickynotes>
  </div>
  ,document.getElementById("eventHandling"));
