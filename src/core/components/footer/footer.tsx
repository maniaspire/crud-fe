import { FunctionComponent } from "react";
import './footer.css'

interface FooterComponentProps {

}

const FooterComponent: FunctionComponent<FooterComponentProps> = () => {
    return (<>
        <div className="footer-container">
            <ul>
                <li><a href="https://twitter.com/julesforrest">Twitter</a></li>
                <li><a href="https://github.com/julesforrest">Github</a></li>
            </ul>
        </div>
    </>);
}

export { FooterComponent };