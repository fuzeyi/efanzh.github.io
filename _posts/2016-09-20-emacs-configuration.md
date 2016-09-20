---
title: EFanZh’s Emacs configuration
---

```elisp
(load-theme 'leuven)

(global-hl-line-mode 1)
(global-linum-mode 1)
(global-whitespace-mode 1)

(column-number-mode 1)
(tool-bar-mode 0)

(setq-default indent-tabs-mode nil)
(setq-default visible-bell 1)
(setq-default whitespace-line-column 120)

(set-face-background 'whitespace-space nil)

(add-to-list 'default-frame-alist '(width . 120))

(add-hook 'before-save-hook 'delete-trailing-whitespace)
```
