import {Link} from 'react-router-dom';
import { GithubIcon, YoutubeIcon, InstaIcon } from './assets/Icons';

export function Navigation(){
    return(
        <div className="navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/listen">Listen</Link>
            <Link to="/contact">Contact</Link>
            <span className="push-right">
            <a className="sociallinks" href="https://www.youtube.com/veronicaisabelle" target="_blank"><YoutubeIcon/></a>
            <a className="sociallinks" href="https://github.com/veronisab" target="_blank"><GithubIcon /></a>
            <a className="sociallinks" href="https://instagram.com/veronisab" target="_blank"><InstaIcon/></a>
 
            </span>
        </div>
    )
}