# pavel's blog

Check it out at [pavel.pink](https://pavel.pink).

Based on [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog).

## Generate mermaid diagrams

```bash
docker run --rm -u `id -u`:`id -g` -v "$PWD/assets:/data" minlag/mermaid-cli -i polarify_1.mmd -b transparent --cssFile mermaid.css
docker run --rm -u `id -u`:`id -g` -v "$PWD/assets:/data" minlag/mermaid-cli -i polarify_2.mmd -b transparent --cssFile mermaid.css
docker run --rm -u `id -u`:`id -g` -v "$PWD/assets:/data" minlag/mermaid-cli -i polarify_3.mmd -b transparent --cssFile mermaid.css
```
