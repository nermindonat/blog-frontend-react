export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9çğıöşü\s-]/g, '')
    .replace(/[çÇğĞıİöÖşŞüÜ]/g, c => ({
      'ç':'c','Ç':'c','ğ':'g','Ğ':'g','ı':'i','İ':'i',
      'ö':'o','Ö':'o','ş':'s','Ş':'s','ü':'u','Ü':'u'
    }[c]||c))
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
} 