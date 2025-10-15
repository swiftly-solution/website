---
title: CFuncMover
---

```csharp
public interface CFuncMover : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CFuncMover>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AllowMovableNavMeshDockingOnEntireEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L95)

```csharp
ref bool AllowMovableNavMeshDockingOnEntireEntity { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ArriveAtDestinationSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L75)

```csharp
string ArriveAtDestinationSound { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### CreateMovableNavMesh

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L93)

```csharp
ref bool CreateMovableNavMesh { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CurFollowEntityT

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L129)

```csharp
ref float CurFollowEntityT { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CurFollowSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L131)

```csharp
ref float CurFollowSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CurrentNodeIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L39)

```csharp
ref int CurrentNodeIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DelayedTeleportToNode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L119)

```csharp
ref int DelayedTeleportToNode { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DistanceToReachMaxSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L49)

```csharp
ref float DistanceToReachMaxSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceToReachZeroSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L53)

```csharp
ref float DistanceToReachZeroSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DurationBlendToNewOrientationRan

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L89)

```csharp
ref float DurationBlendToNewOrientationRan { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FollowDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L125)

```csharp
ref float FollowDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FollowEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L123)

```csharp
ref CHandle<CBaseEntity> FollowEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### FollowEntityDirection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L151)

```csharp
ref CFuncMover__FollowEntityDirection_t FollowEntityDirection { get; }
```

#### Property Value

- [CFuncMover__FollowEntityDirection_t](/docs/api/shared/schemadefinitions/cfuncmover__followentitydirection_t)

### FollowMinimumSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L127)

```csharp
ref float FollowMinimumSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IsMoving

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L45)

```csharp
ref bool IsMoving { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPaused

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L115)

```csharp
ref bool IsPaused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReversing

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L29)

```csharp
ref bool IsReversing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsVerboseLogging

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L121)

```csharp
ref bool IsVerboseLogging { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LerpToNewPosEndInPathEntitySpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L107)

```csharp
ref Vector LerpToNewPosEndInPathEntitySpace { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### LerpToNewPosStartInPathEntitySpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L105)

```csharp
ref Vector LerpToNewPosStartInPathEntitySpace { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### LerpToPositionDeltaT

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L111)

```csharp
ref float LerpToPositionDeltaT { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LerpToPositionT

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L109)

```csharp
ref float LerpToPositionT { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LoopForwardSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L65)

```csharp
string LoopForwardSound { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LoopReverseSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L71)

```csharp
string LoopReverseSound { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MoveType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L27)

```csharp
ref CFuncMover__Move_t MoveType { get; }
```

#### Property Value

- [CFuncMover__Move_t](/docs/api/shared/schemadefinitions/cfuncmover__move_t)

### NextNodeReturnsCurrent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L147)

```csharp
ref bool NextNodeReturnsCurrent { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnLerpToPositionComplete

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L113)

```csharp
CEntityIOOutput OnLerpToPositionComplete { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnMovementEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L77)

```csharp
CEntityIOOutput OnMovementEnd { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnNodePassed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L97)

```csharp
CEntityIOOutput OnNodePassed { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L137)

```csharp
CEntityIOOutput OnStart { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnStartForward

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L139)

```csharp
CEntityIOOutput OnStartForward { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnStartReverse

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L141)

```csharp
CEntityIOOutput OnStartReverse { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnStop

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L143)

```csharp
CEntityIOOutput OnStop { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnStopped

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L145)

```csharp
CEntityIOOutput OnStopped { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OrientationFaceEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L135)

```csharp
ref CHandle<CBaseEntity> OrientationFaceEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### OrientationMatchEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L101)

```csharp
ref CHandle<CBaseEntity> OrientationMatchEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### OrientationMatchEntityName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L99)

```csharp
string OrientationMatchEntityName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OrientationUpdate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L83)

```csharp
ref CFuncMover__OrientationUpdate_t OrientationUpdate { get; }
```

#### Property Value

- [CFuncMover__OrientationUpdate_t](/docs/api/shared/schemadefinitions/cfuncmover__orientationupdate_t)

### OriginalOrientationIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L91)

```csharp
ref int OriginalOrientationIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PathLocation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L35)

```csharp
ref float PathLocation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PathLocationToBeginStop

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L61)

```csharp
ref float PathLocationToBeginStop { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PathMover

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L19)

```csharp
ref CHandle<CPathMover> PathMover { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CPathMover](/docs/api/shared/schemadefinitions/cpathmover)>

### PathName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L17)

```csharp
string PathName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PathNodeEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L25)

```csharp
string PathNodeEnd { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PathNodeStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L23)

```csharp
string PathNodeStart { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PrevPathMover

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L21)

```csharp
ref CHandle<CPathMover> PrevPathMover { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CPathMover](/docs/api/shared/schemadefinitions/cpathmover)>

### PreviousNodeIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L41)

```csharp
ref int PreviousNodeIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SolidType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L43)

```csharp
ref SolidType_t SolidType { get; }
```

#### Property Value

- [SolidType_t](/docs/api/shared/schemadefinitions/solidtype_t)

### StartAtClosestPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L79)

```csharp
ref bool StartAtClosestPoint { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartAtEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L81)

```csharp
ref bool StartAtEnd { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartForwardSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L63)

```csharp
string StartForwardSound { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### StartReverseSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L69)

```csharp
string StartReverseSound { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### StartSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L33)

```csharp
ref float StartSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StartedMoving

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L149)

```csharp
ref bool StartedMoving { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StopAtNode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L59)

```csharp
ref CHandle<CMoverPathNode> StopAtNode { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CMoverPathNode](/docs/api/shared/schemadefinitions/cmoverpathnode)>

### StopForwardSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L67)

```csharp
string StopForwardSound { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### StopReverseSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L73)

```csharp
string StopReverseSound { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### StrOrientationFaceEntityName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L133)

```csharp
string StrOrientationFaceEntityName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### T

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L37)

```csharp
ref float T { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Target

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L31)

```csharp
ref Vector Target { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### TimeMovementStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L55)

```csharp
GameTime_t TimeMovementStart { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### TimeMovementStop

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L57)

```csharp
GameTime_t TimeMovementStop { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### TimeStartOrientationChange

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L85)

```csharp
GameTime_t TimeStartOrientationChange { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### TimeToBlendToNewOrientation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L87)

```csharp
ref float TimeToBlendToNewOrientation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TimeToReachMaxSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L47)

```csharp
ref float TimeToReachMaxSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TimeToReachZeroSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L51)

```csharp
ref float TimeToReachZeroSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TimeToTraverseToNextNode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L103)

```csharp
ref float TimeToTraverseToNextNode { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TransitionedToPathNodeAction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMover.cs#L117)

```csharp
ref CFuncMover__TransitionToPathNodeAction_t TransitionedToPathNodeAction { get; }
```

#### Property Value

- [CFuncMover__TransitionToPathNodeAction_t](/docs/api/shared/schemadefinitions/cfuncmover__transitiontopathnodeaction_t)

