---
title: EFanZh’s Emacs configuration
---

```elisp
;;; Theme.
(load-theme 'leuven)

;;; UI settings.
(tool-bar-mode 0)

;;; Global variables.
(setq-default fill-column 120)
(setq-default inhibit-startup-screen t)
(setq-default make-backup-file nil)
(setq-default indent-tabs-mode nil)
(setq-default visible-bell t)

;;; Column-Number mode.
(column-number-mode t)

;;; Global-Hl-Line mode.
(global-hl-line-mode t)

;;; Global-Whitespace mode.
(global-whitespace-mode t)
(setq-default whitespace-action '(auto-cleanup))
(setq-default whitespace-line-column nil)
(set-face-background 'whitespace-space nil)

;;; Global-Visual-Line mode.
(global-visual-line-mode t)

;;; Linum mode.
(global-linum-mode t)
(when (not (display-graphic-p))
  (setq-default linum-format "%d "))

;;; Show-Paren mode.
(show-paren-mode t)

;;; Misc.
(add-to-list 'default-frame-alist '(width . 120))
```
