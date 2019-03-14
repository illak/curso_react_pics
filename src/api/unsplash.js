import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID be865b2cd2dd12be901cd7667ec86a090f6309546d28c5782ad91f518953dda5'
	}
});
