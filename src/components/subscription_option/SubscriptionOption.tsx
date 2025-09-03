import { Check, X } from "lucide-react";
import './SubscriptionOption.css';
import CallToAction from "../inputs/buttons/call-to-action/CallToAction";

interface SubscriptionOptionsProps {
    title: string;
    price: string;
    features: string[];
    shadowColor: string;
}

function SubscriptionOption({ title, price, features, shadowColor }: SubscriptionOptionsProps) {
    return (
        <div className="option-container" style={{boxShadow: `0 0 10px rgba(${shadowColor}, var(--alpha))`}}>
            <div className="header-container">
                <h5 style={{whiteSpace: "nowrap"}}>{title}</h5>
                <h3 className="bold">£{price}</h3>
            </div>
            {features.map((option) => (
                <div className="features-container">
                    <h4>- {option}</h4>
                </div>
            ))}
            <CallToAction text={"Purchase"} />
        </div>
    );
}

export default SubscriptionOption;