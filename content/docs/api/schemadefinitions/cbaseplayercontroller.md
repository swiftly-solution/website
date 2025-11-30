---
title: CBasePlayerController
---

# Interface CBasePlayerController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBasePlayerController : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBasePlayerController>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBasePlayerController>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AvailableEntitySteadyState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L56)

```csharp
ref int AvailableEntitySteadyState { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Connected

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L34)

```csharp
ref PlayerConnectedState Connected { get; }
```

#### Property Value

- [PlayerConnectedState](/docs/api/schemadefinitions/playerconnectedstate)

### DesiredFOV

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L64)

```csharp
ref uint DesiredFOV { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GamePaused

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L48)

```csharp
ref bool GamePaused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasAnySteadyStateEnts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L58)

```csharp
ref bool HasAnySteadyStateEnts { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IgnoreGlobalChat

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L50)

```csharp
ref ChatIgnoreType_t IgnoreGlobalChat { get; }
```

#### Property Value

- [ChatIgnoreType_t](/docs/api/schemadefinitions/chatignoretype_t)

### InButtonsWhichAreToggles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L18)

```csharp
ref ulong InButtonsWhichAreToggles { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### IsHLTV

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L32)

```csharp
ref bool IsHLTV { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsLowViolence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L46)

```csharp
ref bool IsLowViolence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### KnownTeamMismatch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L24)

```csharp
ref bool KnownTeamMismatch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LagCompensation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L42)

```csharp
ref bool LagCompensation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastEntitySteadyState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L54)

```csharp
ref float LastEntitySteadyState { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastPlayerTalkTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L52)

```csharp
ref float LastPlayerTalkTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LerpTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L40)

```csharp
ref float LerpTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NetworkIDString

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L38)

```csharp
string NetworkIDString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NoClipEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L62)

```csharp
ref bool NoClipEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Pawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L22)

```csharp
ref CHandle<CBasePlayerPawn> Pawn { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBasePlayerPawn](/docs/api/schemadefinitions/cbaseplayerpawn)>

### PlayerName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L36)

```csharp
string PlayerName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Predict

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L44)

```csharp
ref bool Predict { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SplitOwner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L28)

```csharp
ref CHandle<CBasePlayerController> SplitOwner { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBasePlayerController](/docs/api/schemadefinitions/cbaseplayercontroller)>

### SplitScreenPlayers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L30)

```csharp
ref CUtlVector<CHandle<CBasePlayerController>> SplitScreenPlayers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CBasePlayerController](/docs/api/schemadefinitions/cbaseplayercontroller)>>

### SplitScreenSlot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L26)

```csharp
ref uint SplitScreenSlot { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SteamID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L60)

```csharp
ref ulong SteamID { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### TickBase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L20)

```csharp
ref uint TickBase { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### ConnectedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L69)

```csharp
void ConnectedUpdated()
```

### DesiredFOVUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L73)

```csharp
void DesiredFOVUpdated()
```

### KnownTeamMismatchUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L68)

```csharp
void KnownTeamMismatchUpdated()
```

### NoClipEnabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L72)

```csharp
void NoClipEnabledUpdated()
```

### PawnUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L67)

```csharp
void PawnUpdated()
```

### PlayerNameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L70)

```csharp
void PlayerNameUpdated()
```

### SetPawn(CBasePlayerPawn?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CBasePlayerController.cs#L9)

Sets the player pawn to the entity.

```csharp
void SetPawn(CBasePlayerPawn? pawn)
```

#### Parameters

- **pawn**: [CBasePlayerPawn](/docs/api/schemadefinitions/cbaseplayerpawn)? - The player pawn to associate. Can be null to remove the current association.

### SteamIDUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L71)

```csharp
void SteamIDUpdated()
```

### TickBaseUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBasePlayerController.cs#L66)

```csharp
void TickBaseUpdated()
```

