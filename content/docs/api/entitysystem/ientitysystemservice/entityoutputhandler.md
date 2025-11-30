---
title: IEntitySystemService.EntityOutputHandler
---

# Delegate IEntitySystemService.EntityOutputHandler

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L82)

**Namespace**: [SwiftlyS2.Shared.EntitySystem](/docs/api/entitysystem)

**Assembly**: SwiftlyS2.CS2.dll

Represents a method that handles an entity output event, allowing custom logic to be executed when an entity
triggers an output.

```csharp
public delegate HookResult IEntitySystemService.EntityOutputHandler(CEntityIOOutput entityIO, string outputName, CEntityInstance activator, CEntityInstance caller, float delay)
```

#### Parameters

- **entityIO**: [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput) - The entity output object that contains information about the triggered output.
- **outputName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the output that was triggered.
- **activator**: [CEntityInstance](/docs/api/schemadefinitions/centityinstance) - The entity instance that activated the output.
- **caller**: [CEntityInstance](/docs/api/schemadefinitions/centityinstance) - The entity instance that called the output, if applicable.
- **delay**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The delay, in seconds, before the output is executed.

#### Returns

- [HookResult](/docs/api/misc/hookresult) - A <xref href="SwiftlyS2.Shared.Misc.HookResult" data-throw-if-not-resolved="false"></xref> value indicating the result of the handler's execution,  such as whether the output
    should proceed or be blocked.

