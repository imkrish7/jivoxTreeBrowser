export default {
	name: '/',
	subFolder: [
		{
			name: 'A',
			subFolder: [],
		},
		{
			name: 'B',
			subFolder: [],
		},
		{
			name: 'C',
			subFolder: [
				{
					name: 'A',
					subFolder: [
						{
							name: 'A',
						},
						{
							name: 'AB',
						},
					],
				},
				{
					name: 'B',
					subFolder: [],
				},
				{
					name: 'C',
					subFolder: [],
				},
				{
					name: 'E',
					subFolder: [
						{
							name: 'Z',
						},
					],
				},
				{
					name: 'C',
				},
			],
		},
		{
			name: 'X',
		},
	],
};