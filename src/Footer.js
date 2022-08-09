import Contact from "./Contact";

const Footer = (props) => {

    const json = props.json;
    const footerItems = json.footerItems;

    return ( 
        <div className={"bg-color-1 mt-5 footer"} id="contact">
            <div className="container p-3 text-center">
                <div className="text-color-3 small">
                    <div>{footerItems.info[0]}</div>
                    <div>{footerItems.info[5]}<span className="fw-bold footer-text" type="button" data-bs-toggle="modal" data-bs-target="#contactModal">{footerItems.info[6]}</span></div>
                </div>
                <div className="row justify-content-between text-color-3 small">
                    <div className="col-4">
                    </div>
                    <div className="col-4 text-end small">
                        <div className="small">
                            {footerItems.brand[0]} {footerItems.brand[1]}
                        </div>
                    </div>
                </div>
            </div>
            <Contact contactInfo = {json.contactInfo}></Contact>
        </div>
     );
}
 
export default Footer;