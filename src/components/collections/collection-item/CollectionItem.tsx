import './CollectionItem.css'
import ImageNotFound from "../../not-found/ImageNotFound";

interface CollectionItemProps {
    artist: string;
    title: string;
    genre: string;
    filePath?: string;
}

function CollectionItem({ artist, title, genre, filePath }: CollectionItemProps) {
    console.log(title, artist, genre)
    return (
        <div className="collection-item-container">
            {filePath && (
                <img src="" alt="" />
            ) || (
                <ImageNotFound />
            )}
            <div className="collection-metadata-container">
                <div className="collection-header-container">
                    <h4>{title}</h4>
                    <h4 style={{color: "var(--text-light)"}}>{genre}</h4>
                </div>
                <h4 style={{color: "var(--text-light)"}} className="collection-genre">{artist}</h4>
            </div>
        </div>
    );
}

export default CollectionItem;