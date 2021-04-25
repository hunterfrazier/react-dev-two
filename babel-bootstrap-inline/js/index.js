"use strict";


// const name = "hunter"; 
// const element = <h1> hello {name} </h1>;


// const Hello = (props) => {
//     const name = 'Hunter';
//     const blah = props.cc + props.bb;
//     return (<h1> Hello {name} {blah} </h1>);
// }
// ReactDOM.render(<Hello bb="ok" cc="nono" />, document.getElementById('root2'));



// let colorbg = "white";
// let textcolor = "green";

// const Hello = props => {
//     let colorbg = props.action();
//     let textcolor = props.tc2();
//     return <h1 style={{ backgroundColor: colorbg, color: textcolor }}> Hello {props.name}</h1>;
// }

// const getRandomColor = () => {
//     const palet = ["red", "green", "blue"];
//     let colorbg = palet[Math.floor(Math.random() * 3)];

//     return colorbg;
    
// };

// const mainFunc = () => {
//     const checkColor = getRandomColor();

//     let okok = "blue";
//     if (checkColor == 'red') {
//         okok = "white";
//     }

//     console.log(checkColor);
//     console.log('textcolor:' + okok);
//     // getBg = () => {
//     //     return okok;
//     // }
//     return checkColor;

// }

// const getTextColor = () => {        
//     console.log('color bg:' + colorbg);
//     if (colorbg == 'red') {
//         textcolor = 'white';
//     }
// }



// ReactDOM.render(
//     <Hello action={mainFunc} tc2={mainFunc} name="Hunter" />,
//     document.getElementById("root2")
// )




// function useInterval(callback, delay) {
//     const { useEffect, useRef } = React;
//     let savedCallback = useRef();
//     useEffect(() => {
//       savedCallback.current = callback;
//       console.log("First useEffect called");
//     }, [callback]);
  
//     useEffect(() => {
//       console.log("Second useEffect called");
//       function tick() {
//         savedCallback.current();
//       }
//       if (delay != null) {
//         const id = setInterval(tick, delay);
//         return () => {
//           console.log("clear Interval");
//           clearInterval(id);
//         };
//       }
//     }, [callback, delay]);
//   }
  
//   const App = () => {
//     const { useState } = React;
  
//     let [state, setState] = useState([1, 2, 3, 4]);
//     const [seconds, setSeconds] = useState(0);
//     console.log("Rendering App amd Buttons");
//     useInterval(() => {
//       console.log("useInterval called");
//       setSeconds(seconds + 1);
//     }, 9000);
  
//     const handler = index => {
//       let newState = state.filter(item => item != index);
//       console.log(newState);
//       setState(newState);
//     };
//     let list = state.map((item, index) => {
//       return (
//         <MyButton onClick={() => handler(item)} index={seconds} key={index}>
//           {seconds}
//         </MyButton>
//       );
//     });
//     return <div>{list}</div>;
//   };
//   const MyButton = ({ onClick, index }) => {
//     let { Button } = ReactBootstrap;
//     return <Button onClick={onClick}>{index}</Button>;
//   };


//   //---------------
//   ReactDOM.render(<App />, document.getElementById("root2"));




//   const Appy = () => {
//       let product = {
//           name: "pear",
//           cost: 2,
//           inStock: 7
//       };
//       let { name, inStock } = product;
//       let item = {name, inStock};
//     const handler = () => alert(`name: ${item.name} instock: ${item.inStock}`);
//     return <button onClick={handler}>click me</button>;
//   };

//   ReactDOM.render(<Appy/>, document.getElementById("root3"));





// const Appy = () => {
//   const handler = () => alert('hey');
//   return <MyButton onClick={handler} index="9"></MyButton>;
// };

// const MyButton = ({onClick}) => {
//     let { Button : Abutton } = ReactBootstrap;
//     return <Abutton onClick={onClick}>Click Me</Abutton>
// }

// ReactDOM.render(<Appy/>, document.getElementById("root3"));




// WITHOUT CLOSURE

// const Appy = () => {
//     let a = [1, 2, 3, 4];
//     const handler = e => alert(`button: ${e.target.getAttribute('index')}`);
//     let list = a.map((item, index) => {
//         return <MyButton index={index} onClick={handler} key={index}></MyButton>;
//     });
    
//     return <div>{list}</div>

//   };
//   const MyButton = ({onClick, index}) => {
//       let { Button } = ReactBootstrap;
//       return <Button index={index} onClick={onClick}>Click Me</Button>
//   }
  
//   ReactDOM.render(<Appy />, document.getElementById("root3"));


// GOOD

//   const Appy = () => {
//     let a = [1, 2, 3, 4];
//     const handler = (index) => alert(`button: ${index}`);
//     let list = a.map((item, index) => {
//         return <MyButton onClick={()=>handler(index)} key={index}></MyButton>;
//     });
    
//     return <div>{list}</div>

//   };
//   const MyButton = ({onClick}) => {
//       let { Button } = ReactBootstrap;
//       return <Button onClick={onClick}>Click Me</Button>
//   }
  
//   ReactDOM.render(<Appy />, document.getElementById("root3"));



// WITH STATE

// const Appy = () => {
//     const { useState } = React;
//     let [state, setState] = useState([1, 2, 3, 4]);


    

//     const handler = index => {
//         let newState = state.filter(item => item != index);
//         console.log(newState);
//         setState(newState);
//     }
//     let list = state.map((item, index) => {
//         return <MyButton onClick={()=>handler(item)} key={item}></MyButton>;
        
//     });
    
//     return <div>{list}</div>

//   };
//   const MyButton = ({onClick}) => {
//       let { Button } = ReactBootstrap;
//       return <Button onClick={onClick}>Click Me</Button>
//   }
  
//   ReactDOM.render(<Appy />, document.getElementById("root3"));






//   class Person extends React.Component {
//     constructor(props) {
//       super(props);
//     }
  
//     state = {
//       details: {
//         name: "Maradona",
//         residence: {
//           city: "Tigre",
//           country: "Argentina",
//         },
//         profession: "soccer",
//       },
//     };
  
//     render() {
//       return <Details person={this.state} />;
//     }
//   }

//   console.log();
  
//   const Details = (props) => {
  
//     // TODO: destructure props
//     console.log(props);
  
//     const {
//       name, 
//       residence: {
//           city: city,
//           county: country
//       },
//       profession
//     } = props.person.details;
  
//     console.log(name, city, profession);
//     return (
//       <div style={{ margin: "1em" }}>
//         {/* <div id="name">Name: {name}</div> */}
//         {/* <div id="city">City: {props.person.details.residence.city}</div>
//         <div id="country">Country: {props.person.details.residence.country}</div>
//         <div id="profession">Profession: {props.person.details.profession}</div> */}
//       </div>
//     );
//   };
  
//   ReactDOM.render(React.createElement(Person), document.getElementById("root3"));
  





// "use strict";

// class Person extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   state = {
//     details: {
//       name: "",
//       residence: {
//         city: "",
//         country: "",
//       },
//       profession: "",
//     },
//   };

//   render() {
//     return <Details person={this.state} />;
//   }
// }

// const Details = (props) => {
//   // TODO: destructure props

//   return (
//     <div style={{ margin: "1em" }}>
//       <div id="name">Name: {props.person.details.name}</div>
//       <div id="city">City: {props.person.details.residence.city}</div>
//       <div id="country">Country: {props.person.details.residence.country}</div>
//       <div id="profession">Profession: {props.person.details.profession}</div>
//     </div>
//   );
// };

// ReactDOM.render(React.createElement(Person), document.getElementById("root"));







class TodoApp extends React.Component {
    state = {
      tasks: ["task 1", "task 2", "task 3"],
    };
  
    handleSubmit = (task) => {
      this.setState({ tasks: [...this.state.tasks, task] });
    };
  
    // TODO: Add handleDelete to remove the index from the state
    handleDelete = (index) => {
        let newState = this.state.tasks;
        newState.splice(index, 1);
        this.setState({tasks: newState});
    };
  
    render() {
      return (
        <div className="wrapper">
          <div className="card frame">
            <SubmitForm onFormSubmit={this.handleSubmit} />
            <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          </div>
        </div>
      );
    }
  }
  
  class SubmitForm extends React.Component {
    state = { item: "" };
  
    handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.item === "") return;
      this.props.onFormSubmit(this.state.item);
      this.setState({ item: "" });
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Enter Item"
            value={this.state.item}
            onChange={(e) => this.setState({ item: e.target.value })}
          />
          <button className="button">Add</button>
        </form>
      );
    }
  }
  
  const TodoList = (props) => {
    const todos = props.tasks.map((todo, index) => {
      return (
        <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
      );
    });
    return <div className="list-wrapper">{todos}</div>;
  };
  
  const Todo = (props) => {
    return (
      <div id={props.id * 10} className="list-item test-item">
        {props.content}
        <button
          id={props.id}
          className="delete is-pulled-right"
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          X
        </button>
      </div>
    );
  };
  

  ReactDOM.render(React.createElement(TodoApp), document.getElementById("target3"));
  




