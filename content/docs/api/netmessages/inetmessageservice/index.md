---
title: Interface INetMessageService
---

# Interface INetMessageService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L6)

**Namespace**: [SwiftlyS2.Shared.NetMessages](/docs/api/netmessages)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface INetMessageService
```

## Methods

### Create()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L65)

Creates a new net message of specified type.

```csharp
T Create<T>() where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Returns

- T - The new net message.

#### Type Parameters

- **T**:  - Net message type.

### HookClientMessage(ClientNetMessageHandler)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L32)

Hooks a client net message.

```csharp
Guid HookClientMessage<T>(INetMessageService.ClientNetMessageHandler<T> callback) where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Parameters

- **callback**: [INetMessageService](/docs/api/netmessages/inetmessageservice).[ClientNetMessageHandler](/docs/api/netmessages/inetmessageservice/clientnetmessagehandlert)<T> - The callback to handle the net message.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The unique Guid for the handler. Can be used to unhook it later.

#### Type Parameters

- **T**:  - Client net message type.

### HookServerMessage(ServerNetMessageHandler)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L40)

Hooks a server net message.

```csharp
Guid HookServerMessage<T>(INetMessageService.ServerNetMessageHandler<T> callback) where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Parameters

- **callback**: [INetMessageService](/docs/api/netmessages/inetmessageservice).[ServerNetMessageHandler](/docs/api/netmessages/inetmessageservice/servernetmessagehandlert)<T> - The callback to handle the net message.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The unique Guid for the handler. Can be used to unhook it later.

#### Type Parameters

- **T**:  - Server net message type.

### Send(Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L72)

Sends a net message to players with configured recipient filter.

```csharp
void Send<T>(Action<T> configureMessage) where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Parameters

- **configureMessage**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<T> - The action to configure the net message and recipient filter.

#### Type Parameters

- **T**:  - Net message type.

### Unhook(Guid)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L46)

Unhooks a net message handler.

```csharp
void Unhook(Guid guid)
```

#### Parameters

- **guid**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The unique Guid for the handler.

### UnhookClientMessage()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L52)

Unhooks all client net message handlers with specified type.

```csharp
void UnhookClientMessage<T>() where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Type Parameters

- **T**:  - Client net message type.

### UnhookServerMessage()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessageService.cs#L58)

Unhooks all server net message handlers with specified type.

```csharp
void UnhookServerMessage<T>() where T : ITypedProtobuf<T>, INetMessage<T>, IDisposable
```

#### Type Parameters

- **T**:  - Server net message type.

