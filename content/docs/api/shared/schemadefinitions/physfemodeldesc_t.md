---
title: PhysFeModelDesc_t
---

```csharp
public interface PhysFeModelDesc_t : ISchemaClass<PhysFeModelDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AddWorldCollisionRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L221)

```csharp
ref float AddWorldCollisionRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AnimStrayRadii

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L139)

```csharp
ref CUtlVector<FeAnimStrayRadius_t> AnimStrayRadii { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeAnimStrayRadius_t](/docs/api/shared/schemadefinitions/feanimstrayradius_t)>

### AntiTunnelBytecode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L79)

```csharp
ref CUtlVector<uint> AntiTunnelBytecode { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### AntiTunnelProbes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L83)

```csharp
ref CUtlVector<FeAntiTunnelProbe_t> AntiTunnelProbes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeAntiTunnelProbe_t](/docs/api/shared/schemadefinitions/feantitunnelprobe_t)>

### AntiTunnelTargetNodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L85)

```csharp
ref CUtlVector<ushort> AntiTunnelTargetNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### AxialEdges

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L87)

```csharp
ref CUtlVector<FeAxialEdgeBend_t> AxialEdges { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeAxialEdgeBend_t](/docs/api/shared/schemadefinitions/feaxialedgebend_t)>

### BoxRigids

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L169)

```csharp
ref CUtlVector<FeBoxRigid_t> BoxRigids { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeBoxRigid_t](/docs/api/shared/schemadefinitions/feboxrigid_t)>

### CollisionPlanes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L97)

```csharp
ref CUtlVector<FeCollisionPlane_t> CollisionPlanes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeCollisionPlane_t](/docs/api/shared/schemadefinitions/fecollisionplane_t)>

### CtrlHash

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L17)

```csharp
ref CUtlVector<uint> CtrlHash { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### CtrlName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L19)

```csharp
ref CUtlVector<CUtlString> CtrlName { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### CtrlOffsets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L91)

```csharp
ref CUtlVector<FeCtrlOffset_t> CtrlOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeCtrlOffset_t](/docs/api/shared/schemadefinitions/fectrloffset_t)>

### CtrlOsOffsets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L93)

```csharp
ref CUtlVector<FeCtrlOsOffset_t> CtrlOsOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeCtrlOsOffset_t](/docs/api/shared/schemadefinitions/fectrlosoffset_t)>

### CtrlSoftOffsets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L145)

```csharp
ref CUtlVector<FeCtrlSoftOffset_t> CtrlSoftOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeCtrlSoftOffset_t](/docs/api/shared/schemadefinitions/fectrlsoftoffset_t)>

### DefaultExpAirDrag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L211)

```csharp
ref float DefaultExpAirDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultExpQuadAirDrag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L215)

```csharp
ref float DefaultExpQuadAirDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultGravityScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L207)

```csharp
ref float DefaultGravityScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultSurfaceStretch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L203)

```csharp
ref float DefaultSurfaceStretch { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultThreadStretch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L205)

```csharp
ref float DefaultThreadStretch { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultTimeDilation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L197)

```csharp
ref float DefaultTimeDilation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultVelAirDrag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L209)

```csharp
ref float DefaultVelAirDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultVelQuadAirDrag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L213)

```csharp
ref float DefaultVelQuadAirDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultVolumetricSolveAmount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L223)

```csharp
ref float DefaultVolumetricSolveAmount { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DynKinLinks

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L81)

```csharp
ref CUtlVector<FeDynKinLink_t> DynKinLinks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeDynKinLink_t](/docs/api/shared/schemadefinitions/fedynkinlink_t)>

### DynNodeFriction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L111)

```csharp
ref CUtlVector<float> DynNodeFriction { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### DynNodeVertexSet

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L171)

```csharp
ref CUtlVector<byte> DynNodeVertexSet { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### DynNodeWindBases

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L193)

```csharp
ref CUtlVector<FeNodeWindBase_t> DynNodeWindBases { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeNodeWindBase_t](/docs/api/shared/schemadefinitions/fenodewindbase_t)>

### DynamicNodeFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L23)

```csharp
ref uint DynamicNodeFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Effects

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L185)

```csharp
ref CUtlVector<FeEffectDesc_t> Effects { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeEffectDesc_t](/docs/api/shared/schemadefinitions/feeffectdesc_t)>

### ExtraGoalIterations

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L163)

```csharp
ref byte ExtraGoalIterations { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ExtraIterations

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L165)

```csharp
ref byte ExtraIterations { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ExtraPressureIterations

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L161)

```csharp
ref byte ExtraPressureIterations { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### FirstPositionDrivenNode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L35)

```csharp
ref ushort FirstPositionDrivenNode { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### FitMatrices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L133)

```csharp
ref CUtlVector<FeFitMatrix_t> FitMatrices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeFitMatrix_t](/docs/api/shared/schemadefinitions/fefitmatrix_t)>

### FitWeights

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L135)

```csharp
ref CUtlVector<FeFitWeight_t> FitWeights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeFitWeight_t](/docs/api/shared/schemadefinitions/fefitweight_t)>

### FollowNodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L95)

```csharp
ref CUtlVector<FeFollowNode_t> FollowNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeFollowNode_t](/docs/api/shared/schemadefinitions/fefollownode_t)>

### FreeNodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L131)

```csharp
ref CUtlVector<ushort> FreeNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### GoalDampedSpringIntegrators

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L151)

```csharp
ref CUtlVector<uint> GoalDampedSpringIntegrators { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### HingeLimits

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L77)

```csharp
ref CUtlVector<FeHingeLimit_t> HingeLimits { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeHingeLimit_t](/docs/api/shared/schemadefinitions/fehingelimit_t)>

### InitPose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L71)

```csharp
ref CUtlVector<CTransform> InitPose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

### InternalPressure

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L195)

```csharp
ref float InternalPressure { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### JiggleBones

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L147)

```csharp
ref CUtlVector<CFeIndexedJiggleBone> JiggleBones { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CFeIndexedJiggleBone](/docs/api/shared/schemadefinitions/cfeindexedjigglebone)>

### KelagerBends

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L143)

```csharp
ref CUtlVector<FeKelagerBend2_t> KelagerBends { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeKelagerBend2_t](/docs/api/shared/schemadefinitions/fekelagerbend2_t)>

### LegacyStretchForce

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L107)

```csharp
ref CUtlVector<float> LegacyStretchForce { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### LocalDrag1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L227)

```csharp
ref float LocalDrag1 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LocalForce

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L25)

```csharp
ref float LocalForce { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LocalForce2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L115)

```csharp
ref CUtlVector<float> LocalForce2 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### LocalRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L27)

```csharp
ref float LocalRotation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LocalRotation1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L113)

```csharp
ref CUtlVector<float> LocalRotation1 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### LockToGoal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L189)

```csharp
ref CUtlVector<ushort> LockToGoal { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### LockToParent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L187)

```csharp
ref CUtlVector<FeCtrlOffset_t> LockToParent { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeCtrlOffset_t](/docs/api/shared/schemadefinitions/fectrloffset_t)>

### MorphLayers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L177)

```csharp
ref CUtlVector<FeMorphLayerDepr_t> MorphLayers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeMorphLayerDepr_t](/docs/api/shared/schemadefinitions/femorphlayerdepr_t)>

### MorphSetData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L179)

```csharp
ref CUtlVector<byte> MorphSetData { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### MotionSmoothCDT

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L225)

```csharp
ref float MotionSmoothCDT { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NodeBaseJiggleboneDependsCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L51)

```csharp
ref ushort NodeBaseJiggleboneDependsCount { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### NodeBases

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L57)

```csharp
ref CUtlVector<FeNodeBase_t> NodeBases { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeNodeBase_t](/docs/api/shared/schemadefinitions/fenodebase_t)>

### NodeCollisionRadii

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L109)

```csharp
ref CUtlVector<float> NodeCollisionRadii { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### NodeCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L29)

```csharp
ref ushort NodeCount { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### NodeIntegrator

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L99)

```csharp
ref CUtlVector<FeNodeIntegrator_t> NodeIntegrator { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeNodeIntegrator_t](/docs/api/shared/schemadefinitions/fenodeintegrator_t)>

### NodeInvMasses

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L89)

```csharp
ref CUtlVector<float> NodeInvMasses { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### QuadCount1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L45)

```csharp
ref ushort QuadCount1 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### QuadCount2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L47)

```csharp
ref ushort QuadCount2 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### QuadVelocitySmoothIterations

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L231)

```csharp
ref ushort QuadVelocitySmoothIterations { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### QuadVelocitySmoothRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L219)

```csharp
ref float QuadVelocitySmoothRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Quads

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L61)

```csharp
ref CUtlVector<FeQuad_t> Quads { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeQuad_t](/docs/api/shared/schemadefinitions/fequad_t)>

### ReservedUint8

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L159)

```csharp
ref byte ReservedUint8 { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### ReverseOffsets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L137)

```csharp
ref CUtlVector<FeNodeReverseOffset_t> ReverseOffsets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeNodeReverseOffset_t](/docs/api/shared/schemadefinitions/fenodereverseoffset_t)>

### RigidColliderPriorities

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L175)

```csharp
ref CUtlVector<FeRigidColliderIndices_t> RigidColliderPriorities { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeRigidColliderIndices_t](/docs/api/shared/schemadefinitions/ferigidcolliderindices_t)>

### RodVelocitySmoothIterations

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L229)

```csharp
ref ushort RodVelocitySmoothIterations { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### RodVelocitySmoothRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L217)

```csharp
ref float RodVelocitySmoothRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Rods

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L73)

```csharp
ref CUtlVector<FeRodConstraint_t> Rods { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeRodConstraint_t](/docs/api/shared/schemadefinitions/ferodconstraint_t)>

### RopeCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L53)

```csharp
ref ushort RopeCount { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Ropes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L55)

```csharp
ref CUtlVector<ushort> Ropes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### RotLockStaticNodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L33)

```csharp
ref ushort RotLockStaticNodes { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SDFRigids

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L167)

```csharp
ref CUtlVector<FeSDFRigid_t> SDFRigids { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSDFRigid_t](/docs/api/shared/schemadefinitions/fesdfrigid_t)>

### SimdAnimStrayRadii

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L141)

```csharp
ref CUtlVector<FeSimdAnimStrayRadius_t> SimdAnimStrayRadii { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSimdAnimStrayRadius_t](/docs/api/shared/schemadefinitions/fesimdanimstrayradius_t)>

### SimdNodeBases

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L59)

```csharp
ref CUtlVector<FeSimdNodeBase_t> SimdNodeBases { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSimdNodeBase_t](/docs/api/shared/schemadefinitions/fesimdnodebase_t)>

### SimdQuadCount1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L41)

```csharp
ref ushort SimdQuadCount1 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SimdQuadCount2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L43)

```csharp
ref ushort SimdQuadCount2 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SimdQuads

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L63)

```csharp
ref CUtlVector<FeSimdQuad_t> SimdQuads { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSimdQuad_t](/docs/api/shared/schemadefinitions/fesimdquad_t)>

### SimdRods

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L67)

```csharp
ref CUtlVector<FeSimdRodConstraint_t> SimdRods { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSimdRodConstraint_t](/docs/api/shared/schemadefinitions/fesimdrodconstraint_t)>

### SimdRodsAnim

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L69)

```csharp
ref CUtlVector<FeSimdRodConstraintAnim_t> SimdRodsAnim { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSimdRodConstraintAnim_t](/docs/api/shared/schemadefinitions/fesimdrodconstraintanim_t)>

### SimdSpringIntegrator

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L103)

```csharp
ref CUtlVector<FeSimdSpringIntegrator_t> SimdSpringIntegrator { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSimdSpringIntegrator_t](/docs/api/shared/schemadefinitions/fesimdspringintegrator_t)>

### SimdTriCount1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L37)

```csharp
ref ushort SimdTriCount1 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SimdTriCount2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L39)

```csharp
ref ushort SimdTriCount2 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### SimdTris

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L65)

```csharp
ref CUtlVector<SchemaUntypedField> SimdTris { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>

### SkelParents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L191)

```csharp
ref CUtlVector<short> SkelParents { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

### SourceElems

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L149)

```csharp
ref CUtlVector<ushort> SourceElems { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### SphereRigids

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L121)

```csharp
ref CUtlVector<FeSphereRigid_t> SphereRigids { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSphereRigid_t](/docs/api/shared/schemadefinitions/fesphererigid_t)>

### SpringIntegrator

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L101)

```csharp
ref CUtlVector<FeSpringIntegrator_t> SpringIntegrator { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeSpringIntegrator_t](/docs/api/shared/schemadefinitions/fespringintegrator_t)>

### StaticNodeFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L21)

```csharp
ref uint StaticNodeFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### StaticNodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L31)

```csharp
ref ushort StaticNodes { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### TaperedCapsuleRigids

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L119)

```csharp
ref CUtlVector<FeTaperedCapsuleRigid_t> TaperedCapsuleRigids { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeTaperedCapsuleRigid_t](/docs/api/shared/schemadefinitions/fetaperedcapsulerigid_t)>

### TaperedCapsuleStretches

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L117)

```csharp
ref CUtlVector<FeTaperedCapsuleStretch_t> TaperedCapsuleStretches { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeTaperedCapsuleStretch_t](/docs/api/shared/schemadefinitions/fetaperedcapsulestretch_t)>

### TreeChildren

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L129)

```csharp
ref CUtlVector<FeTreeChildren_t> TreeChildren { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeTreeChildren_t](/docs/api/shared/schemadefinitions/fetreechildren_t)>

### TreeCollisionMasks

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L127)

```csharp
ref CUtlVector<ushort> TreeCollisionMasks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### TreeDepth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L49)

```csharp
ref ushort TreeDepth { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### TreeParents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L125)

```csharp
ref CUtlVector<ushort> TreeParents { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### TriCount1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L155)

```csharp
ref ushort TriCount1 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### TriCount2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L157)

```csharp
ref ushort TriCount2 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Tris

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L153)

```csharp
ref CUtlVector<FeTri_t> Tris { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeTri_t](/docs/api/shared/schemadefinitions/fetri_t)>

### Twists

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L75)

```csharp
ref CUtlVector<FeTwistConstraint_t> Twists { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeTwistConstraint_t](/docs/api/shared/schemadefinitions/fetwistconstraint_t)>

### VertexMapValues

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L183)

```csharp
ref CUtlVector<byte> VertexMapValues { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### VertexMaps

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L181)

```csharp
ref CUtlVector<FeVertexMapDesc_t> VertexMaps { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeVertexMapDesc_t](/docs/api/shared/schemadefinitions/fevertexmapdesc_t)>

### VertexSetNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L173)

```csharp
ref CUtlVector<uint> VertexSetNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### WindDrag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L201)

```csharp
ref float WindDrag { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Windage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L199)

```csharp
ref float Windage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WorldCollisionNodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L123)

```csharp
ref CUtlVector<ushort> WorldCollisionNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### WorldCollisionParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysFeModelDesc_t.cs#L105)

```csharp
ref CUtlVector<FeWorldCollisionParams_t> WorldCollisionParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FeWorldCollisionParams_t](/docs/api/shared/schemadefinitions/feworldcollisionparams_t)>

