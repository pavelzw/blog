import type { ImageMetadata } from 'astro';
import comics from '../assets/projects/comics.jpg';
import anvil from '../assets/projects/conda/anvil.jpg';
import pixiMirror from '../assets/projects/conda/conda-mirror.png';
import mamba from '../assets/projects/conda/mamba.jpg';
import pixiBanner from '../assets/projects/conda/paxton-as-pixi.svg';
import rattlerBuild from '../assets/projects/conda/paxton-builder-mascot.svg';
import pixiDiffToMarkdown from '../assets/projects/conda/pixi-diff-to-markdown.png';
import pixiPack from '../assets/projects/conda/pixi-pack.png';
import modernerCv from '../assets/projects/moderner-cv.png';
import polarBear from '../assets/projects/polar-bear.jpg';
import sevenCircles from '../assets/projects/seven-circles.png';
import tree from '../assets/projects/tree.jpg';
import boringGravatars from '../assets/projects/boring-gravatars.svg';

export interface Project {
  title: string;
  description: string;
  href: string;
  badge?: { github: string } | { youtube: string };
  img: ImageMetadata;
  imgBgColor?: string;
  imgContain?: boolean;
  imgPosition?: 'top' | 'center' | 'bottom';
}

export const condaProjects: Project[] = [
  {
    title: 'pixi',
    description: `A modern cross-platform package manager for the Conda ecosystem with a focus on simplicity, speed, and reproducibility.`,
    href: 'https://github.com/prefix-dev/pixi',
    badge: { github: 'prefix-dev/pixi' },
    img: pixiBanner,
    imgBgColor: '#f3d140',
    imgContain: true,
  },
  {
    title: 'rattler-build',
    description: `A fast, standalone Conda package builder written in Rust that creates cross-platform relocatable packages from a simple recipe format.`,
    href: 'https://github.com/prefix-dev/rattler-build',
    badge: { github: 'prefix-dev/rattler-build' },
    img: rattlerBuild,
    imgBgColor: '#f3d140',
    imgContain: true,
  },
  {
    title: 'rattler',
    description: `A collection of Rust crates to work with the Conda ecosystem. This library powers all modern Rust-based tooling in the Conda ecosystem.`,
    href: 'https://github.com/conda/rattler',
    badge: { github: 'conda/rattler' },
    img: pixiBanner,
    imgBgColor: '#f3d140',
    imgContain: true,
  },
  {
    title: 'conda-forge',
    description: `The backbone of the Conda ecosystem. It consists of over 30,000 packages for Linux, macOS and Windows. I maintain over 200 feedstocks.`,
    img: anvil,
    href: 'https://github.com/search?type=code&q=owner%3Aconda-forge+path%3Arecipe%2Frecipe.yaml+pavelzw',
  },
  {
    title: 'setup-pixi',
    description: `A GitHub action that installs pixi and creates a cached conda environment using pixi.`,
    href: 'https://github.com/prefix-dev/setup-pixi',
    badge: { github: 'prefix-dev/setup-pixi' },
    img: pixiBanner,
    imgBgColor: '#f3d140',
    imgContain: true,
  },
  {
    title: 'setup-micromamba',
    description: `A GitHub action that installs micromamba and creates a conda environment.`,
    href: 'https://github.com/mamba-org/setup-micromamba',
    badge: { github: 'mamba-org/setup-micromamba' },
    img: mamba,
  },
  {
    title: 'pixi-pack',
    description: `A tool to pack and unpack conda environments created with pixi for easy distribution.`,
    href: 'https://github.com/quantco/pixi-pack',
    badge: { github: 'quantco/pixi-pack' },
    img: pixiPack,
    imgBgColor: '#343434',
    imgContain: true,
  },
  {
    title: 'conda-mirror',
    description: `A tool to create a local mirror of a conda channel for offline or air-gapped environments.`,
    href: 'https://github.com/conda-incubator/conda-mirror',
    badge: { github: 'conda-incubator/conda-mirror' },
    img: pixiMirror,
  },
  {
    title: 'conda-deny',
    description: `Check your conda environment for packages with disallowed licenses.`,
    href: 'https://github.com/quantco/conda-deny',
    badge: { github: 'quantco/conda-deny' },
    img: anvil,
  },
  {
    title: 'pixi-diff',
    description: `A tool to show the difference between two pixi lock files.`,
    href: 'https://github.com/pavelzw/pixi-diff',
    badge: { github: 'pavelzw/pixi-diff' },
    img: pixiBanner,
  },
  {
    title: 'pixi-inject',
    description: `Inject PyPI packages into a pixi environment.`,
    href: 'https://github.com/pavelzw/pixi-inject',
    badge: { github: 'pavelzw/pixi-inject' },
    img: pixiBanner,
  },
  {
    title: 'pixi-install-to-prefix',
    description: `Install a pixi environment into an arbitrary prefix location.`,
    href: 'https://github.com/pavelzw/pixi-install-to-prefix',
    badge: { github: 'pavelzw/pixi-install-to-prefix' },
    img: pixiBanner,
  },
  {
    title: 'pixi-docker',
    description: `Docker images with pixi pre-installed for CI/CD pipelines.`,
    href: 'https://github.com/prefix-dev/pixi-docker',
    badge: { github: 'prefix-dev/pixi-docker' },
    img: pixiBanner,
  },
  {
    title: 'pixi-diff-to-markdown',
    description: `Convert pixi-diff output to markdown for use in pull request comments.`,
    href: 'https://github.com/pavelzw/pixi-diff-to-markdown',
    badge: { github: 'pavelzw/pixi-diff-to-markdown' },
    img: pixiDiffToMarkdown,
  },
  {
    title: 'pixi-pycharm',
    description: `PyCharm plugin for pixi integration.`,
    href: 'https://github.com/pavelzw/pixi-pycharm',
    badge: { github: 'pavelzw/pixi-pycharm' },
    img: pixiBanner,
  },
];

export const otherProjects: Project[] = [
  {
    title: 'The Seven Circles Theorem',
    description: `As part of the Summer of Maths Exposition 2, I created a video explaining the Seven Circles Theorem. The video was created using manim.`,
    img: sevenCircles,
    href: 'https://youtu.be/m9v0h2ibYpo',
    badge: { youtube: 'https://youtu.be/m9v0h2ibYpo' },
  },
  {
    title: 'polarIFy',
    description: `A Python function decorator that simplifies the way you write logical statements for Polars. Transform if / elif / else statements into pl.when(..).then(..).otherwise(..) statements.`,
    img: polarBear,
    href: '/blog/polarify',
    badge: { github: 'quantco/polarify' },
  },
  {
    title: 'Slim Trees',
    description: `A Python package for saving and loading compressed sklearn Tree-based and lightgbm models. The compression is performed by modifying how the model is pickled.`,
    img: tree,
    href: '/blog/slim-trees',
    badge: { github: 'quantco/slim-trees' },
  },
  {
    title: 'Calibre Kindle Comics',
    description: `A calibre plugin that converts cbz and cbr files to mobi files that are optimized for Kindle devices.`,
    img: comics,
    href: 'https://github.com/pavelzw/calibre-kindle-comics',
    badge: { github: 'pavelzw/calibre-kindle-comics' },
  },
  {
    title: 'pydantic-settings-sops',
    description: `A pydantic-settings plugin to load secrets from SOPS encrypted files.`,
    img: tree,
    href: 'https://github.com/pavelzw/pydantic-settings-sops',
    badge: { github: 'pavelzw/pydantic-settings-sops' },
  },
  {
    title: 'moderner-cv',
    description: `A modern CV template for Typst, inspired by moderncv for LaTeX.`,
    href: 'https://github.com/pavelzw/moderner-cv',
    badge: { github: 'pavelzw/moderner-cv' },
    img: modernerCv,
    imgPosition: 'top',
  },
  {
    title: 'boring-gravatars',
    description: `Generate unique Gravatar-style avatars from email addresses using the boring-avatars library.`,
    href: 'https://github.com/pavelzw/boring-gravatars',
    badge: { github: 'pavelzw/boring-gravatars' },
    img: boringGravatars,
    imgBgColor: '#232135',
    imgContain: true,
  },
];
