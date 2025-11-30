---
title: PhysFeModelDesc_t
---

# Interface PhysFeModelDesc_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PhysFeModelDesc_t : ISchemaClass<PhysFeModelDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<PhysFeModelDesc_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AddWorldCollisionRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L222)

```csharp
ref float AddWorldCollisionRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AnimStrayRadii

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L140)

```csharp
ref CUtlVector<FeAnimStrayRadius_t> AnimStrayRadii { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeAnimStrayRadius_t](/docs/api/schemadefinitions/feanimstrayradius_t)>

### AntiTunnelBytecode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L80)

```csharp
ref CUtlVector<uint> AntiTunnelBytecode { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### AntiTunnelProbes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L84)

```csharp
ref CUtlVector<FeAntiTunnelProbe_t> AntiTunnelProbes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeAntiTunnelProbe_t](/docs/api/schemadefinitions/feantitunnelprobe_t)>

### AntiTunnelTargetNodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L86)

```csharp
ref CUtlVector<ushort> AntiTunnelTargetNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### AxialEdges

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L88)

```csharp
ref CUtlVector<FeAxialEdgeBend_t> AxialEdges { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeAxialEdgeBend_t](/docs/api/schemadefinitions/feaxialedgebend_t)>

### BoxRigids

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L170)

```csharp
ref CUtlVector<FeBoxRigid_t> BoxRigids { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeBoxRigid_t](/docs/api/schemadefinitions/feboxrigid_t)>

### CollisionPlanes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L98)

```csharp
ref CUtlVector<FeCollisionPlane_t> CollisionPlanes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeCollisionPlane_t](/docs/api/schemadefinitions/fecollisionplane_t)>

### CtrlHash

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L18)

```csharp
ref CUtlVector<uint> CtrlHash { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### CtrlName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L20)

```csharp
ref CUtlVector<CUtlString> CtrlName { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### CtrlOffsets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L92)

```csharp
ref CUtlVector<FeCtrlOffset_t> CtrlOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeCtrlOffset_t](/docs/api/schemadefinitions/fectrloffset_t)>

### CtrlOsOffsets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L94)

```csharp
ref CUtlVector<FeCtrlOsOffset_t> CtrlOsOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeCtrlOsOffset_t](/docs/api/schemadefinitions/fectrlosoffset_t)>

### CtrlSoftOffsets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L146)

```csharp
ref CUtlVector<FeCtrlSoftOffset_t> CtrlSoftOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeCtrlSoftOffset_t](/docs/api/schemadefinitions/fectrlsoftoffset_t)>

### DefaultExpAirDrag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L212)

```csharp
ref float DefaultExpAirDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultExpQuadAirDrag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L216)

```csharp
ref float DefaultExpQuadAirDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultGravityScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L208)

```csharp
ref float DefaultGravityScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultSurfaceStretch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L204)

```csharp
ref float DefaultSurfaceStretch { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultThreadStretch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L206)

```csharp
ref float DefaultThreadStretch { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultTimeDilation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L198)

```csharp
ref float DefaultTimeDilation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultVelAirDrag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L210)

```csharp
ref float DefaultVelAirDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultVelQuadAirDrag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L214)

```csharp
ref float DefaultVelQuadAirDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultVolumetricSolveAmount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L224)

```csharp
ref float DefaultVolumetricSolveAmount { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DynKinLinks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L82)

```csharp
ref CUtlVector<FeDynKinLink_t> DynKinLinks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeDynKinLink_t](/docs/api/schemadefinitions/fedynkinlink_t)>

### DynNodeFriction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L112)

```csharp
ref CUtlVector<float> DynNodeFriction { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### DynNodeVertexSet

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L172)

```csharp
ref CUtlVector<byte> DynNodeVertexSet { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### DynNodeWindBases

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L194)

```csharp
ref CUtlVector<FeNodeWindBase_t> DynNodeWindBases { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeNodeWindBase_t](/docs/api/schemadefinitions/fenodewindbase_t)>

### DynamicNodeFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L24)

```csharp
ref uint DynamicNodeFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Effects

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L186)

```csharp
ref CUtlVector<FeEffectDesc_t> Effects { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeEffectDesc_t](/docs/api/schemadefinitions/feeffectdesc_t)>

### ExtraGoalIterations

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L164)

```csharp
ref byte ExtraGoalIterations { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ExtraIterations

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L166)

```csharp
ref byte ExtraIterations { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ExtraPressureIterations

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L162)

```csharp
ref byte ExtraPressureIterations { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### FirstPositionDrivenNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L36)

```csharp
ref ushort FirstPositionDrivenNode { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### FitMatrices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L134)

```csharp
ref CUtlVector<FeFitMatrix_t> FitMatrices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeFitMatrix_t](/docs/api/schemadefinitions/fefitmatrix_t)>

### FitWeights

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L136)

```csharp
ref CUtlVector<FeFitWeight_t> FitWeights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeFitWeight_t](/docs/api/schemadefinitions/fefitweight_t)>

### FollowNodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L96)

```csharp
ref CUtlVector<FeFollowNode_t> FollowNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeFollowNode_t](/docs/api/schemadefinitions/fefollownode_t)>

### FreeNodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L132)

```csharp
ref CUtlVector<ushort> FreeNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### GoalDampedSpringIntegrators

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L152)

```csharp
ref CUtlVector<uint> GoalDampedSpringIntegrators { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### HingeLimits

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L78)

```csharp
ref CUtlVector<FeHingeLimit_t> HingeLimits { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeHingeLimit_t](/docs/api/schemadefinitions/fehingelimit_t)>

### InitPose

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L72)

```csharp
ref CUtlVector<CTransform> InitPose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CTransform](/docs/api/natives/ctransform)>

### InternalPressure

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L196)

```csharp
ref float InternalPressure { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### JiggleBones

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L148)

```csharp
ref CUtlVector<CFeIndexedJiggleBone> JiggleBones { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CFeIndexedJiggleBone](/docs/api/schemadefinitions/cfeindexedjigglebone)>

### KelagerBends

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L144)

```csharp
ref CUtlVector<FeKelagerBend2_t> KelagerBends { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeKelagerBend2_t](/docs/api/schemadefinitions/fekelagerbend2_t)>

### LegacyStretchForce

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L108)

```csharp
ref CUtlVector<float> LegacyStretchForce { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### LocalDrag1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L228)

```csharp
ref float LocalDrag1 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LocalForce

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L26)

```csharp
ref float LocalForce { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LocalForce2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L116)

```csharp
ref CUtlVector<float> LocalForce2 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### LocalRotation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L28)

```csharp
ref float LocalRotation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LocalRotation1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L114)

```csharp
ref CUtlVector<float> LocalRotation1 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### LockToGoal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L190)

```csharp
ref CUtlVector<ushort> LockToGoal { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### LockToParent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L188)

```csharp
ref CUtlVector<FeCtrlOffset_t> LockToParent { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeCtrlOffset_t](/docs/api/schemadefinitions/fectrloffset_t)>

### MorphLayers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L178)

```csharp
ref CUtlVector<FeMorphLayerDepr_t> MorphLayers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeMorphLayerDepr_t](/docs/api/schemadefinitions/femorphlayerdepr_t)>

### MorphSetData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L180)

```csharp
ref CUtlVector<byte> MorphSetData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### MotionSmoothCDT

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L226)

```csharp
ref float MotionSmoothCDT { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NodeBaseJiggleboneDependsCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L52)

```csharp
ref ushort NodeBaseJiggleboneDependsCount { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### NodeBases

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L58)

```csharp
ref CUtlVector<FeNodeBase_t> NodeBases { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeNodeBase_t](/docs/api/schemadefinitions/fenodebase_t)>

### NodeCollisionRadii

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L110)

```csharp
ref CUtlVector<float> NodeCollisionRadii { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### NodeCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L30)

```csharp
ref ushort NodeCount { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### NodeIntegrator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L100)

```csharp
ref CUtlVector<FeNodeIntegrator_t> NodeIntegrator { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeNodeIntegrator_t](/docs/api/schemadefinitions/fenodeintegrator_t)>

### NodeInvMasses

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L90)

```csharp
ref CUtlVector<float> NodeInvMasses { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### QuadCount1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L46)

```csharp
ref ushort QuadCount1 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### QuadCount2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L48)

```csharp
ref ushort QuadCount2 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### QuadVelocitySmoothIterations

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L232)

```csharp
ref ushort QuadVelocitySmoothIterations { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### QuadVelocitySmoothRate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L220)

```csharp
ref float QuadVelocitySmoothRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Quads

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L62)

```csharp
ref CUtlVector<FeQuad_t> Quads { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeQuad_t](/docs/api/schemadefinitions/fequad_t)>

### ReservedUint8

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L160)

```csharp
ref byte ReservedUint8 { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ReverseOffsets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L138)

```csharp
ref CUtlVector<FeNodeReverseOffset_t> ReverseOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeNodeReverseOffset_t](/docs/api/schemadefinitions/fenodereverseoffset_t)>

### RigidColliderPriorities

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L176)

```csharp
ref CUtlVector<FeRigidColliderIndices_t> RigidColliderPriorities { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeRigidColliderIndices_t](/docs/api/schemadefinitions/ferigidcolliderindices_t)>

### RodVelocitySmoothIterations

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L230)

```csharp
ref ushort RodVelocitySmoothIterations { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### RodVelocitySmoothRate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L218)

```csharp
ref float RodVelocitySmoothRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Rods

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L74)

```csharp
ref CUtlVector<FeRodConstraint_t> Rods { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeRodConstraint_t](/docs/api/schemadefinitions/ferodconstraint_t)>

### RopeCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L54)

```csharp
ref ushort RopeCount { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Ropes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L56)

```csharp
ref CUtlVector<ushort> Ropes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### RotLockStaticNodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L34)

```csharp
ref ushort RotLockStaticNodes { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SDFRigids

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L168)

```csharp
ref CUtlVector<FeSDFRigid_t> SDFRigids { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeSDFRigid_t](/docs/api/schemadefinitions/fesdfrigid_t)>

### SimdAnimStrayRadii

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L142)

```csharp
ref CUtlVector<FeSimdAnimStrayRadius_t> SimdAnimStrayRadii { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeSimdAnimStrayRadius_t](/docs/api/schemadefinitions/fesimdanimstrayradius_t)>

### SimdNodeBases

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L60)

```csharp
ref CUtlVector<FeSimdNodeBase_t> SimdNodeBases { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeSimdNodeBase_t](/docs/api/schemadefinitions/fesimdnodebase_t)>

### SimdQuadCount1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L42)

```csharp
ref ushort SimdQuadCount1 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SimdQuadCount2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L44)

```csharp
ref ushort SimdQuadCount2 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SimdQuads

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L64)

```csharp
ref CUtlVector<FeSimdQuad_t> SimdQuads { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeSimdQuad_t](/docs/api/schemadefinitions/fesimdquad_t)>

### SimdRods

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L68)

```csharp
ref CUtlVector<FeSimdRodConstraint_t> SimdRods { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeSimdRodConstraint_t](/docs/api/schemadefinitions/fesimdrodconstraint_t)>

### SimdRodsAnim

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L70)

```csharp
ref CUtlVector<FeSimdRodConstraintAnim_t> SimdRodsAnim { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeSimdRodConstraintAnim_t](/docs/api/schemadefinitions/fesimdrodconstraintanim_t)>

### SimdSpringIntegrator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L104)

```csharp
ref CUtlVector<FeSimdSpringIntegrator_t> SimdSpringIntegrator { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeSimdSpringIntegrator_t](/docs/api/schemadefinitions/fesimdspringintegrator_t)>

### SimdTriCount1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L38)

```csharp
ref ushort SimdTriCount1 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SimdTriCount2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L40)

```csharp
ref ushort SimdTriCount2 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SimdTris

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L66)

```csharp
ref CUtlVector<SchemaUntypedField> SimdTris { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>

### SkelParents

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L192)

```csharp
ref CUtlVector<short> SkelParents { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

### SourceElems

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L150)

```csharp
ref CUtlVector<ushort> SourceElems { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### SphereRigids

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L122)

```csharp
ref CUtlVector<FeSphereRigid_t> SphereRigids { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeSphereRigid_t](/docs/api/schemadefinitions/fesphererigid_t)>

### SpringIntegrator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L102)

```csharp
ref CUtlVector<FeSpringIntegrator_t> SpringIntegrator { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeSpringIntegrator_t](/docs/api/schemadefinitions/fespringintegrator_t)>

### StaticNodeFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L22)

```csharp
ref uint StaticNodeFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### StaticNodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L32)

```csharp
ref ushort StaticNodes { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### TaperedCapsuleRigids

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L120)

```csharp
ref CUtlVector<FeTaperedCapsuleRigid_t> TaperedCapsuleRigids { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeTaperedCapsuleRigid_t](/docs/api/schemadefinitions/fetaperedcapsulerigid_t)>

### TaperedCapsuleStretches

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L118)

```csharp
ref CUtlVector<FeTaperedCapsuleStretch_t> TaperedCapsuleStretches { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeTaperedCapsuleStretch_t](/docs/api/schemadefinitions/fetaperedcapsulestretch_t)>

### TreeChildren

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L130)

```csharp
ref CUtlVector<FeTreeChildren_t> TreeChildren { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeTreeChildren_t](/docs/api/schemadefinitions/fetreechildren_t)>

### TreeCollisionMasks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L128)

```csharp
ref CUtlVector<ushort> TreeCollisionMasks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### TreeDepth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L50)

```csharp
ref ushort TreeDepth { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### TreeParents

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L126)

```csharp
ref CUtlVector<ushort> TreeParents { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### TriCount1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L156)

```csharp
ref ushort TriCount1 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### TriCount2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L158)

```csharp
ref ushort TriCount2 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Tris

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L154)

```csharp
ref CUtlVector<FeTri_t> Tris { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeTri_t](/docs/api/schemadefinitions/fetri_t)>

### Twists

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L76)

```csharp
ref CUtlVector<FeTwistConstraint_t> Twists { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeTwistConstraint_t](/docs/api/schemadefinitions/fetwistconstraint_t)>

### VertexMapValues

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L184)

```csharp
ref CUtlVector<byte> VertexMapValues { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### VertexMaps

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L182)

```csharp
ref CUtlVector<FeVertexMapDesc_t> VertexMaps { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeVertexMapDesc_t](/docs/api/schemadefinitions/fevertexmapdesc_t)>

### VertexSetNames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L174)

```csharp
ref CUtlVector<uint> VertexSetNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### WindDrag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L202)

```csharp
ref float WindDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Windage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L200)

```csharp
ref float Windage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WorldCollisionNodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L124)

```csharp
ref CUtlVector<ushort> WorldCollisionNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### WorldCollisionParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L106)

```csharp
ref CUtlVector<FeWorldCollisionParams_t> WorldCollisionParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FeWorldCollisionParams_t](/docs/api/schemadefinitions/feworldcollisionparams_t)>

