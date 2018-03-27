import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*//var One = React.createElement('h1',null,'hllo');
function formateName(user){
    if(user)
        {
           return user.firstName+" "+user.lastName;  
        }
    else
        {
            return "******* No user *******"
        }
   
}
const user={
    firstName: "Aayush",
    lastName: "Rajput"
}
const element = (
    <div className="great">
    <h1>
        Hello!, {formateName(user)}
    </h1>
    <h2> 
        College of engineering Roorkee
    </h2>
    </div>
);

ReactDOM.render(
	element,
	document.getElementById('root')
	)
function trick()
{
    const element = (
    <div className="great">
    <h1>
        Hello!, {formateName(user)}
    </h1>
    <h2> 
        College of engineering Roorkee
    </h2>
    <h2> 
        {new Date().toLocaleTimeString()}
    </h2>
    </div>
);
ReactDOM.render(
	element,
	document.getElementById('root')
	)
    
}
setInterval(trick, 1000);
function Welcome(props){
        return(
            <div>
            <h1>{props.name}</h1>
            </div>
        )
    }
function Call()
{
    return(
    <div>
    <Welcome name="Aayush"/>
    <Welcome name="Rajput"/>
    </div>)
}
    ReactDOM.render(
    <div>
    <Welcome name="Deepak"/>
    <Welcome name="Verma2"/>
    </div>,
        document.getElementById('root')
)
    */
function Image(props)
{
    return(
        <div className="info">
            <img 
                src={props.user.photo} 
                alt={props.user.name}
            />
    </div>
        )
}
function Uname(props)
{  return (
    <div className="UserInfo">
                <h1>{props.user.name}</h1>
            </div>
    )
}
function Label(props)
{ return (
    <div className="UserText">
        <h2>{props.text}</h2>
    </div>
    )
}
function Comment(props)
{ return(
    <div>
<Image user={props.user}/>
<Uname user={props.user}/>
<Label text={props.text}/>
    </div>
    )
}
var comment={
    text: "Hello there, this is Aayush Rajput",
    user: {
    name:'Aayush Rajput',
    photo:'coer.png'
}
}
ReactDOM.render(
<Comment 
    text={comment.text}
    user={comment.user}
    />,
document.getElementById("root"))
        
  