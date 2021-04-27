### Why you should clear your NPX cache?

NPX has a bug. When you call, for example, one of this:

```sh
npx create-react-app
```
```sh
npx cowsay "I'm a cow!"
```
```sh
npx new-typescript-module
```

…then you will do it successfully. But NPX will install it to your NPX cache, and NPX will *not* be watching lifetime of its cache. NPX package will be stored in the cache forever. When NPX-utility updated, the cache will *not* be updated. I'll repeat, it's a bug. It is important: if you are developing a new NPX-package, you will test it. But you can publish a bugful package, and after a fix and re-publishing you will see same bug. I want you shall not repeat my expirience in bug-finding and source-code-jumping.