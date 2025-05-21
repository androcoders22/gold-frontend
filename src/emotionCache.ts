import createCache from "@emotion/cache";

// Default LTR cache for Emotion
const defaultCache = createCache({ key: "mui", prepend: true });

export default defaultCache;
