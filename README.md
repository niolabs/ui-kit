# niolabs UI Toolkit

nioLabs-themed components implemented in React and configurable via standard props or via nioLabs Pubkeeper!

## Installation

Install using npm or yarn:

```
npm install --save @nio/ui-kit
```

## Include core CSS

```
@import '/dist/nio';
```

The core CSS includes nioLabs theme overrides for bootstrap, as well as a few of the lightweight reset, normalize, and utility classes:

@import './components/reactstrap/theme';
@import '../node_modules/bootstrap/scss/variables';
@import '../node_modules/bootstrap/scss/mixins';
@import '../node_modules/bootstrap/scss/normalize';
@import '../node_modules/bootstrap/scss/reboot';
@import '../node_modules/bootstrap/scss/type';
@import '../node_modules/bootstrap/scss/code';
@import '../node_modules/bootstrap/scss/utilities';
@import '../node_modules/bootstrap/scss/transitions';
@import '../node_modules/bootstrap/scss/responsive-embed';

Each component includes only the core css CSS classes it requires for itself. The docs site that is a part of this project uses webpack to remove any duplicates from the final combined css file.

## Customization

To change the theme to match your brand colors, fork the repo and override the values in the src/_theme.scss.

## Additional Documentation

- <a href="https://reactstrap.github.io/components/alerts/" target="_blank">ReactStrap Docs</a>
- <a href="http://formidable.com/open-source/victory/docs" target="_blank">Victory Charts Docs</a>

