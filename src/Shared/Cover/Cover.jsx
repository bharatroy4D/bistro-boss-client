import React from 'react';

const Cover = ({ img , title, subTitle}) => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: Cover,
            }}

        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;