function slugify(title) {
  return title.replace(/[-+()\[\]!]/g, '').toLowerCase().replace(/[\s]/g, '-');
}

console.log(slugify('[JavaScript] Most popular books!!!'));
