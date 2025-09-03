import type { LucideIcon } from 'lucide-react';
import './CallToAction.css'

interface CallToActionProps {
    text: string;
    icon?: LucideIcon;
    style?: React.CSSProperties;
    inverse?: boolean;
    refillEffect?: boolean;
}

function CallToAction({ text, style, icon: Icon, inverse, refillEffect }: CallToActionProps) {
    return (
        <div style={{...style, backgroundColor: inverse ? "var(--background)" : "var(--text)", border: inverse ? "2px solid var(--text)" : "none"}} className={`call-to-action-container ${refillEffect ? "refillEffect" : ""}`}>
            {Icon &&
                <Icon className="call-to-action-text"/>
            }
            <h4 className="call-to-action-text">{text}</h4>
        </div>
    );
}

export default CallToAction;