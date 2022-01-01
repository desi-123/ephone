import React from 'react'
import feature from '../data/feature'

function Feature() {
    return (
        <section className="feature">
            {feature.map((note) => {
                const {image, description} = note;
                return (
                    <article key={note.id}>
                        <div className="feature__picture">
                            <img src={image} alt="featur image" className='feature__picture--image-feature' />
                        </div>
                        <div className="feature__description">
                            <p className='feature__description--text'>{description}</p>
                        </div>
                    </article>
                )
            })}
        </section>
    );
}

export default Feature
