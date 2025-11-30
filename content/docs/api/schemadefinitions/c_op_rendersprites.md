---
title: C_OP_RenderSprites
---

# Interface C_OP_RenderSprites

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_RenderSprites : CBaseRendererSource2, CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<CBaseRendererSource2>, ISchemaClass<C_OP_RenderSprites>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseRendererSource2](/docs/api/schemadefinitions/cbaserenderersource2)
- [CParticleFunctionRenderer](/docs/api/schemadefinitions/cparticlefunctionrenderer)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionRenderer>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseRendererSource2>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_RenderSprites>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AlphaAdjustWithSizeAdjust

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L32)

```csharp
CParticleCollectionRendererFloatInput AlphaAdjustWithSizeAdjust { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/schemadefinitions/cparticlecollectionrendererfloatinput)

### DistanceAlpha

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L42)

```csharp
ref bool DistanceAlpha { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EdgeSoftnessEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L48)

```csharp
ref float EdgeSoftnessEnd { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EdgeSoftnessStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L46)

```csharp
ref float EdgeSoftnessStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EndFadeDot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L40)

```csharp
ref float EndFadeDot { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EndFadeSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L36)

```csharp
CParticleCollectionRendererFloatInput EndFadeSize { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/schemadefinitions/cparticlecollectionrendererfloatinput)

### LightingDirectionality

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L70)

```csharp
CParticleCollectionRendererFloatInput LightingDirectionality { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/schemadefinitions/cparticlecollectionrendererfloatinput)

### LightingMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L64)

```csharp
ref ParticleLightingQuality_t LightingMode { get; }
```

#### Property Value

- [ParticleLightingQuality_t](/docs/api/schemadefinitions/particlelightingquality_t)

### LightingOverride

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L66)

```csharp
CParticleCollectionRendererVecInput LightingOverride { get; }
```

#### Property Value

- [CParticleCollectionRendererVecInput](/docs/api/schemadefinitions/cparticlecollectionrenderervecinput)

### LightingTessellation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L68)

```csharp
CParticleCollectionRendererFloatInput LightingTessellation { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/schemadefinitions/cparticlecollectionrendererfloatinput)

### MaxSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L30)

```csharp
CParticleCollectionRendererFloatInput MaxSize { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/schemadefinitions/cparticlecollectionrendererfloatinput)

### MinSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L28)

```csharp
CParticleCollectionRendererFloatInput MinSize { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/schemadefinitions/cparticlecollectionrendererfloatinput)

### OrientationControlPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L24)

```csharp
ref int OrientationControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OrientationType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L22)

```csharp
ref ParticleOrientationChoiceList_t OrientationType { get; }
```

#### Property Value

- [ParticleOrientationChoiceList_t](/docs/api/schemadefinitions/particleorientationchoicelist_t)

### Outline

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L50)

```csharp
ref bool Outline { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OutlineAlpha

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L54)

```csharp
ref int OutlineAlpha { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutlineColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L52)

```csharp
ref Color OutlineColor { get; }
```

#### Property Value

- [Color](/docs/api/natives/color)

### OutlineEnd0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L60)

```csharp
ref float OutlineEnd0 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OutlineEnd1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L62)

```csharp
ref float OutlineEnd1 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OutlineStart0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L56)

```csharp
ref float OutlineStart0 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OutlineStart1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L58)

```csharp
ref float OutlineStart1 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ParticleShadows

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L72)

```csharp
ref bool ParticleShadows { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReplicationParameters

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L76)

```csharp
CReplicationParameters ReplicationParameters { get; }
```

#### Property Value

- [CReplicationParameters](/docs/api/schemadefinitions/creplicationparameters)

### SequenceNumbersAreRawSequenceIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L20)

```csharp
ref bool SequenceNumbersAreRawSequenceIndices { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SequenceOverride

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L18)

```csharp
CParticleCollectionRendererFloatInput SequenceOverride { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/schemadefinitions/cparticlecollectionrendererfloatinput)

### ShadowDensity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L74)

```csharp
ref float ShadowDensity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SoftEdges

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L44)

```csharp
ref bool SoftEdges { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartFadeDot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L38)

```csharp
ref float StartFadeDot { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StartFadeSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L34)

```csharp
CParticleCollectionRendererFloatInput StartFadeSize { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/schemadefinitions/cparticlecollectionrendererfloatinput)

### UseYawWithNormalAligned

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSprites.cs#L26)

```csharp
ref bool UseYawWithNormalAligned { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

