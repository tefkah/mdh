# mdh

small cli utility for converting multiple markdown files to one html document with support for gfm and math (katex).

## install

```sh
yarn global add @thomasfkjorna/mdh

# or npm i -g @thomasfkjorna/mdh
```

## usage

```sh
mdh markdown1.md markdown2.md -o out.html
```

## options

### custom css files

use `-c` or `--css`

```sh
mdh markdown1.md markdown2.md -o out.html -c 'https://raw.githubusercontent.com/thomasfkjorna/mdh/katex.min.css'
```

### custom styles

use `-s` or `--style`

```sh
mdh markdown1.md markdown2.md -o out.html -c
```
