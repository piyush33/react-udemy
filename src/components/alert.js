function Alert (){

    function hello() {
        alert("hello");
    }
  
    return(
        <div>
        <button onClick = {hello} >click me</button>
        </div>
    );
  }

export default Alert;  
