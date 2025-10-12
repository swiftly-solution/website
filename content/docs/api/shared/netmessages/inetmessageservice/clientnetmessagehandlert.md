---
title: INetMessageService.ClientNetMessageHandler
---

```csharp
public delegate HookResult INetMessageService.ClientNetMessageHandler<T>(T msg, int playerId) where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Parameters

- **msg**: T - The net message to handle.
- **playerId**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The player ID of the client that sent the net message.

#### Returns

- [HookResult](/docs/api/shared/misc/hookresult) - The hook result.

#### Type Parameters

- **T**:  - Client net message type.

