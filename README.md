### My website

Thanks to the[ original theme](https://github.com/markhorn-dev/astro-nano)!

#### Local setup

Enable the pre-push build check once per clone (it blocks a push if
`npm run build` fails, catching corrupted files before they break deploy):

```sh
git config core.hooksPath .githooks
```

Line endings are normalized to LF via `.gitattributes`, so editing on
Windows will not produce whole-file diffs.
