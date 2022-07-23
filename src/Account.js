import { useState } from "react";
import { Link } from 'react-router-dom';

const Account = ({accountItems, lang}) => {

    const [loginPasswordShown, setLoginPasswordShown] = useState("password");
    const [createPasswordShown, setCreatePasswordShown] = useState("password");
    const [passwordValid, setPasswordValid] = useState("");

    const toggleLoginPassword = () => {
        if (loginPasswordShown === 'password') {
            setLoginPasswordShown("text");
        }
        else {
            setLoginPasswordShown("password");
        }
    };
    const toggleCreatePassword = () => {
        if (createPasswordShown === 'password') {
            setCreatePasswordShown("text");
        }
        else {
            setCreatePasswordShown("password");
        }
    };

    const reenterPasswordValid = () => {
        var password = document.getElementById('createPassword').value;
        setPasswordValid(password);
    }

    return ( 
        <div className="container mt-5">
            <div className="row justify-content-between p-5">
                <div className="text-center text-color-3 h2 fst-italic pb-5">
                    {accountItems.info}
                </div>
                <div className="col-md-5 bg-color-2 rounded p-4 text-color-1">
                    <div className="text-center fw-bold h1 py-2">
                        {accountItems.login[0]}
                    </div>
                    <form className="needs-validation" noValidate>
                        <div className="mb-3 pt-2">
                            <label htmlFor="loginEmail" className="form-label fw-bold">{accountItems.login[1]}</label>
                            <input type="email" className="form-control" id="loginEmail" placeholder={accountItems.login[2]} required/>
                        </div>
                        <div className="py-2"></div>
                        <div className="mb-3">
                            <label htmlFor="loginPassword" className="form-label fw-bold">{accountItems.login[3]}</label>
                            <input type={loginPasswordShown} className="form-control" id="loginPassword" placeholder={accountItems.login[4]} required/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input btn-sm" id="loginCheck" onClick={toggleLoginPassword}/>
                            <label className="form-check-label small" htmlFor="loginCheck" >{accountItems.login[5]}</label>
                        </div>
                        <div className="py-2"></div>
                        <div className="text-center">
                            <Link to={"/" + lang + "/loggedOn"} type="submit" className="btn btn-account text-color-1">{accountItems.login[0]}</Link>
                        </div>
                    </form>
                </div>
                <div className="col-md-5 bg-color-2 rounded p-4 text-color-1">
                    <div className="text-center fw-bold h1 py-2">
                        {accountItems.create[0]}
                    </div>
                    <form>
                        <div className="mb-3 pt-2">
                            <label htmlFor="createEmail" className="form-label fw-bold">{accountItems.create[1]}</label>
                            <input type="email" className="form-control" id="createEmail" placeholder={accountItems.create[2]} required/>
                        </div>
                        <div className="py-2"></div>
                        <div className="mb-3">
                            <label htmlFor="createPassword" className="form-label fw-bold">{accountItems.create[3]}</label>
                            <input type={createPasswordShown} className="form-control" id="createPassword" placeholder={accountItems.create[4]} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="createPassword2" className="form-label fw-bold">{accountItems.create[6]}</label>
                            <input type={createPasswordShown} className="form-control" id="createPassword2" placeholder={accountItems.create[4]} onFocus={reenterPasswordValid} required pattern={passwordValid}/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input btn-sm" id="createCheck" onClick={toggleCreatePassword}/>
                            <label className="form-check-label small" htmlFor="createCheck" >{accountItems.create[5]}</label>
                        </div>
                        <div className="py-2"></div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input btn-sm" id="mailCheck"/>
                            <label className="form-check-label small" htmlFor="mailCheck" >{accountItems.create[7]}</label>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input btn-sm" id="tcCheck" required/>
                            <label className="form-check-label small" htmlFor="tcCheck">{accountItems.create[8]}</label>
                        </div>
                        <div className="py-2"></div>
                        <div className="text-center">
                            <Link to={"/" + lang + "/loggedOn"} type="submit" className="btn btn-account text-color-1">{accountItems.create[0]}</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Account;