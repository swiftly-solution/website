---
title: IPlayer
---

# Interface IPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L35)

**Namespace**: [SwiftlyS2.Shared.Players](/docs/api/players)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IPlayer : IEquatable<IPlayer>
```

#### Implements

- [IEquatable<IPlayer>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

## Properties

### ConnectedTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L107)

Gets the total time, in seconds, that the connection has been active.

```csharp
uint ConnectedTime { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Controller

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L119)

Gets the player controller associated with the player.

```csharp
CCSPlayerController Controller { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/schemadefinitions/ccsplayercontroller)

### IPAddress

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L150)

Gets the IP address associated with the player.

```csharp
string IPAddress { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsAuthorized

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L103)

Whether the current user is authorized by Steam.

```csharp
bool IsAuthorized { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsFakeClient

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L99)

Whether the client is a bot.

```csharp
bool IsFakeClient { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsFirstSpawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L162)

Indicates whether this is the player's first spawn.

```csharp
bool IsFirstSpawn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsValid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L166)

Checks if the player is valid (has controller, is not HLTV, is connected and has pawn).

```csharp
bool IsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Pawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L128)

Gets the pawn associated with the player.

```csharp
CBasePlayerPawn? Pawn { get; }
```

#### Property Value

- [CBasePlayerPawn](/docs/api/schemadefinitions/cbaseplayerpawn)?

### PlayerID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L40)

Gets the unique identifier for the player.

```csharp
int PlayerID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerLanguage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L158)

Gets the language for the player.

```csharp
Language PlayerLanguage { get; }
```

#### Property Value

- [Language](/docs/api/translation/language)

### PlayerPawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L137)

Gets the player pawn associated with the player.

```csharp
CCSPlayerPawn? PlayerPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)?

### PressedButtons

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L146)

Gets the set of game buttons that are currently pressed.

```csharp
GameButtonFlags PressedButtons { get; }
```

#### Property Value

- [GameButtonFlags](/docs/api/events/gamebuttonflags)

### RequiredController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L124)

Gets the player controller associated with the player. Requires the controller to be valid.
<xref href="System.InvalidOperationException?text=Thrown+when+the+controller+is+not+valid." data-throw-if-not-resolved="false"></xref>

```csharp
CCSPlayerController RequiredController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/schemadefinitions/ccsplayercontroller)

### RequiredPawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L133)

Gets the pawn associated with the player. Requires the pawn to be valid.
<xref href="System.InvalidOperationException?text=Thrown+when+the+pawn+is+not+valid." data-throw-if-not-resolved="false"></xref>

```csharp
CBasePlayerPawn RequiredPawn { get; }
```

#### Property Value

- [CBasePlayerPawn](/docs/api/schemadefinitions/cbaseplayerpawn)

### RequiredPlayerPawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L142)

Gets the player pawn associated with the player. Requires the player pawn to be valid.
<xref href="System.InvalidOperationException?text=Thrown+when+the+player+pawn+is+not+valid." data-throw-if-not-resolved="false"></xref>

```csharp
CCSPlayerPawn RequiredPlayerPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)

### Slot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L45)

Gets the slot of the player. Equals to the player ID.

```csharp
int Slot { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SteamID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L111)

Gets the unique Steam identifier associated with the user.

```csharp
ulong SteamID { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### UnauthorizedSteamID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L115)

Gets the Steam ID that was not verified yet.

```csharp
ulong UnauthorizedSteamID { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### VoiceFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L154)

Gets or sets the set of flags that specify voice options or features to be applied.

```csharp
VoiceFlagValue VoiceFlags { get; set; }
```

#### Property Value

- [VoiceFlagValue](/docs/api/players/voiceflagvalue)

## Methods

### ChangeTeam(Team)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L225)

Changes the player's team.

```csharp
void ChangeTeam(Team team)
```

#### Parameters

- **team**: [Team](/docs/api/players/team) - The team to assign. Cannot be null.

### ClearTransmitEntityBlocks()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L190)

Removes all entity blocks from the transmit buffer, discarding any pending data scheduled for transmission.

```csharp
void ClearTransmitEntityBlocks()
```

### ExecuteCommand(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L234)

Executes a command on behalf of the player.

```csharp
void ExecuteCommand(string command)
```

#### Parameters

- **command**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetListenOverride(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L202)

Retrieves the listen override settings for the specified player.

```csharp
ListenOverride GetListenOverride(int player)
```

#### Parameters

- **player**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The identifier of the player whose listen override settings are to be retrieved. Must be a valid player index.

#### Returns

- [ListenOverride](/docs/api/players/listenoverride) - A ListenOverride object containing the listen override settings for the specified player.

### IsTransmitEntityBlocked(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L186)

Determines whether the specified entity is currently blocked from transmitting data.

```csharp
bool IsTransmitEntityBlocked(int entityid)
```

#### Parameters

- **entityid**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The unique identifier of the entity to check for transmit blocking. Must be a valid entity ID.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - true if the entity is blocked from transmitting; otherwise, false.

### Kick(string, ENetworkDisconnectionReason)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L173)

Disconnects the user from the network session, providing a specified reason and disconnection type.

```csharp
void Kick(string reason, ENetworkDisconnectionReason gameReason)
```

#### Parameters

- **reason**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The message describing the reason for the disconnection. This message may be displayed to the user. Cannot be
    null or empty.
- **gameReason**: [ENetworkDisconnectionReason](/docs/api/protobufdefinitions/enetworkdisconnectionreason) - The disconnection reason code indicating the type of network disconnection to perform.

### Respawn()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L230)

Respawns the player.

```csharp
void Respawn()
```

### SendAlert(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L84)

Sends an alert message to the player.

```csharp
void SendAlert(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendCenter(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L79)

Sends a center message to the player.

```csharp
void SendCenter(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendCenterHTML(string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L90)

Sends a center HTML message to the player.

```csharp
void SendCenterHTML(string message, int duration = 5000)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.
- **duration**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The duration, in milliseconds, for which the message should be displayed in HTML format.

### SendChat(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L74)

Sends a chat message to the player.

```csharp
void SendChat(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendChatEOT(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L95)

Sends an end-of-text chat message to the player.

```csharp
void SendChatEOT(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendConsole(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L69)

Sends a console message to the player.

```csharp
void SendConsole(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendMessage(MessageType, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L52)

Sends a message of the specified type to the player.

```csharp
void SendMessage(MessageType kind, string message)
```

#### Parameters

- **kind**: [MessageType](/docs/api/players/messagetype) - The type of message to send. Determines how the message is processed or displayed.
- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendMessage(MessageType, string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L59)

Sends a message of the specified type to the player with a custom HTML duration.

```csharp
void SendMessage(MessageType kind, string message, int htmlDuration = 5000)
```

#### Parameters

- **kind**: [MessageType](/docs/api/players/messagetype) - The type of message to send. Determines how the message is processed or displayed.
- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.
- **htmlDuration**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The duration, in milliseconds, for which the message should be displayed in HTML format.

### SendNotify(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L64)

Sends a notify message to the player.

```csharp
void SendNotify(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SetListenOverride(int, ListenOverride)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L196)

Sets a custom listen override for the specified player.

```csharp
void SetListenOverride(int player, ListenOverride listenOverride)
```

#### Parameters

- **player**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The identifier of the player whose listen override setting will be updated. Must be a valid player index.
- **listenOverride**: [ListenOverride](/docs/api/players/listenoverride) - The listen override value to apply to the specified player.

### ShouldBlockTransmitEntity(int, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L180)

Sets whether transmission of the specified entity should be blocked.

```csharp
void ShouldBlockTransmitEntity(int entityid, bool shouldBlockTransmit)
```

#### Parameters

- **entityid**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The unique identifier of the entity whose transmission status is to be updated.
- **shouldBlockTransmit**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - A value indicating whether transmission for the entity should be blocked. Specify <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to
    block transmission; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### SwitchTeam(Team)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L220)

Switches the player's team.

```csharp
void SwitchTeam(Team team)
```

#### Parameters

- **team**: [Team](/docs/api/players/team) - The team to switch to. Cannot be null.

### TakeDamage(CTakeDamageInfo)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L208)

Applies damage to the entity based on the specified damage information.

```csharp
void TakeDamage(CTakeDamageInfo damageInfo)
```

#### Parameters

- **damageInfo**: [CTakeDamageInfo](/docs/api/natives/ctakedamageinfo) - An object containing details about the damage to be applied, including the amount, type, and source. Cannot be
    null.

### Teleport(Vector, QAngle, Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L215)

Teleports the entity to the specified position, orientation, and velocity.

```csharp
void Teleport(Vector pos, QAngle angle, Vector velocity)
```

#### Parameters

- **pos**: [Vector](/docs/api/natives/vector) - The target position to teleport the entity to, represented as a <xref href="SwiftlyS2.Shared.Natives.Vector" data-throw-if-not-resolved="false"></xref>.
- **angle**: [QAngle](/docs/api/natives/qangle) - The orientation to apply to the entity after teleportation, represented as a <xref href="SwiftlyS2.Shared.Natives.QAngle" data-throw-if-not-resolved="false"></xref>.
- **velocity**: [Vector](/docs/api/natives/vector) - The velocity to assign to the entity upon arrival, represented as a <xref href="SwiftlyS2.Shared.Natives.Vector" data-throw-if-not-resolved="false"></xref>.

