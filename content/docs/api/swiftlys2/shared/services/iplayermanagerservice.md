---
title: IPlayerManagerService
---

```csharp
public interface IPlayerManagerService
```

## Properties

**PlayerCap** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L19)

```csharp
int PlayerCap { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**PlayerCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L14)

```csharp
int PlayerCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

**ClearAllBlockedTransmitEntities()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L36)

```csharp
void ClearAllBlockedTransmitEntities()
```

**GetAllPlayers()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L50)

```csharp
IEnumerable<IPlayer> GetAllPlayers()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/shared/services/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Services.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all online players.

**GetPlayer(int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L44)

```csharp
IPlayer GetPlayer(int playerid)
```

#### Parameters

- **playerid**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The unique identifier of the player to retrieve. Must be a valid player ID.

#### Returns

- [IPlayer](/docs/api/shared/services/iplayer) - An <xref href="SwiftlyS2.Shared.Services.IPlayer" data-throw-if-not-resolved="false"></xref> instance representing the player with the specified ID, or <code>null</code> if no such
    player exists.

**IsPlayerOnline(int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L9)

```csharp
bool IsPlayerOnline(int playerid)
```

#### Parameters

- **playerid**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the player is online, false otherwise.

**SendMessage(MessageType, string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L26)

```csharp
void SendMessage(MessageType kind, string message)
```

#### Parameters

- **kind**: [MessageType](/docs/api/shared/services/messagetype) - The type of message display.
- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to send to players.

**ShouldBlockTransmitEntity(int, bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L31)

```csharp
void ShouldBlockTransmitEntity(int entityid, bool shouldBlockTransmit)
```

#### Parameters

- **entityid**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **shouldBlockTransmit**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

