---
title: CScriptedSequence
---

```csharp
public interface CScriptedSequence : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CScriptedSequence>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AllowCustomInterruptConditions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L134)

```csharp
ref bool AllowCustomInterruptConditions { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AngRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L100)

```csharp
ref float AngRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CanOverrideNPCState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L60)

```csharp
ref bool CanOverrideNPCState { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ConflictResponse

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L148)

```csharp
ref ScriptedConflictResponse_t ConflictResponse { get; }
```

#### Property Value

- [ScriptedConflictResponse_t](/docs/api/shared/schemadefinitions/scriptedconflictresponse_t)

### ContinueOnDeath

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L68)

```csharp
ref bool ContinueOnDeath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisableAimingWhileMoving

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L88)

```csharp
ref bool DisableAimingWhileMoving { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisableNPCCollisions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L82)

```csharp
ref bool DisableNPCCollisions { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisallowInterrupts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L58)

```csharp
ref bool DisallowInterrupts { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DontAddModifiers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L86)

```csharp
ref bool DontAddModifiers { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DontCancelOtherSequences

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L138)

```csharp
ref bool DontCancelOtherSequences { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DontRotateOther

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L50)

```csharp
ref bool DontRotateOther { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DontTeleportAtEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L62)

```csharp
ref bool DontTeleportAtEnd { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnsureOnNavmeshOnFinish

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L144)

```csharp
ref bool EnsureOnNavmeshOnFinish { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L30)

```csharp
string Entity { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Entry

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L18)

```csharp
string Entry { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ForceSynch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L140)

```csharp
ref bool ForceSynch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ForcedCrouchState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L40)

```csharp
ref ForcedCrouchState_t ForcedCrouchState { get; }
```

#### Property Value

- [ForcedCrouchState_t](/docs/api/shared/schemadefinitions/forcedcrouchstate_t)

### ForcedTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L136)

```csharp
ref CHandle<CBaseAnimGraph> ForcedTarget { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseAnimGraph](/docs/api/shared/schemadefinitions/cbaseanimgraph)>

### HeldWeaponBehavior

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L38)

```csharp
ref ScriptedHeldWeaponBehavior_t HeldWeaponBehavior { get; }
```

#### Property Value

- [ScriptedHeldWeaponBehavior_t](/docs/api/shared/schemadefinitions/scriptedheldweaponbehavior_t)

### HideDebugComplaints

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L66)

```csharp
ref bool HideDebugComplaints { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HighPriority

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L64)

```csharp
ref bool HighPriority { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IgnoreGravity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L80)

```csharp
ref bool IgnoreGravity { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IgnoreLookAt

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L78)

```csharp
ref bool IgnoreLookAt { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IgnoreRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L90)

```csharp
ref bool IgnoreRotation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitiatedSelfDelete

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L130)

```csharp
ref bool InitiatedSelfDelete { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InteractionMainEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L167)

```csharp
ref CHandle<CBaseEntity> InteractionMainEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### Interruptable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L118)

```csharp
ref bool Interruptable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPlayingAction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L46)

```csharp
ref bool IsPlayingAction { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPlayingEntry

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L44)

```csharp
ref bool IsPlayingEntry { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPlayingPostIdle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L48)

```csharp
ref bool IsPlayingPostIdle { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPlayingPreIdle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L42)

```csharp
ref bool IsPlayingPreIdle { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRepeatable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L52)

```csharp
ref bool IsRepeatable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsTeleportingDueToMoveTo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L132)

```csharp
ref bool IsTeleportingDueToMoveTo { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### KeepAnimgraphLockedPost

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L84)

```csharp
ref bool KeepAnimgraphLockedPost { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoopActionSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L72)

```csharp
ref bool LoopActionSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoopPostIdleSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L74)

```csharp
ref bool LoopPostIdleSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoopPreIdleSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L70)

```csharp
ref bool LoopPreIdleSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MatOtherToMain

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L165)

```csharp
ref CTransform MatOtherToMain { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

### ModifierToAddOnPlay

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L26)

```csharp
string ModifierToAddOnPlay { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MoveInterpTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L98)

```csharp
ref float MoveInterpTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MoveSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L102)

```csharp
ref float MoveSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MoveTo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L34)

```csharp
ref ScriptedMoveTo_t MoveTo { get; }
```

#### Property Value

- [ScriptedMoveTo_t](/docs/api/shared/schemadefinitions/scriptedmoveto_t)

### MoveToGait

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L36)

```csharp
ref SharedMovementGait_t MoveToGait { get; }
```

#### Property Value

- [SharedMovementGait_t](/docs/api/shared/schemadefinitions/sharedmovementgait_t)

### NextCine

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L126)

```csharp
ref CHandle<CScriptedSequence> NextCine { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CScriptedSequence](/docs/api/shared/schemadefinitions/cscriptedsequence)>

### NextScript

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L28)

```csharp
string NextScript { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NotReadySequenceCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L106)

```csharp
ref int NotReadySequenceCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OnActionStartOrLoop

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L152)

```csharp
CEntityIOOutput OnActionStartOrLoop { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnBeginSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L150)

```csharp
CEntityIOOutput OnBeginSequence { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnCancelFailedSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L160)

```csharp
CEntityIOOutput OnCancelFailedSequence { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnCancelSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L158)

```csharp
CEntityIOOutput OnCancelSequence { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnDeathBehavior

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L146)

```csharp
ref ScriptedOnDeath_t OnDeathBehavior { get; }
```

#### Property Value

- [ScriptedOnDeath_t](/docs/api/shared/schemadefinitions/scriptedondeath_t)

### OnEndSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L154)

```csharp
CEntityIOOutput OnEndSequence { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnPostIdleEndSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L156)

```csharp
CEntityIOOutput OnPostIdleEndSequence { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnScriptEvent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L163)

```csharp
SchemaUntypedField OnScriptEvent { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Play

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L22)

```csharp
string Play { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PlayAnimFadeInTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L96)

```csharp
ref float PlayAnimFadeInTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PlayerDeathBehavior

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L169)

```csharp
ref int PlayerDeathBehavior { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PositionRelativeToOtherEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L122)

```csharp
ref bool PositionRelativeToOtherEntity { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PostIdle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L24)

```csharp
string PostIdle { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PreIdle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L20)

```csharp
string PreIdle { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PreventUpdateYawOnFinish

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L142)

```csharp
ref bool PreventUpdateYawOnFinish { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Radius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L92)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Repeat

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L94)

```csharp
ref float Repeat { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SavedCollisionGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L116)

```csharp
ref int SavedCollisionGroup { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SavedFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L114)

```csharp
ref int SavedFlags { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Saved_effects

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L112)

```csharp
ref int Saved_effects { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SequenceStarted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L120)

```csharp
ref bool SequenceStarted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldLeaveCorpse

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L54)

```csharp
ref bool ShouldLeaveCorpse { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SkipFadeIn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L171)

```csharp
ref bool SkipFadeIn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartOnSpawn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L56)

```csharp
ref bool StartOnSpawn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L108)

```csharp
GameTime_t StartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### SyncGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L32)

```csharp
string SyncGroup { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SynchPostIdles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L76)

```csharp
ref bool SynchPostIdles { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetEnt

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L124)

```csharp
ref CHandle<CBaseEntity> TargetEnt { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### Thinking

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L128)

```csharp
ref bool Thinking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WaitForBeginSequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L110)

```csharp
ref bool WaitForBeginSequence { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WaitUntilMoveCompletesToStartAnimation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CScriptedSequence.cs#L104)

```csharp
ref bool WaitUntilMoveCompletesToStartAnimation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

