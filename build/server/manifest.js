const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.hg95LksE.js","app":"_app/immutable/entry/app.yoCa1Hkj.js","imports":["_app/immutable/entry/start.hg95LksE.js","_app/immutable/chunks/entry.Qa6qL3zS.js","_app/immutable/chunks/scheduler.RvOW76O7.js","_app/immutable/chunks/index.Arc6vgbi.js","_app/immutable/entry/app.yoCa1Hkj.js","_app/immutable/chunks/scheduler.RvOW76O7.js","_app/immutable/chunks/index.3B0PiDA_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-pPhs1wH3.js')),
			__memo(() => import('./chunks/1-q3YMu0j8.js')),
			__memo(() => import('./chunks/2-W9ZByB0O.js')),
			__memo(() => import('./chunks/3-qT7PoupH.js')),
			__memo(() => import('./chunks/4-eDH9ZGhV.js')),
			__memo(() => import('./chunks/5-zWSyPf8F.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/flax",
				pattern: /^\/flax\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/libtorch",
				pattern: /^\/libtorch\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/pytorch",
				pattern: /^\/pytorch\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map