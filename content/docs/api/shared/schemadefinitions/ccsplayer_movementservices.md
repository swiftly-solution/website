---
title: CCSPlayer_MovementServices
---

```csharp
public interface CCSPlayer_MovementServices : CPlayer_MovementServices_Humanoid, CPlayer_MovementServices, CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_MovementServices>, ISchemaClass<CPlayer_MovementServices_Humanoid>, ISchemaClass<CCSPlayer_MovementServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AccumulatedJumpError

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L90)

```csharp
ref float AccumulatedJumpError { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ButtonDownMaskPrev

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L74)

```csharp
ref ulong ButtonDownMaskPrev { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### DesiresDuck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L26)

```csharp
ref bool DesiresDuck { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DuckAmount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L20)

```csharp
ref float DuckAmount { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DuckJumpTimeMsecs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L32)

```csharp
ref uint DuckJumpTimeMsecs { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DuckOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L28)

```csharp
ref float DuckOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DuckOverride

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L24)

```csharp
ref bool DuckOverride { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DuckSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L22)

```csharp
ref float DuckSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DuckTimeMsecs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L30)

```csharp
ref uint DuckTimeMsecs { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DuckUntilOnGround

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L40)

```csharp
ref bool DuckUntilOnGround { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Footsteps

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L66)

```csharp
ref int Footsteps { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Forward

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L56)

```csharp
ref Vector Forward { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### GameCodeHasMovedPlayerAfterCommand

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L62)

```csharp
ref int GameCodeHasMovedPlayerAfterCommand { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HasWalkMovedSinceLastJump

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L42)

```csharp
ref bool HasWalkMovedSinceLastJump { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HeightAtJumpStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L82)

```csharp
ref float HeightAtJumpStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InStuckTest

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L44)

```csharp
ref bool InStuckTest { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InputRotated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L96)

```csharp
ref Vector InputRotated { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### JumpPressedTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L70)

```csharp
ref float JumpPressedTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### JumpTimeMsecs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L34)

```csharp
ref uint JumpTimeMsecs { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### LadderNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L16)

```csharp
ref Vector LadderNormal { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### LadderSurfacePropIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L18)

```csharp
ref int LadderSurfacePropIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastDuckTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L36)

```csharp
ref float LastDuckTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastPositionAtFullCrouchSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L38)

```csharp
ref Vector2D LastPositionAtFullCrouchSpeed { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### Left

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L58)

```csharp
ref Vector Left { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### MadeFootstepNoise

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L64)

```csharp
ref bool MadeFootstepNoise { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxJumpHeightLastJump

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L86)

```csharp
ref float MaxJumpHeightLastJump { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxJumpHeightThisJump

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L84)

```csharp
ref float MaxJumpHeightThisJump { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OffsetTickCompleteTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L76)

```csharp
ref float OffsetTickCompleteTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OffsetTickStashedSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L78)

```csharp
ref float OffsetTickStashedSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldJumpPressed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L68)

```csharp
ref bool OldJumpPressed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OldWaterLevel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L52)

```csharp
ref int OldWaterLevel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SpeedCropped

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L50)

```csharp
ref bool SpeedCropped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Stamina

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L80)

```csharp
ref float Stamina { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StaminaAtJumpStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L88)

```csharp
ref float StaminaAtJumpStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StashGrenadeParameterWhen

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L72)

```csharp
GameTime_t StashGrenadeParameterWhen { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### StuckLast

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L48)

```csharp
ref int StuckLast { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TicksSinceLastSurfingDetected

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L92)

```csharp
ref float TicksSinceLastSurfingDetected { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TraceCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L46)

```csharp
ref int TraceCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Up

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L60)

```csharp
ref Vector Up { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### WasSurfing

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L94)

```csharp
ref bool WasSurfing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WaterEntryTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L54)

```csharp
ref float WaterEntryTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### ButtonDownMaskPrevUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L112)

```csharp
void ButtonDownMaskPrevUpdated()
```

### DesiresDuckUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L103)

```csharp
void DesiresDuckUpdated()
```

### DuckAmountUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L100)

```csharp
void DuckAmountUpdated()
```

### DuckJumpTimeMsecsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L106)

```csharp
void DuckJumpTimeMsecsUpdated()
```

### DuckOffsetUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L104)

```csharp
void DuckOffsetUpdated()
```

### DuckOverrideUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L102)

```csharp
void DuckOverrideUpdated()
```

### DuckSpeedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L101)

```csharp
void DuckSpeedUpdated()
```

### DuckTimeMsecsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L105)

```csharp
void DuckTimeMsecsUpdated()
```

### GameCodeHasMovedPlayerAfterCommandUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L109)

```csharp
void GameCodeHasMovedPlayerAfterCommandUpdated()
```

### JumpTimeMsecsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L107)

```csharp
void JumpTimeMsecsUpdated()
```

### LadderNormalUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L98)

```csharp
void LadderNormalUpdated()
```

### LadderSurfacePropIndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L99)

```csharp
void LadderSurfacePropIndexUpdated()
```

### LastDuckTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L108)

```csharp
void LastDuckTimeUpdated()
```

### OffsetTickCompleteTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L113)

```csharp
void OffsetTickCompleteTimeUpdated()
```

### OffsetTickStashedSpeedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L114)

```csharp
void OffsetTickStashedSpeedUpdated()
```

### OldJumpPressedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L110)

```csharp
void OldJumpPressedUpdated()
```

### StaminaUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L115)

```csharp
void StaminaUpdated()
```

### StashGrenadeParameterWhenUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L111)

```csharp
void StashGrenadeParameterWhenUpdated()
```

### WasSurfingUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L116)

```csharp
void WasSurfingUpdated()
```

