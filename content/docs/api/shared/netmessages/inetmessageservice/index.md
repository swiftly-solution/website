---
title: Interface INetMessageService
---

```csharp
public interface INetMessageService
```

## Methods

### Create()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L65)

```csharp
T Create<T>() where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Returns

- T - The new net message.

#### Type Parameters

- **T**:  - Net message type.

### HookClientMessage(ClientNetMessageHandler)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L32)

```csharp
Guid HookClientMessage<T>(INetMessageService.ClientNetMessageHandler<T> callback) where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Parameters

- **callback**: [INetMessageService](/docs/api/shared/netmessages/inetmessageservice).[ClientNetMessageHandler](/docs/api/shared/netmessages/inetmessageservice/clientnetmessagehandler-1)<T> - The callback to handle the net message.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The unique Guid for the handler. Can be used to unhook it later.

#### Type Parameters

- **T**:  - Client net message type.

### HookServerMessage(ServerNetMessageHandler)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L40)

```csharp
Guid HookServerMessage<T>(INetMessageService.ServerNetMessageHandler<T> callback) where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Parameters

- **callback**: [INetMessageService](/docs/api/shared/netmessages/inetmessageservice).[ServerNetMessageHandler](/docs/api/shared/netmessages/inetmessageservice/servernetmessagehandler-1)<T> - The callback to handle the net message.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The unique Guid for the handler. Can be used to unhook it later.

#### Type Parameters

- **T**:  - Server net message type.

### Send(Action)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L72)

```csharp
void Send<T>(Action<T> configureMessage) where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Parameters

- **configureMessage**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<T> - The action to configure the net message and recipient filter.

#### Type Parameters

- **T**:  - Net message type.

### Unhook(Guid)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L46)

```csharp
void Unhook(Guid guid)
```

#### Parameters

- **guid**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The unique Guid for the handler.

### UnhookClientMessage()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L52)

```csharp
void UnhookClientMessage<T>() where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Type Parameters

- **T**:  - Client net message type.

### UnhookServerMessage()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L58)

```csharp
void UnhookServerMessage<T>() where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Type Parameters

- **T**:  - Server net message type.

