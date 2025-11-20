---
title: PhysFeModelDesc_t
---

```csharp
public interface PhysFeModelDesc_t : ISchemaClass<PhysFeModelDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AddWorldCollisionRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L222)

```csharp
ref float AddWorldCollisionRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AnimStrayRadii

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L140)

```csharp
ref CUtlVector<FeAnimStrayRadius_t> AnimStrayRadii { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeAnimStrayRadius_t](/docs/api/shared/schemadefinitions/feanimstrayradius_t)>

### AntiTunnelBytecode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L80)

```csharp
ref CUtlVector<uint> AntiTunnelBytecode { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### AntiTunnelProbes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L84)

```csharp
ref CUtlVector<FeAntiTunnelProbe_t> AntiTunnelProbes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeAntiTunnelProbe_t](/docs/api/shared/schemadefinitions/feantitunnelprobe_t)>

### AntiTunnelTargetNodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L86)

```csharp
ref CUtlVector<ushort> AntiTunnelTargetNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### AxialEdges

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L88)

```csharp
ref CUtlVector<FeAxialEdgeBend_t> AxialEdges { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeAxialEdgeBend_t](/docs/api/shared/schemadefinitions/feaxialedgebend_t)>

### BoxRigids

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L170)

```csharp
ref CUtlVector<FeBoxRigid_t> BoxRigids { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeBoxRigid_t](/docs/api/shared/schemadefinitions/feboxrigid_t)>

### CollisionPlanes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L98)

```csharp
ref CUtlVector<FeCollisionPlane_t> CollisionPlanes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeCollisionPlane_t](/docs/api/shared/schemadefinitions/fecollisionplane_t)>

### CtrlHash

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L18)

```csharp
ref CUtlVector<uint> CtrlHash { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### CtrlName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L20)

```csharp
ref CUtlVector<CUtlString> CtrlName { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### CtrlOffsets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L92)

```csharp
ref CUtlVector<FeCtrlOffset_t> CtrlOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeCtrlOffset_t](/docs/api/shared/schemadefinitions/fectrloffset_t)>

### CtrlOsOffsets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L94)

```csharp
ref CUtlVector<FeCtrlOsOffset_t> CtrlOsOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeCtrlOsOffset_t](/docs/api/shared/schemadefinitions/fectrlosoffset_t)>

### CtrlSoftOffsets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L146)

```csharp
ref CUtlVector<FeCtrlSoftOffset_t> CtrlSoftOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeCtrlSoftOffset_t](/docs/api/shared/schemadefinitions/fectrlsoftoffset_t)>

### DefaultExpAirDrag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L212)

```csharp
ref float DefaultExpAirDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultExpQuadAirDrag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L216)

```csharp
ref float DefaultExpQuadAirDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultGravityScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L208)

```csharp
ref float DefaultGravityScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultSurfaceStretch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L204)

```csharp
ref float DefaultSurfaceStretch { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultThreadStretch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L206)

```csharp
ref float DefaultThreadStretch { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultTimeDilation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L198)

```csharp
ref float DefaultTimeDilation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultVelAirDrag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L210)

```csharp
ref float DefaultVelAirDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultVelQuadAirDrag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L214)

```csharp
ref float DefaultVelQuadAirDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultVolumetricSolveAmount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L224)

```csharp
ref float DefaultVolumetricSolveAmount { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DynKinLinks

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L82)

```csharp
ref CUtlVector<FeDynKinLink_t> DynKinLinks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeDynKinLink_t](/docs/api/shared/schemadefinitions/fedynkinlink_t)>

### DynNodeFriction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L112)

```csharp
ref CUtlVector<float> DynNodeFriction { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### DynNodeVertexSet

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L172)

```csharp
ref CUtlVector<byte> DynNodeVertexSet { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### DynNodeWindBases

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L194)

```csharp
ref CUtlVector<FeNodeWindBase_t> DynNodeWindBases { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeNodeWindBase_t](/docs/api/shared/schemadefinitions/fenodewindbase_t)>

### DynamicNodeFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L24)

```csharp
ref uint DynamicNodeFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Effects

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L186)

```csharp
ref CUtlVector<FeEffectDesc_t> Effects { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeEffectDesc_t](/docs/api/shared/schemadefinitions/feeffectdesc_t)>

### ExtraGoalIterations

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L164)

```csharp
ref byte ExtraGoalIterations { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ExtraIterations

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L166)

```csharp
ref byte ExtraIterations { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ExtraPressureIterations

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L162)

```csharp
ref byte ExtraPressureIterations { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### FirstPositionDrivenNode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L36)

```csharp
ref ushort FirstPositionDrivenNode { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### FitMatrices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L134)

```csharp
ref CUtlVector<FeFitMatrix_t> FitMatrices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeFitMatrix_t](/docs/api/shared/schemadefinitions/fefitmatrix_t)>

### FitWeights

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L136)

```csharp
ref CUtlVector<FeFitWeight_t> FitWeights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeFitWeight_t](/docs/api/shared/schemadefinitions/fefitweight_t)>

### FollowNodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L96)

```csharp
ref CUtlVector<FeFollowNode_t> FollowNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeFollowNode_t](/docs/api/shared/schemadefinitions/fefollownode_t)>

### FreeNodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L132)

```csharp
ref CUtlVector<ushort> FreeNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### GoalDampedSpringIntegrators

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L152)

```csharp
ref CUtlVector<uint> GoalDampedSpringIntegrators { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### HingeLimits

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L78)

```csharp
ref CUtlVector<FeHingeLimit_t> HingeLimits { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeHingeLimit_t](/docs/api/shared/schemadefinitions/fehingelimit_t)>

### InitPose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L72)

```csharp
ref CUtlVector<CTransform> InitPose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

### InternalPressure

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L196)

```csharp
ref float InternalPressure { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### JiggleBones

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L148)

```csharp
ref CUtlVector<CFeIndexedJiggleBone> JiggleBones { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CFeIndexedJiggleBone](/docs/api/shared/schemadefinitions/cfeindexedjigglebone)>

### KelagerBends

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L144)

```csharp
ref CUtlVector<FeKelagerBend2_t> KelagerBends { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeKelagerBend2_t](/docs/api/shared/schemadefinitions/fekelagerbend2_t)>

### LegacyStretchForce

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L108)

```csharp
ref CUtlVector<float> LegacyStretchForce { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### LocalDrag1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L228)

```csharp
ref float LocalDrag1 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LocalForce

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L26)

```csharp
ref float LocalForce { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LocalForce2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L116)

```csharp
ref CUtlVector<float> LocalForce2 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### LocalRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L28)

```csharp
ref float LocalRotation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LocalRotation1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L114)

```csharp
ref CUtlVector<float> LocalRotation1 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### LockToGoal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L190)

```csharp
ref CUtlVector<ushort> LockToGoal { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### LockToParent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L188)

```csharp
ref CUtlVector<FeCtrlOffset_t> LockToParent { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeCtrlOffset_t](/docs/api/shared/schemadefinitions/fectrloffset_t)>

### MorphLayers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L178)

```csharp
ref CUtlVector<FeMorphLayerDepr_t> MorphLayers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeMorphLayerDepr_t](/docs/api/shared/schemadefinitions/femorphlayerdepr_t)>

### MorphSetData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L180)

```csharp
ref CUtlVector<byte> MorphSetData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### MotionSmoothCDT

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L226)

```csharp
ref float MotionSmoothCDT { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NodeBaseJiggleboneDependsCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L52)

```csharp
ref ushort NodeBaseJiggleboneDependsCount { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### NodeBases

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L58)

```csharp
ref CUtlVector<FeNodeBase_t> NodeBases { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeNodeBase_t](/docs/api/shared/schemadefinitions/fenodebase_t)>

### NodeCollisionRadii

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L110)

```csharp
ref CUtlVector<float> NodeCollisionRadii { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### NodeCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L30)

```csharp
ref ushort NodeCount { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### NodeIntegrator

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L100)

```csharp
ref CUtlVector<FeNodeIntegrator_t> NodeIntegrator { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeNodeIntegrator_t](/docs/api/shared/schemadefinitions/fenodeintegrator_t)>

### NodeInvMasses

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L90)

```csharp
ref CUtlVector<float> NodeInvMasses { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### QuadCount1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L46)

```csharp
ref ushort QuadCount1 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### QuadCount2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L48)

```csharp
ref ushort QuadCount2 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### QuadVelocitySmoothIterations

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L232)

```csharp
ref ushort QuadVelocitySmoothIterations { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### QuadVelocitySmoothRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L220)

```csharp
ref float QuadVelocitySmoothRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Quads

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L62)

```csharp
ref CUtlVector<FeQuad_t> Quads { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeQuad_t](/docs/api/shared/schemadefinitions/fequad_t)>

### ReservedUint8

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L160)

```csharp
ref byte ReservedUint8 { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ReverseOffsets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L138)

```csharp
ref CUtlVector<FeNodeReverseOffset_t> ReverseOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeNodeReverseOffset_t](/docs/api/shared/schemadefinitions/fenodereverseoffset_t)>

### RigidColliderPriorities

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L176)

```csharp
ref CUtlVector<FeRigidColliderIndices_t> RigidColliderPriorities { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeRigidColliderIndices_t](/docs/api/shared/schemadefinitions/ferigidcolliderindices_t)>

### RodVelocitySmoothIterations

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L230)

```csharp
ref ushort RodVelocitySmoothIterations { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### RodVelocitySmoothRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L218)

```csharp
ref float RodVelocitySmoothRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Rods

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L74)

```csharp
ref CUtlVector<FeRodConstraint_t> Rods { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeRodConstraint_t](/docs/api/shared/schemadefinitions/ferodconstraint_t)>

### RopeCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L54)

```csharp
ref ushort RopeCount { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Ropes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L56)

```csharp
ref CUtlVector<ushort> Ropes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### RotLockStaticNodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L34)

```csharp
ref ushort RotLockStaticNodes { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SDFRigids

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L168)

```csharp
ref CUtlVector<FeSDFRigid_t> SDFRigids { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSDFRigid_t](/docs/api/shared/schemadefinitions/fesdfrigid_t)>

### SimdAnimStrayRadii

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L142)

```csharp
ref CUtlVector<FeSimdAnimStrayRadius_t> SimdAnimStrayRadii { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSimdAnimStrayRadius_t](/docs/api/shared/schemadefinitions/fesimdanimstrayradius_t)>

### SimdNodeBases

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L60)

```csharp
ref CUtlVector<FeSimdNodeBase_t> SimdNodeBases { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSimdNodeBase_t](/docs/api/shared/schemadefinitions/fesimdnodebase_t)>

### SimdQuadCount1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L42)

```csharp
ref ushort SimdQuadCount1 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SimdQuadCount2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L44)

```csharp
ref ushort SimdQuadCount2 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SimdQuads

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L64)

```csharp
ref CUtlVector<FeSimdQuad_t> SimdQuads { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSimdQuad_t](/docs/api/shared/schemadefinitions/fesimdquad_t)>

### SimdRods

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L68)

```csharp
ref CUtlVector<FeSimdRodConstraint_t> SimdRods { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSimdRodConstraint_t](/docs/api/shared/schemadefinitions/fesimdrodconstraint_t)>

### SimdRodsAnim

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L70)

```csharp
ref CUtlVector<FeSimdRodConstraintAnim_t> SimdRodsAnim { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSimdRodConstraintAnim_t](/docs/api/shared/schemadefinitions/fesimdrodconstraintanim_t)>

### SimdSpringIntegrator

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L104)

```csharp
ref CUtlVector<FeSimdSpringIntegrator_t> SimdSpringIntegrator { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSimdSpringIntegrator_t](/docs/api/shared/schemadefinitions/fesimdspringintegrator_t)>

### SimdTriCount1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L38)

```csharp
ref ushort SimdTriCount1 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SimdTriCount2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L40)

```csharp
ref ushort SimdTriCount2 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SimdTris

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L66)

```csharp
ref CUtlVector<SchemaUntypedField> SimdTris { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>

### SkelParents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L192)

```csharp
ref CUtlVector<short> SkelParents { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

### SourceElems

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L150)

```csharp
ref CUtlVector<ushort> SourceElems { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### SphereRigids

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L122)

```csharp
ref CUtlVector<FeSphereRigid_t> SphereRigids { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSphereRigid_t](/docs/api/shared/schemadefinitions/fesphererigid_t)>

### SpringIntegrator

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L102)

```csharp
ref CUtlVector<FeSpringIntegrator_t> SpringIntegrator { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSpringIntegrator_t](/docs/api/shared/schemadefinitions/fespringintegrator_t)>

### StaticNodeFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L22)

```csharp
ref uint StaticNodeFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### StaticNodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L32)

```csharp
ref ushort StaticNodes { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### TaperedCapsuleRigids

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L120)

```csharp
ref CUtlVector<FeTaperedCapsuleRigid_t> TaperedCapsuleRigids { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeTaperedCapsuleRigid_t](/docs/api/shared/schemadefinitions/fetaperedcapsulerigid_t)>

### TaperedCapsuleStretches

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L118)

```csharp
ref CUtlVector<FeTaperedCapsuleStretch_t> TaperedCapsuleStretches { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeTaperedCapsuleStretch_t](/docs/api/shared/schemadefinitions/fetaperedcapsulestretch_t)>

### TreeChildren

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L130)

```csharp
ref CUtlVector<FeTreeChildren_t> TreeChildren { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeTreeChildren_t](/docs/api/shared/schemadefinitions/fetreechildren_t)>

### TreeCollisionMasks

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L128)

```csharp
ref CUtlVector<ushort> TreeCollisionMasks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### TreeDepth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L50)

```csharp
ref ushort TreeDepth { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### TreeParents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L126)

```csharp
ref CUtlVector<ushort> TreeParents { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### TriCount1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L156)

```csharp
ref ushort TriCount1 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### TriCount2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L158)

```csharp
ref ushort TriCount2 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Tris

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L154)

```csharp
ref CUtlVector<FeTri_t> Tris { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeTri_t](/docs/api/shared/schemadefinitions/fetri_t)>

### Twists

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L76)

```csharp
ref CUtlVector<FeTwistConstraint_t> Twists { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeTwistConstraint_t](/docs/api/shared/schemadefinitions/fetwistconstraint_t)>

### VertexMapValues

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L184)

```csharp
ref CUtlVector<byte> VertexMapValues { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### VertexMaps

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L182)

```csharp
ref CUtlVector<FeVertexMapDesc_t> VertexMaps { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeVertexMapDesc_t](/docs/api/shared/schemadefinitions/fevertexmapdesc_t)>

### VertexSetNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L174)

```csharp
ref CUtlVector<uint> VertexSetNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### WindDrag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L202)

```csharp
ref float WindDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Windage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L200)

```csharp
ref float Windage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WorldCollisionNodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L124)

```csharp
ref CUtlVector<ushort> WorldCollisionNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### WorldCollisionParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L106)

```csharp
ref CUtlVector<FeWorldCollisionParams_t> WorldCollisionParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeWorldCollisionParams_t](/docs/api/shared/schemadefinitions/feworldcollisionparams_t)>

