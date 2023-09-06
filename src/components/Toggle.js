function Toggle() {

    return(
        <div className="toggle">
            <h2>Power</h2>
            <div id="toggle-box">
                <input type="checkbox" id="toggle-switch"/>
                <label htmlFor="toggle-switch"></label>
            </div>
        </div>
    )
}

export default Toggle