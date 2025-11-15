---
title: IPlayer
---

```csharp
public interface IPlayer : IEquatable<IPlayer>
```

#### Implements

## Properties

### ConnectedTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L107)

```csharp
uint ConnectedTime { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Controller

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L119)

```csharp
CCSPlayerController Controller { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

### IPAddress

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L150)

```csharp
string IPAddress { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsAuthorized

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L103)

```csharp
bool IsAuthorized { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsFakeClient

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L99)

```csharp
bool IsFakeClient { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsValid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L162)

```csharp
bool IsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Pawn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L128)

```csharp
CBasePlayerPawn? Pawn { get; }
```

#### Property Value

- [CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)?

### PlayerID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L40)

```csharp
int PlayerID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerLanguage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L158)

```csharp
Language PlayerLanguage { get; }
```

#### Property Value

- [Language](/docs/api/shared/translation/language)

### PlayerPawn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L137)

```csharp
CCSPlayerPawn? PlayerPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)?

### PressedButtons

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L146)

```csharp
GameButtonFlags PressedButtons { get; }
```

#### Property Value

- [GameButtonFlags](/docs/api/shared/events/gamebuttonflags)

### RequiredController

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L124)

```csharp
CCSPlayerController RequiredController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

### RequiredPawn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L133)

```csharp
CBasePlayerPawn RequiredPawn { get; }
```

#### Property Value

- [CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)

### RequiredPlayerPawn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L142)

```csharp
CCSPlayerPawn RequiredPlayerPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

### Slot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L45)

```csharp
int Slot { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SteamID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L111)

```csharp
ulong SteamID { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### UnauthorizedSteamID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L115)

```csharp
ulong UnauthorizedSteamID { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### VoiceFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L154)

```csharp
VoiceFlagValue VoiceFlags { get; set; }
```

#### Property Value

- [VoiceFlagValue](/docs/api/shared/players/voiceflagvalue)

## Methods

### ChangeTeam(Team)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L221)

```csharp
void ChangeTeam(Team team)
```

#### Parameters

- **team**: [Team](/docs/api/shared/players/team) - The team to assign. Cannot be null.

### ClearTransmitEntityBlocks()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L186)

```csharp
void ClearTransmitEntityBlocks()
```

### ExecuteCommand(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L230)

```csharp
void ExecuteCommand(string command)
```

#### Parameters

- **command**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetListenOverride(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L198)

```csharp
ListenOverride GetListenOverride(int player)
```

#### Parameters

- **player**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The identifier of the player whose listen override settings are to be retrieved. Must be a valid player index.

#### Returns

- [ListenOverride](/docs/api/shared/players/listenoverride) - A ListenOverride object containing the listen override settings for the specified player.

### IsTransmitEntityBlocked(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L182)

```csharp
bool IsTransmitEntityBlocked(int entityid)
```

#### Parameters

- **entityid**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The unique identifier of the entity to check for transmit blocking. Must be a valid entity ID.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - true if the entity is blocked from transmitting; otherwise, false.

### Kick(string, ENetworkDisconnectionReason)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L169)

```csharp
void Kick(string reason, ENetworkDisconnectionReason gameReason)
```

#### Parameters

- **reason**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The message describing the reason for the disconnection. This message may be displayed to the user. Cannot be
    null or empty.
- **gameReason**: [ENetworkDisconnectionReason](/docs/api/shared/protobufdefinitions/enetworkdisconnectionreason) - The disconnection reason code indicating the type of network disconnection to perform.

### Respawn()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L226)

```csharp
void Respawn()
```

### SendAlert(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L84)

```csharp
void SendAlert(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendCenter(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L79)

```csharp
void SendCenter(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendCenterHTML(string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L90)

```csharp
void SendCenterHTML(string message, int duration = 5000)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.
- **duration**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The duration, in milliseconds, for which the message should be displayed in HTML format.

### SendChat(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L74)

```csharp
void SendChat(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendChatEOT(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L95)

```csharp
void SendChatEOT(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendConsole(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L69)

```csharp
void SendConsole(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendMessage(MessageType, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L52)

```csharp
void SendMessage(MessageType kind, string message)
```

#### Parameters

- **kind**: [MessageType](/docs/api/shared/players/messagetype) - The type of message to send. Determines how the message is processed or displayed.
- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SendMessage(MessageType, string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L59)

```csharp
void SendMessage(MessageType kind, string message, int htmlDuration = 5000)
```

#### Parameters

- **kind**: [MessageType](/docs/api/shared/players/messagetype) - The type of message to send. Determines how the message is processed or displayed.
- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.
- **htmlDuration**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The duration, in milliseconds, for which the message should be displayed in HTML format.

### SendNotify(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L64)

```csharp
void SendNotify(string message)
```

#### Parameters

- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

### SetListenOverride(int, ListenOverride)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L192)

```csharp
void SetListenOverride(int player, ListenOverride listenOverride)
```

#### Parameters

- **player**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The identifier of the player whose listen override setting will be updated. Must be a valid player index.
- **listenOverride**: [ListenOverride](/docs/api/shared/players/listenoverride) - The listen override value to apply to the specified player.

### ShouldBlockTransmitEntity(int, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L176)

```csharp
void ShouldBlockTransmitEntity(int entityid, bool shouldBlockTransmit)
```

#### Parameters

- **entityid**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The unique identifier of the entity whose transmission status is to be updated.
- **shouldBlockTransmit**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - A value indicating whether transmission for the entity should be blocked. Specify <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to
    block transmission; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### SwitchTeam(Team)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L216)

```csharp
void SwitchTeam(Team team)
```

#### Parameters

- **team**: [Team](/docs/api/shared/players/team) - The team to switch to. Cannot be null.

### TakeDamage(CTakeDamageInfo)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L204)

```csharp
void TakeDamage(CTakeDamageInfo damageInfo)
```

#### Parameters

- **damageInfo**: [CTakeDamageInfo](/docs/api/shared/natives/ctakedamageinfo) - An object containing details about the damage to be applied, including the amount, type, and source. Cannot be
    null.

### Teleport(Vector, QAngle, Vector)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L211)

```csharp
void Teleport(Vector pos, QAngle angle, Vector velocity)
```

#### Parameters

- **pos**: [Vector](/docs/api/shared/natives/vector) - The target position to teleport the entity to, represented as a <xref href="SwiftlyS2.Shared.Natives.Vector" data-throw-if-not-resolved="false"></xref>.
- **angle**: [QAngle](/docs/api/shared/natives/qangle) - The orientation to apply to the entity after teleportation, represented as a <xref href="SwiftlyS2.Shared.Natives.QAngle" data-throw-if-not-resolved="false"></xref>.
- **velocity**: [Vector](/docs/api/shared/natives/vector) - The velocity to assign to the entity upon arrival, represented as a <xref href="SwiftlyS2.Shared.Natives.Vector" data-throw-if-not-resolved="false"></xref>.

