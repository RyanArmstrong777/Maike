import SubscriptionOption from "../../components/subscription_option/SubscriptionOption";
import './Pricing.css'
import NavbarItem from "../../components/navbar/navbar_items/NavbarItem";
import { useState } from "react";

function Pricing() {

const [subscriptionType, setSubscriptionType] = useState(true)

    return (
        <div id="pricing-container">
            <div className="centered" style={{gap: "var(--spacing-sm)", textAlign: "center"}}>
                <h1>Plans & Pricing</h1>
                <h4>Plans that fit your production needs!</h4>
            </div>     
            <div id="subscription-freq-container">
                <NavbarItem text={"Monthly"} onPress={() => setSubscriptionType(true)} underline/>
                <NavbarItem text={"Yearly"} onPress={() => setSubscriptionType(false)} underline />
            </div>
            <div id="subscription-options-container" className="centered">
                <SubscriptionOption title="Basic" price={subscriptionType ? "7.99 / month" : "79.99 / year (save £15)"} features={["100 Tokens / month"]} shadowColor="0, 0, 0" />
                <SubscriptionOption title="Maike Pro" price={subscriptionType ? "12.99 / month" : "129.99 / year (save £25)"} features={["200 Tokens / month"]} shadowColor="0, 0, 0" />
                <SubscriptionOption title="Maike Pro Max" price={subscriptionType ? "29.99 / month" : "299.99 / year (save £60)"} features={["500 Tokens / month"]} shadowColor="0, 0, 0" />
            </div>  
        </div>
    );
}

export default Pricing;