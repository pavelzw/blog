import anvil from '../assets/projects/anvil.jpg';
import comics from '../assets/projects/comics.jpg';
import mamba from '../assets/projects/mamba.jpg';
import pixiBanner from '../assets/projects/pixi-banner.png';
import polarBear from '../assets/projects/polar-bear.jpg';
import sevenCircles from '../assets/projects/seven-circles.png';
import tree from '../assets/projects/tree.jpg';

export const projectsData = [
  {
    title: 'conda-forge',
    description: `conda-forge is a community-led conda channel that provides
    packages for a wide range of software. I have contributed to the conda-forge
    community by maintaining over 50 packages.`,
    img: anvil,
    href: 'https://github.com/search?type=code&q=owner%3Aconda-forge+path%3Arecipe%2Fmeta.yaml+pavelzw',
  },
  {
    title: 'setup-pixi',
    description: `setup-pixi is a GitHub action that installs pixi, a new conda
    package manager, and creates a cached conda environment using pixi.`,
    img: pixiBanner,
    href: 'https://github.com/prefix-dev/setup-pixi',
  },
  {
    title: 'setup-micromamba',
    description: `setup-micromamba is a GitHub action that installs micromamba and
    creates a conda environment.`,
    img: mamba,
    href: 'https://github.com/mamba-org/setup-micromamba',
  },
  {
    title: 'The Seven Circles Theorem',
    description: `As part of the Summer of Maths Exposition 2,
    I created a video explaining the Seven Circles Theorem. The video was created using manim.`,
    img: sevenCircles,
    href: 'https://youtu.be/m9v0h2ibYpo',
  },
  {
    title: 'polarIFy',
    description: `polarIFy is a Python function decorator that simplifies the way you write
    logical statements for Polars. With polarIFy, you can use Python's language structures
    like if / elif / else statements and transform them into pl.when(..).then(..).otherwise(..) statements.`,
    img: polarBear,
    href: '/blog/polarify',
  },
  {
    title: 'Slim Trees',
    description: `slim-trees is a Python package for saving and loading
    compressed sklearn Tree-based and lightgbm models. The compression
    is performed by modifying how the model is pickled by Python's pickle module.`,
    img: tree,
    href: '/blog/slim-trees',
  },
  {
    title: 'Calibre Kindle Comics',
    description: `calibre-kindle-comics is a calibre plugin that converts cbz and cbr files
    to mobi files that are optimized for Kindle devices.`,
    img: comics,
    href: 'https://github.com/pavelzw/calibre-kindle-comics',
  },
];
