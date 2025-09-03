import { FileX2 } from 'lucide-react';
import './ImageNotFound.css'

const ImageNotFound = () => {
    return (
        <div className="image-not-found-cover centered">
            <FileX2 className="icon" style={{ color: 'var(--text-light)' }} />
            <h4 style={{ color: 'var(--text-light)' }}>File not found</h4>
        </div>
    );
};

export default ImageNotFound;
