
const OVERRIDES_KEY = "gpkv_site_overrides";

export const getOverrides = () => {
  const data = localStorage.getItem(OVERRIDES_KEY);
  return data ? JSON.parse(data) : {};
};

export const saveOverride = (slug, data) => {
  const current = getOverrides();
  current[slug] = { ...current[slug], ...data };
  localStorage.setItem(OVERRIDES_KEY, JSON.stringify(current));
};

export const clearOverride = (slug) => {
  const current = getOverrides();
  delete current[slug];
  localStorage.setItem(OVERRIDES_KEY, JSON.stringify(current));
};

export const clearAllOverrides = () => {
  localStorage.removeItem(OVERRIDES_KEY);
};

export const exportOverrides = () => {
  return JSON.stringify(getOverrides(), null, 2);
};

export const importOverrides = (jsonString) => {
  try {
    const data = JSON.parse(jsonString);
    localStorage.setItem(OVERRIDES_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Invalid JSON", e);
    return false;
  }
};

export const applySiteOverrides = (sitesArray) => {
  const overrides = getOverrides();
  return sitesArray.map(site => {
    if (overrides[site.slug]) {
      return { ...site, ...overrides[site.slug] };
    }
    return site;
  });
};
