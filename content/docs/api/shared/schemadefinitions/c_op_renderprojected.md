---
title: C_OP_RenderProjected
---

```csharp
public interface C_OP_RenderProjected : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_RenderProjected>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Alpha2Field

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L48)

```csharp
ParticleAttributeIndex_t Alpha2Field { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### AlphaScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L44)

```csharp
CParticleCollectionFloatInput AlphaScale { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### AnimationTimeScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L36)

```csharp
ref float AnimationTimeScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ColorBlendType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L52)

```csharp
ref ParticleColorBlendType_t ColorBlendType { get; }
```

#### Property Value

- [ParticleColorBlendType_t](/docs/api/shared/schemadefinitions/particlecolorblendtype_t)

### ColorScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L50)

```csharp
CParticleCollectionVecInput ColorScale { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

### EnableProjectedDepthControls

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L26)

```csharp
ref bool EnableProjectedDepthControls { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FlipHorizontal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L24)

```csharp
ref bool FlipHorizontal { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaterialSelection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L34)

```csharp
CPerParticleFloatInput MaterialSelection { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### MaterialVars

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L40)

```csharp
ref CUtlVector<MaterialVariable_t> MaterialVars { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[MaterialVariable_t](/docs/api/shared/schemadefinitions/materialvariable_t)>

### MaxProjectionDepth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L30)

```csharp
ref float MaxProjectionDepth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinProjectionDepth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L28)

```csharp
ref float MinProjectionDepth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OrientToNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L38)

```csharp
ref bool OrientToNormal { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ProjectCharacter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L18)

```csharp
ref bool ProjectCharacter { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ProjectWater

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L22)

```csharp
ref bool ProjectWater { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ProjectWorld

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L20)

```csharp
ref bool ProjectWorld { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ProjectedMaterials

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L32)

```csharp
ref CUtlVector<RenderProjectedMaterial_t> ProjectedMaterials { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RenderProjectedMaterial_t](/docs/api/shared/schemadefinitions/renderprojectedmaterial_t)>

### RadiusScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L42)

```csharp
CParticleCollectionFloatInput RadiusScale { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

### RollScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderProjected.cs#L46)

```csharp
CParticleCollectionFloatInput RollScale { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

