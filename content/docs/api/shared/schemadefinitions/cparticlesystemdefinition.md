---
title: CParticleSystemDefinition
---

```csharp
public interface CParticleSystemDefinition : IParticleSystemDefinition, ISchemaClass<IParticleSystemDefinition>, ISchemaClass<CParticleSystemDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **AggregateRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L123)

```csharp
ref float AggregateRadius { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **AggregationMinAvailableParticles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L121)

```csharp
ref int AggregationMinAvailableParticles { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **AllowRenderControlPoint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L141)

```csharp
ref int AllowRenderControlPoint { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **BehaviorVersion** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L16)

```csharp
ref int BehaviorVersion { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **BoundingBoxMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L45)

```csharp
ref Vector BoundingBoxMax { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **BoundingBoxMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L43)

```csharp
ref Vector BoundingBoxMin { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **Children** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L33)

```csharp
ref CUtlVector Children { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **ConstantColor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L59)

```csharp
ref Color ConstantColor { get; }
```

- Property Value

- [Color](/docs/api/shared/natives/color)

### **ConstantLifespan** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L69)

```csharp
ref float ConstantLifespan { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **ConstantNormal** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L61)

```csharp
ref Vector ConstantNormal { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **ConstantRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L63)

```csharp
ref float ConstantRadius { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **ConstantRotation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L65)

```csharp
ref float ConstantRotation { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **ConstantRotationSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L67)

```csharp
ref float ConstantRotationSpeed { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **ConstantSequenceNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L71)

```csharp
ref int ConstantSequenceNumber { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ConstantSequenceNumber1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L73)

```csharp
ref int ConstantSequenceNumber1 { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Constraints** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L28)

```csharp
ref CUtlVector<PointerTo<CParticleFunctionConstraint>> Constraints { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CParticleFunctionConstraint](/docs/api/shared/schemadefinitions/cparticlefunctionconstraint)>>

### **ControlPointConfigurations** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L146)

```csharp
ref CUtlVector ControlPointConfigurations { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **CullControlPoint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L85)

```csharp
ref int CullControlPoint { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **CullFillCost** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L83)

```csharp
ref float CullFillCost { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **CullRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L81)

```csharp
ref float CullRadius { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **CullReplacementName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L79)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> CullReplacementName { get; }
```

- Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### **DepthSortBias** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L47)

```csharp
ref float DepthSortBias { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Emitters** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L20)

```csharp
ref CUtlVector<PointerTo<CParticleFunctionEmitter>> Emitters { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CParticleFunctionEmitter](/docs/api/shared/schemadefinitions/cparticlefunctionemitter)>>

### **EnableNamedValues** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L53)

```csharp
ref bool EnableNamedValues { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Fallback** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L87)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> Fallback { get; }
```

- Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### **FallbackMaxCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L89)

```csharp
ref int FallbackMaxCount { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **FirstMultipleOverride_BackwardCompat** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L35)

```csharp
ref int FirstMultipleOverride_BackwardCompat { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ForceGenerators** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L26)

```csharp
ref CUtlVector<PointerTo<CParticleFunctionForce>> ForceGenerators { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CParticleFunctionForce](/docs/api/shared/schemadefinitions/cparticlefunctionforce)>>

### **GroupID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L41)

```csharp
ref int GroupID { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **InfiniteBounds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L51)

```csharp
ref bool InfiniteBounds { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **InitialParticles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L37)

```csharp
ref int InitialParticles { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Initializers** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L22)

```csharp
ref CUtlVector<PointerTo<CParticleFunctionInitializer>> Initializers { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CParticleFunctionInitializer](/docs/api/shared/schemadefinitions/cparticlefunctioninitializer)>>

### **LowViolenceDef** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L91)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> LowViolenceDef { get; }
```

- Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### **MaxCreationDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L119)

```csharp
ref float MaxCreationDistance { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MaxDrawDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L115)

```csharp
ref float MaxDrawDistance { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MaxParticles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L39)

```csharp
ref int MaxParticles { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MaximumSimTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L101)

```csharp
ref float MaximumSimTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MaximumTimeStep** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L99)

```csharp
ref float MaximumTimeStep { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MinCPULevel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L109)

```csharp
ref int MinCPULevel { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MinGPULevel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L111)

```csharp
ref int MinGPULevel { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MinimumFrames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L107)

```csharp
ref int MinimumFrames { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MinimumSimTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L103)

```csharp
ref float MinimumSimTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MinimumTimeStep** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L105)

```csharp
ref float MinimumTimeStep { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **NamedValueDomain** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L55)

```csharp
string NamedValueDomain { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **NamedValueLocals** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L57)

```csharp
ref CUtlVector<PointerTo<ParticleNamedValueSource_t>> NamedValueLocals { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[ParticleNamedValueSource_t](/docs/api/shared/schemadefinitions/particlenamedvaluesource_t)>>

### **NoDrawTimeToGoToSleep** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L113)

```csharp
ref float NoDrawTimeToGoToSleep { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Operators** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L24)

```csharp
ref CUtlVector<PointerTo<CParticleFunctionOperator>> Operators { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CParticleFunctionOperator](/docs/api/shared/schemadefinitions/cparticlefunctionoperator)>>

### **PreEmissionOperators** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L18)

```csharp
ref CUtlVector<PointerTo<CParticleFunctionPreEmission>> PreEmissionOperators { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CParticleFunctionPreEmission](/docs/api/shared/schemadefinitions/cparticlefunctionpreemission)>>

### **PreSimulationTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L95)

```csharp
ref float PreSimulationTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **ReferenceReplacement** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L93)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> ReferenceReplacement { get; }
```

- Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### **Renderers** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L30)

```csharp
ref CUtlVector<PointerTo<CParticleFunctionRenderer>> Renderers { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CParticleFunctionRenderer](/docs/api/shared/schemadefinitions/cparticlefunctionrenderer)>>

### **ScreenSpaceEffect** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L135)

```csharp
ref bool ScreenSpaceEffect { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ShouldBatch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L125)

```csharp
ref bool ShouldBatch { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ShouldHitboxesFallbackToCollisionHulls** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L131)

```csharp
ref bool ShouldHitboxesFallbackToCollisionHulls { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ShouldHitboxesFallbackToRenderBounds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L127)

```csharp
ref bool ShouldHitboxesFallbackToRenderBounds { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ShouldHitboxesFallbackToSnapshot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L129)

```csharp
ref bool ShouldHitboxesFallbackToSnapshot { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ShouldSort** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L143)

```csharp
ref bool ShouldSort { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **SkipRenderControlPoint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L139)

```csharp
ref int SkipRenderControlPoint { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Snapshot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L77)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSnapshot> Snapshot { get; }
```

- Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSnapshot](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesnapshot)>

### **SnapshotControlPoint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L75)

```csharp
ref int SnapshotControlPoint { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SortOverridePositionCP** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L49)

```csharp
ref int SortOverridePositionCP { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **StartFadeDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L117)

```csharp
ref float StartFadeDistance { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **StopSimulationAfterTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L97)

```csharp
ref float StopSimulationAfterTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **TargetLayerID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L137)

```csharp
string TargetLayerID { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **ViewModelEffect** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystemDefinition.cs#L133)

```csharp
ref InheritableBoolType_t ViewModelEffect { get; }
```

- Property Value

- [InheritableBoolType_t](/docs/api/shared/schemadefinitions/inheritablebooltype_t)

