---
title: CBasePlayerController
---

```csharp
public interface CBasePlayerController : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBasePlayerController>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AvailableEntitySteadyState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L54)

```csharp
ref int AvailableEntitySteadyState { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Connected** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L32)

```csharp
ref PlayerConnectedState Connected { get; }
```

#### Property Value

- [PlayerConnectedState](/docs/api/shared/schemadefinitions/playerconnectedstate)

**DesiredFOV** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L62)

```csharp
ref uint DesiredFOV { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**GamePaused** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L46)

```csharp
ref bool GamePaused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**HasAnySteadyStateEnts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L56)

```csharp
ref bool HasAnySteadyStateEnts { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IgnoreGlobalChat** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L48)

```csharp
ref ChatIgnoreType_t IgnoreGlobalChat { get; }
```

#### Property Value

- [ChatIgnoreType_t](/docs/api/shared/schemadefinitions/chatignoretype_t)

**InButtonsWhichAreToggles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L16)

```csharp
ref ulong InButtonsWhichAreToggles { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**IsHLTV** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L30)

```csharp
ref bool IsHLTV { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsLowViolence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L44)

```csharp
ref bool IsLowViolence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**KnownTeamMismatch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L22)

```csharp
ref bool KnownTeamMismatch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LagCompensation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L40)

```csharp
ref bool LagCompensation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LastEntitySteadyState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L52)

```csharp
ref float LastEntitySteadyState { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LastPlayerTalkTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L50)

```csharp
ref float LastPlayerTalkTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LerpTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L38)

```csharp
ref float LerpTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**NetworkIDString** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L36)

```csharp
string NetworkIDString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**NoClipEnabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L60)

```csharp
ref bool NoClipEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Pawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L20)

```csharp
ref CHandle<CBasePlayerPawn> Pawn { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)>

**PlayerName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L34)

```csharp
string PlayerName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Predict** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L42)

```csharp
ref bool Predict { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SplitOwner** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L26)

```csharp
ref CHandle<CBasePlayerController> SplitOwner { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerController](/docs/api/shared/schemadefinitions/cbaseplayercontroller)>

**SplitScreenPlayers** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L28)

```csharp
ref CUtlVector<CHandle<CBasePlayerController>> SplitScreenPlayers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerController](/docs/api/shared/schemadefinitions/cbaseplayercontroller)>>

**SplitScreenSlot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L24)

```csharp
ref uint SplitScreenSlot { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**SteamID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L58)

```csharp
ref ulong SteamID { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**TickBase** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L18)

```csharp
ref uint TickBase { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

**ConnectedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L67)

```csharp
void ConnectedUpdated()
```

**DesiredFOVUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L71)

```csharp
void DesiredFOVUpdated()
```

**KnownTeamMismatchUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L66)

```csharp
void KnownTeamMismatchUpdated()
```

**NoClipEnabledUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L70)

```csharp
void NoClipEnabledUpdated()
```

**PawnUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L65)

```csharp
void PawnUpdated()
```

**PlayerNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L68)

```csharp
void PlayerNameUpdated()
```

**SetPawn(CBasePlayerPawn?)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBasePlayerController.cs#L9)

```csharp
void SetPawn(CBasePlayerPawn? pawn)
```

#### Parameters

- **pawn**: [CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)? - The player pawn to associate. Can be null to remove the current association.

**SteamIDUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L69)

```csharp
void SteamIDUpdated()
```

**TickBaseUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L64)

```csharp
void TickBaseUpdated()
```

