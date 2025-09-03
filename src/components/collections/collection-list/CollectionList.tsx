import type { ReactNode } from "react";
import './CollectionList.css'

interface CollectionListProps {
    title: string;
    horizontal?: boolean;
    vertical?: boolean;
    style?: React.CSSProperties;
    children?: ReactNode;
}

function CollectionList({ title, horizontal=true, style, children }: CollectionListProps) {
    return (
        <div style={{...style, gap: "var(--spacing-md)"}}>
            <h2>{title}</h2>
            <div className="collection-items-wrapper" style={{flexDirection: horizontal ? "row" : "column"}}>
                <div className="collection-items-container" style={{width: horizontal ? "fit-content" : "100%"}}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CollectionList;