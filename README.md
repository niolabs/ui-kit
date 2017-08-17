# niolabs UI Toolkit

nioLabs-themed components implemented in React and configurable via standard props or via nioLabs Pubkeeper!

## Installation

Install using npm or yarn:

```
npm install --save @nio/ui-kit
```

## Include core CSS

```
@import '~nio-ui-kit/dist/nio';
```

The core CSS includes nioLabs theme overrides for bootstrap, as well as a few of the lightweight reset, normalize, and utility classes.

Each component includes only the core css CSS classes it requires for itself. The docs site that is a part of this project uses webpack nanocss to remove any duplicates from the final combined css file.

## Customization

To change the theme to match your brand colors, fork the repo and override the values in the src/theme folder documents.

## Additional Documentation

- <a href="https://reactstrap.github.io/components/alerts/" target="_blank">ReactStrap Docs</a>
- <a href="http://formidable.com/open-source/victory/docs" target="_blank">Victory Charts Docs</a>

