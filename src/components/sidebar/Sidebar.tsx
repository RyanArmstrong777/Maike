import './Sidebar.css'
import { AudioWaveform, Bookmark, Compass, Download, LayoutDashboard, Library } from 'lucide-react';

function Sidebar() {
    return (
        <div className="sidebar-container">
            <a href="/dashboard" className="sidebar-item">
                <LayoutDashboard className="icon" />
                <h4 className="sidebar-text">Dashboard</h4>
            </a>
            <a href="/browse" className="sidebar-item">
                <Compass className="icon" />
                <h4 className="sidebar-text">Browse</h4>
            </a>
            <a href="/favourites" className="sidebar-item">
                <Bookmark className="icon" />
                <h4 className="sidebar-text">Saved</h4>
            </a>
            <a href="/collections" className="sidebar-item">
                <Library className="icon" />
                <h4 className="sidebar-text">Collections</h4>
            </a>
            <a href="/downloads" className="sidebar-item">
                <Download className="icon" />
                <h4 className="sidebar-text">Downloads</h4>
            </a>
        </div>
    );
}

export default Sidebar;