---
title: EFanZh’s Clang Format configuration
---

This is my [Clang Format](http://clang.llvm.org/docs/ClangFormat.html) configuration:

    ---
    BasedOnStyle: Chromium
    AccessModifierOffset: -4
    AlignOperands: false
    AlignTrailingComments: false
    AllowShortFunctionsOnASingleLine: None
    BinPackArguments: false
    BreakBeforeBraces: Allman
    BreakBeforeTernaryOperators: false
    ColumnLimit: 120
    Cpp11BracedListStyle: false
    IndentWidth: 4
    NamespaceIndentation: All
    PenaltyBreakBeforeFirstCallParameter: 800
    PenaltyBreakComment: 100
    PenaltyBreakFirstLessLess: 600
    PenaltyBreakString: 500
    PenaltyExcessCharacter: 200
    PenaltyReturnTypeOnItsOwnLine: 1000
    PointerAlignment: Right
    SpacesBeforeTrailingComments: 1
    Standard: Cpp11
    TabWidth: 4
    ...

This is my Clang Format configuration for the [Clang Format plugin](//packagecontrol.io/packages/Clang%20Format) used in [Sublime Text](//www.sublimetext.com/).

{% highlight json %}
{
    "BasedOnStyle": "Chromium",
    "AccessModifierOffset": -4,
    "AlignOperands": false,
    "AlignTrailingComments": false,
    "AllowShortFunctionsOnASingleLine": "None",
    "BinPackArguments": false,
    "BreakBeforeBraces": "Allman",
    "BreakBeforeTernaryOperators": false,
    "ColumnLimit": 120,
    "Cpp11BracedListStyle": false,
    "IndentWidth": 4,
    "NamespaceIndentation": "All",
    "PenaltyBreakBeforeFirstCallParameter": 800,
    "PenaltyBreakComment": 100,
    "PenaltyBreakFirstLessLess": 600,
    "PenaltyBreakString": 500,
    "PenaltyExcessCharacter": 200,
    "PenaltyReturnTypeOnItsOwnLine": 1000,
    "PointerAlignment": "Right",
    "SpacesBeforeTrailingComments": 1,
    "Standard": "Cpp11",
    "TabWidth": 4
}
{% endhighlight %}
