---
title: EFanZh’s Emacs configuration
---

```elisp
;; Added by Package.el.  This must come before configurations of
;; installed packages.  Don't delete this line.  If you don't want it,
;; just comment it out by adding a semicolon to the start of the line.
;; You may delete these explanatory comments.
(package-initialize)

;;; Theme.
(load-theme 'leuven)

;;; UI settings.
(tool-bar-mode 0)

;;; Font settings.
(add-to-list 'default-frame-alist '(font . "Consolas 9"))
(dolist (charset '(bopomofo cjk-misc han kana symbol))
  (set-fontset-font t
                    charset
                    (font-spec :family "Microsoft YaHei" :size 12)))

;;; Global variables.
(setq-default auto-save-default nil)
(setq-default fill-column 120)
(setq-default indent-tabs-mode nil)
(setq-default inhibit-startup-screen t)
(setq-default make-backup-files nil)
(setq-default visible-bell t)

;;; Column-Number mode.
(column-number-mode t)

;;; Global-Hl-Line mode.
(when (display-graphic-p)
  (global-hl-line-mode t))

;;; Global-Whitespace mode.
(global-whitespace-mode t)
(setq-default whitespace-action '(auto-cleanup))
(setq-default whitespace-line-column nil)
(setq-default whitespace-style (remove 'newline-mark whitespace-style))
(set-face-background 'whitespace-space nil)

;;; Global-Visual-Line mode.
(global-visual-line-mode t)

;;; Linum mode.
(global-linum-mode t)
(unless (display-graphic-p)
  (setq-default linum-format (lambda (line)
                               (let ((w (length (number-to-string (count-lines (point-min) (point-max))))))
                                 (propertize (format (format "%%%dd│" w) line)
                                             'face
                                             'linum)))))

;;; Show-Paren mode.
(setq-default show-paren-delay 0)
(show-paren-mode t)

;;; Misc.
(add-to-list 'default-frame-alist '(width . 120))
```
