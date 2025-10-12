---
title: IEntitySystemService.EntityOutputHandler
---

```csharp
public delegate HookResult IEntitySystemService.EntityOutputHandler(CEntityIOOutput entityIO, string outputName, CEntityInstance activator, CEntityInstance caller, float delay)
```

- Parameters

- **entityIO**: [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput) - The entity output object that contains information about the triggered output.
- **outputName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the output that was triggered.
- **activator**: [CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance) - The entity instance that activated the output.
- **caller**: [CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance) - The entity instance that called the output, if applicable.
- **delay**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The delay, in seconds, before the output is executed.

- Returns

- [HookResult](/docs/api/shared/misc/hookresult) - A <xref href="SwiftlyS2.Shared.Misc.HookResult" data-throw-if-not-resolved="false"></xref> value indicating the result of the handler's execution,  such as whether the output
    should proceed or be blocked.

