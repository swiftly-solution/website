---
title: IPlayer
---

```csharp
public interface IPlayer
```

## Properties

**ConnectedTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L57)

```csharp
uint ConnectedTime { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Controller** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L69)

```csharp
CCSPlayerController Controller { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

**IPAddress** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L100)

```csharp
string IPAddress { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**IsAuthorized** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L53)

```csharp
bool IsAuthorized { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsFakeClient** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L49)

```csharp
bool IsFakeClient { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsValid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L112)

```csharp
bool IsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Pawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L78)

```csharp
CBasePlayerPawn? Pawn { get; }
```

#### Property Value

- [CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)?

**PlayerID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L39)

```csharp
int PlayerID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**PlayerLanguage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L108)

```csharp
Language PlayerLanguage { get; }
```

#### Property Value

- [Language](/docs/api/shared/services/language)

**PlayerPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L87)

```csharp
CCSPlayerPawn? PlayerPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)?

**PressedButtons** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L96)

```csharp
GameButtonFlags PressedButtons { get; }
```

#### Property Value

- [GameButtonFlags](/docs/api/shared/events/gamebuttonflags)

**RequiredController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L74)

```csharp
CCSPlayerController RequiredController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

**RequiredPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L83)

```csharp
CBasePlayerPawn RequiredPawn { get; }
```

#### Property Value

- [CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)

**RequiredPlayerPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L92)

```csharp
CCSPlayerPawn RequiredPlayerPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

**SteamID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L61)

```csharp
ulong SteamID { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**UnauthorizedSteamID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L65)

```csharp
ulong UnauthorizedSteamID { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**VoiceFlags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L104)

```csharp
VoiceFlagValue VoiceFlags { get; set; }
```

#### Property Value

- [VoiceFlagValue](/docs/api/shared/services/voiceflagvalue)

## Methods

**ChangeTeam(Team)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L171)

```csharp
void ChangeTeam(Team team)
```

#### Parameters

- **team**: [Team](/docs/api/shared/services/team) - The team to assign. Cannot be null.

**ClearTransmitEntityBlocks()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L136)

```csharp
void ClearTransmitEntityBlocks()
```

**GetListenOverride(int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L148)

```csharp
ListenOverride GetListenOverride(int player)
```

#### Parameters

- **player**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The identifier of the player whose listen override settings are to be retrieved. Must be a valid player index.

#### Returns

- [ListenOverride](/docs/api/shared/services/listenoverride) - A ListenOverride object containing the listen override settings for the specified player.

**IsTransmitEntityBlocked(int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L132)

```csharp
bool IsTransmitEntityBlocked(int entityid)
```

#### Parameters

- **entityid**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The unique identifier of the entity to check for transmit blocking. Must be a valid entity ID.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - true if the entity is blocked from transmitting; otherwise, false.

**Kick(string, ENetworkDisconnectionReason)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L119)

```csharp
void Kick(string reason, ENetworkDisconnectionReason gameReason)
```

#### Parameters

- **reason**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The message describing the reason for the disconnection. This message may be displayed to the user. Cannot be
    null or empty.
- **gameReason**: [ENetworkDisconnectionReason](/docs/api/shared/protobufdefinitions/enetworkdisconnectionreason) - The disconnection reason code indicating the type of network disconnection to perform.

**Respawn()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L176)

```csharp
void Respawn()
```

**SendMessage(MessageType, string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L45)

```csharp
void SendMessage(MessageType kind, string message)
```

#### Parameters

- **kind**: [MessageType](/docs/api/shared/services/messagetype) - The type of message to send. Determines how the message is processed or displayed.
- **message**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The content of the message to send. Cannot be null.

**SetListenOverride(int, ListenOverride)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L142)

```csharp
void SetListenOverride(int player, ListenOverride listenOverride)
```

#### Parameters

- **player**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The identifier of the player whose listen override setting will be updated. Must be a valid player index.
- **listenOverride**: [ListenOverride](/docs/api/shared/services/listenoverride) - The listen override value to apply to the specified player.

**ShouldBlockTransmitEntity(int, bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L126)

```csharp
void ShouldBlockTransmitEntity(int entityid, bool shouldBlockTransmit)
```

#### Parameters

- **entityid**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The unique identifier of the entity whose transmission status is to be updated.
- **shouldBlockTransmit**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - A value indicating whether transmission for the entity should be blocked. Specify <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> to
    block transmission; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

**SwitchTeam(Team)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L166)

```csharp
void SwitchTeam(Team team)
```

#### Parameters

- **team**: [Team](/docs/api/shared/services/team) - The team to switch to. Cannot be null.

**TakeDamage(CTakeDamageInfo)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L154)

```csharp
void TakeDamage(CTakeDamageInfo damageInfo)
```

#### Parameters

- **damageInfo**: [CTakeDamageInfo](/docs/api/shared/natives/ctakedamageinfo) - An object containing details about the damage to be applied, including the amount, type, and source. Cannot be
    null.

**Teleport(Vector, QAngle, Vector)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Players/IPlayer.cs#L161)

```csharp
void Teleport(Vector pos, QAngle angle, Vector velocity)
```

#### Parameters

- **pos**: [Vector](/docs/api/shared/natives/vector) - The target position to teleport the entity to, represented as a <xref href="SwiftlyS2.Shared.Natives.Vector" data-throw-if-not-resolved="false"></xref>.
- **angle**: [QAngle](/docs/api/shared/natives/qangle) - The orientation to apply to the entity after teleportation, represented as a <xref href="SwiftlyS2.Shared.Natives.QAngle" data-throw-if-not-resolved="false"></xref>.
- **velocity**: [Vector](/docs/api/shared/natives/vector) - The velocity to assign to the entity upon arrival, represented as a <xref href="SwiftlyS2.Shared.Natives.Vector" data-throw-if-not-resolved="false"></xref>.

