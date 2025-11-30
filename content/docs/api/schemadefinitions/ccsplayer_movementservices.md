---
title: CCSPlayer_MovementServices
---

# Interface CCSPlayer_MovementServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSPlayer_MovementServices : CPlayer_MovementServices_Humanoid, CPlayer_MovementServices, CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_MovementServices>, ISchemaClass<CPlayer_MovementServices_Humanoid>, ISchemaClass<CCSPlayer_MovementServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPlayer_MovementServices_Humanoid](/docs/api/schemadefinitions/cplayer_movementservices_humanoid)
- [CPlayer_MovementServices](/docs/api/schemadefinitions/cplayer_movementservices)
- [CPlayerPawnComponent](/docs/api/schemadefinitions/cplayerpawncomponent)
- [ISchemaClass<CPlayerPawnComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPlayer_MovementServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPlayer_MovementServices_Humanoid>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSPlayer_MovementServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AccumulatedJumpError

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L92)

```csharp
ref float AccumulatedJumpError { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ButtonDownMaskPrev

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L76)

```csharp
ref ulong ButtonDownMaskPrev { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### DesiresDuck

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L28)

```csharp
ref bool DesiresDuck { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DuckAmount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L22)

```csharp
ref float DuckAmount { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DuckJumpTimeMsecs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L34)

```csharp
ref uint DuckJumpTimeMsecs { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DuckOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L30)

```csharp
ref float DuckOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DuckOverride

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L26)

```csharp
ref bool DuckOverride { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DuckSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L24)

```csharp
ref float DuckSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DuckTimeMsecs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L32)

```csharp
ref uint DuckTimeMsecs { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DuckUntilOnGround

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L42)

```csharp
ref bool DuckUntilOnGround { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Footsteps

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L68)

```csharp
ref int Footsteps { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Forward

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L58)

```csharp
ref Vector Forward { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### GameCodeHasMovedPlayerAfterCommand

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L64)

```csharp
ref int GameCodeHasMovedPlayerAfterCommand { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HasWalkMovedSinceLastJump

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L44)

```csharp
ref bool HasWalkMovedSinceLastJump { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HeightAtJumpStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L84)

```csharp
ref float HeightAtJumpStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InStuckTest

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L46)

```csharp
ref bool InStuckTest { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InputRotated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L98)

```csharp
ref Vector InputRotated { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### JumpApexPending

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L100)

```csharp
ref bool JumpApexPending { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### JumpPressedTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L72)

```csharp
ref float JumpPressedTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### JumpTimeMsecs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L36)

```csharp
ref uint JumpTimeMsecs { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### LadderNormal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L18)

```csharp
ref Vector LadderNormal { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### LadderSurfacePropIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L20)

```csharp
ref int LadderSurfacePropIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastDuckTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L38)

```csharp
ref float LastDuckTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastPositionAtFullCrouchSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L40)

```csharp
ref Vector2D LastPositionAtFullCrouchSpeed { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### Left

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L60)

```csharp
ref Vector Left { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MadeFootstepNoise

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L66)

```csharp
ref bool MadeFootstepNoise { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxJumpHeightLastJump

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L88)

```csharp
ref float MaxJumpHeightLastJump { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxJumpHeightThisJump

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L86)

```csharp
ref float MaxJumpHeightThisJump { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OffsetTickCompleteTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L78)

```csharp
ref float OffsetTickCompleteTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OffsetTickStashedSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L80)

```csharp
ref float OffsetTickStashedSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldJumpPressed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L70)

```csharp
ref bool OldJumpPressed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OldWaterLevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L54)

```csharp
ref int OldWaterLevel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SpeedCropped

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L52)

```csharp
ref bool SpeedCropped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Stamina

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L82)

```csharp
ref float Stamina { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StaminaAtJumpStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L90)

```csharp
ref float StaminaAtJumpStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StashGrenadeParameterWhen

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L74)

```csharp
GameTime_t StashGrenadeParameterWhen { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### StuckLast

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L50)

```csharp
ref int StuckLast { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TicksSinceLastSurfingDetected

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L94)

```csharp
ref float TicksSinceLastSurfingDetected { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TraceCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L48)

```csharp
ref int TraceCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Up

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L62)

```csharp
ref Vector Up { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### WasSurfing

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L96)

```csharp
ref bool WasSurfing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WaterEntryTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L56)

```csharp
ref float WaterEntryTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### ButtonDownMaskPrevUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L116)

```csharp
void ButtonDownMaskPrevUpdated()
```

### DesiresDuckUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L107)

```csharp
void DesiresDuckUpdated()
```

### DuckAmountUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L104)

```csharp
void DuckAmountUpdated()
```

### DuckJumpTimeMsecsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L110)

```csharp
void DuckJumpTimeMsecsUpdated()
```

### DuckOffsetUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L108)

```csharp
void DuckOffsetUpdated()
```

### DuckOverrideUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L106)

```csharp
void DuckOverrideUpdated()
```

### DuckSpeedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L105)

```csharp
void DuckSpeedUpdated()
```

### DuckTimeMsecsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L109)

```csharp
void DuckTimeMsecsUpdated()
```

### GameCodeHasMovedPlayerAfterCommandUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L113)

```csharp
void GameCodeHasMovedPlayerAfterCommandUpdated()
```

### JumpApexPendingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L121)

```csharp
void JumpApexPendingUpdated()
```

### JumpTimeMsecsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L111)

```csharp
void JumpTimeMsecsUpdated()
```

### LadderNormalUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L102)

```csharp
void LadderNormalUpdated()
```

### LadderSurfacePropIndexUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L103)

```csharp
void LadderSurfacePropIndexUpdated()
```

### LastDuckTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L112)

```csharp
void LastDuckTimeUpdated()
```

### OffsetTickCompleteTimeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L117)

```csharp
void OffsetTickCompleteTimeUpdated()
```

### OffsetTickStashedSpeedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L118)

```csharp
void OffsetTickStashedSpeedUpdated()
```

### OldJumpPressedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L114)

```csharp
void OldJumpPressedUpdated()
```

### StaminaUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L119)

```csharp
void StaminaUpdated()
```

### StashGrenadeParameterWhenUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L115)

```csharp
void StashGrenadeParameterWhenUpdated()
```

### WasSurfingUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L120)

```csharp
void WasSurfingUpdated()
```

