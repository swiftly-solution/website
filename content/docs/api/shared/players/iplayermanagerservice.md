---
title: IPlayerManagerService
---

```csharp
public interface IPlayerManagerService
```

## Properties

### PlayerCap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L19)

```csharp
int PlayerCap { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L14)

```csharp
int PlayerCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### ClearAllBlockedTransmitEntities()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L79)

```csharp
void ClearAllBlockedTransmitEntities()
```

### FindTargettedPlayers(IPlayer, string, TargetSearchMode)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L144)

```csharp
IEnumerable<IPlayer> FindTargettedPlayers(IPlayer player, string target, TargetSearchMode searchMode)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player initiating the search.
- **target**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The target player name or identifier.
- **searchMode**: [TargetSearchMode](/docs/api/shared/players/targetsearchmode) - The search mode to apply.

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/shared/players/iplayer)> - A collection of players matching the search criteria.

### GetAlive()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L104)

```csharp
IEnumerable<IPlayer> GetAlive()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/shared/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all alive players currently online.

### GetAllPlayers()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L93)

```csharp
IEnumerable<IPlayer> GetAllPlayers()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/shared/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all online players.

### GetBots()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L99)

```csharp
IEnumerable<IPlayer> GetBots()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/shared/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all online bot players.

### GetCT()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L109)

```csharp
IEnumerable<IPlayer> GetCT()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/shared/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all CT players currently online.

### GetCTAlive()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L135)

```csharp
IEnumerable<IPlayer> GetCTAlive()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/shared/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all alive CT players currently online.

### GetInTeam(Team)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L125)

```csharp
IEnumerable<IPlayer> GetInTeam(Team team)
```

#### Parameters

- **team**: [Team](/docs/api/shared/players/team) - The team for which to retrieve players.

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/shared/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all players in the specified team.

### GetPlayer(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L87)

```csharp
IPlayer GetPlayer(int playerid)
```

#### Parameters

- **playerid**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The unique identifier of the player to retrieve. Must be a valid player ID.

#### Returns

- [IPlayer](/docs/api/shared/players/iplayer) - An <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instance representing the player with the specified ID, or <code>null</code> if no such
    player exists.

### GetSpectators()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L119)

```csharp
IEnumerable<IPlayer> GetSpectators()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/shared/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all spectator players currently online.

### GetT()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L114)

```csharp
IEnumerable<IPlayer> GetT()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/shared/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all T players currently online.

### GetTAlive()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L130)

```csharp
IEnumerable<IPlayer> GetTAlive()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/shared/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all alive T players currently online.

### IsPlayerOnline(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L9)

```csharp
bool IsPlayerOnline(int playerid)
```

#### Parameters

- **playerid**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the player is online, false otherwise.

### SendAlert(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L58)

```csharp
void SendAlert(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendCenter(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L53)

```csharp
void SendCenter(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendCenterHTML(string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L64)

```csharp
void SendCenterHTML(string message, int duration = 5000)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.
- **duration**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The duration, in milliseconds, for which the message should be displayed in HTML format.

### SendChat(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L48)

```csharp
void SendChat(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendChatEOT(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L69)

```csharp
void SendChatEOT(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendConsole(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L43)

```csharp
void SendConsole(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendMessage(MessageType, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L26)

```csharp
void SendMessage(MessageType kind, string message)
```

#### Parameters

- **kind**: [MessageType](/docs/api/shared/players/messagetype) - The type of message display.
- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to send to players.

### SendMessage(MessageType, string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L33)

```csharp
void SendMessage(MessageType kind, string message, int htmlDuration = 5000)
```

#### Parameters

- **kind**: [MessageType](/docs/api/shared/players/messagetype) - The type of message to send. Determines how the message is processed or displayed.
- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.
- **htmlDuration**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The duration, in milliseconds, for which the message should be displayed in HTML format.

### SendNotify(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L38)

```csharp
void SendNotify(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### ShouldBlockTransmitEntity(int, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L74)

```csharp
void ShouldBlockTransmitEntity(int entityid, bool shouldBlockTransmit)
```

#### Parameters

- **entityid**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **shouldBlockTransmit**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

