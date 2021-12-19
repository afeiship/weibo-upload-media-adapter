# weibo-upload-media-adapter
> Weibo adapter for upload-media.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/weibo-upload-media-adapter
```

## usage
```js
import ReactUploadMedia from '@jswork/react-upload-media';
import weiboUploadMediaAdapter from '@jswork/weibo-upload-media-adapter';

// usage
<ReactUploadMedia
  count={4}
  value={this.state.value}
  onChange={this.handleChange}
  onUpload={weiboUploadMediaAdapter}
/>
```

## license
Code released under [the MIT license](https://github.com/afeiship/weibo-upload-media-adapter/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/weibo-upload-media-adapter
[version-url]: https://npmjs.org/package/@jswork/weibo-upload-media-adapter

[license-image]: https://img.shields.io/npm/l/@jswork/weibo-upload-media-adapter
[license-url]: https://github.com/afeiship/weibo-upload-media-adapter/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/weibo-upload-media-adapter
[size-url]: https://github.com/afeiship/weibo-upload-media-adapter/blob/master/dist/weibo-upload-media-adapter.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/weibo-upload-media-adapter
[download-url]: https://www.npmjs.com/package/@jswork/weibo-upload-media-adapter
