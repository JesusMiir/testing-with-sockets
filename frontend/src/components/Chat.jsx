const ws = new WebSocket("http://localhost:8800/ws")

/*
    Create a form that allows the user to choose between add and subtract
    and provide 2 numbers
*/

ws.addEventListener('message', e => {
    console.log("Message received:", e.data)
})

function Chat() {

    function handleSubmit(e) {
        e.preventDefault()
        const message = JSON.stringify({
            operation: e.currentTarget.operation.value,
            firstNumber: e.currentTarget.firstNumber.value,
            secondNumber: e.currentTarget.secondNumber.value
        })
        ws.send(message)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <div>
                    <label htmlFor="">First Number</label>
                    <input type="number" name="firstNumber" />
                </div>
                <div>
                    <label htmlFor="">Second Number</label>
                    <input type="number" name="secondNumber" />
                </div>
                <div>
                    Operation
                    <div>
                        <input type="radio" name="operation" value="+" /> +
                    </div>
                    <div>
                        <input type="radio" name="operation" value="-" /> -
                    </div>
                </div>
                <button>Send</button>
            </form>
        </div>
    )
}

export default Chat
