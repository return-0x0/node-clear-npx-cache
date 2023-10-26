## Why you should clear your NPX cache?

NPX has a bug. When you call, for example, one of this:

```sh
npx create-react-app
```
```sh
npx cowsay "I'm a cow!"
```

…then you will do it successfully. But NPX will install it to your NPX cache, and NPX will *not* be watching lifetime of its cache. NPX package will be stored in the cache forever. When NPX-utility was updated, the cache will *not* be updated. I'll repeat, it's a bug.

### For users

If you sometimes use a NPX-utility, you will store an old version of this package in your cache. And every package update will *not* be seen by NPX. Cache clearing will solve this trouble.

### For developers

If you are developing a new NPX-package, you will test it. But you can publish a bugful package, and after a fix and re-publishing you will see same bug. I don't want you repeating my expirience in bug-finding and source-code-jumping.

## Usage

```sh
npx clear-npx-cache
```

Expected behavior:

- Take a cache directory from NPM configuration (`npm config get cache`)
- If in this directory exists `_npx`
  - Then remove it recursely
  - Otherwise create a new `_npx` directory