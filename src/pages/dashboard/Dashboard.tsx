import CollectionList from "../../components/collections/collection-list/CollectionList";
import CollectionItem from "../../components/collections/collection-item/CollectionItem";
import CreatorStory from "../../components/heroes/creator-story/CreatorStory";
import AudioSample from "../../components/audio-sample/AudioSample";

function Dashboard() {
    return (
        <div className="container" style={{gap: "var(--spacing-lg)", height: "fit-content"}}>
            <CollectionList title="Popular">
                <CollectionItem artist="Beat Boy" title="Drumkit Vol. 1" genre="Hip-Hop"/>
                <CollectionItem artist="Beat Boy" title="Drumkit Vol. 1" genre="Hip-Hop"/>
                <CollectionItem artist="Beat Boy" title="Drumkit Vol. 1" genre="Hip-Hop"/>
                <CollectionItem artist="Beat Boy" title="Drumkit Vol. 1" genre="Hip-Hop"/>
                <CollectionItem artist="Beat Boy" title="Drumkit Vol. 1" genre="Hip-Hop"/>
                <CollectionItem artist="Beat Boy" title="Drumkit Vol. 1" genre="Hip-Hop"/>
                <CollectionItem artist="Beat Boy" title="Drumkit Vol. 1" genre="Hip-Hop"/>
                <CollectionItem artist="Beat Boy" title="Drumkit Vol. 1" genre="Hip-Hop"/>
            </CollectionList>
            <CollectionList title="Creator Stories">
                <CreatorStory artist="Artist Name" text="Hi! My name is [Artist Name], I am a 21 year old music producer from Ontario"/>
                <CreatorStory artist="Artist Name" text="Hi! My name is [Artist Name], I am a 21 year old music producer from Ontario"/>
                <CreatorStory artist="Artist Name" text="Hi! My name is [Artist Name], I am a 21 year old music producer from Ontario"/>
                <CreatorStory artist="Artist Name" text="Hi! My name is [Artist Name], I am a 21 year old music producer from Ontario"/>
                <CreatorStory artist="Artist Name" text="Hi! My name is [Artist Name], I am a 21 year old music producer from Ontario"/>
            </CollectionList>
            <CollectionList title="Top sounds" horizontal={false}>
                <div style={{borderRadius: "var(--spacing-sm)", overflow: "hidden", width: "100%"}}>
                    <AudioSample artist="Artist Name" title="Awesome Guitar Loop 4" tags={["hiphop", "rap", "trap", "boombap"]} duration="00:15" note="A#" bpm={145} downloads="12,000"/>
                    <AudioSample artist="Artist Name" title="Awesome Guitar Loop 4" tags={["hiphop", "rap", "trap", "boombap"]} duration="00:15" note="A#" bpm={145} downloads="12,000"/>
                    <AudioSample artist="Artist Name" title="Awesome Guitar Loop 4" tags={["hiphop", "rap", "trap", "boombap"]} duration="00:15" note="A#" bpm={145} downloads="12,000"/>
                    <AudioSample artist="Artist Name" title="Awesome Guitar Loop 4" tags={["hiphop", "rap", "trap", "boombap"]} duration="00:15" note="A#" bpm={145} downloads="12,000"/>
                    <AudioSample artist="Artist Name" title="Awesome Guitar Loop 4" tags={["hiphop", "rap", "trap", "boombap"]} duration="00:15" note="A#" bpm={145} downloads="12,000"/>
                </div>
            </CollectionList>
        </div>
    );
}

export default Dashboard;