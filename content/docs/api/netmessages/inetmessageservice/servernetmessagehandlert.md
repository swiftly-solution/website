---
title: INetMessageService.ServerNetMessageHandler
---

# Delegate INetMessageService.ServerNetMessageHandler

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L15)

**Namespace**: [SwiftlyS2.Shared.NetMessages](/docs/api/netmessages)

**Assembly**: SwiftlyS2.CS2.dll

The handler to handle net messages that are sent from server to the client.

```csharp
public delegate HookResult INetMessageService.ServerNetMessageHandler<T>(T msg) where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Parameters

- **msg**: T - The net message to handle.

#### Returns

- [HookResult](/docs/api/misc/hookresult) - The hook result.

#### Type Parameters

- **T**:  - Server net message type.

