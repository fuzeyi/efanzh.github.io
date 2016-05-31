---
title: Enable visual styles on existing applications
---

Some old application doesn’t enable [visual styles](http://msdn.microsoft.com/library/bb773187.aspx) by default. But you can add an extra [manifest](http://msdn.microsoft.com/library/aa375365.aspx) file to the application’s executable file to [enable the visual style](http://msdn.microsoft.com/library/bb773175.aspx).

First, write a manifest file:

```xml
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">
  <dependency>
    <dependentAssembly>
      <assemblyIdentity type="win32" name="Microsoft.Windows.Common-Controls" version="6.0.0.0" processorArchitecture="*" publicKeyToken="6595b64144ccf1df" language="*"></assemblyIdentity>
    </dependentAssembly>
  </dependency>
</assembly>
```

Assume the mainifest file is “app.exe.manifest” and the executable file is “app.exe”, you can use “[mt.exe](http://msdn.microsoft.com/library/aa375649.aspx)” to add the manifest file to the executable file:

    mt.exe -manifest "app.exe.manifest" -outputresource:"app.exe"

If the executable file already contains a manifest, this operation will replace its original manifest. If you don’t want to lose the original manifest file, you can merge the new manifest with the original manifest using following command:

    mt.exe -manifest "app.exe.manifest" -inputresource:"app.exe" -outputresource:"app.exe"

You may want to make a backup copy of the original executable file, in case something unexpected happens.
