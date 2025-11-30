---
title: IOnConVarCreated
---

# Interface IOnConVarCreated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnConVarCreated.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when a ConVar is created.

```csharp
public interface IOnConVarCreated
```

## Properties

### ConVarName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnConVarCreated.cs#L11)

The name of the ConVar that was created.

```csharp
string ConVarName { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

