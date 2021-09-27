import React from "react";
import Modal from 'react-modal';
import './SignUpModal.css';

interface Props {
    mobile: number;
    displayPhoto: string;
    email: string;
    username: string;
    id: number;
}

const SignUpModal : React.FC<Props> = ( props : Props) => {

    return(
        <Modal id="sign-up-modal" isOpen={true}>
            <div>
                <div className="pb-2">
                    <h1 className="text-green text-center">SUCCESS!</h1> <br/>
                </div>
                <div className="white-row">
                    <div className="col-8 pl-4 pt-4 pb-4">
                        <h5>
                            Username: <span className="user-details">{props.username}#{props.id}</span> <br/>
                            Mobile: <span className="user-details">{props.mobile}</span> <br/>
                            Email: <span className="user-details">{props.email}</span>
                        </h5>
                    </div>
                    <div className="col-4 p-0">
                        <img id="display-photo" className="border" src={props.displayPhoto}/> 
                    </div>
                    <div className="d-flex mx-auto pt-4 pb-0">
                        <button className="btn btn-info" onClick={()=>window.location.reload()}>Ok</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default SignUpModal;