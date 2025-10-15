---
title: CBaseTrailRenderer
---

```csharp
public interface CBaseTrailRenderer : CBaseRendererSource2, CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<CBaseRendererSource2>, ISchemaClass<CBaseTrailRenderer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ClampV

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L29)

```csharp
ref bool ClampV { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EndFadeSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L27)

```csharp
CParticleCollectionRendererFloatInput EndFadeSize { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionrendererfloatinput)

### MaxSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L23)

```csharp
ref float MaxSize { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L21)

```csharp
ref float MinSize { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OrientationControlPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L19)

```csharp
ref int OrientationControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OrientationType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L17)

```csharp
ref ParticleOrientationChoiceList_t OrientationType { get; }
```

#### Property Value

- [ParticleOrientationChoiceList_t](/docs/api/shared/schemadefinitions/particleorientationchoicelist_t)

### StartFadeSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseTrailRenderer.cs#L25)

```csharp
CParticleCollectionRendererFloatInput StartFadeSize { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionrendererfloatinput)

