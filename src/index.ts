import { Extension, ExtensionManifest, OrgNoteApi } from 'orgnote-api';

const packageName = 'colorful-headlines';

export default {
  onMounted: async (api: OrgNoteApi): Promise<void> => {
    api.ui.applyStyles(packageName, `
.org-headline-1 {
    color: var(--red);
}
.org-headline-2 {
    color: var(--orange);
}
.org-headline-3 {
    color: var(--yellow);
}
.org-headline-4 {
    color: var(--green);
}
.org-headline-5 {
    color: var(--blue);
}
.org-headline-6 {
    color: var(--magenta);
}
.org-headline-7 {
    color: var(--cyan);
}
`)
  },

  onUnmounted: async (api: OrgNoteApi): Promise<void> => {
    api.ui.removeStyles(packageName);
  }
} as Extension;


export const manifest: ExtensionManifest = {
  name: 'Colorful Headlines',
  description: 'Colorful headlines for your notes',
  version: '0.0.1',
  sourceType: 'git',
  sourceUrl: 'https://github.com/artawower/orgnote-colorful-headlines',
  author: 'artawower',
  category: 'other',
  keywords: ['color', 'headline', 'styles'],
}
