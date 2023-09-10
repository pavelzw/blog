const projectsData = [
  {
    title: 'polarIFy',
    description: `polarIFy is a Python function decorator that simplifies the way
    you write logical statements for Polars. With polarIFy, you can use Python's
    language structures like if / elif / else statements and transform them into
    pl.when(..).then(..).otherwise(..) statements.`,
    imgSrc: '/static/images/polar-bear.jpg',
    href: '/blog/polarify',
  },
  {
    title: 'setup-micromamba',
    description: `setup-micromamba is a GitHub action that installs micromamba and
    creates a conda environment.`,
    imgSrc: '/static/images/mamba.jpg',
    href: 'https://github.com/mamba-org/setup-micromamba',
  },
  {
    title: 'Slim Trees',
    description: `slim-trees is a Python package for saving and loading
    compressed sklearn Tree-based and lightgbm models. The compression
    is performed by modifying how the model is pickled by Python's pickle module.`,
    imgSrc: '/static/images/tree.jpg',
    href: '/blog/slim-trees',
  },
  {
    title: 'setup-pixi',
    description: `setup-pixi is a GitHub action that installs pixi, a new conda
    package manager, and creates a cached conda environment using pixi.`,
    imgSrc: '/static/images/pixi-banner-2.png',
    href: 'https://github.com/prefix-dev/setup-pixi',
  },
  {
    title: 'conda-forge',
    description: `conda-forge is a community-led conda channel that provides
    packages for a wide range of software. I have contributed to the conda-forge
    community by maintaining over 50 packages.`,
    imgSrc: '/static/images/anvil.jpg',
    href: 'https://github.com/search?type=code&q=owner%3Aconda-forge+path%3Arecipe%2Fmeta.yaml+pavelzw',
  },
  {
    title: 'The Seven Circles Theorem',
    description: `As part of the Summer of Maths Exposition 2,
    I created a video explaining the Seven Circles Theorem. The video was created using manim.`,
    imgSrc: '/static/images/seven-circles.png',
    href: 'https://youtu.be/m9v0h2ibYpo',
  },
  {
    title: 'Calibre Kindle Comics',
    description: `calibre-kindle-comics is a calibre plugin that converts cbz and cbr files
    to mobi files that are optimized for Kindle devices.`,
    imgSrc: '/static/images/comics.jpg',
    href: 'https://github.com/pavelzw/calibre-kindle-comics',
  },
]

export default projectsData
