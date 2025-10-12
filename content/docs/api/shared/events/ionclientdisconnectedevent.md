---
title: IOnClientDisconnectedEvent
---

```csharp
public interface IOnClientDisconnectedEvent
```

## Properties

### PlayerId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientDisconnectedEvent.cs#L13)

```csharp
int PlayerId { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Reason

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientDisconnectedEvent.cs#L19)

```csharp
ENetworkDisconnectionReason Reason { get; }
```

#### Property Value

- [ENetworkDisconnectionReason](/docs/api/shared/protobufdefinitions/enetworkdisconnectionreason)

