// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

    constructor(props) {
        super()

        this.state = {
            errors: [],
            user: null, 
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolution = () => {
        this.setState({
            settings: {
                bitrate: 8,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
            
        })
    }


    render() {
        console.log(this.state)
        return(
            <div>
                <button onClick={this.handleClick} className="bitrate">Bitrate Button</button>
                <br></br>
                <button onClick={this.handleResolution} className="resolution">Resolution Button</button>

            </div>

            
        
        )
    }
}

export default YouTubeDebugger