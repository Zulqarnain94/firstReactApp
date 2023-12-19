function Random () {
    let num = Math.round(Math.random()*10)

    return <h1>
        Here is random nr {num}
    </h1>
}

export default Random;