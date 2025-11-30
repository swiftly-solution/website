---
title: IPlayerManagerService
---

# Interface IPlayerManagerService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L3)

**Namespace**: [SwiftlyS2.Shared.Players](/docs/api/players)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IPlayerManagerService
```

## Properties

### PlayerCap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L19)

Gets the maximum number of players allowed by the engine.

```csharp
int PlayerCap { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L14)

Gets the number of players currently in the game.

```csharp
int PlayerCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### ClearAllBlockedTransmitEntities()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L79)

Removes all entity transmission blocks, allowing all previously blocked entities to be transmitted to clients again.

```csharp
void ClearAllBlockedTransmitEntities()
```

### FindTargettedPlayers(IPlayer, string, TargetSearchMode, StringComparison)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L145)

Finds targetted players based on the provided search criteria.

```csharp
IEnumerable<IPlayer> FindTargettedPlayers(IPlayer player, string target, TargetSearchMode searchMode, StringComparison nameComparison = StringComparison.OrdinalIgnoreCase)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player initiating the search.
- **target**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The target player name or identifier.
- **searchMode**: [TargetSearchMode](/docs/api/players/targetsearchmode) - The search mode to apply.
- **nameComparison**: [StringComparison](https://learn.microsoft.com/dotnet/api/system.stringcomparison) - The string comparison mode for name matching. Defaults to <xref href="System.StringComparison.OrdinalIgnoreCase" data-throw-if-not-resolved="false"></xref>.

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/players/iplayer)> - A collection of players matching the search criteria.

### GetAlive()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L104)

Retrieves all alive players currently online.

```csharp
IEnumerable<IPlayer> GetAlive()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all alive players currently online.

### GetAllPlayers()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L93)

Retrieves all players currently online.

```csharp
IEnumerable<IPlayer> GetAllPlayers()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all online players.

### GetBots()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L99)

Retrieves all bot players currently online.

```csharp
IEnumerable<IPlayer> GetBots()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all online bot players.

### GetCT()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L109)

Retrieves all CT players currently online.

```csharp
IEnumerable<IPlayer> GetCT()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all CT players currently online.

### GetCTAlive()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L135)

Retrieves all alive CT players currently online.

```csharp
IEnumerable<IPlayer> GetCTAlive()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all alive CT players currently online.

### GetInTeam(Team)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L125)

Retrieves all players in the specified team.

```csharp
IEnumerable<IPlayer> GetInTeam(Team team)
```

#### Parameters

- **team**: [Team](/docs/api/players/team) - The team for which to retrieve players.

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all players in the specified team.

### GetPlayer(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L87)

Retrieves the player associated with the specified player ID.

```csharp
IPlayer GetPlayer(int playerid)
```

#### Parameters

- **playerid**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The unique identifier of the player to retrieve. Must be a valid player ID.

#### Returns

- [IPlayer](/docs/api/players/iplayer) - An <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instance representing the player with the specified ID, or <code>null</code> if no such
    player exists.

### GetSpectators()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L119)

Retrieves all spectator players currently online.

```csharp
IEnumerable<IPlayer> GetSpectators()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all spectator players currently online.

### GetT()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L114)

Retrieves all T players currently online.

```csharp
IEnumerable<IPlayer> GetT()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all T players currently online.

### GetTAlive()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L130)

Retrieves all alive T players currently online.

```csharp
IEnumerable<IPlayer> GetTAlive()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[IPlayer](/docs/api/players/iplayer)> - An enumerable collection of <xref href="SwiftlyS2.Shared.Players.IPlayer" data-throw-if-not-resolved="false"></xref> instances representing all alive T players currently online.

### IsPlayerOnline(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L9)

Checks whether a specific player is currently online and connected to the server.

```csharp
bool IsPlayerOnline(int playerid)
```

#### Parameters

- **playerid**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the player is online, false otherwise.

### SendAlert(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L58)

Sends an alert message to the players.

```csharp
void SendAlert(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendCenter(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L53)

Sends a center message to the players.

```csharp
void SendCenter(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendCenterHTML(string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L64)

Sends a center HTML message to the players.

```csharp
void SendCenterHTML(string message, int duration = 5000)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.
- **duration**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The duration, in milliseconds, for which the message should be displayed in HTML format.

### SendChat(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L48)

Sends a chat message to the players.

```csharp
void SendChat(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendChatEOT(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L69)

Sends an end-of-text chat message to the players.

```csharp
void SendChatEOT(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendConsole(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L43)

Sends a console message to the players.

```csharp
void SendConsole(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendMessage(MessageType, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L26)

Broadcasts a message to players using different display methods based on the message type.

```csharp
void SendMessage(MessageType kind, string message)
```

#### Parameters

- **kind**: [MessageType](/docs/api/players/messagetype) - The type of message display.
- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to send to players.

### SendMessage(MessageType, string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L33)

Sends a message of the specified type to the players with a custom HTML duration.

```csharp
void SendMessage(MessageType kind, string message, int htmlDuration = 5000)
```

#### Parameters

- **kind**: [MessageType](/docs/api/players/messagetype) - The type of message to send. Determines how the message is processed or displayed.
- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.
- **htmlDuration**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The duration, in milliseconds, for which the message should be displayed in HTML format.

### SendNotify(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L38)

Sends a notify message to the players.

```csharp
void SendNotify(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### ShouldBlockTransmitEntity(int, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayerManager.cs#L74)

Controls whether a specific entity should be blocked from being transmitted/synchronized to clients.

```csharp
void ShouldBlockTransmitEntity(int entityid, bool shouldBlockTransmit)
```

#### Parameters

- **entityid**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **shouldBlockTransmit**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

