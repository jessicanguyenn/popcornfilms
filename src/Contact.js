import { HashLink } from "react-router-hash-link";

const Contact = ({contactInfo, lang}) => {
    return (
        <div>
            <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-color-2">
                        <div className="modal-header">
                            <h5 className="modal-title" id="contactModalLabel">{contactInfo[0]}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">{contactInfo[1]}</label>
                                <input type="text" className="form-control" id="recipient-name" value="support@popcornfilms.ca" disabled/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message-text" className="col-form-label">{contactInfo[2]}</label>
                                <textarea className="form-control" id="message-text"></textarea>
                            </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{contactInfo[3]}</button>
                            <a href={"https://jessicanguyenn.github.io/popcornfilms/#/" + lang} type="button" className="btn btn-contact">{contactInfo[4]}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;