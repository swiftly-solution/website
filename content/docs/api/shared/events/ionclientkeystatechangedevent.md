---
title: IOnClientKeyStateChangedEvent
---

```csharp
public interface IOnClientKeyStateChangedEvent
```

## Properties

### Key

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientKeyStateChangedEvent.cs#L16)

```csharp
KeyKind Key { get; }
```

#### Property Value

- [KeyKind](/docs/api/shared/events/keykind)

### PlayerId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientKeyStateChangedEvent.cs#L11)

```csharp
int PlayerId { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Pressed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientKeyStateChangedEvent.cs#L21)

```csharp
bool Pressed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

