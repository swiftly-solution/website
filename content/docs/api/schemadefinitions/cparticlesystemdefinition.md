---
title: CParticleSystemDefinition
---

# Interface CParticleSystemDefinition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CParticleSystemDefinition : IParticleSystemDefinition, ISchemaClass<IParticleSystemDefinition>, ISchemaClass<CParticleSystemDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [IParticleSystemDefinition](/docs/api/schemadefinitions/iparticlesystemdefinition)
- [ISchemaClass<IParticleSystemDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleSystemDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AggregateRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L124)

```csharp
ref float AggregateRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AggregationMinAvailableParticles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L122)

```csharp
ref int AggregationMinAvailableParticles { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AllowRenderControlPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L142)

```csharp
ref int AllowRenderControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BehaviorVersion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L18)

```csharp
ref int BehaviorVersion { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BoundingBoxMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L46)

```csharp
ref Vector BoundingBoxMax { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### BoundingBoxMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L44)

```csharp
ref Vector BoundingBoxMin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Children

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L34)

```csharp
ref CUtlVector<ParticleChildrenInfo_t> Children { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ParticleChildrenInfo_t](/docs/api/schemadefinitions/particlechildreninfo_t)>

### ConstantColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L60)

```csharp
ref Color ConstantColor { get; }
```

#### Property Value

- [Color](/docs/api/natives/color)

### ConstantLifespan

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L70)

```csharp
ref float ConstantLifespan { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ConstantNormal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L62)

```csharp
ref Vector ConstantNormal { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ConstantRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L64)

```csharp
ref float ConstantRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ConstantRotation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L66)

```csharp
ref float ConstantRotation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ConstantRotationSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L68)

```csharp
ref float ConstantRotationSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ConstantSequenceNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L72)

```csharp
ref int ConstantSequenceNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ConstantSequenceNumber1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L74)

```csharp
ref int ConstantSequenceNumber1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Constraints

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L30)

```csharp
ref CUtlVector<PointerTo<CParticleFunctionConstraint>> Constraints { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CParticleFunctionConstraint](/docs/api/schemadefinitions/cparticlefunctionconstraint)>>

### ControlPointConfigurations

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L146)

```csharp
ref CUtlVector<ParticleControlPointConfiguration_t> ControlPointConfigurations { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ParticleControlPointConfiguration_t](/docs/api/schemadefinitions/particlecontrolpointconfiguration_t)>

### CullControlPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L86)

```csharp
ref int CullControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CullFillCost

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L84)

```csharp
ref float CullFillCost { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CullRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L82)

```csharp
ref float CullRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CullReplacementName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L80)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> CullReplacementName { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### DepthSortBias

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L48)

```csharp
ref float DepthSortBias { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Emitters

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L22)

```csharp
ref CUtlVector<PointerTo<CParticleFunctionEmitter>> Emitters { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CParticleFunctionEmitter](/docs/api/schemadefinitions/cparticlefunctionemitter)>>

### EnableNamedValues

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L54)

```csharp
ref bool EnableNamedValues { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Fallback

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L88)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> Fallback { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### FallbackMaxCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L90)

```csharp
ref int FallbackMaxCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FirstMultipleOverride_BackwardCompat

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L36)

```csharp
ref int FirstMultipleOverride_BackwardCompat { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ForceGenerators

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L28)

```csharp
ref CUtlVector<PointerTo<CParticleFunctionForce>> ForceGenerators { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CParticleFunctionForce](/docs/api/schemadefinitions/cparticlefunctionforce)>>

### GroupID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L42)

```csharp
ref int GroupID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InfiniteBounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L52)

```csharp
ref bool InfiniteBounds { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitialParticles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L38)

```csharp
ref int InitialParticles { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Initializers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L24)

```csharp
ref CUtlVector<PointerTo<CParticleFunctionInitializer>> Initializers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CParticleFunctionInitializer](/docs/api/schemadefinitions/cparticlefunctioninitializer)>>

### LowViolenceDef

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L92)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> LowViolenceDef { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### MaxCreationDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L120)

```csharp
ref float MaxCreationDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxDrawDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L116)

```csharp
ref float MaxDrawDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxParticles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L40)

```csharp
ref int MaxParticles { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaximumSimTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L102)

```csharp
ref float MaximumSimTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaximumTimeStep

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L100)

```csharp
ref float MaximumTimeStep { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinCPULevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L110)

```csharp
ref int MinCPULevel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MinGPULevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L112)

```csharp
ref int MinGPULevel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MinimumFrames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L108)

```csharp
ref int MinimumFrames { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MinimumSimTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L104)

```csharp
ref float MinimumSimTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinimumTimeStep

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L106)

```csharp
ref float MinimumTimeStep { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NamedValueDomain

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L56)

```csharp
string NamedValueDomain { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NamedValueLocals

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L58)

```csharp
ref CUtlVector<PointerTo<ParticleNamedValueSource_t>> NamedValueLocals { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[ParticleNamedValueSource_t](/docs/api/schemadefinitions/particlenamedvaluesource_t)>>

### NoDrawTimeToGoToSleep

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L114)

```csharp
ref float NoDrawTimeToGoToSleep { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Operators

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L26)

```csharp
ref CUtlVector<PointerTo<CParticleFunctionOperator>> Operators { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CParticleFunctionOperator](/docs/api/schemadefinitions/cparticlefunctionoperator)>>

### PreEmissionOperators

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L20)

```csharp
ref CUtlVector<PointerTo<CParticleFunctionPreEmission>> PreEmissionOperators { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CParticleFunctionPreEmission](/docs/api/schemadefinitions/cparticlefunctionpreemission)>>

### PreSimulationTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L96)

```csharp
ref float PreSimulationTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ReferenceReplacement

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L94)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> ReferenceReplacement { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### Renderers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L32)

```csharp
ref CUtlVector<PointerTo<CParticleFunctionRenderer>> Renderers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CParticleFunctionRenderer](/docs/api/schemadefinitions/cparticlefunctionrenderer)>>

### ScreenSpaceEffect

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L136)

```csharp
ref bool ScreenSpaceEffect { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldBatch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L126)

```csharp
ref bool ShouldBatch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldHitboxesFallbackToCollisionHulls

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L132)

```csharp
ref bool ShouldHitboxesFallbackToCollisionHulls { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldHitboxesFallbackToRenderBounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L128)

```csharp
ref bool ShouldHitboxesFallbackToRenderBounds { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldHitboxesFallbackToSnapshot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L130)

```csharp
ref bool ShouldHitboxesFallbackToSnapshot { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldSort

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L144)

```csharp
ref bool ShouldSort { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SkipRenderControlPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L140)

```csharp
ref int SkipRenderControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Snapshot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L78)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSnapshot> Snapshot { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIParticleSnapshot](/docs/api/schemadefinitions/infoforresourcetypeiparticlesnapshot)>

### SnapshotControlPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L76)

```csharp
ref int SnapshotControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SortOverridePositionCP

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L50)

```csharp
ref int SortOverridePositionCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StartFadeDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L118)

```csharp
ref float StartFadeDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StopSimulationAfterTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L98)

```csharp
ref float StopSimulationAfterTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TargetLayerID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L138)

```csharp
string TargetLayerID { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ViewModelEffect

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L134)

```csharp
ref InheritableBoolType_t ViewModelEffect { get; }
```

#### Property Value

- [InheritableBoolType_t](/docs/api/schemadefinitions/inheritablebooltype_t)

