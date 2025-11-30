---
title: IOnPrecacheResourceEvent
---

# Interface IOnPrecacheResourceEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnPrecacheResourceEvent.cs#L3)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IOnPrecacheResourceEvent
```

## Methods

### AddItem(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnPrecacheResourceEvent.cs#L9)

Add a resource to the precache list.

```csharp
void AddItem(string path)
```

#### Parameters

- **path**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The path of the resource to precache.

