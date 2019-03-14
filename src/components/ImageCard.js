import React, { useState, useEffect, useRef } from 'react';

const ImageCard = props => {
	const [spans, setSpans] = useState(0);
	const imageRef = useRef(null);

	const onEvent = () => {
		const height = imageRef.current.clientHeight;
		const numSpans = Math.ceil(height / 10 + 1);

		setSpans(numSpans);
	};

	useEffect(() => {
		const height = imageRef.current.clientHeight;
		const numSpans = Math.ceil(height / 10 + 1);

		setSpans(numSpans);

		imageRef.current.addEventListener('load', onEvent);

		return () => {
			imageRef.current.removeEventListener('load', onEvent);
		};
	});

	const { description, urls } = props.image;

	return (
		<div style={{ gridRow: `span ${spans}` }}>
			<img ref={imageRef} alt={description} src={urls.regular} />
		</div>
	);
};

export default ImageCard;
