import { AuthLogin,AuthSign } from "../Auth/AuthLogin";
export const AuthModal=()=>{
    return(
        <div className="auth-modal-container fixed">
            <div className="auth-modal">
                <div className="d-flex align-center shadow">
                    <button>Login</button>
                    <button>Signup</button>
                    <button></button>
                </div>
            </div>
        </div>
    )
}