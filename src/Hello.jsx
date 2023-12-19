function Hello (){

    let name = 'zulqarnain'
    let message = () =>{
        return 'hello ' + name;
    }
    return <h3>
       {message()}  {name}
    </h3>
}

export default Hello;