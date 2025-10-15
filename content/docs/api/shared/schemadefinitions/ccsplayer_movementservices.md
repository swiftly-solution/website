---
title: CCSPlayer_MovementServices
---

```csharp
public interface CCSPlayer_MovementServices : CPlayer_MovementServices_Humanoid, CPlayer_MovementServices, CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_MovementServices>, ISchemaClass<CPlayer_MovementServices_Humanoid>, ISchemaClass<CCSPlayer_MovementServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AccumulatedJumpError

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L91)

```csharp
ref float AccumulatedJumpError { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ButtonDownMaskPrev

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L75)

```csharp
ref ulong ButtonDownMaskPrev { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### DesiresDuck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L27)

```csharp
ref bool DesiresDuck { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DuckAmount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L21)

```csharp
ref float DuckAmount { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DuckJumpTimeMsecs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L33)

```csharp
ref uint DuckJumpTimeMsecs { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DuckOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L29)

```csharp
ref float DuckOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DuckOverride

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L25)

```csharp
ref bool DuckOverride { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DuckSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L23)

```csharp
ref float DuckSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DuckTimeMsecs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L31)

```csharp
ref uint DuckTimeMsecs { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DuckUntilOnGround

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L41)

```csharp
ref bool DuckUntilOnGround { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Footsteps

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L67)

```csharp
ref int Footsteps { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Forward

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L57)

```csharp
ref Vector Forward { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### GameCodeHasMovedPlayerAfterCommand

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L63)

```csharp
ref int GameCodeHasMovedPlayerAfterCommand { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HasWalkMovedSinceLastJump

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L43)

```csharp
ref bool HasWalkMovedSinceLastJump { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HeightAtJumpStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L83)

```csharp
ref float HeightAtJumpStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InStuckTest

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L45)

```csharp
ref bool InStuckTest { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InputRotated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L97)

```csharp
ref Vector InputRotated { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### JumpPressedTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L71)

```csharp
ref float JumpPressedTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### JumpTimeMsecs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L35)

```csharp
ref uint JumpTimeMsecs { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### LadderNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L17)

```csharp
ref Vector LadderNormal { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### LadderSurfacePropIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L19)

```csharp
ref int LadderSurfacePropIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastDuckTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L37)

```csharp
ref float LastDuckTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastPositionAtFullCrouchSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L39)

```csharp
ref Vector2D LastPositionAtFullCrouchSpeed { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### Left

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L59)

```csharp
ref Vector Left { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### MadeFootstepNoise

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L65)

```csharp
ref bool MadeFootstepNoise { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxJumpHeightLastJump

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L87)

```csharp
ref float MaxJumpHeightLastJump { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxJumpHeightThisJump

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L85)

```csharp
ref float MaxJumpHeightThisJump { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OffsetTickCompleteTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L77)

```csharp
ref float OffsetTickCompleteTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OffsetTickStashedSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L79)

```csharp
ref float OffsetTickStashedSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldJumpPressed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L69)

```csharp
ref bool OldJumpPressed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OldWaterLevel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L53)

```csharp
ref int OldWaterLevel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SpeedCropped

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L51)

```csharp
ref bool SpeedCropped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Stamina

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L81)

```csharp
ref float Stamina { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StaminaAtJumpStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L89)

```csharp
ref float StaminaAtJumpStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StashGrenadeParameterWhen

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L73)

```csharp
GameTime_t StashGrenadeParameterWhen { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### StuckLast

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L49)

```csharp
ref int StuckLast { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TicksSinceLastSurfingDetected

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L93)

```csharp
ref float TicksSinceLastSurfingDetected { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TraceCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L47)

```csharp
ref int TraceCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Up

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L61)

```csharp
ref Vector Up { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### WasSurfing

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L95)

```csharp
ref bool WasSurfing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WaterEntryTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L55)

```csharp
ref float WaterEntryTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### ButtonDownMaskPrevUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L113)

```csharp
void ButtonDownMaskPrevUpdated()
```

### DesiresDuckUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L104)

```csharp
void DesiresDuckUpdated()
```

### DuckAmountUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L101)

```csharp
void DuckAmountUpdated()
```

### DuckJumpTimeMsecsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L107)

```csharp
void DuckJumpTimeMsecsUpdated()
```

### DuckOffsetUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L105)

```csharp
void DuckOffsetUpdated()
```

### DuckOverrideUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L103)

```csharp
void DuckOverrideUpdated()
```

### DuckSpeedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L102)

```csharp
void DuckSpeedUpdated()
```

### DuckTimeMsecsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L106)

```csharp
void DuckTimeMsecsUpdated()
```

### GameCodeHasMovedPlayerAfterCommandUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L110)

```csharp
void GameCodeHasMovedPlayerAfterCommandUpdated()
```

### JumpTimeMsecsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L108)

```csharp
void JumpTimeMsecsUpdated()
```

### LadderNormalUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L99)

```csharp
void LadderNormalUpdated()
```

### LadderSurfacePropIndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L100)

```csharp
void LadderSurfacePropIndexUpdated()
```

### LastDuckTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L109)

```csharp
void LastDuckTimeUpdated()
```

### OffsetTickCompleteTimeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L114)

```csharp
void OffsetTickCompleteTimeUpdated()
```

### OffsetTickStashedSpeedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L115)

```csharp
void OffsetTickStashedSpeedUpdated()
```

### OldJumpPressedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L111)

```csharp
void OldJumpPressedUpdated()
```

### StaminaUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L116)

```csharp
void StaminaUpdated()
```

### StashGrenadeParameterWhenUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L112)

```csharp
void StashGrenadeParameterWhenUpdated()
```

### WasSurfingUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_MovementServices.cs#L117)

```csharp
void WasSurfingUpdated()
```

