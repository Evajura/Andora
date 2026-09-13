// Explicit opt-in works for development and production-build previews.
// Never enable this flag for a public production deployment.
export const isLocalPreview = import.meta.env.VITE_LOCAL_PREVIEW === 'true';
