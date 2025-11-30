---
title: IOnClientKeyStateChangedEvent
---

# Interface IOnClientKeyStateChangedEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientKeyStateChangedEvent.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when a client's key state changes.

```csharp
public interface IOnClientKeyStateChangedEvent
```

## Properties

### Key

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientKeyStateChangedEvent.cs#L16)

The key that was pressed or released.

```csharp
KeyKind Key { get; }
```

#### Property Value

- [KeyKind](/docs/api/events/keykind)

### PlayerId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientKeyStateChangedEvent.cs#L11)

The player ID of the client that changed their key state.

```csharp
int PlayerId { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Pressed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientKeyStateChangedEvent.cs#L21)

Whether the key was pressed or released.

```csharp
bool Pressed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

