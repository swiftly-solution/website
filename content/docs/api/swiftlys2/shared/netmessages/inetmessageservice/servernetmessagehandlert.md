---
title: INetMessageService.ServerNetMessageHandler<T>
---

```csharp
public delegate HookResult INetMessageService.ServerNetMessageHandler<T>(T msg) where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Parameters

- **msg**: T - The net message to handle.

#### Returns

- [HookResult](/docs/api/shared/misc/hookresult) - The hook result.

#### Type Parameters

- **T**:  - Server net message type.

