import './CreatorStory.css'
import { UserRoundX } from 'lucide-react';
import CallToAction from '../../inputs/buttons/call-to-action/CallToAction';

interface CreatorStoryProps {
    artist: string;
    text: string;
    filePath?: string;
    url?: string;
}

function CreatorStory({ artist, text, filePath, url }: CreatorStoryProps) {
    return (
        <div className="creator-story-container">
            <div className="creator-image-container">
                <a className="creator-image-wrapper" href={`/creators/${url}`}>
                    {filePath && (
                        <img src="" alt="" />
                    ) || (
                        <UserRoundX className="icon" />
                    )}
                </a>
            </div>
            <div className="creator-metadata-container">
                <h4>{artist}</h4>
                <h4 style={{color: "var(--text-light)"}}>"{text}"</h4>
            </div>
            <CallToAction text="View profile" />
        </div>
    );
}

export default CreatorStory;