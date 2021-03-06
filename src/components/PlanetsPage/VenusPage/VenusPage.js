import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ReactComponent as Venus } from '../../icons/venus.svg';

import VenusNatal from './VenusNatal';
import VenusTransit from './VenusTransit';

class VenusPage extends Component {
    state = {
        isNatalActive: false

    }

    // componentDidMount() {
    //     console.log(this.state.isNatalActive)
    // }
    render() {
        return (
            <>
                <div className="planetPageDiv">
                    <h1>Venus</h1>
                    <Venus height='80px' />
                    <br />
                    <br />
                    <p>Venus represents how we show our affection as well as how we would like to receive it. Venus rules both Taurus and Libra
                         as well as the Second and Seventh Houses.  
                    </p>
                    <br />
                    <DropdownButton id="dropdown-basic-button" title="Choose Planet">
                        <Dropdown.Item href="#/planets/sun">Sun</Dropdown.Item>
                        <Dropdown.Item href="#/planets/mercury">Mercury</Dropdown.Item>
                        <Dropdown.Item href="#/planets/venus">Venus</Dropdown.Item>
                        <Dropdown.Item href="#/planets/mars">Mars</Dropdown.Item>
                        <Dropdown.Item href="#/planets/jupiter">Jupiter</Dropdown.Item>
                        <Dropdown.Item href="#/planets/saturn">Saturn</Dropdown.Item>
                        <Dropdown.Item href="#/planets/neptune">Neptune</Dropdown.Item>
                        <Dropdown.Item href="#/planets/uranus">Uranus</Dropdown.Item>
                        <Dropdown.Item href="#/planets/pluto">Pluto</Dropdown.Item>
                    </DropdownButton>
                    <br />
                    <BootstrapSwitchButton
                        id="natalTransitToggle"
                        checked={false}
                        onlabel='Transit'
                        offlabel='Natal'
                        onstyle="secondary"
                        offstyle="secondary"
                        width={100}
                        onChange={(checked: boolean) => {
                            this.setState({ isNatalActive: checked })
                        }}

                    />
                </div>
                <br />

                {this.state.isNatalActive === false
                    ?
                    <VenusNatal />
                    :
                    <VenusTransit />
                }
            </>
        )
    }
}

export default VenusPage;