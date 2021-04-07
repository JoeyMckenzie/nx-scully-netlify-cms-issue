import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./apps/nx-scully-issue/src",
  projectName: "nx-scully-issue",
  outDir: './dist/static/nx-scully-issue',
  routes: {
		'/blog/:slug': {
			type: 'contentFolder',
			slug: {
				folder: './apps/nx-scully-issue/content',
			},
		},
	}
};
