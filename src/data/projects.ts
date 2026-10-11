import type { ImageMetadata } from 'astro';

import boringGravatars from '../assets/projects/boring-gravatars.svg';
import comics from '../assets/projects/comics.jpg';
import anvil from '../assets/projects/conda/anvil.jpg';
import condaMirror from '../assets/projects/conda/conda-mirror.png';
import mamba from '../assets/projects/conda/mamba.jpg';
import pixiBanner from '../assets/projects/conda/paxton-as-pixi.svg';
import rattlerBuild from '../assets/projects/conda/paxton-builder-mascot.svg';
import rattlerImg from '../assets/projects/conda/paxton-rattler.png';
import pixiDiffToMarkdown from '../assets/projects/conda/pixi-diff-to-markdown.png';
import pixiPack from '../assets/projects/conda/pixi-pack.png';
import modernerCv from '../assets/projects/moderner-cv.png';
import polarBear from '../assets/projects/polar-bear.jpg';
import pydanticSops from '../assets/projects/pydantic-sops.svg';
import tree from '../assets/projects/tree.jpg';

export type ProjectBadge = { github: string; label?: string } | { youtube: string; label?: string };

export type ProjectGroupId = 'conda' | 'python' | 'misc';

export interface ProjectGroup {
  id: ProjectGroupId;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  href: string;
  /** Short description. May contain inline HTML (`<code>`, `<a>`). */
  description: string;
  group: ProjectGroupId;
  badge?: ProjectBadge;
  /** URL of a blog post about this project, internal (`/blog/...`) or external. */
  post?: string;
  img?: ImageMetadata;
  video?: { light: string; dark: string };
  imgBgColor?: string;
  imgContain?: boolean;
  imgPosition?: 'top' | 'center' | 'bottom';
  /** Shown in the "Featured" section at the top of the page instead of its group. */
  featured?: boolean;
  /** Rendered as a small text-only card. */
  compact?: boolean;
}

const link = (href: string, text: string) =>
  `<a href="${href}" class="text-primary-500 hover:text-primary-600">${text}</a>`;

export const projectGroups: ProjectGroup[] = [
  {
    id: 'conda',
    title: 'Conda Ecosystem',
    description: 'Package management tooling, mostly around Pixi and conda-forge.',
  },
  {
    id: 'python',
    title: 'Python Libraries',
    description: 'Libraries for data science and application code.',
  },
  {
    id: 'misc',
    title: 'Misc',
    description: 'Templates, plugins, videos and other small things.',
  },
];

export const projects: Project[] = [
  // Featured
  {
    title: 'diffle',
    post: '/blog/diffle',
    href: 'https://diffle.app',
    badge: { github: 'moritzwilksch/diffle' },
    video: {
      dark: 'https://diffle.app/media/review-dark.mp4',
      light: 'https://diffle.app/media/review-light.mp4',
    },
    description:
      'Review git diffs in your browser, comment on lines, blocks, or whole files, and hand the comments to your coding agent as a single prompt: <code>pixi global install diffle</code>',
    group: 'misc',
    featured: true,
  },
  {
    title: 'pixi',
    href: 'https://github.com/prefix-dev/pixi',
    badge: { github: 'prefix-dev/pixi' },
    img: pixiBanner,
    imgBgColor: '#f3d140',
    imgContain: true,
    description:
      'A modern cross-platform package manager for the Conda ecosystem with a focus on simplicity, speed, and reproducibility.',
    group: 'conda',
    featured: true,
  },
  {
    title: 'rattler',
    href: 'https://github.com/conda/rattler',
    badge: { github: 'conda/rattler' },
    img: rattlerImg,
    imgBgColor: '#f3d140',
    imgContain: true,
    description:
      'A collection of Rust crates to work with the Conda ecosystem. This library powers all modern Rust-based tooling in the Conda ecosystem.',
    group: 'conda',
    featured: true,
  },
  {
    title: 'pixi-browse',
    href: 'https://github.com/pavelzw/pixi-browse',
    badge: { github: 'pavelzw/pixi-browse' },
    video: {
      dark: 'https://github.com/pavelzw/pixi-browse/raw/refs/heads/main/.github/assets/demo-dark.mp4',
      light:
        'https://github.com/pavelzw/pixi-browse/raw/refs/heads/main/.github/assets/demo-light.mp4',
    },
    description: 'TUI to browse conda-forge interactively: <code>pixi exec pixi-browse</code>',
    group: 'conda',
    featured: true,
  },

  // Conda ecosystem
  {
    title: 'rattler-build',
    href: 'https://github.com/prefix-dev/rattler-build',
    badge: { github: 'prefix-dev/rattler-build' },
    img: rattlerBuild,
    imgBgColor: '#f3d140',
    imgContain: true,
    description:
      'A fast, standalone Conda package builder written in Rust that creates cross-platform relocatable packages from a simple recipe format.',
    group: 'conda',
  },
  {
    title: 'conda-forge',
    href: 'https://github.com/search?type=code&q=owner%3Aconda-forge+path%3Arecipe%2Frecipe.yaml+pavelzw',
    img: anvil,
    description:
      'The backbone of the Conda ecosystem. It consists of over 30,000 packages for Linux, macOS and Windows.',
    group: 'conda',
  },
  {
    title: 'pixi-pack',
    post: 'https://tech.quantco.com/blog/pixi-production',
    href: 'https://github.com/quantco/pixi-pack',
    badge: { github: 'quantco/pixi-pack' },
    img: pixiPack,
    imgBgColor: '#343434',
    imgContain: true,
    description: 'Pack and unpack Pixi environments for easy distribution.',
    group: 'conda',
  },
  {
    title: 'pixi-diff-to-markdown',
    href: 'https://github.com/pavelzw/pixi-diff-to-markdown',
    badge: { github: 'pavelzw/pixi-diff-to-markdown' },
    img: pixiDiffToMarkdown,
    imgPosition: 'top',
    description: 'Convert lockfile diffs to markdown for use in pull request comments.',
    group: 'conda',
  },
  {
    title: 'setup-micromamba',
    href: 'https://github.com/mamba-org/setup-micromamba',
    badge: { github: 'mamba-org/setup-micromamba' },
    img: mamba,
    description: 'Install Micromamba and create a cached Conda environment in GitHub Actions.',
    group: 'conda',
  },
  {
    title: 'conda-mirror',
    href: 'https://github.com/conda-incubator/conda-mirror',
    badge: { github: 'conda-incubator/conda-mirror' },
    img: condaMirror,
    description:
      'Create a local or S3-based mirrors of Conda channels for offline or air-gapped environments.',
    group: 'conda',
  },
  {
    title: 'setup-pixi',
    href: 'https://github.com/prefix-dev/setup-pixi',
    badge: { github: 'prefix-dev/setup-pixi' },
    description: 'Install Pixi and create a cached Pixi environment in GitHub Actions.',
    group: 'conda',
    compact: true,
  },
  {
    title: 'conda-deny',
    href: 'https://github.com/quantco/conda-deny',
    badge: { github: 'quantco/conda-deny' },
    description: 'Check your Conda environment for packages with disallowed licenses.',
    group: 'conda',
    compact: true,
  },
  {
    title: 'pixi-diff',
    href: 'https://github.com/pavelzw/pixi-diff',
    badge: { github: 'pavelzw/pixi-diff' },
    description: 'Show the difference between two Pixi lock files.',
    group: 'conda',
    compact: true,
  },
  {
    title: 'pixi-install-to-prefix',
    href: 'https://github.com/pavelzw/pixi-install-to-prefix',
    badge: { github: 'pavelzw/pixi-install-to-prefix' },
    description: 'Install a Pixi environment into an arbitrary location.',
    group: 'conda',
    compact: true,
  },
  {
    title: 'pixi-docker',
    href: 'https://github.com/prefix-dev/pixi-docker',
    badge: { github: 'prefix-dev/pixi-docker' },
    description: 'Docker images with Pixi pre-installed.',
    group: 'conda',
    compact: true,
  },
  {
    title: 'pixi-pycharm',
    href: 'https://github.com/pavelzw/pixi-pycharm',
    badge: { github: 'pavelzw/pixi-pycharm' },
    description: 'Work around the lack of Pixi support in PyCharm.',
    group: 'conda',
    compact: true,
  },
  {
    title: 'pixi-skills',
    post: '/blog/pixi-skills',
    href: 'https://github.com/pavelzw/pixi-skills',
    badge: { github: 'pavelzw/pixi-skills' },
    description:
      'Manage coding agent skills as Conda packages with versioning, lockfiles, and supply chain security using Pixi.',
    group: 'conda',
    compact: true,
  },
  {
    title: 'skill-forge',
    post: '/blog/pixi-skills',
    href: 'https://github.com/pavelzw/skill-forge',
    badge: { github: 'pavelzw/skill-forge' },
    description: `A collection of pre-packaged coding agent skills published as Conda packages on ${link('https://prefix.dev/channels/skill-forge', 'prefix.dev/skill-forge')}.`,
    group: 'conda',
    compact: true,
  },

  // Python libraries
  {
    title: 'polarIFy',
    post: 'https://tech.quantco.com/blog/polarify',
    href: 'https://github.com/quantco/polarify',
    badge: { github: 'quantco/polarify' },
    img: polarBear,
    description:
      'A Python function decorator that simplifies the way you write logical statements for Polars. Transform <code>if</code> / <code>elif</code> / <code>else</code> statements into <code>pl.when(..).then(..).otherwise(..)</code> statements.',
    group: 'python',
  },
  {
    title: 'Slim Trees',
    post: 'https://tech.quantco.com/blog/dtype-reduction-sklearn',
    href: 'https://github.com/quantco/slim-trees',
    badge: { github: 'quantco/slim-trees' },
    img: tree,
    description: 'Save and load compressed scikit-learn Tree-based and lightgbm models.',
    group: 'python',
  },
  {
    title: 'pydantic-settings-sops',
    href: 'https://github.com/pavelzw/pydantic-settings-sops',
    badge: { github: 'pavelzw/pydantic-settings-sops' },
    img: pydanticSops,
    imgBgColor: '#1e1e2e',
    imgContain: true,
    description: 'Load secrets from SOPS encrypted files with <code>pydantic-settings</code>.',
    group: 'python',
  },

  // Misc
  {
    title: 'The Seven Circles Theorem',
    href: 'https://youtu.be/m9v0h2ibYpo',
    badge: { youtube: 'https://youtu.be/m9v0h2ibYpo' },
    video: {
      dark: '/static/projects/seven-circles-dark.mp4',
      light: '/static/projects/seven-circles-light.mp4',
    },
    description: `As part of the ${link('https://www.3blue1brown.com/blog/some2', 'Summer of Maths Exposition 2')}, I created a video explaining the Seven Circles Theorem.`,
    group: 'misc',
  },
  {
    title: 'moderner-cv',
    href: 'https://github.com/pavelzw/moderner-cv',
    badge: { github: 'pavelzw/moderner-cv' },
    img: modernerCv,
    imgPosition: 'top',
    description: 'A modern CV template for Typst, inspired by <code>moderncv</code> for LaTeX.',
    group: 'misc',
  },
  {
    title: 'Calibre Kindle Comics',
    href: 'https://github.com/pavelzw/calibre-kindle-comics',
    badge: { github: 'pavelzw/calibre-kindle-comics' },
    img: comics,
    description: 'Convert CZB and CBR files to Kindle-optimized Mobi directly within Calibre.',
    group: 'misc',
  },
  {
    title: 'boring-gravatars',
    href: 'https://github.com/pavelzw/boring-gravatars',
    badge: { github: 'pavelzw/boring-gravatars' },
    img: boringGravatars,
    imgBgColor: '#232135',
    imgContain: true,
    description:
      'Generate unique Gravatar-style avatars from email addresses using the <code>boring-avatars</code> library.',
    group: 'misc',
  },
];
