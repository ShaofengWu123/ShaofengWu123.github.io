---
title: "Minimal Mistake Tips"
categories:
  - Blog
tags:
  - minimal mistake
---

This website is built with minimal mistake theme. I have some tips in customizing your own github page with minimal mistake theme.

# Font

The default font for minimal mistake is system fonts, which looks at least not cool enough for me. To replace the font, the most convenient way is to change the variable value related to font in `assets/css/main.css`. For example, if I want to change the font to Linux Libertine(the font used in ACM overleaf templates), I should:

- Check what variables I should override. Variable values are included in `_sass\minimal-mistakes\_variables.scss`. To check what fonts are used in pages, check `_pages.scss` under the same directory.
- Find a font source. Linux Libertine font is open-sourced, and can be found online.
- Override variable values in `main.scss`. Since the font variables in `_variables.scss` have `!default` modifier, they will be assigned a default value if they are not assigned value before. Therefore, overriding should be put before any `@import` lines.   



