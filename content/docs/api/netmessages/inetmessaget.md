---
title: INetMessage
---

# Interface INetMessage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessage.cs#L5)

**Namespace**: [SwiftlyS2.Shared.NetMessages](/docs/api/netmessages)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface INetMessage<T> where T : INetMessage<T>, ITypedProtobuf<T>, IDisposable
```

#### Type Parameters

- **T**: 

## Properties

### MessageId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessage.cs#L8)

```csharp
public static abstract int MessageId { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MessageName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessage.cs#L9)

```csharp
public static abstract string MessageName { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Recipients

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessage.cs#L11)

```csharp
ref CRecipientFilter Recipients { get; }
```

#### Property Value

- [CRecipientFilter](/docs/api/natives/crecipientfilter)

## Methods

### Send()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessage.cs#L16)

Sends the net message with current recipient filter.

```csharp
void Send()
```

### SendToAllPlayers()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessage.cs#L21)

Sends the net message to all players.

```csharp
void SendToAllPlayers()
```

### SendToPlayer(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessage.cs#L27)

Sends the net message to the specified player.

```csharp
void SendToPlayer(int playerId)
```

#### Parameters

- **playerId**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The player ID.

