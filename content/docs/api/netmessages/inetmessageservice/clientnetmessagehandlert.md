---
title: INetMessageService.ClientNetMessageHandler
---

# Delegate INetMessageService.ClientNetMessageHandler

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L24)

**Namespace**: [SwiftlyS2.Shared.NetMessages](/docs/api/netmessages)

**Assembly**: SwiftlyS2.CS2.dll

The handler to handle net messages that are sent from the client to the server.

```csharp
public delegate HookResult INetMessageService.ClientNetMessageHandler<T>(T msg, int playerId) where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Parameters

- **msg**: T - The net message to handle.
- **playerId**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The player ID of the client that sent the net message.

#### Returns

- [HookResult](/docs/api/misc/hookresult) - The hook result.

#### Type Parameters

- **T**:  - Client net message type.

