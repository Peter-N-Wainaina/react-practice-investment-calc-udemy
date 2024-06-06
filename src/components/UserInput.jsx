
export default function UserInput({handleInput, inputs}){
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>INITIAL INVESTMENT</label>
                <input  type="number" value={inputs.Initial} required onChange={(event) => {handleInput("Initial", event.target.value)}} />
            </p>
            <p>
                <label>ANNUAL INVESTMENT</label>
                <input  type="number" required value={inputs.Annual} onChange={(event) => {handleInput("Annual", event.target.value)}}/>
            </p>
        </div>

        <div className="input-group">
            <p>
                <label>EXPECTED RETURN</label>
                <input  type="number" value={inputs.Expected} required onChange={(event) => {handleInput( "Expected", event.target.value)}}/>
            </p>
            <p>
                <label>DURATION</label>
                <input  type="number" value={inputs.Duration} required onChange={(event) => handleInput("Duration", event.target.value)} />
            </p>
            
        </div>
    </section>
}