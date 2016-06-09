---
title: Fix Adobe Acrobat Reader DC start menu icon
---

For many years, I keep finding the icon of different versions of Adobe Reader in the start menu somehow became wrong.
Now, finally, I’m able to solve this annoying problem.

Currently, I’m using Adobe Acrobat Reader DC and encountered the same problem again. After some digging, I found the bad
icon is from:

    %SystemRoot%\Installer\{AC76BA86-7AD7-1033-7B44-AC0F074E4100}\SC_Reader.ico

After I navigate to the icon folder, I saw bunch of icon files of the same icon as the wrong Adobe Acrobat Reader DC
icon. And the surprise thing is that the “SC_Reader.ico” file is not really an icon file! I think it’s a executable
file, because after I rename “SC_Reader.ico” to “SC_Reader.exe”, it’s icon become the icon of Adobe Acrobat Reader DC.
Then I noticed that the wrong icon is actually my image viewer’s document icon. I think Adobe Acrobat Reader DC got the
wrong icon from the wrong ico file. Then I changed the default application to open .ico file to Microsoft Paint, the
wrong icon file’s icon become the executable’s icon, and Adobe Acrobat Reader DC’s start menu icon became normal.

For those who don’t want to read: try to change your default application for .ico file to Microsoft Paint.
