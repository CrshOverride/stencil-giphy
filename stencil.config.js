exports.config = {
	bundles: [{ components: ["ice-app", "ice-search", "ice-results"] }],
	collections: [{ name: "@stencil/router" }]
};

exports.devServer = {
	root: "www",
	watchGlob: "**/**"
};
