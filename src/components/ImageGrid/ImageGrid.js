import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadImages } from '../../actions'
import Stats from '../Stats'

import './styles.css';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {

    componentDidMount() {
        this.props.loadImages()
    }

    render() {
        const { images, error, loadImages, imageStats } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <Stats stats={imageStats[image.id]} />
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    <p onClick={loadImages}>Load Images</p>
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
            </div>
        );
    }
}

const mapsStateToProps = ({ isLoading, images, error, imageStats }) => ({
    isLoading, images, error, imageStats
})

const mapsDispatchToProps = (dispatch) => ({
    loadImages: () => dispatch(loadImages()),
})

export default connect(
    mapsStateToProps,
    mapsDispatchToProps
)(ImageGrid);
