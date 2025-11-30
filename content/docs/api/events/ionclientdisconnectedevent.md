---
title: IOnClientDisconnectedEvent
---

# Interface IOnClientDisconnectedEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientDisconnectedEvent.cs#L8)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when a client disconnects from the server.

```csharp
public interface IOnClientDisconnectedEvent
```

## Properties

### PlayerId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientDisconnectedEvent.cs#L13)

The player ID of the client that disconnected.

```csharp
int PlayerId { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Reason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientDisconnectedEvent.cs#L19)

The reason for the client to disconnect.

```csharp
ENetworkDisconnectionReason Reason { get; }
```

#### Property Value

- [ENetworkDisconnectionReason](/docs/api/protobufdefinitions/enetworkdisconnectionreason)

