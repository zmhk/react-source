import React, { PureComponent } from 'react'
import './style.css'

class Weather extends PureComponent {
    constructor() {
        super(...arguments)
        this.state = {
            weather: ''
        }
    }

    render() {
        return (
            <div className="weather">{this.state.weather}</div>
        )
    }

    componentDidMount() {
        fetch('/data/cityinfo/101010100.html').then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then((responseJson) => {
                console.log(responseJson)
                this.setState({ weather: responseJson.weatherinfo.weather });
            }).catch((error) => {
                this.setState({ weather: null });
            });
        }).catch((error) => {
            this.setState({ weather: null });
        });
    }
}

export default Weather
