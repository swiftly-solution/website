---
title: CBaseTrailRenderer
---

# Interface CBaseTrailRenderer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBaseTrailRenderer : CBaseRendererSource2, CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<CBaseRendererSource2>, ISchemaClass<CBaseTrailRenderer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseRendererSource2](/docs/api/schemadefinitions/cbaserenderersource2)
- [CParticleFunctionRenderer](/docs/api/schemadefinitions/cparticlefunctionrenderer)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionRenderer>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseRendererSource2>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseTrailRenderer>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ClampV

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L30)

```csharp
ref bool ClampV { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EndFadeSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L28)

```csharp
CParticleCollectionRendererFloatInput EndFadeSize { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/schemadefinitions/cparticlecollectionrendererfloatinput)

### MaxSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L24)

```csharp
ref float MaxSize { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L22)

```csharp
ref float MinSize { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OrientationControlPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L20)

```csharp
ref int OrientationControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OrientationType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L18)

```csharp
ref ParticleOrientationChoiceList_t OrientationType { get; }
```

#### Property Value

- [ParticleOrientationChoiceList_t](/docs/api/schemadefinitions/particleorientationchoicelist_t)

### StartFadeSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L26)

```csharp
CParticleCollectionRendererFloatInput StartFadeSize { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/schemadefinitions/cparticlecollectionrendererfloatinput)

