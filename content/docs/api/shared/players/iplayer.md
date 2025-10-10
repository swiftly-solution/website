---
title: IPlayer
---

```csharp
public interface IPlayer : IEquatable<IPlayer>
```

#### Implements

## Properties

**ConnectedTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L58)

```csharp
uint ConnectedTime { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Controller** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L70)

```csharp
CCSPlayerController Controller { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

**IPAddress** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L101)

```csharp
string IPAddress { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**IsAuthorized** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L54)

```csharp
bool IsAuthorized { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsFakeClient** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L50)

```csharp
bool IsFakeClient { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsValid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L113)

```csharp
bool IsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Pawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L79)

```csharp
CBasePlayerPawn? Pawn { get; }
```

#### Property Value

- [CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)?

**PlayerID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L40)

```csharp
int PlayerID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**PlayerLanguage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L109)

```csharp
Language PlayerLanguage { get; }
```

#### Property Value

- [Language](/docs/api/shared/translation/language)

**PlayerPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L88)

```csharp
CCSPlayerPawn? PlayerPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)?

**PressedButtons** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L97)

```csharp
GameButtonFlags PressedButtons { get; }
```

#### Property Value

- [GameButtonFlags](/docs/api/shared/events/gamebuttonflags)

**RequiredController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L75)

```csharp
CCSPlayerController RequiredController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

**RequiredPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L84)

```csharp
CBasePlayerPawn RequiredPawn { get; }
```

#### Property Value

- [CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)

**RequiredPlayerPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L93)

```csharp
CCSPlayerPawn RequiredPlayerPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

**SteamID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L62)

```csharp
ulong SteamID { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**UnauthorizedSteamID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L66)

```csharp
ulong UnauthorizedSteamID { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**VoiceFlags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L105)

```csharp
VoiceFlagValue VoiceFlags { get; set; }
```

#### Property Value

- [VoiceFlagValue](/docs/api/shared/players/voiceflagvalue)

## Methods

**ChangeTeam(Team)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L172)

```csharp
void ChangeTeam(Team team)
```

#### Parameters

- **team**: [Team](/docs/api/shared/players/team) - The team to assign. Cannot be null.

**ClearTransmitEntityBlocks()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L137)

```csharp
void ClearTransmitEntityBlocks()
```

**GetListenOverride(int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L149)

```csharp
ListenOverride GetListenOverride(int player)
```

#### Parameters

- **player**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The identifier of the player whose listen override settings are to be retrieved. Must be a valid player index.

#### Returns

- [ListenOverride](/docs/api/shared/players/listenoverride) - A ListenOverride object containing the listen override settings for the specified player.

**IsTransmitEntityBlocked(int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L133)

```csharp
bool IsTransmitEntityBlocked(int entityid)
```

#### Parameters

- **entityid**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The unique identifier of the entity to check for transmit blocking. Must be a valid entity ID.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - true if the entity is blocked from transmitting; otherwise, false.

**Kick(string, ENetworkDisconnectionReason)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L120)

```csharp
void Kick(string reason, ENetworkDisconnectionReason gameReason)
```

#### Parameters

- **reason**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The message describing the reason for the disconnection. This message may be displayed to the user. Cannot be
    null or empty.
- **gameReason**: [ENetworkDisconnectionReason](/docs/api/shared/protobufdefinitions/enetworkdisconnectionreason) - The disconnection reason code indicating the type of network disconnection to perform.

**Respawn()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L177)

```csharp
void Respawn()
```

**SendMessage(MessageType, string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L46)

```csharp
void SendMessage(MessageType kind, string message)
```

#### Parameters

- **kind**: [MessageType](/docs/api/shared/players/messagetype) - The type of message to send. Determines how the message is processed or displayed.
- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

**SetListenOverride(int, ListenOverride)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L143)

```csharp
void SetListenOverride(int player, ListenOverride listenOverride)
```

#### Parameters

- **player**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The identifier of the player whose listen override setting will be updated. Must be a valid player index.
- **listenOverride**: [ListenOverride](/docs/api/shared/players/listenoverride) - The listen override value to apply to the specified player.

**ShouldBlockTransmitEntity(int, bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L127)

```csharp
void ShouldBlockTransmitEntity(int entityid, bool shouldBlockTransmit)
```

#### Parameters

- **entityid**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The unique identifier of the entity whose transmission status is to be updated.
- **shouldBlockTransmit**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - A value indicating whether transmission for the entity should be blocked. Specify <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to
    block transmission; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

**SwitchTeam(Team)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L167)

```csharp
void SwitchTeam(Team team)
```

#### Parameters

- **team**: [Team](/docs/api/shared/players/team) - The team to switch to. Cannot be null.

**TakeDamage(CTakeDamageInfo)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L155)

```csharp
void TakeDamage(CTakeDamageInfo damageInfo)
```

#### Parameters

- **damageInfo**: [CTakeDamageInfo](/docs/api/shared/natives/ctakedamageinfo) - An object containing details about the damage to be applied, including the amount, type, and source. Cannot be
    null.

**Teleport(Vector, QAngle, Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L162)

```csharp
void Teleport(Vector pos, QAngle angle, Vector velocity)
```

#### Parameters

- **pos**: [Vector](/docs/api/shared/natives/vector) - The target position to teleport the entity to, represented as a <xref href="SwiftlyS2.Shared.Natives.Vector" data-throw-if-not-resolved="false"></xref>.
- **angle**: [QAngle](/docs/api/shared/natives/qangle) - The orientation to apply to the entity after teleportation, represented as a <xref href="SwiftlyS2.Shared.Natives.QAngle" data-throw-if-not-resolved="false"></xref>.
- **velocity**: [Vector](/docs/api/shared/natives/vector) - The velocity to assign to the entity upon arrival, represented as a <xref href="SwiftlyS2.Shared.Natives.Vector" data-throw-if-not-resolved="false"></xref>.

