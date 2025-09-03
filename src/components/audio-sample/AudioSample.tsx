import { ImageOff, Play, Bookmark, ArrowDownToLine, Ellipsis } from "lucide-react";
import './AudioSample.css';
import { formatSeconds } from "../../utilities/formatSeconds";
import { useEffect } from "react";

interface AudioSampleProps {
    artist?: string;
    coverImage?: string;
    title?: string;
    tags?: string[];
    duration?: string;
    bpm?: number;
    note?: string;
    downloads?: string;
}

function AudioSample({artist, coverImage, title, tags, duration, bpm, note, downloads}: AudioSampleProps) {

    useEffect(() => {
        console.log(formatSeconds(125));
    }, [])
    
    return (
        <div className="audio-sample-container">
            <div style={{flexDirection: "row", gap: "var(--spacing-md)"}}>
                <a className="audio-sample-data-item centered">
                    {coverImage && (
                        <img src="" alt="" />
                    ) || (
                        <ImageOff className="icon" style={{width: "var(--fontsize-md)"}} />
                    )}
                </a>
                <button className="audio-sample-data-item centered" style={{backgroundColor: "var(--background)"}}>
                    <Play className="icon" style={{width: "var(--fontsize-md)"}} />
                </button>
                <div className="sample-text-container">
                    <h4>{title}</h4>
                    <div className="audio-sample-tags-container">
                        {tags?.map((tag) => (
                            <a href="" className="tags-wrapper">
                                <h5 style={{color: "var(--text-light)"}} className="hover-text">{tag}</h5>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <a className="audio-sample-data-item field centered artist">
                <h5 style={{color: "var(--text-light)"}} className="hover-text">{artist}</h5>
            </a>
            <div className="audio-sample-data-item field centered duration">
                <h5>{duration}</h5>
            </div>
            <div className="audio-sample-data-item field centered note">
                <h5>{note}</h5>
            </div>
            <div className="audio-sample-data-item field centered bpm">
                <h5>{bpm}</h5>
            </div>
            <div className="audio-sample-data-item field centered downloads">
                <h5>{downloads}</h5>
            </div>
            <div className="audio-sample-data-item hover-effect field centered saves">
                <Bookmark className="icon" />
            </div>
            <div className="audio-sample-data-item hover-effect field centered">
                <ArrowDownToLine className="icon" />
            </div>
            <div className="audio-sample-data-item hover-effect field centered">
                <Ellipsis className="icon" />
            </div>
        </div>
    );
}

export default AudioSample;