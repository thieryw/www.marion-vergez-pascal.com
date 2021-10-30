import {createRouter, defineRoute} from "type-route";
import {makeThisModuleAnExecutableRouteLister} from "github-pages-plugin-for-type-route";


export const routeDefs = {
	"home": defineRoute("/"),
	"biography": defineRoute("/biographie"),
	"media": defineRoute("/media"),
	"futureEvents": defineRoute("/futures-dates"),
	"legal": defineRoute("/mentions-legal")
};

makeThisModuleAnExecutableRouteLister(routeDefs);

export const {RouteProvider, routes, useRoute} = createRouter(
	routeDefs
);