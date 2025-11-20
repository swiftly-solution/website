---
title: C_OP_RenderAsModels
---

```csharp
public interface C_OP_RenderAsModels : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_RenderAsModels>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FitToModelSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L22)

```csharp
ref bool FitToModelSize { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ModelList

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L18)

```csharp
ref CUtlVector<ModelReference_t> ModelList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ModelReference_t](/docs/api/shared/schemadefinitions/modelreference_t)>

### ModelScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L20)

```csharp
ref float ModelScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NonUniformScaling

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L24)

```csharp
ref bool NonUniformScaling { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SizeCullBloat

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L32)

```csharp
ref int SizeCullBloat { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### XAxisScalingAttribute

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L26)

```csharp
ParticleAttributeIndex_t XAxisScalingAttribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### YAxisScalingAttribute

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L28)

```csharp
ParticleAttributeIndex_t YAxisScalingAttribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### ZAxisScalingAttribute

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderAsModels.cs#L30)

```csharp
ParticleAttributeIndex_t ZAxisScalingAttribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

