---
title: CScriptedSequence
---

```csharp
public interface CScriptedSequence : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CScriptedSequence>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AllowCustomInterruptConditions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L133)

```csharp
ref bool AllowCustomInterruptConditions { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AngRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L99)

```csharp
ref float AngRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CanOverrideNPCState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L59)

```csharp
ref bool CanOverrideNPCState { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ConflictResponse

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L147)

```csharp
ref ScriptedConflictResponse_t ConflictResponse { get; }
```

#### Property Value

- [ScriptedConflictResponse_t](/docs/api/shared/schemadefinitions/scriptedconflictresponse_t)

### ContinueOnDeath

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L67)

```csharp
ref bool ContinueOnDeath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisableAimingWhileMoving

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L87)

```csharp
ref bool DisableAimingWhileMoving { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisableNPCCollisions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L81)

```csharp
ref bool DisableNPCCollisions { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisallowInterrupts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L57)

```csharp
ref bool DisallowInterrupts { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DontAddModifiers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L85)

```csharp
ref bool DontAddModifiers { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DontCancelOtherSequences

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L137)

```csharp
ref bool DontCancelOtherSequences { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DontRotateOther

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L49)

```csharp
ref bool DontRotateOther { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DontTeleportAtEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L61)

```csharp
ref bool DontTeleportAtEnd { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnsureOnNavmeshOnFinish

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L143)

```csharp
ref bool EnsureOnNavmeshOnFinish { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L29)

```csharp
string Entity { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Entry

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L17)

```csharp
string Entry { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ForceSynch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L139)

```csharp
ref bool ForceSynch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ForcedCrouchState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L39)

```csharp
ref ForcedCrouchState_t ForcedCrouchState { get; }
```

#### Property Value

- [ForcedCrouchState_t](/docs/api/shared/schemadefinitions/forcedcrouchstate_t)

### ForcedTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L135)

```csharp
ref CHandle<CBaseAnimGraph> ForcedTarget { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseAnimGraph](/docs/api/shared/schemadefinitions/cbaseanimgraph)>

### HeldWeaponBehavior

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L37)

```csharp
ref ScriptedHeldWeaponBehavior_t HeldWeaponBehavior { get; }
```

#### Property Value

- [ScriptedHeldWeaponBehavior_t](/docs/api/shared/schemadefinitions/scriptedheldweaponbehavior_t)

### HideDebugComplaints

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L65)

```csharp
ref bool HideDebugComplaints { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HighPriority

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L63)

```csharp
ref bool HighPriority { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IgnoreGravity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L79)

```csharp
ref bool IgnoreGravity { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IgnoreLookAt

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L77)

```csharp
ref bool IgnoreLookAt { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IgnoreRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L89)

```csharp
ref bool IgnoreRotation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitiatedSelfDelete

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L129)

```csharp
ref bool InitiatedSelfDelete { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InteractionMainEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L166)

```csharp
ref CHandle<CBaseEntity> InteractionMainEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### Interruptable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L117)

```csharp
ref bool Interruptable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPlayingAction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L45)

```csharp
ref bool IsPlayingAction { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPlayingEntry

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L43)

```csharp
ref bool IsPlayingEntry { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPlayingPostIdle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L47)

```csharp
ref bool IsPlayingPostIdle { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPlayingPreIdle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L41)

```csharp
ref bool IsPlayingPreIdle { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRepeatable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L51)

```csharp
ref bool IsRepeatable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsTeleportingDueToMoveTo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L131)

```csharp
ref bool IsTeleportingDueToMoveTo { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### KeepAnimgraphLockedPost

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L83)

```csharp
ref bool KeepAnimgraphLockedPost { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoopActionSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L71)

```csharp
ref bool LoopActionSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoopPostIdleSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L73)

```csharp
ref bool LoopPostIdleSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoopPreIdleSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L69)

```csharp
ref bool LoopPreIdleSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MatOtherToMain

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L164)

```csharp
ref CTransform MatOtherToMain { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

### ModifierToAddOnPlay

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L25)

```csharp
string ModifierToAddOnPlay { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MoveInterpTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L97)

```csharp
ref float MoveInterpTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MoveSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L101)

```csharp
ref float MoveSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MoveTo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L33)

```csharp
ref ScriptedMoveTo_t MoveTo { get; }
```

#### Property Value

- [ScriptedMoveTo_t](/docs/api/shared/schemadefinitions/scriptedmoveto_t)

### MoveToGait

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L35)

```csharp
ref SharedMovementGait_t MoveToGait { get; }
```

#### Property Value

- [SharedMovementGait_t](/docs/api/shared/schemadefinitions/sharedmovementgait_t)

### NextCine

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L125)

```csharp
ref CHandle<CScriptedSequence> NextCine { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CScriptedSequence](/docs/api/shared/schemadefinitions/cscriptedsequence)>

### NextScript

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L27)

```csharp
string NextScript { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NotReadySequenceCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L105)

```csharp
ref int NotReadySequenceCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OnActionStartOrLoop

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L151)

```csharp
CEntityIOOutput OnActionStartOrLoop { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnBeginSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L149)

```csharp
CEntityIOOutput OnBeginSequence { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnCancelFailedSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L159)

```csharp
CEntityIOOutput OnCancelFailedSequence { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnCancelSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L157)

```csharp
CEntityIOOutput OnCancelSequence { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnDeathBehavior

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L145)

```csharp
ref ScriptedOnDeath_t OnDeathBehavior { get; }
```

#### Property Value

- [ScriptedOnDeath_t](/docs/api/shared/schemadefinitions/scriptedondeath_t)

### OnEndSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L153)

```csharp
CEntityIOOutput OnEndSequence { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnPostIdleEndSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L155)

```csharp
CEntityIOOutput OnPostIdleEndSequence { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnScriptEvent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L162)

```csharp
SchemaUntypedField OnScriptEvent { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Play

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L21)

```csharp
string Play { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PlayAnimFadeInTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L95)

```csharp
ref float PlayAnimFadeInTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PlayerDeathBehavior

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L168)

```csharp
ref int PlayerDeathBehavior { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PositionRelativeToOtherEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L121)

```csharp
ref bool PositionRelativeToOtherEntity { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PostIdle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L23)

```csharp
string PostIdle { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PreIdle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L19)

```csharp
string PreIdle { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PreventUpdateYawOnFinish

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L141)

```csharp
ref bool PreventUpdateYawOnFinish { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Radius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L91)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Repeat

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L93)

```csharp
ref float Repeat { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SavedCollisionGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L115)

```csharp
ref int SavedCollisionGroup { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SavedFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L113)

```csharp
ref int SavedFlags { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Saved_effects

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L111)

```csharp
ref int Saved_effects { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SequenceStarted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L119)

```csharp
ref bool SequenceStarted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldLeaveCorpse

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L53)

```csharp
ref bool ShouldLeaveCorpse { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SkipFadeIn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L170)

```csharp
ref bool SkipFadeIn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartOnSpawn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L55)

```csharp
ref bool StartOnSpawn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L107)

```csharp
GameTime_t StartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### SyncGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L31)

```csharp
string SyncGroup { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SynchPostIdles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L75)

```csharp
ref bool SynchPostIdles { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetEnt

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L123)

```csharp
ref CHandle<CBaseEntity> TargetEnt { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### Thinking

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L127)

```csharp
ref bool Thinking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WaitForBeginSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L109)

```csharp
ref bool WaitForBeginSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WaitUntilMoveCompletesToStartAnimation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L103)

```csharp
ref bool WaitUntilMoveCompletesToStartAnimation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

