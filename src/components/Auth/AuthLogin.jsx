export const AuthLogin=()=>{
    return (
        <div className="auth-container">
            <form action="">
                <div className="d-flex direction-column 1b-in-contaoner">
                    <label className="auth-label">
                       Password <span className="asterisk">*</span>{" "}
                    </label>
                    <input 
                    className="auth-input"
                    placeholder="Enter Password"
                    type="password" 
                    required
                    />
                    
                </div>
                <div>
                    <button className="button btn-primary btn-login cursor">
                     Login
                    </button>
                </div>
            </form>
            <div className="cta">
                <button className="button btn-outline-primary cursor-pointer">
                  Login with Test Credentials
                </button>
            </div>
        </div>
    )
}