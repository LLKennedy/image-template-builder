module.exports = function(api) {
	api.cache(true);

	const presets = [
		[
			'@babel/preset-env',
			'@babel/preset-react',
			'@babel/preset-typescript',
			{
				targets: {
				node: 'current',
				},
			},
		],
	]

	return {
		presets
	};
};